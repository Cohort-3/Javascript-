// Sum Function: Calculates the sum of numbers from 1 to n
function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

// Examples of calling the sum function
const ans1 = sum(100);
console.log("Sum of first 100 numbers:", ans1);

const ans2 = sum(1000);
console.log("Sum of first 1000 numbers:", ans2);

const ans3 = sum(10000);
console.log("Sum of first 10000 numbers:", ans3);

// Using fs.readFile to read file content asynchronously with a callback function
const fs = require('fs');

// Callback function to handle reading files
function readFileCallback(err, data) {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
}

// Reading files 'a.txt' and 'b.txt' asynchronously
fs.readFile('a.txt', "utf-8", readFileCallback);
fs.readFile('b.txt', "utf-8", readFileCallback);

// Example using fs.readFile with setTimeout for delayed file read
setTimeout(() => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
        } else {
            console.log("File content after delay:", data);
        }
    });
}, 1000);
