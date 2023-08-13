import prompt from 'prompt-sync'
import { valorc } from './acai.js';
let ler = prompt();

console.log(' Programa para para calcular o total de uma venda de açaí a partir da quantidade de açaís comprados: \n Quantos açaís pequenos foram comprados?')
let acaip = Number(ler());

console.log(' Quantos açaís médios foram comprados?')
let acaim = Number(ler());

console.log(' Quantos açaís grandes foram comprados?')
let acaig = Number(ler());

let compra = valorc(acaip,acaim,acaig)

console.log(`Na compra de ${acaip} açaís pequenos, ${acaim} açaís médios e ${acaig} açaís grandes, o valor da compra será de R$${compra}`)