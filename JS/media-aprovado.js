import prompt from 'prompt-sync';
let ler = prompt();

console.log('qual sua nota? ')
let n1= Number(ler())
console.log('qual sua nota? ')
let n2= Number(ler())
console.log('qual sua nota? ')
let n3= Number(ler())
console.log('qual sua nota? ')
let n4= Number(ler())
console.log('qual sua nota? ')
let n5= Number(ler())

let result= ((n1+n2+n3+n4+n5)/5)>=6

console.log('fui aprovado?\n' + result)