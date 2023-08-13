import prompt from 'prompt-sync';
let ler = prompt();
console.log('diga uma cor:')
let cor = ler()

let cp= cor == 'vermelho' || cor == 'azul' || cor == 'amarelo'

console.log('é uma cor primária?\n' + cp)