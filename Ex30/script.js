function converter() {
  var numero = parseInt(document.getElementById('numero').value)
  var unidades = [
    '',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove'
  ]
  var dez_a_dezenove = [
    'dez',
    'onze',
    'doze',
    'treze',
    'quatorze',
    'quinze',
    'dezesseis',
    'dezessete',
    'dezoito',
    'dezenove'
  ]
  var dezenas = [
    '',
    '',
    'vinte',
    'trinta',
    'quarenta',
    'cinquenta',
    'sessenta',
    'setenta',
    'oitenta',
    'noventa'
  ]

  var extenso = ''
  if (numero >= 1 && numero <= 9) {
    extenso = unidades[numero]
  } else if (numero >= 10 && numero <= 19) {
    extenso = dez_a_dezenove[numero - 10]
  } else if (numero >= 20 && numero <= 99) {
    var dezena = Math.floor(numero / 10)
    var unidade = numero % 10
    extenso = dezenas[dezena]
    if (unidade > 0) {
      extenso += ' e ' + unidades[unidade]
    }
  } else {
    extenso = 'Número inválido'
  }
  document.getElementById('resultado').innerHTML =
    extenso.charAt(0).toUpperCase() + extenso.slice(1)
}
