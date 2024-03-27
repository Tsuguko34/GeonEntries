export default function calculateNorm(x, y) {
  // Calculate the norm using the Euclidean norm formula
  var norm = Math.sqrt(x * x + y * y);

  // Display the solution in the output area
  document.getElementById("rectangle-4-1").innerHTML = "" + x + "";
  document.getElementById("rectangle-3-1").innerHTML = "" + y + "";
  document.getElementById("rectangle-a").innerHTML = "" + norm.toFixed(2);
}
