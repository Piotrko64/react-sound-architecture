import { Route, Switch } from "react-router-dom";

// pages
import Start from "../pages/Start";
import Music from "../pages/Music";
import ErrorComponent from "./ErrorComponent";
import SoundsEffects from "../pages/SoundsEffects";
import Ambience from "../pages/Ambience";

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Start} />
                <Route path="/Music" exact component={Music} />
                <Route path="/SoundEffects" exact component={SoundsEffects} />
                <Route path="/Ambience" exact component={Ambience} />
                <Route component={ErrorComponent} />
            </Switch>
        </>
    );
};

export default Main;
