function recebe(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

let i = 0;

while (i <= 100) { 
    console.log(i, recebe(i));
    i++;
}