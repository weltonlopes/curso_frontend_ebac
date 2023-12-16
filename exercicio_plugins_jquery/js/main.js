$('document').ready(function(){

    //Mask for input "telefone"
    var telMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    telOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(telMaskBehavior.apply({}, arguments), options);
        }
    };
    
    $('#telefone').mask(telMaskBehavior, telOptions);
    //end Mask for input "telefone"

    //Mask for "cpf"
    $('#cpf').mask('000.000.000-00', {reverse: true});

    //Mask for "cep"
    $('#cep').mask('00000-000');

    //Validation
    $('form').validate({
        submitHandler: function(form) {
            alert("O form foi submetido!");
            form.submit();
        },
        rules: {
            email: {
                required: true,
                email: true
            },
            nomeCompleto: {
                required: true,
                min: {
                    param: 15,
                    depends: function(element){
                        let nomeAsString = element.value;
                        let nomeAsList = nomeAsString.split(' ');
                        return nomeAsList.length <= 1;
                    }
                }
                
            },
            enderecoCompleto: {
                required: true,
                min: {
                    param: 15,
                    depends: function(element){
                        const regex = new RegExp('([\\w\\W]+)\\s(\\d+)');
                        return !regex.test(element.value);
                    }
                }
                
            }
        },
        messages: {
            nomeCompleto: "Por favor insira o nome completo",
            enderecoCompleto: "Por favor insira o endereço com número, exemplo: rua exemplo, 123"
        }
    })

})