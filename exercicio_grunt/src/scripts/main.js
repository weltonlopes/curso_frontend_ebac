
// Coletando os items
const botaoGrandao = document.querySelector('.bigButton');
const botaoTentarNovamente = document.querySelector('.normalButton');
const relogioRegressivo = document.getElementById('contador');
const mensagem = document.getElementById('mensagem');
const principal = document.getElementById('principal');
const resultado = document.getElementById('resultado');
const alerta = document.getElementById('alerta');

// Escape do contadorRegressivo
let parado = false;

// Evento principal de Carregamento
document.addEventListener('DOMContentLoaded', function() {
    contadorRegressivo();

    // Listener do botaoGrandao
    botaoGrandao.addEventListener('click', botaoGrandaoClick);
    botaoGrandao.onmouseover = botaoGrandaoOver;
    botaoGrandao.onmouseout = botaoGrandaoOut;

    // Listener do botaoTentarNovamente
    botaoTentarNovamente.addEventListener('click', botaoTentarNovamenteClick);
})

// Funções dos botões
function botaoGrandaoClick() {
    parado = true;
    mensagem.innerText = 'Que vergonha, você clicou! 🤦‍♂️';
    principal.style.display = 'none';
    resultado.style.display = 'flex';
}

function botaoGrandaoOver(){
    alerta.style.display = 'block';
}

function botaoGrandaoOut(){
    alerta.style.display = 'none';
}

function botaoTentarNovamenteClick() {
    location.reload();
}


// Função do relógio contador
function contadorRegressivo() {

    let segundos = 10;
    
    let contador = setInterval(function() {
        if(!parado){
            relogioRegressivo.innerText = segundos;
            segundos--;
            if(segundos < 0) {
                parado = true;
                mensagem.innerText = 'Você conseguiu, venceu seus medos! 🥳';
                principal.style.display = 'none';
                resultado.style.display = 'flex';
            }
        } else {
            clearInterval(contador);
        }
    }, 1000);

}
