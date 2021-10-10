import moment from "moment";
import "./comment.scss";

const Comment = ({ comment }) => {
    const {
        textDisplay,
        authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
    } = comment;
    return (
        <div className="comment d-flex my-3">
            <img
                src={
                    authorProfileImageUrl
                        ? authorProfileImageUrl
                        : "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
                }
                alt=""
                className="rounded-circle mr-3"
            />
            <div className="comment__body">
                <p className="comment__header mb-1">
                    <span>{authorDisplayName}</span>{" "}
                    {moment(publishedAt).fromNow()}
                </p>
                <p className="mb-0">{textDisplay}</p>
            </div>
        </div>
    );
};

export default Comment;
