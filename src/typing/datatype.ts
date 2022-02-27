export interface forSounds {
    Id: React.Key | number;
    iframe: string;
    href?: string;
    title: string;
    describe: string;
    tag: string[];
}
export interface forAmbience {
    Id: React.Key | number;
    iframe: string;
    title: string;
    describe: string;
    tag: string[];
}
export type SandA = forAmbience[] | forSounds[];
