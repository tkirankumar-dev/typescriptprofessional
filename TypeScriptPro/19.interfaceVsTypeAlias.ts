interface Item {
  name: string;
}

interface Artist extends Item {
  songs: number;
}

interface Artist {
  getSongs(): number;
}

// in type we cannot extend much like we would in interface.
type Artist2 = {
  songs: number;
  getSongs(): number;
} & Item; // intersection type between interface (Item) & Artist2

/* we cannot have some think like this.. we get error saying "Duplicate Identifier 'Artist2'"
type Artist2 = {
  songs: number;
} & Item; // intersection type

type Artist2 = {
  getSongs(): number;
}

*/

/* But, this is possible with interface
interface Artist2 = {
  songs: number;
} & Item; // intersection type

interface Artist2 = {
  getSongs(): number;
}
*/

// type Artist3 = { name: string } & Item; // here Artist3 is type alias

const newArtist: Artist = {
  name: "ABC",
  songs: 5,
  getSongs() {
    return this.songs;
  }
};

const newArtist2: Artist2 = {
  name: "Kiran",
  songs: 10,
  getSongs() {
    return this.songs;
  }
};

console.log(newArtist.name + ", " + newArtist.getSongs());
console.log(newArtist2.name + ", " + newArtist2.getSongs());
