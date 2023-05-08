function calcularTroco() {
  const preco = parseFloat(document.getElementById('preco').value)
  const quantidade = parseInt(document.getElementById('quantidade').value)
  const dinheiro = parseFloat(document.getElementById('dinheiro').value)
  const total = preco * quantidade
  const troco = dinheiro - total
  if (troco >= 0) {
    document.getElementById('resultado').innerHTML =
      'TROCO = R$ ' + troco.toFixed(2)
  } else {
    document.getElementById('resultado').innerHTML =
      'DINHEIRO INSUFICIENTE. FALTAM R$ ' + (-troco).toFixed(2) + ' REAIS.'
  }
}
