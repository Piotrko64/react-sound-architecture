import { SandA } from "./../typing/datatype";
import { Dispatch } from "react";

// // "for-for SA"
// Specific iframe display after selected tags. In order for the iframe to be displayed, it must have all tags selected by the user (array: "ArrayTag")
// After click in tag you can see in console selected tags
// So if you want listen something with wind theme you can click in this tag and you will see only iframe with wind motive. If you add for example waves tag website display only iframes which have motives with 'wind' AND 'waves'.
// In this case, iframes that contain only 'waves' will not be displayed

export function forforSA(
    originalArray: SandA,
    counterToPush: number,
    arrayTag: Array<string>,
    arrayToPush: SandA,
    statethisArray: Dispatch<React.SetStateAction<SandA>>
) {
    for (let a = 0; a <= originalArray.length - 1; a++) {
        counterToPush = 0;
        for (let i = 0; i <= arrayTag.length - 1; i++) {
            if (originalArray[a].tag.indexOf(arrayTag[i]) !== -1) {
                counterToPush++;
            }
            if (counterToPush === arrayTag.length) {
                arrayToPush.push(originalArray[a]);
            }
        }
    }

    if (arrayTag.length > 0) {
        statethisArray(arrayToPush);
    } else {
        statethisArray(originalArray);
    }
}
