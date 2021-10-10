import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addComment,
    getCommentsByVideoId,
} from "../../redux/actions/comments.action";
import Comment from "../comment/Comment";
import "./comments.scss";

const Comments = ({ videoId, totalComments }) => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const handleComment = (e) => {
        e.preventDefault();
        if (text.length === 0) return;
        dispatch(addComment(videoId, text));
        setText("");
    };

    useEffect(() => {
        dispatch(getCommentsByVideoId(videoId));
    }, [dispatch, videoId]);

    const comments = useSelector((state) => state.commentsList.comments);

    const _comments = comments?.map(
        (comment) => comment.snippet.topLevelComment.snippet
    );

    return (
        <div className="comments">
            <p>{totalComments} Comments</p>
            <div className="comments__form d-flex">
                <img
                    src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
                    alt=""
                    className="rounded-circle mr-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input
                        type="text"
                        placeholder="Add a public comment..."
                        className="d-flex flex-grow-1"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button type="submit" className="border-0 p-2">
                        Comment
                    </button>
                </form>
            </div>
            <div className="comments__list">
                {_comments?.map((comment, i) => (
                    <Comment comment={comment} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
