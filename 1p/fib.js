let valor = 0, aumento = 1, suma;

for (let x = 1; x <= 11; x++) {
  console.log(valor)
  suma = valor + aumento
  valor = aumento
  aumento = suma
}