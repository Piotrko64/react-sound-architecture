export interface forSounds {
    Id: React.Key | number;
    iframe: string;
    href?: string;
    title: string;
    describe: string;
    tag: string[];
}

export interface startData {
    type: "AMB" | "SL" | "MUS" | "Soon";
    title: string;
    describe: string | null;
    url: string;
}
