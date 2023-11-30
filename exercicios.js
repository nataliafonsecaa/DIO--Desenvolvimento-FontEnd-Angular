console.log("========= EXERCÍCIO 1 ========");
const precoGasolina = 5.63;
const precoEtanol = 4.1;
const tipoCombistivel = "Gasolina";
const gastoCombustivel = 8;
const distanciakm = 550.2;

const litrosConsumidos = distanciakm / gastoCombustivel;
const valorGasto = litrosConsumidos * precoGasolina;

console.log(
  "O combustivel do seu carro é " + tipoCombistivel,
  " E o gasto de será de " + valorGasto.toFixed(2)
);

console.log(" ====== EXERCÍCIO 2 ======");

// Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

const nota1 = 10;
const nota2 = 8;
const nota3 = 6;

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal < 5) {
  console.log("Reprovado");
} else if (mediaFinal >= 5 && mediaFinal < 7) {
  console.log("Recuperação");
} else if (mediaFinal >= 7) {
  console.log("Passou de Semestre");
}

console.log(" ====== EXERCÍCIO 3 ======");
// O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

//     Formula do IMC:
//     IMC = peso / (altura * altura)

//     Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//     IMC em adultos Condição:
//     - Abaixo de 18.5 Abaixo do peso;
//     - Entre 18.5 e 25 Peso normal;
//     - Entre 25 e 30 Acima do peso;
//     - Entre 30 e 40 Obeso;
//     - Acima de 40 Obsesidade Grave;
// */

const peso = 95;
const altura = 1.68;

const calculoImc = peso / (altura * altura);

if (calculoImc < 18.5) {
  console.log("Abaixo do Peso");
} else if (calculoImc >= 18.5 && calculoImc < 25) {
  console.log("Peso Normal");
} else if (calculoImc >= 25 && calculoImc < 30) {
  console.log("Acima do Peso");
} else if (calculoImc >= 30 && calculoImc < 40) {
  console.log("Obeso");
} else if (calculoImc >= 40) {
  console.log("Obesidade Grave");
}

console.log(" ====== EXERCÍCIO 4 ======");
// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
//     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

//     Código Condição de pagamento:
//     - À vista Débito, recebe 10% de desconto;
//     - À vista no Dinheiro ou PIX, recebe 15% de desconto;
//     - Em duas vezes, preço normal de etiqueta sem juros;
//     - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function Aplicardesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

const etiqueta = 100;
const tipoPagamento = 4;

if (tipoPagamento === 1) {
  console.log(Aplicardesconto(etiqueta, 10));
} else if (tipoPagamento === 2) {
  console.log(Aplicardesconto(etiqueta, 15));
} else if (tipoPagamento === 3) {
  console.log(etiqueta);
} else {
  console.log(aplicarJuros(etiqueta, 10));
}

console.log(" ====== EXERCÍCIO 5 ======");

function seuNome(nome) {
  return "Olá, " + nome;
}

seuNome("Natalia");

function verificarIdade(idade) {
  if (idade < 18) {
    console.log(seuNome("Natalia") + ". Você é menor de idade");
  } else {
    console.log("Você é maior de idade");
  }
}
verificarIdade(11);

console.log(" ====== EXERCÍCIO 6 ======");

// Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carros {
  marca;
  cor;
  ano;
  gastoMediokm;

  constructor(marca, cor, ano, gastoMediokm) {
    this.marca = marca;
    this.cor = cor;
    this.ano = ano;
    this.gastoMediokm = gastoMediokm;
  }
  calcularGastoPercursoKM(distanciakm, precoCombustivel){
	return distanciakm * this.gastoMediokm * precoCombustivel;
  }
}

const gol = new Carros("Volkswagen", "branco", 1992, 1 / 12);
console.log("No total você irá gastar R$" + gol.calcularGastoPercursoKM   (550 ,  5.65));


console.log(" ====== EXERCÍCIO 7 ======");
// Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;


class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    resultadoImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return "Abaixo do Peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso Normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do Peso";
        } else if (imc >= 30 && imc < 40) {
            return "Obeso";
        } else if (imc >= 40) {
            return "Obesidade Grave";
        }
    }
}

const jose = new Pessoas('jose', 75, 1.70);
console.log("Seu IMC é de " + calculoImc + "E você está " +jose.resultadoImc());

console.log("     ");


