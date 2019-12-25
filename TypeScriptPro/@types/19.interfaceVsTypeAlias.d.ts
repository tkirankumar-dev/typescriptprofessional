interface Item {
    name: string;
}
interface Artist extends Item {
    songs: number;
}
interface Artist {
    getSongs(): number;
}
declare type Artist2 = {
    songs: number;
    getSongs(): number;
} & Item;
declare const newArtist: Artist;
declare const newArtist2: Artist2;
