const tarefas = [];

tarefas.push({ tarefa: "Ler um livro", prioridade: 1 }); //adiciona um novo item no final da lista
tarefas.push({ tarefa: "Fazer exercícios", prioridade: 2 });
tarefas.push({ tarefa: "Estudar programação", prioridade: 0 });
// tarefas.push("Praticar esportes");
// tarefas.push("Cozinhar");
// tarefas.push("Dormir");

// console.log(`Lista de tarefas:`, tarefas);

// tarefas.pop(); //remove o último item da lista

// console.log(`Lista de tarefas:`, tarefas);

// tarefas.shift(); //remove o primeiro item da lista

// console.log(`Lista de tarefas:`, tarefas);

// const verificarItem = tarefas.includes("Estudar programação"); //verifica se o item está na lista

// console.log(verificarItem ? "Item encontrado!" : "Item não encontrado!");

// const indice = tarefas.indexOf("Estudar programação"); //retorna o índice do item na lista

// console.log(`Índice do item:`, indice);

// tarefas.splice(indice, 2); //remove o item pelo índice

// console.log(`Lista de tarefas:`, tarefas);

// const tarefasPrioridade = tarefas.find((item) => item.prioridade === 0); //encontra o primeiro item que satisfaz a condição

// console.log(`Tarefa com prioridade 0:`, tarefasPrioridade);

const novaListaTarefas = tarefas.map((item) => {
  return {
    nome: item.tarefa,
    ativo: true,
  };
}); //cria uma nova lista com os itens modificados
console.log(`Nova lista de Tarefas:`, novaListaTarefas);