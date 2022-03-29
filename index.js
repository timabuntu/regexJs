//? g - global (find all occurrences)
//? i - insensitive ( find all occurrences case insensitive  )

//* function -test- checks if that occurrence exists and returns a boolean
//* function -exec- extract an occurrence

import { text } from "./base.js";

const regExpFindThisExactOccurrence = /João/;

const regExpFindThisOccurrence = /joão/g;

const regExpFindAllOccurrenceCaseInsensitive = /JoãO/i;

console.log("João", regExpFindThisExactOccurrence.test(text));
console.log("joão", regExpFindThisOccurrence.test(text));
console.log("JoãO", regExpFindAllOccurrenceCaseInsensitive.test(text));
