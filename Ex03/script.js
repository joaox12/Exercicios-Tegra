function calcular() {
  // Obter os valores dos inputs
  const nome1 = document.getElementById('nome1').value
  const idade1 = parseFloat(document.getElementById('idade1').value)
  const nome2 = document.getElementById('nome2').value
  const idade2 = parseFloat(document.getElementById('idade2').value)

  // Calcular a idade média
  const media = (idade1 + idade2) / 2

  // Exibir a mensagem com a idade média
  document.getElementById(
    'mensagem'
  ).innerHTML = `A idade média de ${nome1} e ${nome2} é de ${media.toFixed(
    1
  )} anos.`
}
