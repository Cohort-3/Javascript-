# Functions and Arrays 
## 1. Functions

- **Functions** are blocks of code designed to perform specific tasks. They allow us to encapsulate logic, avoid repetition, and make our code modular and reusable.
- Functions can take **parameters** (inputs) and can return **values** (outputs).
- We use functions to perform calculations, manipulate data, and control the flow of a program.

### Function Syntax

```javascript
function functionName(parameters) {
    // Code to be executed
}
functionName(arguments); // Calling the function
```

- **Parameters**: Variables inside the function that hold the values passed to it.
- **Arguments**: Actual values passed when the function is called.
- **Return Value**: The value that a function returns after execution. If a function doesn't explicitly return a value, it returns `undefined`.

### Types of Functions

1. **Named functions**: Functions with a specified name.
2. **Anonymous functions**: Functions without a name, often used as arguments to other functions.
3. **Arrow functions**: Concise syntax for writing functions, also called "fat arrow functions," primarily used to create inline functions.

### Example Functions

1. **Function to Add Two Numbers**:

    ```javascript
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3)); // Output: 8
    ```

2. **Arrow Function to Subtract Two Numbers**:

    ```javascript
    const subtract = (a, b) => a - b;
    console.log(subtract(10, 4)); // Output: 6
    ```

3. **Anonymous Function to Multiply Two Numbers**:

    ```javascript
    const multiply = function(a, b) {
        return a * b;
    };
    console.log(multiply(6, 7)); // Output: 42
    ```

4. **Function to Check if a Number is Even or Odd**:

    ```javascript
    function isEven(num) {
        return num % 2 === 0 ? "Even" : "Odd";
    }
    console.log(isEven(4)); // Output: Even
    ```

5. **Function to Check if a Number is Prime**:

    ```javascript
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    console.log(isPrime(7)); // Output: true
    ```

6. **Function to Calculate the Area of a Circle**:

    ```javascript
    const areaOfCircle = (radius) => Math.PI * radius * radius;
    console.log(areaOfCircle(5)); // Output: 78.54
    ```

## 2. Arrays

- **Arrays** are used to store multiple values in a single variable. Arrays are ordered, and each element can be accessed by its index, starting from `0`.
- Arrays can hold values of various data types and are useful for storing collections of data.

### Array Syntax

```javascript
const arrayName = [element1, element2, element3, ...];
```

### Common Array Methods

Arrays come with a variety of built-in methods to make it easy to manipulate and work with data collections.

1. **Push**: Adds an element to the end of an array.

    ```javascript
    const fruits = ["apple", "banana"];
    fruits.push("orange");
    console.log(fruits); // Output: ["apple", "banana", "orange"]
    ```

2. **Pop**: Removes the last element from an array.

    ```javascript
    const numbers = [1, 2, 3];
    numbers.pop();
    console.log(numbers); // Output: [1, 2]
    ```

3. **Shift**: Removes the first element from an array.

    ```javascript
    const colors = ["red", "green", "blue"];
    colors.shift();
    console.log(colors); // Output: ["green", "blue"]
    ```

4. **Unshift**: Adds an element to the beginning of an array.

    ```javascript
    const names = ["John", "Doe"];
    names.unshift("Jane");
    console.log(names); // Output: ["Jane", "John", "Doe"]
    ```

5. **Length**: Returns the number of elements in an array.

    ```javascript
    const items = [1, 2, 3, 4, 5];
    console.log(items.length); // Output: 5
    ```

6. **Slice**: Returns a portion of an array as a new array without modifying the original.

    ```javascript
    const animals = ["cat", "dog", "elephant", "lion"];
    const selectedAnimals = animals.slice(1, 3);
    console.log(selectedAnimals); // Output: ["dog", "elephant"]
    ```

7. **Concat**: Merges two or more arrays into one.

    ```javascript
    const array1 = [1, 2];
    const array2 = [3, 4];
    const mergedArray = array1.concat(array2);
    console.log(mergedArray); // Output: [1, 2, 3, 4]
    ```

### Examples of Array Operations

1. **Iterating Over an Array with a `for` Loop:**

    ```javascript
    const numbers = [10, 20, 30, 40];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
    // Output: 10, 20, 30, 40
    ```

2. **Using `map` to Double Array Elements:**

    ```javascript
    const nums = [1, 2, 3];
    const doubled = nums.map(num => num * 2);
    console.log(doubled); // Output: [2, 4, 6]
    ```

3. **Filtering Even Numbers with `filter`:**

    ```javascript
    const mixedNumbers = [1, 2, 3, 4, 5];
    const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]
    ```

4. **Finding a Specific Element with `find`:**

    ```javascript
    const items = ["apple", "banana", "orange"];
    const foundItem = items.find(item => item === "banana");
    console.log(foundItem); // Output: banana
    ```

5. **Sorting an Array Alphabetically:**

    ```javascript
    const animals = ["cat", "dog", "elephant"];
    animals.sort();
    console.log(animals); // Output: ["cat", "dog", "elephant"]
    ```

6. **Reduce**: Reduces all elements in an array to a single value by applying a function.

    ```javascript
    const values = [1, 2, 3, 4];
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // Output: 10
    ```

