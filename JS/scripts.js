function calc() {
  var lengthA = [parseFloat(document.querySelector("#sideA").value)]
  var lengthB = [parseFloat(document.querySelector("#sideB").value)]
  var lengthC = [parseFloat(document.querySelector("#sideC").value)]


var ab = lengthA.concat(lengthB);

var abc = ab.concat(lengthC);

var sorted = abc.sort(function(d, e)
return d - e;
})

var a = sorted[0]
var b = sorted[1]
var c = sorted[2]

var length = a + b

var respond;

if(lengthab < c){
  respond = "ERROR! Not a triangle"
}
else if(a === b && b === c && a > 0 && b > 0 && c > 0){
  console.log('EQUILATERAL TRIANGLE')
respond = 'EQUILATERAL TRIANGLE'
}else if(a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0){
  console.log('ISOSCELES TRIANGLE')
  respond = 'ISOSCELES TRIANGLE'
}else if(a !== b && b !== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(C) === true) && a > 0 && b > 0 && c > 0){
  console.log('SCALENE TRIANGLE')
  respond = 'SCALENE TRIANGLE'
}else { respond = "Invalid measurements. Kindly re-evaluate your figures."};

document.querySelector("#result").innerHTML = respond

}
