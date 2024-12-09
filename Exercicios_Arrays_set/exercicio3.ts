import readlinesync = require('readline-sync');
const num: Set<number> = new Set<number>();


for(let i = 0; i < 10; i++ ){
 let numero = (readlinesync.questionInt(`Digite um numero: `));
 num.add(numero);
}
let numOrdenado = Array.from(num).sort((a, b) => a - b);

console.table(numOrdenado)