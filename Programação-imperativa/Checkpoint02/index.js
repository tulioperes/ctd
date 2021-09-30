var produtos = [

    {
        nomeDoProduto: "Tablet",
        valorDoProduto: 899,
        qualidadeDoProduto: 7,
        status:true
    },

    {
        nomeDoProduto: "Smartwatch",
        valorDoProduto: 600,
        qualidadeDoProduto: 5,
        status: true
    },

    {
        nomeDoProduto: "Notebook",
        valorDoProduto: 1790,
        qualidadeDoProduto: 8,
        status: true
    },

    {
        nomeDoProduto: "Headphone",
        valorDoProduto: 489,
        qualidadeDoProduto: 10,
        status: true
    },

]

var valorTotal = 0;

let n = 1;

for(let i = 0; i <= produtos.length - 1; i++){
    if(produtos[i].valorDoProduto > 482 && produtos[i].valorDoProduto < 1600 && produtos[i].qualidadeDoProduto > 6 && produtos[i].status == true){
        var carrinho = produtos[i].nomeDoProduto + " - R$" + produtos[i].valorDoProduto;
        console.log("Item " + n + " do carrinho: " + carrinho);
        n++;
        valorTotal = valorTotal + produtos[i].valorDoProduto;
    }
}

console.log("O valor de sua compra é de R$" + valorTotal)