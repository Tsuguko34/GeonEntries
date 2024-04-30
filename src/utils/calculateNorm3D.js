export default function calculateNorm3D(a, b, c) {
  // Calculate the norm using the Euclidean norm formula
  var norm = Math.sqrt(a * a + b * b + c * c);

  // Display the solution in the output area
  var output = document.getElementById("output");

  document.getElementById("rectangle-4-2").innerHTML = "" + a + "";
  document.getElementById("rectangle-3-2").innerHTML = "" + b + "";
  document.getElementById("rectangle-2-1").innerHTML = "" + c + "";
  document.getElementById("rectangle-aa").innerHTML = "" + norm.toFixed(0);
}
