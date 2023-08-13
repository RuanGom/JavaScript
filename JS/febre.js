import prompt from 'prompt-sync';
let ler = prompt();
console.log ('quantos graus vc esta?');
let graus= Number(ler());
let febre = graus >= 37
console.log('você esta com febre? \n' + febre);