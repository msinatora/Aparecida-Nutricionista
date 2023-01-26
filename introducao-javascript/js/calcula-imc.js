var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var trPeso = paciente.querySelector(".info-peso");
    var peso = trPeso.textContent;

    var trAltura = paciente.querySelector(".info-altura");
    var altura = trAltura.textContent;

    var trImc = paciente.querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso invalido");
        pesoEhValido = false;
        trImc.textContent = "Peso Invalido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura invalida");
        alturaEhValida = false;
        trImc.textContent = "Altura Invalida!";
        paciente.classList.add("paciente-invalido");
    }

    if( alturaEhValida && pesoEhValido ){
        var imc = calculaImc(peso, altura);
        trImc.textContent = imc;
    }

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
} 

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
} 

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

//infoPeso => peso   ///   infoAlt => altura

}



