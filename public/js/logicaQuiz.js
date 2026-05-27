// variáveis globais    
let numeroDaQuestaoAtual = 0;
let certas = 0;
let qtdXp = 0;
let numQuiz = 0;

let listaDeQuestoes = [];
let quantidadeDeQuestoes = 0;

function definirPerguntas(quiz) {

    if (quiz == "quiz1") {

        numQuiz = 1;

        listaDeQuestoes = [

            {
                pergunta: "Quem é o principal antagonista de God of War I?",
                alternativaA: "Hades",
                alternativaB: "Ares",
                alternativaC: "Poseidon",
                alternativaD: "Zeus",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Qual arma Kratos recebe de Atena no início do jogo?",
                alternativaA: "Lâminas do Olimpo",
                alternativaB: "Lâmina do Caos",
                alternativaC: "Martelo de Bárbaro",
                alternativaD: "Garras de Hades",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Qual criatura Kratos enfrenta na primeira fase do jogo?",
                alternativaA: "Ciclope",
                alternativaB: "Cérbero",
                alternativaC: "Minotauro",
                alternativaD: "Hidra",
                alternativaCorreta: "alternativaD"
            },

            {
                pergunta: "Quem guia e auxilia Kratos durante sua jornada?",
                alternativaA: "Afrodite",
                alternativaB: "Gaia",
                alternativaC: "Atena",
                alternativaD: "Perséfone",
                alternativaCorreta: "alternativaC"
            },

            {
                pergunta: "O que Kratos busca ao derrotar Ares?",
                alternativaA: "Se tornar rei de Esparta",
                alternativaB: "Libertação de seus pesadelos",
                alternativaC: "Encontrar Atreus",
                alternativaD: "Conquistar o Olimpo",
                alternativaCorreta: "alternativaB"
            }

        ];

    } else if (quiz == "quiz2") {

        numQuiz = 2;

        listaDeQuestoes = [

            {
                pergunta: "Quem trai Kratos no início de God of War II?",
                alternativaA: "Ares",
                alternativaB: "Atena",
                alternativaC: "Zeus",
                alternativaD: "Hades",
                alternativaCorreta: "alternativaC"
            },

            {
                pergunta: "Qual titã salva Kratos após sua queda ao submundo?",
                alternativaA: "Atlas",
                alternativaB: "Cronos",
                alternativaC: "Tifão",
                alternativaD: "Gaia",
                alternativaCorreta: "alternativaD"
            },

            {
                pergunta: "Qual é o nome da espada usada por Zeus para retirar os poderes de Kratos?",
                alternativaA: "Lâmina do Exílio",
                alternativaB: "Lâmina do Olimpo",
                alternativaC: "Espada de Atena",
                alternativaD: "Espada do Destino",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Quem são as entidades que controlam o destino em God of War II?",
                alternativaA: "As Irmãs do Destino",
                alternativaB: "As Górgonas",
                alternativaC: "As Valquírias",
                alternativaD: "As Moiras de Esparta",
                alternativaCorreta: "alternativaA"
            },

            {
                pergunta: "Qual poder mágico Kratos recebe após derrotar a lider das gorgonas?",
                alternativaA: "Fúria de Cronos",
                alternativaB: "Cabeça de Euríale",
                alternativaC: "Arco de Tifão",
                alternativaD: "Abalo Sísmico",
                alternativaCorreta: "alternativaB"
            }

        ];

    } else if (quiz == "quiz3") {
        numQuiz = 3;

        listaDeQuestoes = [

            {
                pergunta: "Qual deus Kratos mata logo no início de God of War III?",
                alternativaA: "Hermes",
                alternativaB: "Poseidon",
                alternativaC: "Hades",
                alternativaD: "Helios",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Qual é o nome dos punhos em formato de leão que Kratos rouba de Hércules?",
                alternativaA: "Garras de Hades",
                alternativaB: "Fúria de Bóreas",
                alternativaC: "Chicote de Nemesis",
                alternativaD: "Cestos de Nemeia",
                alternativaCorreta: "alternativaD"
            },

            {
                pergunta: "Qual dessas relíquias Kratos adquire para ganhar velocidade?",
                alternativaA: "O Velo de Ouro",
                alternativaB: "As Botas de Hermes",
                alternativaC: "As Asas de Ícaro",
                alternativaD: "O Olho de Atlântida",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Qual personagem arranca a cabeça de Helios para usar como item?",
                alternativaA: "Zeus",
                alternativaB: "Hércules",
                alternativaC: "Kratos",
                alternativaD: "Gaia",
                alternativaCorreta: "alternativaC"
            },

            {
                pergunta: "Qual arma gigante Kratos usa para derrotar o Titã Cronos?",
                alternativaA: "A Lâmina do Olimpo",
                alternativaB: "Os Cestos de Nemeia",
                alternativaC: "O Chicote de Nemesis",
                alternativaD: "As Garras de Hades",
                alternativaCorreta: "alternativaA"
            },

        ];

    } else if (quiz == "quiz4") {

        numQuiz = 4;

        listaDeQuestoes = [

            {
                pergunta: "Qual é o nome do filho de Kratos em God of War 2018?",
                alternativaA: "Baldur",
                alternativaB: "Atreus",
                alternativaC: "Modi",
                alternativaD: "Magni",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Qual arma principal Kratos utiliza no início do jogo?",
                alternativaA: "Lâminas do Caos",
                alternativaB: "Espada do Olimpo",
                alternativaC: "Machado Leviatã",
                alternativaD: "Lança de Esparta",
                alternativaCorreta: "alternativaC"
            },

            {
                pergunta: "Quem é o primeiro deus nórdico enfrentado por Kratos?",
                alternativaA: "Thor",
                alternativaB: "Magni",
                alternativaC: "Modi",
                alternativaD: "Baldur",
                alternativaCorreta: "alternativaD"
            },

            {
                pergunta: "Qual é o nome da serpente gigante encontrada no Lago dos Nove?",
                alternativaA: "Fenrir",
                alternativaB: "Jörmungandr",
                alternativaC: "Nidhogg",
                alternativaD: "Sleipnir",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Quem revela para Atreus sua verdadeira natureza divina?",
                alternativaA: "Freya",
                alternativaB: "Mimir",
                alternativaC: "Kratos",
                alternativaD: "Brok",
                alternativaCorreta: "alternativaC"
            }

        ];

    } else if (quiz == "quiz5") {

        numQuiz = 5;

        listaDeQuestoes = [

            {
                pergunta: "Qual personagem acompanha Kratos na busca por Tyr em God of War Ragnarök?",
                alternativaA: "Freya",
                alternativaB: "Atreus",
                alternativaC: "Mimir",
                alternativaD: "Brok",
                alternativaCorreta: "alternativaB"
            },

            {
                pergunta: "Qual arma nova Kratos recebe durante a história de Ragnarök?",
                alternativaA: "Martelo de Thor",
                alternativaB: "Espada do Olimpo",
                alternativaC: "Lança Draupnir",
                alternativaD: "Foice do Destino",
                alternativaCorreta: "alternativaC"
            },

            {
                pergunta: "Quem mata Brok durante os acontecimentos do jogo?",
                alternativaA: "Thor",
                alternativaB: "Týr",
                alternativaC: "Odin",
                alternativaD: "Freyr",
                alternativaCorreta: "alternativaC"
            },

            {
                pergunta: "Qual é o nome do lobo gigante ligado ao destino de Atreus?",
                alternativaA: "Fenrir",
                alternativaB: "Skoll",
                alternativaC: "Hati",
                alternativaD: "Garm",
                alternativaCorreta: "alternativaA"
            },

            {
                pergunta: "Quem ajuda Kratos a tocar o Gjallarhorn para iniciar o Ragnarök?",
                alternativaA: "Thor",
                alternativaB: "Freya",
                alternativaC: "Heimdall",
                alternativaD: "Surtr",
                alternativaCorreta: "alternativaB"
            }

        ];

    }

    quantidadeDeQuestoes = listaDeQuestoes.length;

    iniciarQuiz();

}

function iniciarQuiz() {

    document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

    preencherHTMLcomQuestaoAtual(0)

    btnProx.disabled = true
}

function preencherHTMLcomQuestaoAtual(index) {
    const questaoAtual = listaDeQuestoes[index]
    numeroDaQuestaoAtual = index
    console.log("questaoAtual")
    console.log(questaoAtual)
    document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
    document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
    document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
    document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
    document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
    document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
}

function submeter() {
    const options = document.getElementsByName("option"); // recupera alternativas no html

    let hasChecked = false
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            hasChecked = true
            break
        }
    }

    if (!hasChecked) {
        alert("Não há alternativas escolhidas. Escolha uma opção.")
    } else {
        btnProx.disabled = false
    }
}


function avancar() {
    btnProx.disabled = true

    checarResposta()

    desmarcarRadioButtons()

    if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
    } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
        preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        btnProx.innerHTML = `Finalizar`
    } else {
        finalizarJogo()
    }
}

function tentarNovamente() {
    // atualiza a página
    window.location.reload()
}

function checarResposta() {
    const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
    const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

    const options = document.getElementsByName("option"); // recupera alternativas no html
    let tamanhoOptions = options.length

    let alternativaCorreta = null // variável para armazenar a alternativa correta

    for (let i = 0; i < tamanhoOptions; i++) {
        if (options[i].value === respostaQuestaoAtual) {
            alternativaCorreta = options[i].labels[0].id
            console.log("alternativaCorreta está no componente: " + alternativaCorreta)
        }
    }

    // verifica se resposta assinalada é correta
    for (let i = 0; i < tamanhoOptions; i++) {
        if (options[i].checked === true && options[i].value === respostaQuestaoAtual) {
            certas++
            numeroDaQuestaoAtual++
        } else if (options[i].checked && options[i].value !== respostaQuestaoAtual) {
            numeroDaQuestaoAtual++
        }
    }
}

function desmarcarRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function finalizarJogo() {
    let textoParaMensagemFinal = null
    const cards = document.getElementsByClassName("card-opcao");

    primeiraOpcao.disabled = true
    segundaOpcao.disabled = true
    terceiraOpcao.disabled = true
    quartaOpcao.disabled = true
    backBtn.style.pointerEvents = "none"


    for (let i = 0; i < cards.length; i++) {
        cards[i].style.pointerEvents = "none";
    }

    if (certas == 0) {
        containerMensagem.style.display = "flex";
        containerMensagem.style.backgroundImage = "none";
        containerMensagem.innerHTML = `
            <img src="../assets/img/icon/flavicon.png" class="fundo-logo">
            <h1 class="mensagem-concluido">Quiz concluído!</h1>
            <h3>Quantidade de acertos: <span class="numero-mensagem">${certas}</span></h3>
            <h3>Continue treinando, guerreiro.</h3>
            <div class="container-btn-finalizar">
            <button onclick="tentarNovamente()" id="btnTentarNovamente">Tentar novamente</button>
            <a href="hubQuiz.html"><button>Sair</button></a>
            </div>
            `;
    } else {
        containerMensagem.style.display = "flex"
    }

    btnProx.disabled = true

}

function gerarXp(botao) {
    let idBotao = botao.id;
    const porcentagemFinalDeAcertos = certas / quantidadeDeQuestoes
    let numAleatorio1 = Math.round(Math.random() * (certas * 20));
    let numAleatorio2 = Math.round(Math.random() * (certas * 20));
    let numAleatorio3 = Math.round(Math.random() * (certas * 20));

    if (porcentagemFinalDeAcertos <= 0.3) {
        if (idBotao == "bau1") {
            qtdXp = numAleatorio1;
        } else if (idBotao == "bau2") {
            qtdXp = numAleatorio2;
        } else if (idBotao == "bau3") {
            qtdXp = numAleatorio3;
        }
    } else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.7) {
        if (idBotao == "bau1") {
            qtdXp = numAleatorio1 * 3;
        } else if (idBotao == "bau2") {
            qtdXp = numAleatorio2 * 3;
        } else if (idBotao == "bau3") {
            qtdXp = numAleatorio3 * 3;
        }
    } else if (porcentagemFinalDeAcertos >= 0.7) {
        if (idBotao == "bau1") {
            qtdXp = (numAleatorio1 * 5) + 100;
        } else if (idBotao == "bau2") {
            qtdXp = (numAleatorio2 * 5) + 100;
        } else if (idBotao == "bau3") {
            qtdXp = (numAleatorio3 * 5) + 100;
        }
    }

    registrar();
    somarXp();

    containerMensagem.style.backgroundImage = "none";

    containerMensagem.innerHTML = `
            <img src="../assets/img/icon/flavicon.png" class="fundo-logo">
            <h1 class="mensagem-concluido">Quiz concluído!</h1>
            <h3>Quantidade de acertos: ${certas}</h3>
            <h2>Você conseguiu <span class="numero-mensagem">${qtdXp}</span> XP no baú escolhido</h2>
            <div class="container-btn-finalizar">
            <button onclick="tentarNovamente()" id="btnTentarNovamente">Tentar novamente</button>
            <a href="hubQuiz.html"><button>Sair</button></a>
            </div>
        `;

}

function registrar() {

    fetch("/quiz/registrarResultadoQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            acertosServer: certas,
            quizServer: numQuiz,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(`${resposta}<br> Registro gravado no banco de dados`);
        } else {
            console.log(`${resposta}<br> Algo deu errado, registro não gravado no banco de dados`);
        }

    }).catch(function (erro) {
        console.log(`${erro}<br> Algo deu errado (estou no catch)`);
    })

}

function somarXp() {

    fetch("/quiz/atualizarXp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            xpServer: qtdXp,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(`${resposta}<br> Registro gravado no banco de dados`);
        } else {
            console.log(`${resposta}<br> Algo deu errado, registro não gravado no banco de dados`);
        }

    }).catch(function (erro) {
        console.log(`${erro}<br> Algo deu errado (estou no catch)`);
    })

}