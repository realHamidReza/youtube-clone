import {
    Explore,
    History,
    Home,
    PlaylistPlay,
    Subscriptions,
    ThumbUp,
    VideoLibrary,
    WatchLater,
    ExitToApp,
} from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { log_out } from "../../redux/actions/auth.action";
import { getSubscribedChannels } from "../../redux/actions/channel.action";
import ChannelHorizontal from "../channelHorizontal/ChannelHorizontal";
import "./sidebar.scss";

const Sidebar = ({ sidebar }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(log_out());
    };

    useEffect(() => {
        dispatch(getSubscribedChannels());
    }, [dispatch]);

    const { channels } = useSelector((state) => state.subscribedChannels);

    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}>
            <div className="sidebar__topList">
                <NavLink to="/" exact className="topItem">
                    <Home className="icon" />
                    Home
                </NavLink>
                <li className="topItem">
                    <Explore className="icon" />
                    Explore
                </li>
                <NavLink to="/feed/subscriptions" className="topItem">
                    <Subscriptions className="icon" />
                    Subscriptions
                </NavLink>
                <hr />
                <li className="topItem">
                    <VideoLibrary className="icon" />
                    Library
                </li>
                <li className="topItem">
                    <History className="icon" />
                    History
                </li>
                <li className="topItem">
                    <PlaylistPlay className="icon" />
                    Your videos
                </li>
                <li className="topItem">
                    <WatchLater className="icon" />
                    Watch Later
                </li>
                <li className="topItem">
                    <ThumbUp className="icon" />
                    Liked videos
                </li>
                <hr />
                <li className="topItem" onClick={handleLogout}>
                    <ExitToApp className="icon" />
                    Log Out
                </li>
            </div>
            <hr />
            <div className="sidebar__subscriptions">
                <h3>SUBSCRIPTIONS</h3>
                {/* {channels.map((channel) => (
                    <ChannelHorizontal
                        channel={channel}
                        key={channel.id}
                        sidebar
                    />
                ))} */}

                <Link to="/channel" className="middleItem">
                    <img src="/assets/img/bbc.jpg" alt="" />
                    <span className="itemInfo">BBC News</span>
                </Link>
                <div className="middleItem">
                    <img src="/assets/img/jadi.jpg" alt="" />
                    Jadi Mirmirani
                </div>
                <div className="middleItem">
                    <img src="/assets/img/marina.jpg" alt="" />
                    <span className="itemInfo">linguamarina</span>
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Sidebar;
