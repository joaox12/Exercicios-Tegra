function somarImpares() {
  // Obter os valores digitados pelo usuário
  var x = parseInt(document.getElementById('x').value)
  var y = parseInt(document.getElementById('y').value)

  // Verificar qual é o menor e o maior número
  var menor = Math.min(x, y)
  var maior = Math.max(x, y)

  // Calcular a soma dos ímpares entre x e y
  var soma = 0
  for (var i = menor + 1; i < maior; i++) {
    if (i % 2 !== 0) {
      // verifica se é ímpar
      soma += i
    }
  }

  // Exibir o resultado na tela
  document.getElementById('resultado').innerHTML = 'SOMA DOS ÍMPARES = ' + soma
}
