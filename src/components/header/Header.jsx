import {
    Apps,
    Menu,
    Mic,
    Notifications,
    Search,
    VideoCall,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./header.scss";

const Header = ({ handleSidebar }) => {
    const [input, setInput] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${input}`);
        setInput("");
    };

    return (
        <div className="header">
            <div className="header__side">
                <div className="header__side-menu" onClick={handleSidebar}>
                    <Menu />
                </div>
                <Link to="/" className="header__side-logo">
                    <img
                        src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
                        alt="logo"
                    />
                </Link>
            </div>

            <div className="header__search">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">
                        <Search className="searchIcon" />
                    </button>
                </form>
                <Mic className="icon" />
            </div>
            <div className="header__icons">
                <VideoCall className="headerIcon" />
                <Apps className="headerIcon" />
                <Notifications className="headerIcon" />
                <img
                    src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                    alt="avatar"
                    className="mx-1"
                />
            </div>
        </div>
    );
};

export default Header;
