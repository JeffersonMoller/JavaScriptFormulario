var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

  var form = document.querySelector("#form-adiciona");

 //Extraindo informações do paciente do form
  var paciente =  obtemPacienteDoFormulario(form);

  //criando a tr e a td do paciente
  var pacienteTr = montarTr(paciente);

  var erros= validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagemsDeErro(erros);
    return;
  }

  //Adicionando paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function exibeMensagemsDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  //apaga o conteudo de ul
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });


}

function obtemPacienteDoFormulario(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

//Monta Tr
function montarTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

//Monta Td
function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

//valida paciente
function validaPaciente(paciente){
  var erros = [];
  if(paciente.nome.length == 0) erros.push("Nome não pode ser em branco");
  if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida");
  if(paciente.gordura.length == 0) erros.push("Gorgura não pode ser em branco");
  if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco");
  if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco");
  return erros;
}



