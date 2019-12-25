declare const enum Sizes {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
declare let selected: Sizes;
declare function updateSize(size: Sizes): void;
