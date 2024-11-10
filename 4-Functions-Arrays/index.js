// // functions and arrays

// const { count } = require("console");

// // function declaration
// function greet(){
//     console.log("Hello World");
// }

// // function call
// greet();


// // function countingSum(){
     
// //      for(let i =0;i<=100;i++){
// //          console.log(i)
    
// //      }

// // }

// // countingSum();



// // function sum(a,b){
// //     let sumvalue = a+b/2;
// //     console.log(sumvalue);
// // }
// // sum(10,20);



// //  function getsum(a,b,c){
// //     let sum = a+b+c;
// //     return sum;
// //  }

// //  let ans = getsum(10,20,30);
// //  console.log(ans);


 // function to add two numbers

 function add(a,b){
    return a+b;
 }
 console.log(add(10,20));

// arrow function\\
const sum = (c,d) => c+d;
console.log(sum(10,20));


// let even = (num) => num%2==0;
// console.log(even(5));

// prime number 



// const prime = (num) =>{
//     for(let i =2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(prime(11)); 


const area = (r) => 3.14*r*r;
console.log(area(5));


// arrays 

const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
 // adding element in array 
 arr.push(11);
 console.log(arr);

// removing element from array 
 arr.pop();
 console.log(arr);

 // shift and unshift 
// remove element from start 
 arr.shift();
 console.log(arr);

 // add element at start 
 arr.unshift(0);
 console.log(arr);


 const num = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}
