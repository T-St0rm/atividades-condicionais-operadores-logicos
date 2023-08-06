const idade = 15
const possuiPatologia = false
const altura = 151
const ehEstudante = false

function pode_andar(idade, possuiPatologia, altura, ehEstudante){
    if (idade < 12 || idade > 65 || possuiPatologia || altura < 150 ){
        return "ACESSO NEGADO"
    } else if (idade < 18 || ehEstudante){
        return "10 reais"
    } else {
        return "20 reais"
    }
}

const resultado = pode_andar(idade, possuiPatologia, altura, ehEstudante)
console.log(resultado)