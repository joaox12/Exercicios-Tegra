function calcular() {
  // Obter os valores dos inputs
  const largura = parseFloat(document.getElementById("largura").value);
  const comprimento = parseFloat(document.getElementById("comprimento").value);
  const valorMetro = parseFloat(document.getElementById("valorMetro").value);

  // Calcular a área do terreno e o preço do terreno
  const area = largura * comprimento;
  const preco = area * valorMetro;

  // Exibir os resultados com duas casas decimais
  document.getElementById("area").innerHTML = area.toFixed(2);
  document.getElementById("preco").innerHTML = preco.toFixed(2);
}