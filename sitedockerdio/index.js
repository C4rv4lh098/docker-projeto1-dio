function mostrar(){
    var nome = document.getElementById("nome").value;
    String(nome);
    console.log(nome.type);
    /*if(nome == ''){
        alert("Campo nome está vázio")
    }*/
    if(nome != ''){       
        alert("Olá " + nome + ", esse é o meu primeiro desafio de Docker!")
        window.location.reload()
        }


}
