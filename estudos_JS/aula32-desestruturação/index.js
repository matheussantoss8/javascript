/* let a = 'A';
let b = 'B';
let c = 'C';

//[a, b, c] = [1, 2, 3]
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c); */

 //          0  1  2  3  4  5  6  7  8   
/* const num = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, ...sobra] = num

console.log(um, tres, sobra)
 */
//                0          1          2           arrays
//             0  1  2    0  1  2    0  1  2           
const num = [ [1, 2, 3], [4, 5, 6], [7, 8 ,9]]
const [lis1, ,lis3]= num;
const [[um,dois]] = num;

console.log(dois)
