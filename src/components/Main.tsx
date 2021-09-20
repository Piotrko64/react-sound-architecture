import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/main.scss';

// pages
import Start from '../pages/Start';
import Music from '../pages/Music';
import Musictag from '../pages/Musictag';
import SoundsEffects from '../pages/SoundsEffects';
import Ambience from '../pages/Ambience';

const Main = () => {
    return (
        <main>
            <Switch>
            <Route path="/" exact  component={ Start }/>
            <Route path="/Music" exact  component={ Music }/>
            <Route path="/Music/:tag" exact  component={ Musictag }/>
            <Route path="/SoundsEffects" exact  component={ SoundsEffects }/>
            <Route path="/Ambience" exact  component={ Ambience }/>
            
            </Switch>
        </main>
    );
}

export default Main;
