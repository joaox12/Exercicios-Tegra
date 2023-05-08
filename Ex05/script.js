function calcular() {
  const raio = document.getElementById('raio').value
  const area = Math.PI * raio ** 2
  document.getElementById('resultado').textContent = `ÁREA = ${area.toFixed(3)}`
}
