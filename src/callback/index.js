function sum(num1, num2) {
  return num1 + num2;
}

function calc(val1, val2, callback) {
  return callback(val1, val2);
}

let data = calc(1, 2, sum);
console.log({ data });

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
