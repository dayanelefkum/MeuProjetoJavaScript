var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEValido = true;
  var alturaEValida = true;

  if (peso<=0 || peso>=1000){
      console.log("Peso inválido");
      pesoEValido = false;
      tdImc.textContent = "Peso inválido!";
      paciente.classList.add("paciente-invalido");
  }

  if (altura<=0 || altura>=3.0){
      console.log("altura inválido");
      alturaEValida = false;
      tdImc.textContent = "Altura inválida!";
      paciente.classList.add("paciente-invalido");
  }

  if (pesoEValido && alturaEValida){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function  calculaImc(peso,altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
