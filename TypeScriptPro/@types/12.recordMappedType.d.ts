declare let dictionary12: {
    [key: string]: any;
};
declare let dictionary1: Record<string, typeof item>;
declare let dictionary: Record<string, TrackStates>;
interface TrackStates {
    current: string;
    next: string;
}
declare const item12: TrackStates;
declare const item1: Record<"current" | "next", string>;
declare const item: Record<keyof TrackStates, string>;
