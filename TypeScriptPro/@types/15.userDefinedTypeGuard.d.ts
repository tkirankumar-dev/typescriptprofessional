declare class Song15 {
    title: string;
    duration: number;
    constructor(title: string, duration: number);
}
declare class Playlist15 {
    name: string;
    songs: Song15[];
    constructor(name: string, songs: Song15[]);
}
declare function isSong15(item: any): item is Song15;
declare function getItemName15(item: Song15 | Playlist15): string;
declare const songName15: string;
declare const playlistName15: string;
