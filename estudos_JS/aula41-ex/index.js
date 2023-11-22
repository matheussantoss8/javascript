function numeros (n1, n2) {

    if (n1 > n2){
        return n1
    } else {
        return n2
    }
}

const numbers = numeros (79, 19);
console.log(numbers);

const numbers2 = (x, y) => x > y ? x : y;
console.log(numbers2(19, 53))