/*
    CIT 281 Project 2
    Name: Wes O'Brien
*/

// Returns a random number between min (inclusive) and max (exclusive)
/*
const varName = function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomInteger(0,alphabet.length)];
}

console.log(result);
*/

//Returns a single, random, lowercase letter.
/*
const varName = function getRandomLetter(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomLetter(1, 2);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomLetter(0,alphabet.length)];
}

console.log(result);
*/

//Returns the random length string.
/*
const varName = function getRandomString(minLength, maxLength) {
    return Math.floor(Math.random() * (maxLength - minLength) + minLength);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomString(10, 20);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += alphabet[getRandomString(0,alphabet.length)];
}

console.log(result);
*/

//Returns a string in ascending order

const varName = function getSortedString(string) {
    return string.split('').sort().join('');
}

console.log(getSortedString("xpacd"));

