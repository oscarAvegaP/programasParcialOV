function primos(n) {
  let num = 0;
  while(n > 0){
    num++;
    let x = 1, contador = 0;
    while( x <= num){
      if(num % x == 0){
        contador++;
      }
      x++;
    }
    if(contador == 2){
      console.log(num);
      n--;
    }
  }
  }
  primos(11);