import { dataMusic } from "../../types/dataMusic.interface";

export const counterAll = (
    tags: string[],
    arrayObject: dataMusic[],
    setArrayTag: (e: Array<number>) => void
) => {
    let counterForTag: number = 0;
    let thisForEachTag: string; // let for one tag
    let counterTags: Array<number> = []; //Array to counting iframes
    tags.forEach(
        (tag: string) => (
            (counterForTag = 0),
            (thisForEachTag = tag),
            arrayObject.forEach((mus: dataMusic) =>
                mus.tag.indexOf(thisForEachTag) !== -1 ? counterForTag++ : false
            ),
            counterTags.push(counterForTag)
        )
    );

    setArrayTag(counterTags);
};
