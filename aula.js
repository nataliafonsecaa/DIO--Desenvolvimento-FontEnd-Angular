
console.log("ESTUDOS / CONDICIONAIS /BOOLEAN / IGUALDADE / IF ELSE / VARIAVES E OPERADORES ");

const camisa1Azul = true
const camisa2Azul = false

const valor1 = 11
const valor2 = 5
const resultado = 11 / 5

console.log(resultado);

const num = 10
const Divisorpor5 = (num % 5) === 0

if (num === 0 ) {
	console.log("o numero é invalido");
} else if (Divisorpor5){
	console.log("sim");
} else {
	console.log("não");
}

console.log("= = = = OBJETOS, CLASSES, INSTANCIAS (constructor)  = = = = = = = = = = = = = = = = = ");

class pessoa{
	nome ;
	idade ;
	anoNascimento;

	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
		this.anoNascimento = 2023 - idade;
	}

	descrever(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
	}
}

function compararPessoa (p1, p2){
	if (p1.idade > p2.idade){
		console.log(`${p1.nome} é mais velha que ${p2.nome}`);
	}else if (p2.idade > p1.idade){
			console.log(`${p2.nome} é mais velha que ${p1.nome}`);
		} else {
			console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
		}
	}

const natalia = new pessoa ('natalia' , 28)
const catarina = new pessoa ('catarina' , 10)

compararPessoa(natalia, catarina)