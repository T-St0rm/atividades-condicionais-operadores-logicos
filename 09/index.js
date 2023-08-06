const formaDePagamento = "dinheiro"
const valorProduto = 11000

function valor_desconto(formaDePagamento, valorProduto){
    let desconto = 0
    if (formaDePagamento === "credito"){
        desconto = 0.05
    } else if (formaDePagamento === "cheque"){
        desconto = 0.03
    } else if (formaDePagamento === "debito" || formaDePagamento === "dinheiro"){
        desconto = 0.1
    } else {
        return "forma de pagamento não existe"
    }

    const valorFinal = valorProduto - (valorProduto * desconto)
    return (valorFinal / 100).toFixed(2)

}

var funçao = valor_desconto(formaDePagamento, valorProduto)
console.log("valor a ser pago: " + funçao)