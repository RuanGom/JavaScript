import prompt from 'prompt-sync';
let ler = prompt();

console.log('qual e o lado do seu quadrado? ')
let l1= Number(ler())
let q1 = l1 * l1;

console.log('qual e o lado do outro quadrado? ')
let l2= Number(ler())
let q2 = l2 * l2;

let result= q1 == q2;

console.log('as medidas dos quadrados são iguais?\n' + result)