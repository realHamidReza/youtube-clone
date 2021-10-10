import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router";
import "./channelHorizontal.scss";

const ChannelHorizontal = ({ channel, sidebar }) => {
    const {
        snippet: {
            description,
            title,
            resourceId,
            thumbnails: { medium },
        },
        contentDetails: { totalItemCount },
    } = channel;

    const history = useHistory();

    const handleClick = () => {
        history.push(`/channel/${resourceId.channelId}`);
    };

    return (
        <Row
            className={
                "channelHorizontal mx-1 py-1 justify-content-between mb-4"
            }
            onClick={handleClick}
        >
            <Col xs={6} md={4} className="channelHorizontal__left p-0">
                <LazyLoadImage
                    src={medium.url}
                    effect="blur"
                    className="channelHorizontal__thumbnail"
                    wrapperClassName="channelHorizontal__thumbnail-wrapper"
                />
            </Col>
            <Col
                xs={6}
                md={8}
                className="channelHorizontal__right justify-content-around"
            >
                <p className="channelHorizontal__title mb-1">{title}</p>
                {!sidebar && (
                    <>
                        <div className="channelHorizontal__desc d-flex align-items-center">
                            {description}
                        </div>
                        <p className="channelHorizontal__items mt-3">
                            {totalItemCount} videos
                        </p>
                    </>
                )}
            </Col>
        </Row>
    );
};

export default ChannelHorizontal;
