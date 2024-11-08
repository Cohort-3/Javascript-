

## JavaScript 

### JavaScript:
JavaScript is a versatile and widely-used programming language with several key characteristics:

- **Dynamically Typed**: Variable types are determined at runtime.
- **Functional Programming**: Supports functional programming paradigms, allowing for first-class functions and higher-order functions.
- **Object-Oriented**: Supports object-oriented principles like inheritance, encapsulation, and polymorphism.
- **Interpreted Language**: Runs directly in the browser or runtime without requiring compilation.
- **Single-Threaded**: Executes one command at a time, though it can handle asynchronous operations.
- **Event-Driven**: Often used with events like user actions or API responses.
- **Asynchronous**: Capable of handling asynchronous operations, often using callbacks, promises, and async/await.
- **Non-Blocking**: Uses non-blocking I/O, allowing operations to be executed without waiting for previous tasks to complete.
- **Multi-Paradigm**: Supports procedural, object-oriented, and functional programming styles.
- **High-Level Language**: Abstracts details of the machine to make code easier to read and write.
- **Garbage Collected**: Automatically manages memory allocation and deallocation.

---

### Variables & Data Types

In JavaScript, variables are used to store data values and can be declared using `var`, `let`, or `const`.

- **var**: Introduced in ES5, it has function scope.
- **let**: Introduced in ES6, it has block scope.
- **const**: Introduced in ES6, it has block scope and is used for values that should not change.

Example:
```javascript
let a = 10; // Here, 'a' is the variable name, and '10' is its value.
```

#### Sample Code:
```javascript
let a = 10;
let b = 20;
console.log(a + b); // Output: 30
```

---

### Rules for Naming Variables:

1. Variable names should not start with a number (e.g., `1name` is invalid).
2. Variable names should not contain spaces or special characters (except `_` and `$`).
3. Variable names are case-sensitive (`Name` and `name` are different).
4. Variable names should not be JavaScript reserved keywords.
5. Variable names should be meaningful and self-descriptive.
6. Follow camelCase naming convention (e.g., `firstName`).

---

### Data Types in JavaScript:

JavaScript has several built-in data types that allow developers to store various kinds of data.

- **Number**: Represents numeric values, both integers and floating-point numbers.
- **String**: Represents text data, enclosed in single, double, or backticks (for template literals).
- **Boolean**: Represents a logical entity, with two possible values: `true` or `false`.
- **undefined**: Indicates a variable that has been declared but not assigned a value.
- **null**: Represents an intentional absence of any object value.
- **symbol**: A unique and immutable primitive value, often used as an identifier.
- **object**: Used to store collections of data and more complex entities.

#### Examples of Each Data Type:

```javascript
let age = 25;               // Number
let name = "Alice";         // String
let isStudent = true;       // Boolean
let favoriteColor;          // undefined
let middleName = null;      // null

// Object and Symbol examples
let person = { name: "John", age: 30 }; // Object
let id = Symbol("id");                  // Symbol
```

#### Number:
A numeric data type, which can include:
- Integers (e.g., `5`, `-10`)
- Decimals (e.g., `5.5`)
- Special values like `Infinity`, `-Infinity`, and `NaN` (Not a Number)

#### String:
Represents sequences of characters, such as text and words.
```javascript
let greeting = "Hello, World!";
```

#### Boolean:
A logical data type that can be either `true` or `false`.
```javascript
let isAvailable = false;
```

#### Example Code for Variables and Data Types:
```javascript
let marks = 20;         // Number
marks = "passed";       // Changing the value to a String
console.log(marks);     // Output: "passed"

let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // Output: "John Doe"

let isLoggedIn = true;
let isLoggedOut = false;
console.log(isLoggedIn, isLoggedOut); // Output: true false
```

---
