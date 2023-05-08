function sortNumbers() {
  const inputNumbers = document.getElementById('input-numbers').value.trim()
  const numbersArray = inputNumbers.split(',').map(n => parseInt(n))
  const sortedNumbers = numbersArray.sort((a, b) => a - b)
  const output = sortedNumbers.join(', ')
  document.getElementById('output').textContent = `Ordenados: ${output}`
}
