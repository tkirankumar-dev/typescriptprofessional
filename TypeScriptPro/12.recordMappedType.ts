let dictionary12: { [key: string]: any } = {};
let dictionary1: Record<string, typeof item> = {};
let dictionary: Record<string, TrackStates> = {};

// Music application current track that's running and next track in queue
interface TrackStates {
  current: string;
  next: string;
}

const item12: TrackStates = {
  current: "js02js9",
  next: "8nlksjsk"
};

const item1: Record<"current" | "next", string> = {
  current: "js02js9",
  next: "8nlksjsk"
};

const item: Record<keyof TrackStates, string> = {
  current: "js02js9",
  next: "8nlksjsk"
};

// Numbers are coerced to String
dictionary[0] = item;
dictionary["1"] = item12;
