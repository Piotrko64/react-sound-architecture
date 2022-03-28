import { dataMusic } from "../../types/dataMusic.interface";
import Loading from "./Loading";

const SoundFrame = (props: { sound: dataMusic }) => {
    return (
        <div className="Sounds__one" key={props.sound.id}>
            <Loading />
            <iframe
                title={props.sound.iframe}
                style={{ border: "0" }}
                loading="lazy"
                src={props.sound.iframe}
                seamless
            >
                <a href={props.sound.href}>{props.sound.title} </a>
            </iframe>
        </div>
    );
};
export default SoundFrame;
