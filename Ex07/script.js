function calcularConsumo() {
  let distancia = Number(document.getElementById('distancia').value)
  let combustivel = Number(document.getElementById('combustivel').value)
  let consumoMedio = distancia / combustivel
  document.getElementById('consumoMedio').value = consumoMedio.toFixed(3)
}
