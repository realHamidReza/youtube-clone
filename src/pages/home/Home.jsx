import { Col, Container } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos } from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoSkeleton from "../../components/skeletons/VideoSkeleton";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch]);

    const { videos, loading } = useSelector((state) => state.popularVideos);

    const fetchData = () => {
        // if (activeCategory === "All") {
        //     dispatch(getPopularVideos());
        // } else {
        //     dispatch(getVideosByCategory(activeCategory));
        // }
        dispatch(getPopularVideos());
    };

    return (
        <>
            <Container>
                <CategoriesBar />
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row"
                >
                    {!loading
                        ? videos.map((video) => (
                              <Col lg={3} md={4} sm={6} xs={12} key={video.id}>
                                  <Video video={video} />
                              </Col>
                          ))
                        : [...Array(20)].map(() => (
                              <Col lg={3} md={4} sm={6} xs={12}>
                                  <VideoSkeleton />
                              </Col>
                          ))}
                </InfiniteScroll>
            </Container>
        </>
    );
};

export default Home;
