function graphVector(vectorX, vectorY) {
  var canvas = document.getElementById("vectorCanvas");
  var ctx = canvas.getContext("2d");

  console.log(canvas);
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get user input
  var xComponent = parseFloat(vectorX) || 0;
  var yComponent = parseFloat(vectorY) || 0;

  // Draw Cartesian plane and grid
  drawGrid(ctx);

  // Draw the vector
  drawVector(ctx, xComponent, yComponent);

  // Draw axes
  drawAxes(ctx, ctx.canvas.width / 2, ctx.canvas.height / 2);
}

function drawAxes(ctx, x, y) {
  // Draw axes
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, ctx.canvas.height);
  ctx.moveTo(0, y);
  ctx.lineTo(ctx.canvas.width, y);
  ctx.strokeStyle = "#000";
  ctx.stroke();
}

function drawGrid(ctx) {
  // Draw grid lines
  for (var i = 20; i < ctx.canvas.width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, ctx.canvas.height);
    ctx.moveTo(0, i);
    ctx.lineTo(ctx.canvas.width, i);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
  }
}

function drawVector(ctx, x, y) {
  var scaleFactor = 20;

  // Draw the vector line
  ctx.beginPath();
  ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
  var endX = ctx.canvas.width / 2 + x * scaleFactor;
  var endY = ctx.canvas.height / 2 - y * scaleFactor;
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = "#053b50";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw a dot at the end of the vector
  ctx.beginPath();
  ctx.arc(endX, endY, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "red"; // Adjust dot color if needed
  ctx.fill();

  // Display the vector components
  ctx.fillStyle = "black";
  ctx.font = "bold 15px Arial";
  ctx.fillText(`(${x}, ${y})`, endX, endY - 5);
}

export { graphVector };
