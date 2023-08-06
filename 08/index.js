const diaDaSemana = 6

function qual_dia(diadasemana){
    if (diaDaSemana === 1){
        return "segunda feira"
    } else if (diaDaSemana === 2){
        return "terça feira"
    } else if (diaDaSemana === 3){
        return "quarta feira"
    } else if (diaDaSemana === 4){
        return "quinta feira"
    } else if (diaDaSemana === 5){
        return "sexta feira"
    } else if (diaDaSemana === 6){
        return "sabado"
    } else if (diaDaSemana === 7){
        return "domingo"
    }
}

const diaDeHoje = qual_dia(diaDaSemana)
console.log(diaDeHoje)