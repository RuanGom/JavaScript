import prompt from 'prompt-sync';
let ler = prompt();
console.log('Digite um ano para verificarmos se é bissexto:')
let n= Number(ler())
let result= n%400==0 || n%4==0 && n%100!=0
console.log('Esse ano é bissexto? \n'+ result);