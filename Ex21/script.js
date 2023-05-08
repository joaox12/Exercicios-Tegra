function exibirPares() {
  let x = document.getElementById('valorX').value
  let resultado = ''
  for (let i = 1; i <= x; i++) {
    if (i % 2 == 0) {
      resultado += i + '<br>'
    }
  }
  document.getElementById('resultado').innerHTML = resultado
}
