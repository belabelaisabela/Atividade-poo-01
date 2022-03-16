class Pessoa {
    constructor(nome, data_nascimento, anonasc, altura){
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.ano = anonasc;
        this.altura = altura;
    }

  mostrarAtributos(){
    console.log(this.nome)
    console.log(this.data_nascimento)
    console.log(this.ano)
    console.log(this.altura)
  }
  calcularIdade(){
  return 2022 - this.ano
  }

  idade(){
    return this.calcularIdade()
  }
}

let pessoa = new Pessoa("Isabela", "13/10", "2005", "1,53")
pessoa.mostrarAtributos()
console.log(pessoa.idade())

