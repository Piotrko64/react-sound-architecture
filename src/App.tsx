import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.scss";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Licence from "./components/forFooter";

function App() {
    const [licence, setLicence] = useState(false);
    const handleShowLicence = () => {
        setLicence(true);
    };
    const handleHideLicence = () => {
        setLicence(false);
    };
    return (
        <div>
            <Router>
                <Nav />
                <Main />
                <Footer showLicence={() => handleShowLicence()} />
            </Router>

            {licence ? <Licence hideLicence={() => handleHideLicence()} /> : false}
        </div>
    );
}

export default App;
