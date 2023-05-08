function gerarTabuada() {
  // Obtem o valor do input
  var numero = parseInt(document.getElementById('numero').value)

  // Cria uma string para a tabela
  var tabela = ''

  // Gera a tabuada de 1 a 10
  for (var i = 1; i <= 10; i++) {
    tabela +=
      '<tr><td>' +
      numero +
      ' x ' +
      i +
      ' = </td><td>' +
      numero * i +
      '</td></tr>'
  }

  // Insere a tabela na página
  document.getElementById('tabuada').innerHTML = tabela
}
