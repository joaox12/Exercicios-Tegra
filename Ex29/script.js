function validarCnpj() {
  // Obter o valor do CNPJ digitado
  const cnpj = document.getElementById('cnpj').value

  // Remover os caracteres de formatação do CNPJ
  const cnpjSemFormatacao = cnpj.replace(/[^\d]/g, '')

  // Validar se o CNPJ tem 14 dígitos
  if (cnpjSemFormatacao.length !== 14) {
    document.getElementById('resultado').textContent = 'CNPJ inválido.'
    return
  }

  // Calcular o primeiro dígito verificador do CNPJ
  let soma = 0
  let peso = 2
  for (let i = 11; i >= 0; i--) {
    soma += peso * parseInt(cnpjSemFormatacao.charAt(i))
    peso = peso === 9 ? 2 : peso + 1
  }
  const digito1 = soma % 11 < 2 ? 0 : 11 - (soma % 11)

  // Calcular o segundo dígito verificador do CNPJ
  soma = 0
  peso = 2
  for (let i = 12; i >= 0; i--) {
    soma += peso * parseInt(cnpjSemFormatacao.charAt(i))
    peso = peso === 9 ? 2 : peso + 1
  }
  const digito2 = soma % 11 < 2 ? 0 : 11 - (soma % 11)

  // Validar se os dígitos verificadores calculados são iguais aos dígitos verificadores do CNPJ original
  if (
    cnpjSemFormatacao.charAt(12) == digito1 &&
    cnpjSemFormatacao.charAt(13) == digito2
  ) {
    document.getElementById('resultado').textContent = 'CNPJ válido.'
  } else {
    document.getElementById('resultado').textContent = 'CNPJ inválido.'
  }
}
