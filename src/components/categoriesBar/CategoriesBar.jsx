import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videos.action";
import "./categoriesBar.scss";

const categories = [
    "All",
    "React JS",
    "JavaScript",
    "Python",
    "Redux",
    "Programming",
    "Elon Musk",
    "Web Development",
    "TED",
    "Laptops",
    "Bodybuilding",
    "Exercise",
    "German",
];

const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState("All");

    const dispatch = useDispatch();

    const handleClick = (value) => {
        setActiveElement(value);
        dispatch(getVideosByCategory(value));
    };

    return (
        <div className="categoriesBar">
            {categories.map((category, i) => (
                <span
                    onClick={() => handleClick(category)}
                    className={activeElement === category ? "active" : ""}
                    key={i}
                >
                    {category}
                </span>
            ))}
        </div>
    );
};

export default CategoriesBar;
