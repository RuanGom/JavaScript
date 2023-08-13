import prompt from 'prompt-sync'
import { valorc } from './acai.js';
let ler = prompt();

console.log(' Programa para para calcular o total de uma venda de açaí a partir da quantidade de açaís comprados: \n Quantos açaís foram comprados?')
let acais = Number(ler());

let compra = valorc(acais)

console.log(`Na compra de ${acais} o valor da compra será de R$${compra}`)