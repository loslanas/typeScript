import readlinesync = require('readline-sync');


//criamos a coleção array vazia
const cores: Array<string> = new Array<string>(5);

for(let i=0;i<5;i++){
cores[i] = (readlinesync.question('Digite o nome de uma cor: \n'));
}
console.log("\nEssas são as cores na ordem digitada: ");
console.table(cores);

let coresOrdenado: Array<string> = Array.from(cores).sort();
console.log("\nEssas são as cores na ordem alfabetica: ");
console.table(coresOrdenado);
