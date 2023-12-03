const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const displayMessage = document.getElementById('error-message');
const form = document.getElementById('form-imc');
const result = document.getElementById('result');

let errorMessage = "A altura não pode ser maior que o peso!";
let isFormValid = false;

function validarValor(valor1, valor2) {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    return valor2 >= valor1;
}

function calcularImc(altura, peso){
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    return peso / (altura * altura);
}

altura.addEventListener('keyup', function(event){
    event.preventDefault();
    if(peso.value) {
        if(!validarValor(altura.value, peso.value)){
            displayMessage.innerHTML = errorMessage;
            displayMessage.style.display = 'block';
            isFormValid = false;
        } else {
            displayMessage.innerHTML = "";
            displayMessage.style.display = 'none';
            isFormValid = true;
            result.innerHTML = "";
        }
    }
});

peso.addEventListener('keyup', function(event){
    event.preventDefault();
    if(altura.value) {
        if(!validarValor(altura.value, peso.value)){
            displayMessage.innerHTML = errorMessage;
            displayMessage.style.display = 'block';
        } else {
            displayMessage.innerHTML = "";
            displayMessage.style.display = 'none';
            isFormValid = true;
            result.innerHTML = "";
        }
    }
});

form.addEventListener('submit', function(event){
    event.preventDefault();
    let indiceImc;
    if(isFormValid){
        let imc = calcularImc(altura.value, peso.value).toFixed(1);
        if(imc < 18.5){
            indiceImc = "Abaixo do normal";
        } else if(imc < 24.9) {
            indiceImc = "normal";
        } else if(imc < 29.9) {
            indiceImc = "acima do normal";
        } else if(imc < 34.9) {
            indiceImc = "com obesidade nível I";
        } else if(imc < 39.9) {
            indiceImc = "com obesidade nível II";
        } else {
            indiceImc = "com obesidade mórbida";
        }        
        result.innerHTML = `O resultado do imc é: ${imc} e está ${indiceImc}`;
    }
})