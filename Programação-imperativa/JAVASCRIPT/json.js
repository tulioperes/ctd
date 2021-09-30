let pessoa = {
    nome: "Túlio",
    idade: 29,
    altura: 1.80
}

let json = JSON.stringify(pessoa);  //retorna string  "  " " "

let objetoDeNovo = JSON.parse(json); //retorna objeto literal

console.log(objetoDeNovo);