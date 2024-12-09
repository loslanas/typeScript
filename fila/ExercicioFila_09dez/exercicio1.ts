import readlinesync = require('readline-sync');
import { Queue } from '../Queue';
let opcao = 0;

const fila = new Queue<string>();

do{
console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n--Digite 1 para Adicionar um novo Cliente na fila--");
console.log("--Digite 2 para Listar todos os Clientes na fila--");
console.log("--Digite 3 para 3: Chamar (retirar) uma pessoa da fila--");
console.log("--Digite 0 para SAIR--\n");


opcao = readlinesync.questionInt("\nDigite o numero da opcao escolhida: ");
switch(opcao){
    case 1:
        fila.enqueue(readlinesync.question("\nDigite o nome do cliente que deseja adicionar na fila: "))
        console.log("CLIENTE ADICIONADO!\n");
        console.log("Fila Atualizada: ");
        fila.printQueue();
        break;
    case 2:
        console.log("Fila de Clientes:");
        console.log('\n',fila.printQueue());// Executa alguma ação caso esta condição seja verdadeira
        break;
    case 3:
        if(fila.size() > 0){
        console.log ("\nChamar:", fila.dequeue());
        console.log("CLIENTE CHAMADO\n");}
            else{
                console.log("Fila esta vazia!\n");
            }
            break;
    case 0:
        // Executa alguma ação caso esta condição seja verdadeira    
        break;
    default:
        console.log("--DIGITE UMA OPCAO VALIDA--\n");
}}while(opcao != 0)