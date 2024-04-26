export default function performOperations3D(uX, uY, uZ, vX, vY, vZ) {
  // Convert input values to numbers
  var u = [parseFloat(uX), parseFloat(uY), parseFloat(uZ)];
  var v = [parseFloat(vX), parseFloat(vY), parseFloat(vZ)];

  // Perform vector operations
  // Addition u + v
  var uPlusV = [
    (u[0] + v[0]).toFixed(2),
    (u[1] + v[1]).toFixed(2),
    (u[2] + v[2]).toFixed(2),
  ];

  // Scalar multiplication 3u
  var threeU = [
    (3 * u[0]).toFixed(2),
    (3 * u[1]).toFixed(2),
    (3 * u[2]).toFixed(2),
  ];

  // Negation -u
  var negU = [(-u[0]).toFixed(2), (-u[1]).toFixed(2), (-u[2]).toFixed(2)];

  // Subtraction v - u
  var vMinusU = [
    (v[0] - u[0]).toFixed(2),
    (v[1] - u[1]).toFixed(2),
    (v[2] - u[2]).toFixed(2),
  ];

  // Update rectangles with user input values
  document.getElementById("rectangle-11-6").innerHTML = uPlusV[0];
  document.getElementById("rectangle-10-6").innerHTML = uPlusV[1];
  document.getElementById("rectangle-16-2").innerHTML = uPlusV[2];
  document.getElementById("rectangle-11-7").innerHTML = threeU[0];
  document.getElementById("rectangle-10-7").innerHTML = threeU[1];
  document.getElementById("rectangle-16-3").innerHTML = threeU[2];
  document.getElementById("rectangle-11-8").innerHTML = negU[0];
  document.getElementById("rectangle-10-8").innerHTML = negU[1];
  document.getElementById("rectangle-16-4").innerHTML = negU[2];
  document.getElementById("rectangle-11-9").innerHTML = vMinusU[0];
  document.getElementById("rectangle-10-9").innerHTML = vMinusU[1];
  document.getElementById("rectangle-16-5").innerHTML = vMinusU[2];
}
