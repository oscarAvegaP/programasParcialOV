let array = [],distancia=0, vector = [],numero=0,conteo=0;

for (x = 0; x <5; x++) {
  array[x] = Math.floor(Math.random() *(4-1)+1)

}
console.log(array);

for (i = 0; i < 5; i++) {
  vector[i] = 0;
}
  n = 1;
  do {
    for (i = 0; i < array.length; i++) {
      if (n == array[i]) {
        vector[n - 1] += 1
      }
    }
    n++;
  } while (n < 5);
  for (j = 0; j < vector.length; j++) {
    if (vector[j] >= conteo) {
      conteo = vector[j];
      numero = j + 1;
    }
  }
  majority = Math.floor(array.length/2)
  if (conteo > majority) {
    console.log(numero +" es el mayoritario")
  }
  else {
    console.log("No hay mayoritario")
  }