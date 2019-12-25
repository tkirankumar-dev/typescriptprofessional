declare class Foo {
    bar(): void;
}
declare const bar: Foo;
declare class Song14 {
    title: string;
    duration: number;
    constructor(title: string, duration: number);
}
declare class Playlist {
    name: string;
    songs: Song14[];
    constructor(name: string, songs: Song14[]);
}
declare function getItemName(item: Song14 | Playlist): string;
declare const songName: string;
declare const playlistName: string;
