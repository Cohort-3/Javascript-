
## Async and Await

- **`async` and `await`** are used to manage asynchronous operations in a more readable and manageable way.
- **`async`** is a keyword that you add to a function to indicate it will handle asynchronous code.
- **`await`** is a keyword used within `async` functions to pause the execution of code until a promise is resolved, which makes the code look synchronous even though it’s actually asynchronous.

### Example 1: Basic Async/Await

In this example, we’ll use `async` and `await` with a simulated delay:

```javascript
async function fetchData() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
    const result = await promise;
    console.log(result);
}
fetchData(); // Output after 2 seconds: "Data fetched"
```

- **Explanation**: The `await` keyword pauses the execution until the promise resolves, allowing `console.log(result)` to display "Data fetched" after 2 seconds.

### Example 2: File Reading with Async/Await

This example demonstrates how to use `async` and `await` to read a file using Node.js’s `fs` module with promises.

```javascript
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

readFile();
```

- **Explanation**: The `await` pauses the function until the file `example.txt` is read. If the file read is successful, it logs the content; if there’s an error, it catches and logs it.

---

## setTimeout

- **`setTimeout`** is used to delay the execution of a function by a specified amount of time (in milliseconds).
- `setTimeout` is often used to simulate asynchronous delays.

### Example 1: Basic setTimeout

```javascript
setTimeout(() => {
    console.log("This message is displayed after 3 seconds");
}, 3000);
```

- **Explanation**: The function inside `setTimeout` will execute after 3,000 milliseconds (or 3 seconds), displaying "This message is displayed after 3 seconds".

### Example 2: Using setTimeout within an Async Function

```javascript
async function delayedMessage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Message displayed after a 2-second delay");
}

delayedMessage();
```

- **Explanation**: Here, we wrap `setTimeout` inside a promise, and `await` that promise. This makes the code more manageable within an `async` function and delays the message for 2 seconds.

---

## File Reading with Callbacks vs Async/Await

- In Node.js, the `fs.readFile` method can also be used with a callback instead of async/await.

### Example 1: `fs.readFile` with Callback

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});
```

- **Explanation**: Here, `fs.readFile` takes a callback function as its third argument. If there’s an error, it’s passed as the first argument to the callback; otherwise, the data from the file is passed.

### Example 2: `fs.readFile` with Async/Await

This is similar to the previous async/await example but highlights the contrast with callback-style code.

```javascript
const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const content = await fs.readFile('example.txt', 'utf-8');
        console.log(content);
    } catch (error) {
        console.error("Error:", error);
    }
}

readFileAsync();
```

- **Explanation**: Using async/await with `fs.readFile` makes the code more readable by eliminating the callback and handling errors with a `try-catch` block.

---

 ### **Imp points**

1. **Async/Await**: Enables handling asynchronous code in a synchronous-looking style, making it easier to read and maintain.
2. **setTimeout**: Adds a delay before a function is executed, commonly used for testing delays or animations.
3. **Callbacks vs Async/Await in fs.readFile**: Using `fs.readFile` with callbacks requires nesting code within a callback function, whereas async/await makes it simpler by using promises and `try-catch` for error handling.