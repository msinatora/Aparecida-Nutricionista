var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    // alert("Deseja remover");
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        if(event.target.tagName == 'TD'){
        event.target.parentNode.remove();
        alert("Paciente removido com sucesso!");
        }
    }, 500); 

});