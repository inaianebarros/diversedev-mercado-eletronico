// Aprendendo a usar o FOR

const numero = 7;

console.log("Tabuada do " + numero);

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

// Aprendendo a usar o WHILE

const meta = 1500;
const depositoMensal = 150;

let saldo = 0;
let meses = 0;

while (saldo < meta) {
  saldo += depositoMensal;
  meses++;
  console.log("Mês " + meses + ": R$" + saldo);
}

console.log(
  `Foram necessários ${meses} meses para atingir a meta de R$${meta}.`
);

// Aprendendo a usar o DO WHILE

let opcao = 0;

console.log("------ Menu de Opções ------");

do {
  console.log("1. Somar");
  console.log("2. Subtrair");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("0. Sair");

  opcao = parseInt(prompt("Escolha uma opção:"));

  if (opcao >= 1 && opcao <= 4) {
    console.log(" Executando a opção " + opcao);
  } else if (opcao >= 5) {
    console.log("Opção inválida! Tente novamente.");
  }
} while (opcao !== 0);
{
  console.log("Encerrando o programa. Até mais!");
}

// Aprendendo a usar for ... in

const cliente = {
  nome: "Ana Silva",
  idade: 28,
  profissao: "Engenheira",
};

for (let chave in cliente) {
  console.log(chave);
}

// Acessando os valores do objeto usando for ... of

let cliente2 = [10, 20, 30];

for (let valor of cliente2) {
  console.log(valor);
}

// apredenda usar continue e break

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    console.log("Pulando o número 5");
    continue;
  }
  if (i === 5) {
    console.log("Parando o loop no número 5");
    break;
  }
  console.log(i);
}

// Usando rótulos com break e continue

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
    prioridade: 0,
  };
}); //cria uma nova lista com os itens modificados
console.log(`Nova lista de Tarefas:`, novaListaTarefas);

//Filter

const tarefasAltaPrioridade = tarefas.filter((item) => item.prioridade === 0); //filtra os itens que satisfazem a condição
const tarefasNaoPrioritarias = tarefas.filter((item) => item.prioridade !== 0); //filtra os itens que não satisfazem a condição

console.log(`Tarefas de alta prioridade:`, tarefasAltaPrioridade);
console.log(`Tarefas não prioritárias:`, tarefasNaoPrioritarias);

//Reduce

const totaltarefaNaoPrioritaria = tarefas.reduce((contador, item) => {
  return contador + (item.prioridade !== 0 ? 1 : 0);
}, 0); //reduz a lista a um único valor, contando as tarefas não prioritárias

console.log(`Total de tarefas não prioritárias:`, totaltarefaNaoPrioritaria);

//sort

// const tarefasOrdemAlfabetica = tarefas.map(item => item.tarefa).sort(); //ordena as tarefas em ordem alfabética

// console.log(`Tarefas em ordem alfabética:`, tarefasOrdemAlfabetica);

const tarefasOrdemAlfabetica = tarefa.sort((a, b) => {
  a.tarefa.localeCompare(b.tarefa);
});

console.log(`Tarefas em ordem alfabética:`, tarefasOrdemAlfabetica);

console.log(tarefasOrdemAlfabetica.reverse()); //ordena as tarefas por prioridade em ordem reversa
