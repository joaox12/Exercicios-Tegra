function calcularRaizes() {
  const a = parseFloat(document.getElementById('coeficiente_a').value)
  const b = parseFloat(document.getElementById('coeficiente_b').value)
  const c = parseFloat(document.getElementById('coeficiente_c').value)

  const delta = b ** 2 - 4 * a * c

  if (a === 0) {
    document.getElementById('resultado').innerHTML =
      'O coeficiente a deve ser diferente de zero.'
  } else if (delta < 0) {
    document.getElementById('resultado').innerHTML =
      'Esta equação não possui raízes reais.'
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    document.getElementById('resultado').innerHTML = `X1 = ${x1.toFixed(
      4
    )}<br>X2 = ${x2.toFixed(4)}`
  }
}
