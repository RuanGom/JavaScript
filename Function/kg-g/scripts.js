import prompt from 'prompt-sync'
import { converter } from './kilos.js'
let ler =  prompt();

console.log('Programa para converter kilos para gramas. \n quantos kilos vc quer converter?');
let kg = Number(ler());

let g = converter(kg);

console.log(g)