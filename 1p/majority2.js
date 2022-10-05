let array = [], x, guardar = 0, numero = 0, veces = 1, parar = 0;



for (x = 0; x <5; x++) {
  array[x] = Math.floor(Math.random() *(4-1)+1)

}
console.log(array);
array.sort()
console.log(array)
majority = Math.floor(array.length / 2)
do {
  for (i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      veces++
      guardar = veces
      numero = array[i]
    } else {
      veces = 1
      if (guardar > veces) {
        parar = guardar
      }
    }
  }
}while (parar < guardar)

  if (guardar > majority) {
    console.log(numero +" es el mayoritario")
  }
  else {
    console.log("No hay mayoritario")
  }