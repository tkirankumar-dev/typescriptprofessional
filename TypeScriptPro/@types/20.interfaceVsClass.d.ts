interface iArtist1 {
    name: string;
}
declare function artistFactoryInterface({ name }: iArtist1): {
    id: number;
    name: string;
};
interface iArtist2 {
    name: string;
}
declare class classArtistCreator2 implements iArtist2 {
    name: string;
    constructor(name: string);
}
declare function artistFactory2({ name }: classArtistCreator2): classArtistCreator2;
declare class classArtistCreator3 {
    name: string;
    constructor(name: string);
}
declare function artistFactory3({ name }: classArtistCreator3): classArtistCreator3;
