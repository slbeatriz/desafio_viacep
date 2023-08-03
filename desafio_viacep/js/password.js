function show_password(){

    var senha = document.getElementById("i_senha");

    if(senha.type === "password"){
        senha.type = "text";
    }else{
        senha.type = "password";
    }

}