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
        var imc = calculaImc(infoPeso, infoAlt);
        trImc.textContent = imc;
    }

function calculaImc(infoPeso,infoAlt){
    var imc = 0;
    imc = infoPeso / (infoAlt * infoAlt);
    return imc.toFixed(2);
}

//infoPeso => peso   ///   infoAlt => altura

}



