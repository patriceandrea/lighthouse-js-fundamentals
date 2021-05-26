// function howManyHundreds(num) {
//   var inHundred = Math.trunc(num / 100);
//   if (inHundred < 1) {
//     console.log(0);
//   } else {
//     console.log(inHundred);
//   }
// };

// console.log(howManyHundreds(2000));

function howManyHundreds(num) {
  return (num - (num % 100)) / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);