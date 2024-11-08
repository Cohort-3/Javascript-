### Loops and Strings

- **Loops** allow repeated actions on values or sequences.
- **Strings** represent sequences of characters.
- We can use loops to iterate over characters in a string.

### For Loop

- The `for` loop iterates over a sequence.
- Syntax: `for (initializer; condition; increment) { ... }`

**Example:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4
```

### While Loop

- The `while` loop continues as long as a condition is true.
- Syntax: `while (condition) { ... }`

**Example:**

```javascript
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}
// Output: 0, 1, 2
```

### Do While Loop

- The `do while` loop executes at least once before checking the condition.
- Syntax: `do { ... } while (condition);`

**Example:**

```javascript
let count = 0;
do {
    console.log("Count:", count);
    count++;
} while (count < 3);
// Output: 0, 1, 2
```

### Break and Continue

- **`break`** exits the loop entirely.
- **`continue`** skips the current iteration and moves to the next.

**Example of `break`:**

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 0, 1, 2
```

**Example of `continue`:**

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 0, 1, 2, 4
```

### Strings

- **Strings** are sequences of characters.
- Loops can be used to access each character in a string.

**Example of Looping through a String:**

```javascript
const greeting = "Hello!";
for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
// Output: H, e, l, l, o, !
```

### String Methods

- Methods help in manipulating strings.

### String Operators

- **String concatenation** uses the `+` operator to combine strings.

**Example:**

```javascript
const firstName = "Jane";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);
// Output: Jane Doe
```

### Common String Methods

#### `substring` Method

- Extracts a part of a string.
- Syntax: `string.substring(startIndex, endIndex);`

**Example:**

```javascript
const message = "Hello, world!";
const greeting = message.substring(0, 5);
console.log(greeting); 
// Output: Hello
```

#### `length` Property

- Retrieves the length of a string.
- Syntax: `string.length;`

**Example:**

```javascript
const phrase = "JavaScript";
console.log(phrase.length); 
// Output: 10
```

#### `toUpperCase` and `toLowerCase` Methods

- Convert strings to uppercase or lowercase.

**Example:**

```javascript
const word = "Hello";
console.log(word.toUpperCase()); // Output: HELLO
console.log(word.toLowerCase()); // Output: hello
```

#### `charAt` Method

- Retrieves the character at a specific index.
- Syntax: `string.charAt(index);`

**Example:**

```javascript
const str = "Hello!";
console.log(str.charAt(1)); 
// Output: e
```

#### `indexOf` Method

- Finds the index of the first occurrence of a substring.
- Syntax: `string.indexOf(searchValue, startIndex);`

**Example:**

```javascript
const sentence = "Hello, world!";
console.log(sentence.indexOf("world")); 
// Output: 7
```

---

