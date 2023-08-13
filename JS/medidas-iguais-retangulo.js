import prompt from 'prompt-sync';
let ler = prompt();

console.log('qual e o lado do seu retangulo? ')
let l1= Number(ler())
console.log('qual a altura do seu retangulo?')
let a1= Number(ler())
let r1 = l1 * a1;





console.log('qual e o lado do outro retangulo? ')
let l2= Number(ler())
console.log('qual a altura do seu retangulo?')
let a2= Number(ler())
let r2 = l2 * a2;
let result= r1 == r2;

console.log('as medidas dos retangulo são iguais?\n' + result)