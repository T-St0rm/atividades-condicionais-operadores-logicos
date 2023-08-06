const ladoaA = 7
const ladoB = 5

function bucha(ladoaA, ladoB){
    if (ladoaA === ladoB){
        return "bucha?: sim"
    } else {
        return "bucha?: não"
    }
}

const resultado = bucha(ladoaA, ladoB)
console.log(resultado)