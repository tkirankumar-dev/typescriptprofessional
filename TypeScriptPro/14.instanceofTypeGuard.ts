class Foo {
    bar() { }
  }
  
  const bar = new Foo();
  
  // Bar is the instance of Foo. Both the below statements are same.
  console.log(bar instanceof Foo);
  console.log(Object.getPrototypeOf(bar) === Foo.prototype);
  
  
  class Song14 {
    constructor(public title: string, public duration: number) { }
  }
  
  class Playlist {
    constructor(public name: string, public songs: Song14[]) { }
  }
  // We wanted to check if the item is a song or a playlist
  function getItemName(item: Song14 | Playlist) {
    /* // If there exit title then its a song otherwise it will be a playlist. 
    // This is type assertions
    if((item as Song14).title){
        return (item as Song14).title;
    }
    return (item as Playlist).name;
    */
    // This is how we can use inferred types with our type Guards
    if (item instanceof Song14) { // With this statement we can definitely say that it is a song.
      return item.title;
    }
    return item.name;
  }
  
  const songName = getItemName(new Song14('Wonderful Wonderful', 300000));
  console.log('Song name:', songName);
  
  const playlistName = getItemName(
    new Playlist('The Best Songs', [new Song14('The Man', 300000), new Song14('The Women',350000)])
  );
  console.log('Playlist name:', playlistName);
  