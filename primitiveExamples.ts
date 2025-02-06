let str: string = "Hello, Typescript!";
let num: number = 42;
let isTrue: boolean = true;
let sym: symbol = Symbol("unique");
let n: null = null;

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", isTrue);
console.log("Symbol:", sym);
console.log("Null:", n);

// This gives demonstration of the following type:
// 1. string
// 2. number
// 3. boolean
// 4. symbol
// 5. null

// Implementing Functions with Parameter and Return Types

// Function to count characters in a String

function countCharacters(str: string): number {
    return str.length;
}

console.log(countCharacters("test 1")); // 6

// Function that counts the string but leaves out the surrounding whitespace

function countCharactersTrimmed(str: string): number {
    return str.trim().length;
}

console.log(countCharactersTrimmed(" test 1 ")); // 6 again

// Combine Both Functions with an Optional Parameter

function countCharactersWithOption(str: string, includeSpaces: boolean = true): number {
    return includeSpaces ? str.length : str.trim().length;
}

console.log(countCharactersWithOption(" test 1 ")); // This option includes spaces
console.log(countCharactersWithOption(" test 1 ", false)); // This option excludes the spaces
