const jogador1 = "papel"
const jogador2 = "pedra"

function ganhador(jogador1, jogador2){
    if (jogador1 === jogador2){
        return "empate"
    } else if ((jogador1 === "tesoura" && jogador2 === "papel") ||
    (jogador1 === "papel" && jogador2 === "pedra") ||
    (jogador1 === "pedra" && jogador2 === "tesoura")){
        return `${jogador1} ganhou!`
    } else {
        return `${jogador2} ganhou!`
    }
}

var resultado = ganhador(jogador1, jogador2)
console.log(resultado)