import prompt from 'prompt-sync';
let ler = prompt();

console.log('qual mês vc nasceu? ')
let mes= Number(ler())
console.log('e o dia? ')
let dia= Number(ler())


let result= mes == 'setembro' && dia >=23 || 'outubro' && dia <=22

console.log('sou libriano?\n' + result)