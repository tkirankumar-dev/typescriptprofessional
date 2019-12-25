// Enum - is actually a datatype. It compiles down to javascript code. 
// we can use this to define a specific set of rules / variables and reference those enums. 
// Enum provides reverse mapping

/* 
var shirtShizes;
(function (shirtShizes) {
    shirtShizes[shirtShizes["small"] = 0] = "small"; // small has value of 0
    shirtShizes[shirtShizes["medium"] = 1] = "medium";
    shirtShizes[shirtShizes["large"] = 2] = "large";
})(shirtShizes || (shirtShizes = {}));
*/
enum shirtShizes{
    small,
    medium,
    large
}

enum shirtShizes{
    ExtraLarge = 3
}

// This is called reverse mapping
const selectedSize = 3;
console.log(shirtShizes[selectedSize]); // ExtraLarge

// get value based on number
console.log(shirtShizes[1]); // medium
// get value based on property
console.log(shirtShizes.medium); // 1
console.log(shirtShizes.medium, shirtShizes[shirtShizes.medium]);


