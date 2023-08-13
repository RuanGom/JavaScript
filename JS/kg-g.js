import prompt from 'prompt-sync';
let ler = prompt();

console.log(' Programa para transformar kilos para gramas \n Quantos kilos você quer converter?')
let kg = Number(ler());
let grama = kg * 1000;

console.log(` ${kg}KG convertendo pra gramas fica ${grama} gramas`)