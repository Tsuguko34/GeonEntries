export default function performOperations(vX, vY, wX, wY) {
  var v = [vX, vY];
  var w = [wX, wY];

  // Addition v + w
  var vPlusW = [
    (parseFloat(v[0]) + parseFloat(w[0])).toFixed(0),
    (parseFloat(v[1]) + parseFloat(w[1])).toFixed(0),
  ];

  // Scalar multiplication 3v
  var threeV = [
    (3 * parseFloat(v[0])).toFixed(0),
    (3 * parseFloat(v[1])).toFixed(0),
  ];

  // Negation -v
  var negV = [(-parseFloat(v[0])).toFixed(0), (-parseFloat(v[1])).toFixed(0)];

  // Subtraction w - v
  var wMinusV = [
    (parseFloat(w[0]) - parseFloat(v[0])).toFixed(0),
    (parseFloat(w[1]) - parseFloat(v[1])).toFixed(0),
  ];

  // Update rectangles with user input values
  document.getElementById("rectangle-13").innerHTML = vPlusW[0];
  document.getElementById("rectangle-12").innerHTML = vPlusW[1];
  document.getElementById("rectangle-11-2").innerHTML = threeV[0];
  document.getElementById("rectangle-10-2").innerHTML = threeV[1];
  document.getElementById("rectangle-11-3").innerHTML = negV[0];
  document.getElementById("rectangle-10-3").innerHTML = negV[1];
  document.getElementById("rectangle-11-4").innerHTML = wMinusV[0];
  document.getElementById("rectangle-10-4").innerHTML = wMinusV[1];
}
