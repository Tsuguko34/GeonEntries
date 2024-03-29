function graphVector(vectorX, vectorY) {
  var canvas = document.getElementById("vectorCanvas");
  var ctx = canvas.getContext("2d");

  // Set canvas size
  var canvasWidth = 510; // Adjusted to accommodate -99 to 99 with 10 units per line
  var canvasHeight = 335; // Adjusted to accommodate -99 to 99 with 10 units per line
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Set padding to ensure space for displaying vector number
  var padding = 20; // Adjust as needed

  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Get user input
  var xComponent = parseFloat(vectorX) || 0;
  var yComponent = parseFloat(vectorY) || 0;

  // Set the scale factor
  var scaleFactor = 10; // Static scale of 10 units per line

  // Calculate the end point of the vector
  var endX = canvasWidth / 2 + xComponent * scaleFactor;
  var endY = canvasHeight / 2 - yComponent * scaleFactor;

  var gridSpacing = 10; // Set a fixed grid spacing
  drawGrid(ctx, canvasWidth, canvasHeight, gridSpacing);

  // Draw the vector
  drawVector(
    ctx,
    canvasWidth / 2,
    canvasHeight / 2,
    endX,
    endY,
    xComponent,
    yComponent,
    padding
  );

  // Draw axes
  drawAxes(ctx, canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
}

function drawAxes(ctx, x, y, canvasWidth, canvasHeight) {
  // Draw axes
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvasWidth, y);
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvasHeight);
  ctx.strokeStyle = "#053b50";
  ctx.stroke();
}

function drawGrid(ctx, canvasWidth, canvasHeight, gridSpacing) {
  // Set a fixed line width for the grid lines
  ctx.lineWidth = 1;

  // Draw vertical grid lines
  for (var i = 0; i < canvasWidth; i += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasHeight);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
  }

  // Draw horizontal grid lines
  for (var j = 0; j < canvasHeight; j += gridSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(canvasWidth, j);
    ctx.strokeStyle = "#ddd";
    ctx.stroke();
  }
}

function drawVector(
  ctx,
  startX,
  startY,
  endX,
  endY,
  xComponent,
  yComponent,
  padding
) {
  // Draw the vector line
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = "#053b50";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw a dot at the end of the vector
  ctx.beginPath();
  ctx.arc(endX, endY, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "red"; // Adjust dot color if needed
  ctx.fill();

  // Calculate the angle of the vector
  var angle = Math.atan2(endY - startY, endX - startX);

  // Display the vector components
  var textX, textY;
  if (endX > startX) {
    textX = endX + padding;
  } else {
    textX = Math.max(endX - padding - 40, padding); // Adjust to ensure enough space for the text and avoid going off canvas
  }
  if (endY < startY) {
    textY = Math.max(endY - padding, padding); // Adjust to ensure enough space for the text and avoid going off canvas
  } else {
    textY = endY + padding;
  }

  // Make sure the label doesn't go off canvas
  if (textX + 40 > ctx.canvas.width) {
    textX = ctx.canvas.width - 40;
  }
  if (textY - 15 < 0) {
    textY = 15;
  }

  ctx.fillStyle = "black";
  ctx.font = "bold 15px Arial";
  ctx.fillText(`(${xComponent}, ${yComponent})`, textX, textY);
}

export { graphVector };