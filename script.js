
function enviar(){

  
    opSexo="";
  nome = document.getElementById("txtNome").value;
  idade = document.getElementById("txtIdade").value;
  idade = parseInt(idade);
  sexo = document.getElementsByName("sexo");
  if(sexo[0].checked){
    opSexo="Masculino";
  }if(sexo[1].checked){
    opSexo="Feminino";
  }if(sexo[2].checked){
    opSexo="Outros";
  };

  pais = document.getElementById("selPais").value;

  dv = document.getElementById("dvResultado");

  dv.innerHTML = "<h1>Relatorio</h1><br>" + 
  "nome: <b> " + nome + "</b> <br><br>" +
  "sexo: <b>" + opSexo + "</b> <br><br> " +
  "idade: <b>" + idade + "</b> <br><br> " +
  "País: <b>" + pais + "</b> <br><br> ";
}
