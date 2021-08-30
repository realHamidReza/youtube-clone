import "./post.scss";
import {
    WatchLater,
    CheckCircle,
    PlaylistPlay,
    MoreVert,
} from "@material-ui/icons";
import { useState } from "react";

const Post = ({ post }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="postImg">
                {isHovered && (
                    <div className="postIcons">
                        <div className="watchLater">
                            <span className="watchTxt">WATCH LATER</span>
                            <WatchLater className="laterIcon" />
                        </div>
                        <div className="queue">
                            <span className="queueTxt">ADD TO QUEUE</span>
                            <PlaylistPlay className="queueIcon" />
                        </div>
                    </div>
                )}
                {isHovered ? (
                    <img src={post.video} alt="" />
                ) : (
                    <img src={post.img} alt="" />
                )}
                <span className="length">{post.length}</span>
            </div>
            <div className="postInfo">
                {isHovered && (
                    <div className="menu">
                        <MoreVert />
                    </div>
                )}
                <img src={post.profileImg} alt="" className="profileImg" />
                <div className="txtInfo">
                    <h3 className="top">{post.desc}</h3>
                    <div className="bottom">
                        <div className="profileName">
                            {post.profile}
                            <CheckCircle
                                className={post.checked ? "check" : "notCheck"}
                            />
                        </div>
                        <div className="postView">
                            <span className="counter">{post.views} views</span>
                            <span className="timer">{post.time} ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
