function square(num) {
  document.writeln(num * num);
}
function processArray(numbers, square) {
  for (var i = 0; i < numbers.length; i++) {
    square(numbers[i]);
  }
}
var numbers = [1, 2, 3, 4, 5];
processArray(numbers, square);
