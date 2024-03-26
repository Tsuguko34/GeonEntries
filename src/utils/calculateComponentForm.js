export default function calculateComponentForm(
  vector1x,
  vector1y,
  vector1z,
  vector2x,
  vector2y,
  vector2z
) {
  // Perform the subtraction to get the result components
  var resultX = vector1x - vector2x;
  var resultY = vector1y - vector2y;
  var resultZ = vector1z - vector2z;

  // Update rectangles with user input values
  document.getElementById("rectangle-27").innerHTML = "" + vector2z + "";
  document.getElementById("rectangle-28").innerHTML = "" + vector1z + "";
  document.getElementById("rectangle-24").innerHTML = "" + vector1y + "";
  document.getElementById("rectangle-23").innerHTML = "" + vector2y + "";
  document.getElementById("rectangle-26").innerHTML = "" + vector1x + "";
  document.getElementById("rectangle-25").innerHTML = "" + vector2x + "";

  document.getElementById("rectangle-22").innerHTML = "" + resultX + "";
  document.getElementById("rectangle-20").innerHTML = "" + resultY + "";
  document.getElementById("rectangle-21").innerHTML = "" + resultZ + "";
}
