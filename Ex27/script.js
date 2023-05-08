function verificarPalindromo() {
  const entrada = document.getElementById('entrada').value.toLowerCase()
  const entradaInvertida = entrada.split('').reverse().join('')
  if (entrada === entradaInvertida) {
    document.getElementById('saida').innerHTML = 'É palíndromo.'
  } else {
    document.getElementById('saida').innerHTML = 'Não é palíndromo.'
  }
}
