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
    const handleChangeLicence = () => {
        setLicence(!licence);
    };

    return (
        <>
            <Router>
                <Nav />
                <Main />
                <Footer showLicence={() => handleChangeLicence()} />
            </Router>

            {licence && <Licence hideLicence={() => handleChangeLicence()} />}
        </>
    );
}

export default App;
