let pais = {
    nome: "Brasil",
    capital: "Brasilia",
    nacionalidade: function () {
        return"Sou do " + this.nome;

    },
};

let carro = {
    marca:"Fiat",
    modelo:"Uno",
};

function Carro(valorMarca,valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
}

console.log(carro);

console.log(new Carro("Renaut", "clio"));

//console.log(pais.nome);
//ou conole.log(pais["nome"]);