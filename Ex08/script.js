function calcular() {
  // Obter as medidas do formulário
  const medidaA = parseFloat(document.getElementById('medidaA').value)
  const medidaB = parseFloat(document.getElementById('medidaB').value)
  const medidaC = parseFloat(document.getElementById('medidaC').value)

  // Calcular as áreas
  const areaQuadrado = medidaA * medidaA
  const areaTriangulo = (medidaA * medidaB) / 2
  const areaTrapezio = ((medidaA + medidaB) * medidaC) / 2

  // Exibir os resultados na página
  const resultados = document.getElementById('resultados')
  resultados.innerHTML = `
    <p>ÁREA DO QUADRADO = ${areaQuadrado.toFixed(4)}</p>
    <p>ÁREA DO TRIÂNGULO = ${areaTriangulo.toFixed(4)}</p>
    <p>ÁREA DO TRAPÉZIO = ${areaTrapezio.toFixed(4)}</p>
  `
}
