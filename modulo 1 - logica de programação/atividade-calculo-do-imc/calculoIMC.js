const peso = 70; // em kg
const altura = 1.75; // em metros

const imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Você está com o peso normal.");
} else if (imc >= 25 && imc < 29.9) {
  console.log("Você está com sobrepeso.");
} else {
  console.log("Você está com obesidade.");
}
