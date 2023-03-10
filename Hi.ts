const x = "hello"
console.log(x.slice(1)) //ello
console.log(x.charAt(0)) 

console.log("---------------------------")

function reverseString(text: string) {
    let reverseText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }
    return reverseText
}
console.log(reverseString(x))//olleh

console.log("-------------------------------")


function recursiveReverseString(text: string) : string{
    if (text.length <= 0){ // Base Case
        return ''
    }
    return recursiveReverseString(text.slice(1)) + text.charAt(0)
}
console.log(recursiveReverseString('Hello'))//'ello' + 'H' = elloH
console.log(recursiveReverseString('prayuth'))//htuyarp

// reverse 'ello'+ H'   = olleH
// reverse 'llo' + 'e' = olle
// reverse 'lo' + 'l' = oll
// reverse 'o' + 'l' = ol
// reverse '' + 'o' = o

// reverse 'rayuth' + 'p' 
