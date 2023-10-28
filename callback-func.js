//

function doOperation(operation) {
  // getting a function as an argument
  operation(1, 100);
}

function add(a, b) {
  console.log(a + b);
}

doOperation(add());

doOperation((a, b) => {
  console.log(a + b);
});
doOperation(function (a, b) {
  console.log(a + b);
});
