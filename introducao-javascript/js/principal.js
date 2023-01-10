var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var trPeso = paciente.querySelector(".info-peso");
    var infoPeso = trPeso.textContent;

    var trAltura = paciente.querySelector(".info-altura");
    var infoAlt = trAltura.textContent;

    var trImc = paciente.querySelector(".info-imc");
    var pesoEhValido = true;
    var alturaEhValida = true;

    if(infoPeso <= 0 || infoPeso >= 1000){
        console.log("Peso invalido");
        pesoEhValido = false;
        trImc.textContent = "Peso Invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if(infoAlt <= 0 || infoAlt >= 3.00){
        console.log("Altura invalida");
        alturaEhValida = false;
        trImc.textContent = "Altura Invalida!";
        paciente.classList.add("paciente-invalido");
    }

    if( alturaEhValida && pesoEhValido ){
        var imc = infoPeso / (infoAlt * infoAlt);
        trImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    //tabela.value = '';
    
});

