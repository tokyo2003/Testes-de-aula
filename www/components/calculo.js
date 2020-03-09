$(document).on("click", "#somar", function(){
  var valor1 = $("#n1").val();
  var valor2 = $("#n2").val();

  var soma = parseFloat(valor1) + parseFloat(valor2);

  $("#result").val(soma);
});

$(document).on("click", "#sub", function(){
  var valor1 = $("#n1").val();
  var valor2 = $("#n2").val();

  var soma = parseFloat(valor1) - parseFloat(valor2);

  $("#result").val(soma);
});

$(document).on("click", "#divisao", function(){
  var valor1 = $("#n1").val();
  var valor2 = $("#n2").val();

  var soma = parseFloat(valor1) / parseFloat(valor2);

  $("#result").val(soma);
});

$(document).on("click", "#mult", function(){
  var valor1 = $("#n1").val();
  var valor2 = $("#n2").val();

  var soma = parseFloat(valor1) * parseFloat(valor2);

  $("#result").val(soma);
});