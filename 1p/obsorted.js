let obj = {};
let obj2={};

for (x = 1; x <= 10e3; x++) {
  key = Math.floor(Math.random() * 10e3);
  obj[key] = key;
}

llaves=Object.keys(obj)

console.table(obj)

for (i = 0; i < llaves.length; i++) {
  key = "key:"
  obj2[key + llaves[i]] = key + llaves[i]
}

console.log(obj2)