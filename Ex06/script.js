function calcular() {
  const nome = document.getElementById('nome').value
  const valorHora = document.getElementById('valorHora').value
  const horasTrabalhadas = document.getElementById('horasTrabalhadas').value

  const salario = valorHora * horasTrabalhadas

  document.getElementById(
    'resultado'
  ).textContent = `O pagamento para ${nome} deve ser ${salario.toFixed(2)}`
}
