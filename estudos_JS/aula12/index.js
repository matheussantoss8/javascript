let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const varAantes = varA

varA = varB;
varB = varC;
varC = varAantes;


console.log(`${varA} ${varB} ${varC}`);