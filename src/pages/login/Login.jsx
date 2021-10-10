import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { login } from "../../redux/actions/auth.action";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Login = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.auth.accessToken);

    const handleLogin = () => {
        dispatch(login());
    };

    const history = useHistory();

    useEffect(() => {
        if (accessToken) {
            history.push("/");
        }
    }, [accessToken, history]);

    return (
        <div className="login">
            <div className="login__container">
                <h2>YouTube Clone</h2>
                <img
                    src="https://ricardoreadingmouse.com.au/wp-content/uploads/2018/04/youtube.png"
                    alt=""
                />
                <button onClick={handleLogin}>Login with google</button>
                <p>This project is made using YouTube API</p>
            </div>
        </div>
    );
};

export default Login;
