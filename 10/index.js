const nome = "José"
const sobreNome = ""
const apelido = "zé"


function nomes(nome, sobreNome, apelido){
    const nomeCompleto = nome + (sobreNome ? " " + sobreNome : "") + (apelido ? "" : "")
    return nomeCompleto
}

const resultado = nomes(nome, sobreNome, apelido)
console.log(resultado)