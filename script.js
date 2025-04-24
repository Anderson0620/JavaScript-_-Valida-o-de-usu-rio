const codigo = {
    '1': {nome: 'Anderson', senha: '123'}
}


function verificaUsuario(nomeUsuario, senhaUsuario){
    const usuario = Object.values(codigo).find(user => user.nome === nomeUsuario)
    const resDiv = document.getElementById('res')

    if (usuario && usuario.senha === senhaUsuario){
        resDiv.textContent = `Bem Vindo ${usuario}`
        resDiv.style.color = 'green'
    }else{
        resDiv.textContent = '[ERRO]'
        resDiv.style.color = 'red'
    }
}

document.getElementById('formItens').addEventListener('submit', function(e){
    e.preventDefault()

    const resName = document.getElementById('name').value
    const resPass = document.getElementById('senha').value

    verificaUsuario(resName, resPass)


    document.getElementById('name').value =''
    document.getElementById('senha').value =''
})