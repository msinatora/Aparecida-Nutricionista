var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

// VERIFICAR PESO
var trPeso = document.querySelector(".info-peso");
var infoPeso = trPeso.textContent;

// VERIFICAR ALTURA
var trAltura = document.querySelector(".info-altura");
var infoAlt = trAltura.textContent;

// CONTA IMC
var imc = infoPeso / (infoAlt * infoAlt);

// RESULTADO IMC
var trImc = document.querySelector(".info-imc");
var infoImc = trImc.textContent = imc;
console.log(infoImc);

