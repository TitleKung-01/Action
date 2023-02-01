"use strict";
const x = "hello";
console.log(x.slice(1)); //ello
console.log(x.charAt(0));
console.log("---------------------------");
function recursiveReverseString(text) {
    if (text.length <= 0) { // Base Case
        return '';
    }
    return recursiveReverseString(text.slice(1)) + text.charAt(0);
}
console.log(recursiveReverseString('')); //'ello' + 'H' = elloH
// reverse 'ello'+ H'   = olleH
// reverse 'llo' + 'e' = olle
// reverse 'lo' + 'l' = oll
// reverse 'o' + 'l' = ol
// reverse '' + 'o' = o
