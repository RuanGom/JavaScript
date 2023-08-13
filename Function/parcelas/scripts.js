import prompt from 'prompt-sync';
import { valorp } from './parcelas.js';
let ler = prompt();

console.log('Progrma para calcular o valor das parcelas \n qual o valor do produto?' );
let valor = Number(ler());

console.log('qual a quantidade de parcelas?');
let parcela = Number(ler());

let vp = valorp(valor, parcela);

console.log(`Sua compra de R$${valor} em ${parcela} de R$${vp} foi concluída`)