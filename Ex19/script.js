function calcular() {
  let salario = Number(document.getElementById('salario').value)
  let novoSalario, aumento, porcentagem

  if (salario <= 999) {
    porcentagem = 20
  } else if (salario <= 2999) {
    porcentagem = 15
  } else if (salario <= 7999) {
    porcentagem = 10
  } else {
    porcentagem = 5
  }

  aumento = salario * (porcentagem / 100)
  novoSalario = salario + aumento

  document.getElementById('novoSalario').innerHTML =
    'Novo salário = R$ ' + novoSalario.toFixed(2)
  document.getElementById('aumento').innerHTML =
    'Aumento = R$ ' + aumento.toFixed(2)
  document.getElementById('porcentagem').innerHTML =
    'Porcentagem = ' + porcentagem + '%'
}
