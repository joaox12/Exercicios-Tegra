function calcularTroco() {
  // lê os valores informados pelo usuário
  var precoUnitario = parseFloat(document.getElementById('precoUnitario').value)
  var quantidadeComprada = parseInt(
    document.getElementById('quantidadeComprada').value
  )
  var dinheiroRecebido = parseFloat(
    document.getElementById('dinheiroRecebido').value
  )

  // calcula o valor total da compra
  var valorTotal = precoUnitario * quantidadeComprada

  // calcula o valor do troco
  var troco = dinheiroRecebido - valorTotal

  // exibe o valor do troco na tela
  document.getElementById('troco').value = troco.toFixed(2)
}
