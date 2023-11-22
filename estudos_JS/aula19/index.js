/* let a = 5;
let b = a; // 'b' agora é uma cópia de 'a'
b = 10; // Modificando 'b' não afeta 'a'
console.log(a); // Ainda será 5

let str1 = "Hello";
let str2 = str1; // 'str2' é uma cópia de 'str1'
str2 = "World"; // Modificando 'str2' não afeta 'str1'
console.log(str1); // Ainda será "Hello" */

let a = [1,2,3];
let b = a;
console.log(a,b)

b.push(4);
console.log(a, b)