function calcular() {
  // Obter os valores dos
  const base = parseFloat(document.getElementById('base').value)
  const altura = parseFloat(document.getElementById('altura').value)

  // Calcular a área, perímetro e diagonal do retângulo
  const area = base * altura
  const perimetro = 2 * (base + altura)
  const diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))

  // Exibir os resultados com quatro casas decimais
  document.getElementById('area').innerHTML = area.toFixed(4)
  document.getElementById('perimetro').innerHTML = perimetro.toFixed(4)
  document.getElementById('diagonal').innerHTML = diagonal.toFixed(4)
}
