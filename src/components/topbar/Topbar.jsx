import {
    Apps,
    Menu,
    Mic,
    Notifications,
    Search,
    VideoCall,
} from "@material-ui/icons";
import "./topbar.scss";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="start">
                <div className="menuIcon">
                    <Menu className="bars" />
                </div>
                <div className="logo">
                    <img src="./assets/youtube-logo.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="input">
                    <input type="text" placeholder="Search" />
                    <button className="searchButton">
                        <Search className="searchIcon" />
                    </button>
                </div>
                <Mic className="icon" />
            </div>
            <div className="end">
                <VideoCall className="topbarIcon" />
                <Apps className="topbarIcon" />
                <Notifications className="topbarIcon" />
                <div className="profileImg">
                    <img src="./assets/profile.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
