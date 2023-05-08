function exibirSigno() {
  var dia = parseInt(document.getElementById('dia').value)
  var mes = parseInt(document.getElementById('mes').value)
  var signo = ''

  if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    signo = 'Áries'
  } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
    signo = 'Touro'
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = 'Gêmeos'
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = 'Câncer'
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = 'Leão'
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = 'Virgem'
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = 'Libra'
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = 'Escorpião'
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = 'Sagitário'
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    signo = 'Capricórnio'
  } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
    signo = 'Aquário'
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signo = 'Peixes'
  }

  document.getElementById('resultado').innerHTML = 'Signo: ' + signo
}
