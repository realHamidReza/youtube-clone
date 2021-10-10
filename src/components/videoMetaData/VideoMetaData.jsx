import moment from "moment";
import numeral from "numeral";
import "./videoMetaData.scss";
import {
    ThumbUpAltOutlined,
    ThumbDownAltOutlined,
    PlaylistAdd,
} from "@material-ui/icons";
import ShowMoreText from "react-show-more-text";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../../redux/actions/channel.action";
import { useHistory } from "react-router";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
    const { channelId, publishedAt, description, title, channelTitle } =
        snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChannelDetails(channelId));
    }, [dispatch, channelId]);

    const { snippet: channelSnippet, statistics: channelStatistics } =
        useSelector((state) => state.channelDetails.channel);

    const history = useHistory();

    const handleChannelClick = () => {
        history.push(`/channel/${channelId}`);
    };

    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5>{title}</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span
                        className="videoMetaData__top__views"
                        style={{ cursor: "default" }}
                    >
                        {" "}
                        {viewCount} views • {moment(publishedAt).fromNow()}
                    </span>
                    <div className="videoMetaData__top__icons">
                        <span className="mr-3">
                            <ThumbUpAltOutlined />
                            {numeral(likeCount).format("0.a")}
                        </span>
                        <span className="mr-3">
                            <ThumbDownAltOutlined />
                            {numeral(dislikeCount).format("0.a")}
                        </span>
                        <span>
                            <PlaylistAdd /> SAVE
                        </span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img
                        src={channelSnippet?.thumbnails?.default?.url}
                        alt=""
                        className="rounded-circle mr-3"
                        onClick={handleChannelClick}
                    />
                    <div className="d-flex flex-column justify-content-center">
                        <h6 onClick={handleChannelClick}>{channelTitle}</h6>{" "}
                        <span className="videoMetaData__channel__subscribers">
                            {numeral(channelStatistics?.subscriberCount).format(
                                "0.a"
                            )}{" "}
                            subscribers
                        </span>
                    </div>
                </div>
                <button className=" border-0 m-2">Subscribe</button>
            </div>
            <div className="videoMetaData__desc">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass="showMoreText"
                    expanded={false}
                >
                    {description}
                </ShowMoreText>
            </div>
            <hr />
        </div>
    );
};

export default VideoMetaData;
