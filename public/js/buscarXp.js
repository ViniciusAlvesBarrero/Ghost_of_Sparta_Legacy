let idAvatar = sessionStorage.ID_AVATAR;

function buscarXp() {
    fetch(`/adquirirEquipamento/buscarQtdXP/${idAvatar}`, {
        method: "GET",
    })
        .then(function (resultadoBuscaXp) {
            return resultadoBuscaXp.json();
        })
        .then(function (dadosXp) {
            qtdXp.innerHTML = dadosXp[0].xpTotal;
        })
        .catch(function (erro) {
            console.log(erro);
        })
}