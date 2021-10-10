import "./videoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import request from "../../api";
import { useHistory } from "react-router";

const VideoHorizontal = ({ video, searchScreen }) => {
    const {
        id: { videoId },
        snippet: {
            publishedAt,
            channelId,
            description,
            title,
            channelTitle,
            thumbnails: { medium },
        },
    } = video;

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items },
            } = await request.get("/videos", {
                params: {
                    part: "contentDetails,statistics",
                    id: videoId,
                },
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        };
        getVideoDetails();
    }, [videoId]);

    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data: { items },
            } = await request.get("/channels", {
                params: {
                    part: "snippet",
                    id: channelId,
                },
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
        };
        getChannelIcon();
    }, [channelId]);

    let _duration = null;

    const seconds = moment.duration(duration).asSeconds();
    seconds > 3600
        ? (_duration = moment.utc(seconds * 1000).format("hh:mm:ss"))
        : (_duration = moment.utc(seconds * 1000).format("mm:ss"));

    const history = useHistory();

    const handleClick = () => {
        history.push(`/watch/${videoId}`);
    };

    return (
        <Row
            className={
                searchScreen
                    ? "videoHorizontal mx-1 py-1 justify-content-between mb-3"
                    : "videoHorizontal mx-1 py-1 justify-content-between"
            }
            onClick={handleClick}
        >
            <Col
                xs={6}
                md={searchScreen ? 4 : 5}
                className="videoHorizontal__left p-0"
            >
                <LazyLoadImage
                    src={medium.url}
                    effect="blur"
                    className="videoHorizontal__thumbnail"
                    wrapperClassName="videoHorizontal__thumbnail-wrapper"
                />
                <span className="videoHorizontal__duration">{_duration}</span>
            </Col>
            <Col
                xs={6}
                md={searchScreen ? 8 : 7}
                className="videoHorizontal__right px-3 justify-content-around"
            >
                <p className="videoHorizontal__title mb-1">{title}</p>
                <div className="videoHorizontal__channel d-flex align-items-center">
                    {searchScreen && (
                        <LazyLoadImage
                            src={channelIcon?.url}
                            effect="blur"
                            className="rounded-circle"
                            width={40}
                            height={40}
                        />
                    )}
                    <p className="mb-0 ml-2">{channelTitle}</p>
                </div>
                <div className="videoHorizontal__details mt-2">
                    {numeral(views).format("0.a")} views •{" "}
                    {moment(publishedAt).fromNow()}
                </div>
                {searchScreen && (
                    <p className="mt-3" style={{ fontSize: "0.9rem" }}>
                        {description}
                    </p>
                )}
            </Col>
        </Row>
    );
};

export default VideoHorizontal;
