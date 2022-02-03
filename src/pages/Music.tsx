import React from "react";
import musicback from "../img/notes.webp";
import Baner from "../components/baner";
import { Helmet } from "react-helmet";
const Music = () => {
    return (
        <>
            <Helmet>
                <title>Music</title>
                <meta name="description" content="Soon" />
            </Helmet>
            <Baner title="Music" image={musicback} />
        </>
    );
};

export default Music;
