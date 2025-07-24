document.getElementById("bt+Masc").addEventListener("click", incMasc)
document.getElementById("bt+Fem").addEventListener("click", incFem)
document.getElementById("bt-Masc").addEventListener("click", decMasc)
document.getElementById("bt-Fem").addEventListener("click", decFem)
document.getElementById("bt+Masc").addEventListener("mouseover", ponteiro)
document.getElementById("bt+Fem").addEventListener("mouseover", ponteiro)
document.getElementById("bt-Masc").addEventListener("mouseover", ponteiro)
document.getElementById("bt-Fem").addEventListener("mouseover", ponteiro)
document.getElementById("nome").addEventListener("blur", validaNome)
document.getElementById("email").addEventListener("blur", validaEmail)
document.getElementById("concluir").addEventListener("click", concluirCompra)

function ponteiro(){
    this.style.cursor = "pointer"
}

function incMasc(){
    let valor = parseInt(document.getElementById("quantCamMasc").value)
    if (valor < 50){
        valor++
        document.getElementById("quantCamMasc").value = valor
    } else {
        alert("Entre em contato para compar quantidades maiores.")
    }
    atualizaTotal()
}
function incFem(){
    let valor = parseInt(document.getElementById("quantCamFem").value)
    if (valor < 50){
        valor++
        document.getElementById("quantCamFem").value = valor
    } else {
        alert("Entre em contato para compar quantidades maiores.")
    }
    atualizaTotal()
}
function decMasc(){
    let valor = parseInt(document.getElementById("quantCamMasc").value)
    if (valor > 0){
        valor--
        document.getElementById("quantCamMasc").value = valor
    }
    atualizaTotal()
}
function decFem(){
    let valor = parseInt(document.getElementById("quantCamFem").value)
    if (valor > 0){
        valor--
        document.getElementById("quantCamFem").value = valor
    }
    atualizaTotal()
}

function validaNome(){
    let nome = document.getElementById("nome").value
    if(nome.length < 2 || verificaNumString(nome)){
        document.getElementById("ajuda_nome").textContent = "Nome inválido!"
        return false
    } else {
        document.getElementById("ajuda_nome").textContent = ""
        return true
    }
}

function verificaNumString(nome){
    for(let i = 0; i < nome.length; i++){
        if(!isNaN(nome[i]) && nome[i] != " ")
            return true
    }
    return false
}

function validaEmail(){
    let email = document.getElementById("email").value
    if(email.indexOf("@") != -1 //verifica se tem arroba
        && (email[0] != "@") //verifica se o primeiro caractere não é uma arroba
        && (email[0] != ".") //verifica se o primeiro caractere não é um ponto
        && (email.indexOf(" ") == -1 ) //verifica se tem um espaço no e-mail
        && (email[email.length - 1] != ".") //verifica se o ultimo caractere nao é um ponto
        && (email[email.length - 1] != "@") //verifica se o ultimo caractere nao é uma arroba
        && (email.indexOf("@", email.indexOf("@") + 1) == -1) //verifica se tem mais de uma @
        && (email.indexOf(".", email.indexOf("@")) - email.indexOf("@") > 1) //verifica se existe pelo menos um outro caractere entre @ e um ponto que vem depois dela
    ){
        document.getElementById("ajuda_email").textContent = ""
        return true
    } else {
        document.getElementById("ajuda_email").textContent = "E-mail inválido!"
        return false
    }
}

function atualizaTotal(){
    const precoCamMasc = 50
    const precoCamFem = 48.50
    let quantCamMasc = parseInt(document.getElementById("quantCamMasc").value)
    let quantCamFem = parseInt(document.getElementById("quantCamFem").value)
    let total = parseFloat((precoCamMasc * quantCamMasc) + (precoCamFem * quantCamFem)).toFixed(2)
    document.getElementById("total").value = "R$ " + total.replace('.',',')
}

function concluirCompra(){
    if(validaNome() && validaEmail()){
        if((parseInt(document.getElementById("quantCamMasc").value) > 0) ||
            (parseInt(document.getElementById("quantCamFem").value) > 0)){
                alert("Compra realizada com sucesso!")
                document.getElementById("quantCamMasc").value = 0
                document.getElementById("quantCamFem").value = 0
                document.getElementById("nome").value = ""
                document.getElementById("email").value = ""
                document.getElementById("total").value = "R$ 0,00"
                //atualizaTotal()
            } else{
                alert("Nenhuma camiseta selecionada!")
            }
    }else{
        alert("Preencha todos os dados!")
    }
}