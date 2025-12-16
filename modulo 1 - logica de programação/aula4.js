const fs = require("fs");

function lerArquivoJson(arquivo) {
  try {
    const conteudoJSON = fs.readFileSync(arquivo, "utf-8");
    const dados = JSON.parse(conteudoJSON);
    return dados;
  } catch (err) {
    if (err.name === "ENOENT") {
      console.error("Arquivo não encontrado:", arquivo);
    } else {
      throw err;
    }
  }
}

function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Divisão por zero não é permitida.");
  }
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Erro ao dividir:", error.message);
}

console.clear();

const m = new Map();

const chave = "name";
const valor = "Ana";

m.set(chave, valor);

if (m.has(chave)) {
  console.log(m.get(chave));
}

console.log(m.size);

m.delete("nome");
