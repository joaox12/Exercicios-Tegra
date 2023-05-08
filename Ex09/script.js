function converterSegundos() {
  const segundos = parseInt(document.getElementById('segundos').value)
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)
  const segundosRestantes = segundos % 60
  const resultado = `${horas}:${minutos}:${segundosRestantes}`
  document.getElementById('resultado').textContent = resultado
}
