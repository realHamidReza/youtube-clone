import "./feed.scss";
import { Posts, HeaderItem } from "../../data";
import Post from "../post/Post";
import FeedHeader from "../feedHeader/FeedHeader";

const Feed = () => {
    return (
        <div className="feed">
            <div className="header">
                <div className="headerList">
                    {HeaderItem.map((h) => (
                        <FeedHeader key={h.id} desc={h.desc} />
                    ))}
                </div>
            </div>
            <div className="posts">
                <div className="container">
                    {Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feed;
