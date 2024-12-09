import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>([5,14,10,58,74,2,6,87,14,25]);

let numProcurado = readlinesync.questionInt(`Digite o numero que deseja ver se existe: `);
if(numeros.has(numProcurado)){
    console.log(`O numero ${numProcurado} foi encontrado.`)

}else{
    console.log(`O número ${numProcurado} não foi encontrado.`)
}
