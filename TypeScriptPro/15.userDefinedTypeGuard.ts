class Song15 {
    constructor(public title: string, public duration: number) {}
  }
  
  class Playlist15 {
    constructor(public name: string, public songs: Song15[]) {}
  }
  
  // user defined type guard
  function isSong15(item: any): item is Song15 { // item is inferred as song15 class.
    return item instanceof Song15; // this will return true / false.
  }
  
  function getItemName15(item: Song15 | Playlist15) {
    if (isSong15(item)) {
      return item.title;
    }
    return item.name;
  }
  
  const songName15 = getItemName15(new Song15('Wonderful Wonderful', 300000));
  console.log('Song name:', songName15);
  
  const playlistName15 = getItemName15(
    new Playlist15('The Best Songs', [new Song15('The Man', 300000)])   
  );
  console.log('Playlist name:', playlistName15);
  