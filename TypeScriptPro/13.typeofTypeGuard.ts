function foo(bar: string | number){
    if(typeof bar === 'string'){
        // string
        return bar.toUpperCase();
    }   
        
    // if we return string then typescipt will understand that now the bar is number
    // number - typescript detects this.
    return bar.toFixed(2);
}

class Song {
    constructor(public title: string, public duration: string | number) {}
  }
  
  function getSongDuration(item: Song) {
    if (typeof item.duration === 'string') {
      return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;
  }
  
  const songDurationFromString = getSongDuration(
    new Song('Wonderful Wonderful', '05:31')
  );
  console.log(songDurationFromString);
  
  const songDurationFromMS = getSongDuration(
    new Song('Wonderful Wonderful', 330000)
  );
  console.log(songDurationFromMS);
  