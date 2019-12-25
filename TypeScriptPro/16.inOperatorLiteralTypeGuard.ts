// // we need to run it in browser.
//const exists = 'localStorage' in window; // string check if the property localStorage existing in window
//console.log(window);
//console.log(exists);

// for(const prop in object){} // if the prop exist in object then we need to loop through the object

class Song16 {
    kind: 'song'; // this is called as literal type
    constructor(public title: string, public duration: number) {}
  }
  
  class Playlist16 {
    kind: 'playlist';
    constructor(public name: string, public Songs: Song16[]) {}
  }
  
  function isSong16(item: any): item is Song16 {
    return 'title' in item;
  }
  
  function getItemName16(item: Song16 | Playlist16) {
     if (isSong16(item)) {
        console.log(item);
        console.log(item.kind);
    //if (item.kind === 'song') {        
      return item.title;
    }
    return item.name;
  }
  
  const SongName16 = getItemName16(new Song16('Wonderful Wonderful', 300000));
  console.log('Song name:', SongName16);
  
  const PlaylistName16 = getItemName16(
    new Playlist16('The Best Songs', [new Song16('The Man', 300000)])
  );
  console.log('Playlist name:', PlaylistName16);
  