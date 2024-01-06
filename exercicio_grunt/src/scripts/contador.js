function contadorRegressivo() {

    let segundos = 10;
    
    let contador = setInterval(function() {
        document.getElementById('contador').innerText = segundos;
        segundos--;
        if(segundos < 0) {
            clearInterval(contador);
        }
    }, 1000);

}


module.exports=contadorRegressivo;