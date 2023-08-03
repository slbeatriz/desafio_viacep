function limpa_formulario(){
    document.getElementById("i_rua").value = "";
    document.getElementById("i_bairro").value = "";
    document.getElementById("i_cidade").value = "";
    document.getElementById("i_estado").value = "";
}

function atualiza_formulario(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("i_rua").value = conteudo.logradouro;
        document.getElementById("i_bairro").value = conteudo.bairro;
        document.getElementById("i_cidade").value = conteudo.localidade;
        document.getElementById("i_estado").value = conteudo.uf;
    }else{
        limpa_formulario();
        alert("CEP não encontrado!");
    }
}

function pesquisa_cep(valor){
    var cep = valor.replace(/\D/g, "");

    if(cep != ""){

        var valida_cep = /^[0-9]{8}$/;

        if(valida_cep.test(cep)){

            document.getElementById("i_rua").valor = "...";
            document.getElementById("i_bairro").valor = "...";
            document.getElementById("i_cidade").valor = "...";
            document.getElementById("i_estado").valor = "...";

            var script = document.createElement("script");
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=atualiza_formulario`;

            document.body.appendChild(script);

        }else{
            limpa_formulario();
            alert("Formato de CEP inválido!");
        }

    }else{
        limpa_formulario();
    }
}