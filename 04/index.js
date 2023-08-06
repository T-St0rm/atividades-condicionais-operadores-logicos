const altura_minima = 180
const altura_jogador = 179

function passar(altura_minima, altura_jogador){
    if (altura_jogador > altura_minima){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

const resultado = passar(altura_minima, altura_jogador)
console.log(resultado)