import { useMemo } from "react";
import musicback from "../img/notes.webp";
import Baner from "../components/baner";
import { Helmet } from "react-helmet";
const Music = () => {
    //Baner usememo
    const BanerMemo = useMemo(
        () => <Baner title="Music" image={musicback} />,
        []
    );
    return (
        <>
            <Helmet>
                <title>Music</title>
                <meta name="description" content="Soon" />
            </Helmet>
            {BanerMemo}
        </>
    );
};

export default Music;
