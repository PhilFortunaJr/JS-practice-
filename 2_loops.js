var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];

var newArray = [];


for (i = 0; i < oldArray.length; i++) {
  if (i % 2 === 0) {
    newArray.push(oldArray[i]);
  }
  else {
    newArray.push(oldArray[i] * 2);
  }
}
console.log(newArray);

var x = 0;
 var greeting = "";

while (x < 10) {
  if (x % 2 === 0) {
  greeting +="hello ";
  }
  else { greeting +="goodbye ";
  }
  x +=1;
}
console.log(greeting);
