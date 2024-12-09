import {Stack} from "../Stack";
import * as readlineSync from "readline-sync";


const pilha = new Stack<string>(); 
let opcao = 0;

do{
    console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
    console.log("\n--Digite 1 para Adicionar um novo Livro na pilha--");
    console.log("--Digite 2 para Listar todos os Livros da pilha--");
    console.log("--Digite 3 para 3: Retirar um livro da pilha--");
    console.log("--Digite 0 para SAIR--\n");
    
    
    opcao = readlineSync.questionInt("\nDigite o numero da opcao escolhida: ");
    switch(opcao){
        case 1:
            pilha.push(readlineSync.question("\nDigite o nome do livro que deseja adicionar a pilha: "))
            console.log("LIVRO ADICIONADO!\n");
            console.log("Pilha Atualizada: ");
            pilha.printStack();
            break;
        case 2:
            console.log("Pilha de Livros:");
            pilha.printStack();// Executa alguma ação caso esta condição seja verdadeira
            break;
        case 3:
            if(pilha.isEmpty() === false ){
            console.log ("\nRetirar:", pilha.pop());
            console.log("LIVRO RETIRADO\n");
            console.log("Pilha de Livros:");
            pilha.printStack();}
                else{
                    console.log("Pilha esta vazia!\n");
                }
                break;
        case 0:
            console.log("--SAINDO DO SISTEMA--\n");
            break;
        default:
            console.log("--DIGITE UMA OPCAO VALIDA--\n");
    }}while(opcao != 0)
