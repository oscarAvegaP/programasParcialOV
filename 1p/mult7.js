var i, mult;
mult=1
for (var i=200;i<300; i++){
    if (i % 7 ==0){
        console.log(mult*=i)
    }
}