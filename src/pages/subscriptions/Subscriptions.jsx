import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ChannelHorizontal from "../../components/channelHorizontal/ChannelHorizontal";
import { getSubscribedChannels } from "../../redux/actions/channel.action";

const Subscriptions = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubscribedChannels());
    }, [dispatch]);

    const { channels, loading } = useSelector(
        (state) => state.subscribedChannels
    );

    return (
        <Container>
            {!loading ? (
                channels.map((channel) => (
                    <ChannelHorizontal channel={channel} key={channel.id} />
                ))
            ) : (
                <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="160px" count={20} />
                </SkeletonTheme>
            )}
        </Container>
    );
};

export default Subscriptions;
