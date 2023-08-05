const jogada1 = 6
const jogada2 = 7
var soma = jogada1 + jogada2

function ganhador(jogada1, jogada2){
    if (soma % 2 === 0){
        return "par ganhou!"
    } else {
        return "impar ganhou!"
    }
}

const vencedor = ganhador(jogada1, jogada2)
console.log(`Deu ${soma} ${vencedor}`)