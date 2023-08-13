import prompt from 'prompt-sync';
let ler = prompt();
console.log('digite um número:')
let n= Number(ler())
let result= n%2==0
console.log('Seu numero é par? \n'+ result)