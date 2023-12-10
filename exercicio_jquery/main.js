let ultimaPosicao = 0;

$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const descricaoDaTarefa = $('#input-tarefa').val();
        const novaTarefa = `<li id="tarefa${ultimaPosicao}">${descricaoDaTarefa}</li>`;
        $(novaTarefa).appendTo('ul');
        ultimaPosicao += 1;
        $('#input-tarefa').val('');
    })

    $('ul').click(function(e) {
        if(e.target.id != "lista-tarefas"){
            $(e.target).toggleClass('marcado');
        }
    })

})