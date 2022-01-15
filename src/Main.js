import Home from "./landing/Home";
import Explore from "./components/Explore";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";

export default function Main() {
    const HomePage = () => {
        return (
            <Home />
        );
    };

    return (
        <div>
            <Switch>
                <Route component={HomePage} exact path="/" />
                <Route component={Explore} exact path="/explore" />
                <Route component={About} exact path="/about" />
            </Switch>
        </div>
    );
}
