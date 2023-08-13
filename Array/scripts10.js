import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 8.2');

let array = [];

for(let cont = 0; cont < 5; cont++){
    console.log('Insira o nome:');
    array[cont]=ler()

}

    console.log('Começam com L ou H:');

    for(let item of array){
        if(item.charAt(0)=='L' || item.charAt(0)=='l' || item.charAt(0)=='H' || item.charAt(0)=='h'){
        console.log(item)
        }
    }