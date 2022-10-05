let array = [];
var pasos = 0;

x = Math.floor(Math.random() * 10e3);
for (i = 0; i < 10e3; i++) {
  array[i] = (Math.floor(Math.random() * 10e3))
}
console.log(array);
console.log("buscar: " + x)
function buscar(array,x){
  for (var i in array) {
    if (array[i] == x) {
     console.log( "La posicion en el Arreglo fue: " + i);
   }
    pasos++
  }
  console.log ("La posicion en el Arreglo fue: " + -1);
}
  buscar(array,x)
  console.log("Los pasos dados fueron: "+pasos)
pasos=0

x = Math.floor(Math.random() * 10e4);
for (j = 0; j < 10e4; j++) {
  array[j] = (Math.floor(Math.random() * 10e4))
}
console.log(array);
console.log("busco: " + x)
function buscar(array,x){
  for (var i in array) {
  if (array[i] == x) {
    console.log( "La posicion en el Arreglo fue: " + i);
  }
  pasos++
  }
  console.log ("La posicion en el Arreglo fue: " + -1);
}
  buscar(array,x)
  console.log("Los pasos dados fueron: "+pasos)
pasos=0
x = Math.floor(Math.random() * 10e5);
for (j = 0; j < 10e5; j++) {
  array[j] = (Math.floor(Math.random() * 10e5))
}
console.log(array);
console.log("busco: " + x)
function buscar(array,x){
  for (var i in array) {
  if (array[i] == x) {
    console.log( "La posicion en el Arreglo fue: " + i);
  }
  pasos++
  }
  console.log ("La posicion en el Arreglo fue: " + -1);
}
  buscar(array,x)
  console.log("Los pasos dados fueron: "+pasos)
