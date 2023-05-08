function classificarGlicose() {
  // Obtém o valor da glicose digitado pelo usuário
  var glicose = parseFloat(document.getElementById('input-glicose').value)

  // Verifica a classificação da glicose de acordo com a tabela de referência
  var classificacao
  if (glicose <= 100) {
    classificacao = 'Normal'
  } else if (glicose <= 140) {
    classificacao = 'Elevado'
  } else {
    classificacao = 'Diabetes'
  }

  // Exibe o resultado da classificação na página
  document.getElementById('resultado').innerHTML =
    'Classificação: ' + classificacao
}
