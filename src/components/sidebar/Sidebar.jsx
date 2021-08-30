import {
    EmojiObjects,
    Explore,
    Feedback,
    Flag,
    Grade,
    Help,
    History,
    Home,
    KeyboardArrowDown,
    LocalMovies,
    PlaylistPlay,
    Settings,
    Sports,
    SportsEsports,
    Subscriptions,
    ThumbUp,
    VideoLibrary,
    WatchLater,
    Wifi,
    YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div className="topList">
                    <div className="topItem active">
                        <Home className="icon" />
                        Home
                    </div>
                    <div className="topItem">
                        <Explore className="icon" />
                        Explore
                    </div>
                    <div className="topItem">
                        <Subscriptions
                            className="icon"
                            style={{ padding: "2px" }}
                        />
                        Subscriptions
                    </div>
                    <div className="topListContainer">
                        <div className="topItem">
                            <VideoLibrary className="icon" />
                            Library
                        </div>
                        <div className="topItem">
                            <History
                                className="icon"
                                style={{ padding: "2px" }}
                            />
                            History
                        </div>
                        <div className="topItem">
                            <WatchLater
                                className="icon"
                                style={{ padding: "2px" }}
                            />
                            Watch Later
                        </div>
                        <div className="topItem">
                            <PlaylistPlay className="icon" />
                            Web
                        </div>
                        <div className="topItem">
                            <ThumbUp
                                className="icon"
                                style={{ padding: "2px" }}
                            />
                            Liked videos
                        </div>
                    </div>
                </div>
                <div className="middleList">
                    <div className="middleListContainer">
                        <h3>SUBSCRIPTIONS</h3>
                        <Link to="/channel" className="middleItem">
                            <img src="./assets/img/bbc.jpg" alt="" />
                            <span className="itemInfo">BBC News</span>
                            <div className="dot"></div>
                        </Link>
                        <div className="middleItem">
                            <img src="./assets/img/jadi.jpg" alt="" />
                            Jadi Mirmirani
                        </div>
                        <div className="middleItem">
                            <img src="./assets/img/marina.jpg" alt="" />
                            <span className="itemInfo">linguamarina</span>
                            <div className="dot"></div>
                        </div>
                        <div className="middleItem">
                            <img src="./assets/img/ted.jpg" alt="" />
                            <span className="itemInfo">TEDx Talks</span>
                            <div className="dot"></div>
                        </div>
                        <div className="middleItem">
                            <img src="./assets/img/freeCode.jpg" alt="" />
                            freeCodeCamp.org
                        </div>
                        <div className="middleItem">
                            <img src="./assets/img/arian.jpg" alt="" />
                            Arian Abrouni
                        </div>
                        <div className="middleItem">
                            <img src="./assets/img/alaei.jpg" alt="" />
                            Ali Alaei
                        </div>
                        <div className="showMore">
                            <KeyboardArrowDown className="icon" />
                            Show 9 more
                        </div>
                    </div>
                </div>
                <div className="bottomList">
                    <div className="bottomListContainer">
                        <h3>MORE FROM YOUTUBE</h3>
                        <div className="bottomItem">
                            <YouTube className="icon" />
                            YouTube Premium
                        </div>
                        <div className="bottomItem">
                            <LocalMovies className="icon" />
                            Movies & Shows
                        </div>
                        <div className="bottomItem">
                            <SportsEsports className="icon" />
                            Gaming
                        </div>
                        <div className="bottomItem">
                            <Wifi className="icon" />
                            Live
                        </div>
                        <div className="bottomItem">
                            <Grade className="icon" />
                            Fashion & Beauty
                        </div>
                        <div className="bottomItem">
                            <EmojiObjects className="icon" />
                            Learning
                        </div>
                        <div className="bottomItem">
                            <Sports className="icon" />
                            Sports
                        </div>
                    </div>
                    <div className="bottomListOthers">
                        <div className="bottomItem">
                            <Settings className="icon" />
                            Settings
                        </div>
                        <div className="bottomItem">
                            <Flag className="icon" />
                            Report history
                        </div>
                        <div className="bottomItem">
                            <Help className="icon" />
                            Help
                        </div>
                        <div className="bottomItem">
                            <Feedback className="icon" />
                            Send feedback
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
