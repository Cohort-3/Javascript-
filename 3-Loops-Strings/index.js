// loops and strings

// Loops

// example for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}


// example while loop


let i = 0;
while (i < 5) {
    console.log("Iteration:", i);
    i++;
}


// example do while loop


let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 5); 

// break and continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("Iteration:", i);
}   

// continue

for (let i = 0; i < 10; i++) {  
    if (i === 5) {
        continue;
    }
    console.log("Iteration:", i);
}

// Strings
// String operators

// String length

let str = "Hello, world!";
console.log("String length:", str.length);  

// String concatenation

let str1 = "Hello";
let str2 = "world";
let result = str1 + " " + str2;
console.log("Concatenated string:", result);    

// String interpolation

let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting);  

// String methods

// String length    
let str = "Hello, world!";
console.log("String length:", str.length);
// indexOf
console.log("Index of 'world':", str.indexOf("world"));

// includes
console.log("Includes 'world':", str.includes("world"));    

// slice
console.log("Slice from index 7:", str.slice(7));

// replace
console.log("Replace 'world' with 'JavaScript':", str.replace("world", "JavaScript"));  

// toUpperCase
console.log("Uppercase:", str.toUpperCase());

// toLowerCase
console.log("Lowercase:", str.toLowerCase());   

// trim
console.log("Trimmed:", str.trim());

// split
console.log("Split into array:", str.split(","));

// charAt
console.log("Character at index 0:", str.charAt(0));                

// charCodeAt
console.log("Character code at index 0:", str.charCodeAt(0));

// endsWith
console.log("Ends with 'world!':", str.endsWith("world!")); 

// repeat
console.log("Repeated 3 times:", str.repeat(3));


