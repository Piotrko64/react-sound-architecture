import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Licence from "./components/forFooter";

function App() {
    const [licence, setlicence] = useState(false);
    const handleShowLicence = () => {
        setlicence(true);
    };
    const handleHideLicence = () => {
        setlicence(false);
    };
    return (
        <div>
            <Router>
                <Nav />
                <Main />
                <Footer showLicence={() => handleShowLicence()} hideLicence={() => handleHideLicence()} />
            </Router>

            {licence ? <Licence hideLicence={() => handleHideLicence()} /> : false}
        </div>
    );
}

export default App;
