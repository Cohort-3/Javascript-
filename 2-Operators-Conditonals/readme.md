
---

### Operators

Operators in JavaScript are symbols or keywords used to perform operations on variables and values. They are essential for manipulating data, performing calculations, and making decisions in your code.

#### Types of Operators

1. **Arithmetic Operators**: Used to perform basic arithmetic operations.
2. **Assignment Operators**: Used to assign values to variables.
3. **Comparison Operators**: Used to compare two variables or values.
4. **Logical Operators**: Used to perform logical operations, typically in conditional statements.
5. **Bitwise Operators**: Used to perform bitwise operations at the binary level.

---

### Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations on numeric values.

| Operator | Description            | Example           | Result   |
|----------|------------------------|-------------------|----------|
| `+`      | Addition               | `5 + 2`          | `7`      |
| `-`      | Subtraction            | `5 - 2`          | `3`      |
| `*`      | Multiplication         | `5 * 2`          | `10`     |
| `/`      | Division               | `5 / 2`          | `2.5`    |
| `%`      | Modulus (Remainder)    | `5 % 2`          | `1`      |
| `**`     | Exponentiation         | `5 ** 2`         | `25`     |
| `++`     | Increment              | `let a = 5; a++` | `6`      |
| `--`     | Decrement              | `let a = 5; a--` | `4`      |

---

### Assignment Operators

Assignment operators are used to assign values to variables, and can also perform calculations while assigning.

| Operator | Example       | Equivalent to     | Description                    |
|----------|---------------|-------------------|--------------------------------|
| `=`      | `x = 5`       | `x = 5`          | Assigns `5` to `x`            |
| `+=`     | `x += 5`      | `x = x + 5`      | Adds and assigns               |
| `-=`     | `x -= 5`      | `x = x - 5`      | Subtracts and assigns          |
| `*=`     | `x *= 5`      | `x = x * 5`      | Multiplies and assigns         |
| `/=`     | `x /= 5`      | `x = x / 5`      | Divides and assigns            |
| `%=`     | `x %= 5`      | `x = x % 5`      | Modulus and assigns            |
| `**=`    | `x **= 5`     | `x = x ** 5`     | Exponentiates and assigns      |

---

### Comparison Operators

Comparison operators are used to compare values and return a Boolean result (`true` or `false`).

| Operator | Description           | Example       | Result      |
|----------|-----------------------|---------------|-------------|
| `==`     | Equal to              | `5 == '5'`   | `true`      |
| `===`    | Strict equal to       | `5 === '5'`  | `false`     |
| `!=`     | Not equal to          | `5 != '5'`   | `false`     |
| `!==`    | Strict not equal to   | `5 !== '5'`  | `true`      |
| `>`      | Greater than          | `5 > 2`      | `true`      |
| `<`      | Less than             | `5 < 2`      | `false`     |
| `>=`     | Greater than or equal | `5 >= 5`     | `true`      |
| `<=`     | Less than or equal    | `5 <= 2`     | `false`     |

---

### Logical Operators

Logical operators are used in conditional statements and return Boolean values based on logical conditions.

| Operator | Description         | Example             | Result    |
|----------|---------------------|---------------------|-----------|
| `&&`     | Logical AND         | `true && false`    | `false`   |
| `||`     | Logical OR          | `true || false`    | `true`    |
| `!`      | Logical NOT         | `!true`            | `false`   |

---

### Bitwise Operators

Bitwise operators perform operations on binary representations of numbers. These are advanced operators used in low-level programming and optimizing code.

| Operator | Name                  | Example       | Binary Operation Result |
|----------|------------------------|---------------|--------------------------|
| `&`      | AND                    | `5 & 1`      | `1`                      |
| `|`      | OR                     | `5 | 1`      | `5`                      |
| `^`      | XOR                    | `5 ^ 1`      | `4`                      |
| `~`      | NOT                    | `~5`         | `-6`                     |
| `<<`     | Left Shift             | `5 << 1`     | `10`                     |
| `>>`     | Right Shift            | `5 >> 1`     | `2`                      |
---
### Examples 

#### Arithmetic Operators
```javascript
let price = 100;
let discount = 15;
let discountedPrice = price - discount; // Subtraction
console.log("Discounted Price:", discountedPrice); // Output: 85

let quantity = 7;
let totalCost = discountedPrice * quantity; // Multiplication
console.log("Total Cost:", totalCost); // Output: 595

let amount = 500;
let people = 4;
let share = amount / people; // Division
console.log("Each person's share:", share); // Output: 125

let items = 18;
let boxCapacity = 5;
let leftoverItems = items % boxCapacity; // Modulus
console.log("Items left outside the boxes:", leftoverItems); // Output: 3
```

#### Assignment Operators
```javascript
let score = 50;
score += 10; // Equivalent to score = score + 10
console.log("Updated Score:", score); // Output: 60

score -= 5;  // Equivalent to score = score - 5
console.log("Score after penalty:", score); // Output: 55

let multiplier = 3;
score *= multiplier; // Equivalent to score = score * multiplier
console.log("Final Score:", score); // Output: 165

score /= 3; // Equivalent to score = score / 3
console.log("Divided Score:", score); // Output: 55

let bonusPoints = 20;
bonusPoints %= 6; // Equivalent to bonusPoints = bonusPoints % 6
console.log("Remaining bonus points:", bonusPoints); // Output: 2
```

#### Comparison Operators
```javascript
let age = 25;
console.log(age > 18);  // true - age is greater than 18
console.log(age < 18);  // false - age is not less than 18
console.log(age >= 25); // true - age is equal to or greater than 25
console.log(age <= 30); // true - age is less than or equal to 30

let name = "Alice";
console.log(name == "Alice");  // true - names match
console.log(name === "alice"); // false - strict comparison, cases don't match

let isMember = false;
console.log(isMember != true);   // true - isMember is not equal to true
console.log(isMember !== false); // false - strict comparison, both are false
```

#### Logical Operators
```javascript
let hasPermission = true;
let isAdmin = false;

console.log(hasPermission && isAdmin); // Output: false - both conditions are not true
console.log(hasPermission || isAdmin); // Output: true - at least one condition is true
console.log(!hasPermission);           // Output: false - negates the true value of hasPermission

let isLoggedIn = true;
let hasPaid = true;
console.log(isLoggedIn && hasPaid);  // Output: true - both are true, access granted

let isVerified = false;
let hasID = true;
console.log(isVerified || hasID);    // Output: true - at least one condition is true
```
---

