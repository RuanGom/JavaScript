import prompt from 'prompt-sync'
import { converter } from './dolar.js';
let ler = prompt();

console.log('Programa  para converter reais em dólares. \n Quantos reais você quer converter?')
let r = Number(ler());

let d = converter(r);

console.log(`R$${r} convertendo pra dólar fica $${d}`);