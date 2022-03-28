import { startData } from "../../types/startData.interface";
import soundback from "../../img/SFX.webp";
import musicback from "../../img/notesstart.webp";
import ambienceback from "../../img/ambience.webp";
export const startDatabase: startData[] = [
    {
        type: "SL",
        title: "Sound Libraries",
        describe:
            "Field recordings and foley shared on royalty free license on bandcamp. Alll the audio is recorded on 96/24 stereo standard. Libraries contain wide variety od sounds featuring movement, impact, swish, designed sounds and more. All tracks have metadata and are described with UCS - Universal Category System.",
        url: soundback,
    },
    {
        type: "AMB",
        title: "Ambience",
        describe:
            "Stereo recordings of various soundscapes featuring everday atmospheres and more exotic sound ambience. Sounds of white noise, rain, water waves, various fauna and flora and more, from different places on the world.",
        url: ambienceback,
    },
    {
        type: "Soon",
        title: "Music",
        describe: null,
        url: musicback,
    },
];
