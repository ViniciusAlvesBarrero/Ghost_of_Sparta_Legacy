function validarSessao() {
    let email = sessionStorage.EMAIL_USUARIO;
    let nome = sessionStorage.NOME_USUARIO;
    
    var divNomeUsuario = document.getElementById("divNomeUsuario");
    
    if (email != null && nome != null) {
        let nomeDividido = nome.split(` `);
        divNomeUsuario.innerHTML = nomeDividido[0];
    } else {
        /* window.location = "../login.html"; */
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}