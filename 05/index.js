const altura_jogador = 206

function posiçao(altura_jogador){
    if (altura_jogador < 180){
        return "reprovado"
    } else if (altura_jogador > 179 && altura_jogador < 186 ){
        return "líbero"
    } else if (altura_jogador > 185 && altura_jogador < 196 ){
        return "ponteiro"
    } else if (altura_jogador > 195 && altura_jogador < 206 ){
        return "oposto"
    } else {
        return "central"
    }
}

const resultado = posiçao(altura_jogador)
console.log(resultado)