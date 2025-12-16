const nums = [3, 5, 7];

nums.sort((a, b) => a - b);

console.log(nums); // Output: [3, 5, 7]

console.clear();

//funcoes
function saudacao(nome = "convidado") {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Joao"));

console.clear();

function soma(...numeros) {
  //... numeros é o rest operator, significa que a função pode receber vários argumentos
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
}

const resultado = soma(1, 2, 3, 5);
console.log(resultado);

console.clear();

function boasVindas(pessoa) {
  console.log("Seja bem-vindo, " + pessoa + "!");
}

function login(nome, callback) {
  console.log("Fazendo login do usuário: " + nome);
  callback(nome);
}

const nome = "Joao";
login("Joao", boasVindas);

console.clear();

function contador() {
  let i = 0;
  i += 1;
  console.log(i);
}

contador();
