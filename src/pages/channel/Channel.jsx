import numeral from "numeral";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Video from "../../components/video/Video";
import { getChannelDetails } from "../../redux/actions/channel.action";
import { getVideosByChannel } from "../../redux/actions/videos.action";
import "./channel.scss";

const Channel = () => {
    const { channelId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosByChannel(channelId));
        dispatch(getChannelDetails(channelId));
    }, [dispatch, channelId]);

    const { videos, loading } = useSelector((state) => state.channelVideos);
    const { snippet, statistics } = useSelector(
        (state) => state.channelDetails.channel
    );

    return (
        <>
            <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
                <div className="d-flex align-items-center channelHeader__left">
                    <img src={snippet?.thumbnails?.default?.url} alt="" />
                    <div className="ml-3 channelHeader__details">
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format("0.a")}{" "}
                            subscribers
                        </span>
                    </div>
                </div>
                <button>Subscribe</button>
            </div>
            <hr />
            <Container>
                <Row className="mt-2">
                    {!loading
                        ? videos.map((video) => (
                              <Col lg={3} md={4} sm={6} xs={12} key={video.id}>
                                  <Video video={video} channelScreen />
                              </Col>
                          ))
                        : [...Array(20)].map(() => (
                              <Col lg={3} md={4} sm={6} xs={12}>
                                  <div
                                      style={{
                                          width: "100%",
                                          margin: "1rem 0",
                                      }}
                                  >
                                      <SkeletonTheme>
                                          <Skeleton height={160} />
                                          <div>
                                              <Skeleton
                                                  width="100%"
                                                  height={40}
                                              />
                                          </div>
                                      </SkeletonTheme>
                                  </div>
                              </Col>
                          ))}
                </Row>
            </Container>
        </>
    );
};

export default Channel;
