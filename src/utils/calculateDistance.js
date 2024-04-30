export default function calculateDistance(x1, y1, x2, y2) {
  console.log(x1, y1, x2, y2);
  // Calculate the distance between the two vectors
  var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // Display the solution in the output area
  var output = document.getElementById("output");

  document.getElementById("rectangle-12-1").innerHTML = "" + x1 + "";
  document.getElementById("rectangle-11-1").innerHTML = "" + x2 + "";
  document.getElementById("rectangle-10-1").innerHTML = "" + y1 + "";
  document.getElementById("rectangle-9-1").innerHTML = "" + y2 + "";
  document.getElementById("rectangle-8").innerHTML = "" + distance.toFixed(0);
}
