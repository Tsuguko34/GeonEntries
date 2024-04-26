export default function calculateVector(
  initialX,
  initialY,
  terminalX,
  terminalY
) {
  var xComponent = (terminalX - initialX).toFixed(2);
  var yComponent = (terminalY - initialY).toFixed(2);

  // Update rectangles with user input values
  document.getElementById("rectangle-20-1").innerHTML = yComponent;
  document.getElementById("rectangle-22-1").innerHTML = xComponent;
  document.getElementById("rectangle-24-1").innerHTML = initialY;
  document.getElementById("rectangle-23-1").innerHTML = terminalY;
  document.getElementById("rectangle-26-1").innerHTML = initialX;
  document.getElementById("rectangle-25-1").innerHTML = terminalX;
}
