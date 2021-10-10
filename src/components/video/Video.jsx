import moment from "moment";
import numeral from "numeral";
import { useState } from "react";
import { useEffect } from "react";
import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./video.scss";
import { useHistory } from "react-router";

const Video = ({ video, channelScreen }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video;

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    let _duration = null;

    const seconds = moment.duration(duration).asSeconds();
    seconds > 3600
        ? (_duration = moment.utc(seconds * 1000).format("hh:mm:ss"))
        : (_duration = moment.utc(seconds * 1000).format("mm:ss"));

    const _videoId = id?.videoId || video?.contentDetails?.videoId || id;
    const history = useHistory();

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items },
            } = await request("/videos", {
                params: {
                    part: "contentDetails,statistics",
                    id: _videoId,
                },
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        };
        getVideoDetails();
    }, [_videoId]);

    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data: { items },
            } = await request("/channels", {
                params: {
                    part: "snippet",
                    id: channelId,
                },
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
        };
        getChannelIcon();
    }, [channelId]);

    const handleVideoClick = () => {
        history.push(`/watch/${_videoId}`);
    };

    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video__top">
                {/* <img src={medium.url} alt="" /> */}
                <LazyLoadImage src={medium.url} effect="blur" />
                <span className="video__top__duration">{_duration}</span>
            </div>
            <div className="video__info">
                {!channelScreen && (
                    <img
                        src={channelIcon?.url}
                        alt=""
                        className="video__info-img"
                    />
                )}
                <div className="video__info-txt">
                    <h3>{title}</h3>
                    <div className="bottom">
                        {!channelScreen && (
                            <div className="profileName">{channelTitle}</div>
                        )}
                        <div className="postView">
                            <span>
                                {" "}
                                {numeral(views).format("0.a")} views •{" "}
                                {moment(publishedAt).fromNow()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;
