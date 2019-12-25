declare function foo(bar: string | number): string;
declare class Song {
    title: string;
    duration: string | number;
    constructor(title: string, duration: string | number);
}
declare function getSongDuration(item: Song): string;
declare const songDurationFromString: string;
declare const songDurationFromMS: string;
