function contar() {
  // Recupera a palavra digitada pelo usuário
  var palavra = document.getElementById('palavra').value

  // Converte a palavra para minúsculas para facilitar a contagem
  palavra = palavra.toLowerCase()

  // Inicializa as variáveis de contagem
  var vogais = 0
  var consoantes = 0

  // Percorre cada letra da palavra e atualiza as variáveis de contagem
  for (var i = 0; i < palavra.length; i++) {
    var letra = palavra.charAt(i)
    if (
      letra == 'a' ||
      letra == 'e' ||
      letra == 'i' ||
      letra == 'o' ||
      letra == 'u'
    ) {
      vogais++
    } else if (letra >= 'a' && letra <= 'z') {
      consoantes++
    }
  }

  // Exibe o resultado na página
  var resultado = document.getElementById('resultado')
  resultado.innerHTML = 'Palavra: ' + palavra + '<br>'
  resultado.innerHTML += 'Vogais: ' + vogais + '<br>'
  resultado.innerHTML += 'Consoantes: ' + consoantes
}
