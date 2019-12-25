declare class Song16 {
    title: string;
    duration: number;
    kind: 'song';
    constructor(title: string, duration: number);
}
declare class Playlist16 {
    name: string;
    Songs: Song16[];
    kind: 'playlist';
    constructor(name: string, Songs: Song16[]);
}
declare function isSong16(item: any): item is Song16;
declare function getItemName16(item: Song16 | Playlist16): string;
declare const SongName16: string;
declare const PlaylistName16: string;
