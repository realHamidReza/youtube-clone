import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const VideoSkeleton = () => {
    return (
        <div style={{ width: "100%", margin: "1rem 0" }}>
            <SkeletonTheme>
                <Skeleton height={180} />
                <div>
                    <Skeleton
                        style={{ margin: "0.5rem" }}
                        width={40}
                        height={40}
                        circle
                    />
                    <Skeleton width="75%" height={40} />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default VideoSkeleton;
