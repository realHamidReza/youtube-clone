import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "../../components/profile/Profile";
import "./channel.scss";

const Channel = () => {
    return (
        <>
            <Topbar />
            <div className="channelContainer">
                <Sidebar />
                <Profile />
            </div>
        </>
    );
};

export default Channel;
