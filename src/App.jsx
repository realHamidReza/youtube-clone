import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router";
import "./app.scss";
import MainLayout from "./layouts/MainLayout";
import WatchLayout from "./layouts/WatchLayout";
import Channel from "./pages/channel/Channel";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Watch from "./pages/watch/Watch";

const App = () => {
    const { accessToken, loading } = useSelector((state) => state.auth);
    const history = useHistory();

    useEffect(() => {
        if (!loading && !accessToken) {
            history.push("/login");
        }
    }, [accessToken, loading, history]);

    return (
        <Switch>
            <Route path="/" exact>
                <MainLayout>
                    <Home />
                </MainLayout>
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/search/:query">
                <MainLayout>
                    <Search />
                </MainLayout>
            </Route>
            <Route path="/watch/:id">
                <WatchLayout>
                    <Watch />
                </WatchLayout>
            </Route>
            <Route path="/feed/subscriptions">
                <MainLayout>
                    <Subscriptions />
                </MainLayout>
            </Route>
            <Route path="/channel/:channelId">
                <MainLayout>
                    <Channel />
                </MainLayout>
            </Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    );
};

export default App;
