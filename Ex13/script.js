function calcularValor() {
  const PRECO_PLANO_BASICO = 50
  const FRANQUIA_MINUTOS = 100
  const PRECO_MINUTO_EXCEDENTE = 2

  const minutosConsumidos = Number(document.getElementById('minutos').value)

  let valorAPagar

  if (minutosConsumidos <= FRANQUIA_MINUTOS) {
    valorAPagar = PRECO_PLANO_BASICO
  } else {
    const minutosExcedentes = minutosConsumidos - FRANQUIA_MINUTOS
    valorAPagar =
      PRECO_PLANO_BASICO + minutosExcedentes * PRECO_MINUTO_EXCEDENTE
  }

  document.getElementById(
    'valor-a-pagar'
  ).textContent = `Valor a pagar: R$ ${valorAPagar.toFixed(2)}`
}
