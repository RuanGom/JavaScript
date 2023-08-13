import prompt from 'prompt-sync';
let ler = prompt();

console.log('qual mês está?')
let mes= ler()
let semestre = mes== 'janeiro' || mes== 'fevereiro' || mes== 'marco' || mes== 'abril' || mes== 'maio' || mes== 'junho' 



console.log('estou no primeiro semestre?\n' + semestre)