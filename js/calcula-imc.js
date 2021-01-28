var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");


    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    
    var  pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");

    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        alturaEhValida = false;
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;    
    } 
}

//valida Peso
function validaPeso(peso){
    if (peso >= 0 && peso <  1000) {
        return true;
    } else {
        return false;
    }
}

//valida altura
function validaAltura(altura){
    if(altura >=0 && altura <=3.0){
        return true;
    } else {
        return false;
    }
}

//Calcula IMC
function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}




