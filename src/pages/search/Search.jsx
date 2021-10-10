import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getVideosBySearch } from "../../redux/actions/videos.action";

const Search = () => {
    const { query } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosBySearch(query));
    }, [dispatch, query]);

    const { videos, loading } = useSelector((state) => state.searchedVideos);

    return (
        <Container>
            {!loading &&
                videos?.map((video) => (
                    <VideoHorizontal
                        video={video}
                        key={video.id.videoId}
                        searchScreen
                    />
                ))}
        </Container>
    );
};

export default Search;
