/* 
Matheus Santos tem 30 anos, pesa 84kg tem 1.7 de altura e seu IMC é de 1284128412 Matheus santos nasceu em 2003*/

const nome = 'Matheus';
const sobrenome = 'Santos';
const idade = 20;
const peso = 60;
const alturaEmM = 1.70;
let IMC = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${IMC}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);