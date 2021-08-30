import "./app.scss";
import Home from "./pages/home/Home";
import Channel from "./pages/channel/Channel";
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/channel" component={Channel} />
                <Route path="/" exact component={Home} />
            </Switch>
            {/* <Home /> */}
        </div>
    );
};

export default App;
