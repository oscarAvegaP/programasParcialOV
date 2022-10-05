let obj = {};

for (x = 1; x <= 10e3; x++) {
  key = 'key:' + Math.floor(Math.random() * 10e3);
  obj[key] = key;
}
console.log(obj)