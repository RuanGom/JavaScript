import prompt from 'prompt-sync';
let ler = prompt();

console.log('Quantos graus esta fazendo?');

let graus= Number(ler());
let result = graus >=23 && graus <=30;
console.log('Devo ir ao parque? \n' + result);