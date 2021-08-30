import "./feedHeader.scss";

const FeedHeader = ({ desc }) => {
    return (
        <div className="headerItem">
            <span>{desc}</span>
        </div>
    );
};

export default FeedHeader;
