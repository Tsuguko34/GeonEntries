export default function calculatePointNormal(pointInput, normalInput) {
  // Parse input values as arrays
  var point = pointInput.split(",").map(parseFloat);
  var normal = normalInput.split(",").map(parseFloat);

  // Check if only 2D coordinates are provided
  if (point.length === 2 && normal.length === 2) {
    var pointNormalForm = `${normal[0]}(x - ${point[0]}) + ${normal[1]}(y - ${point[1]}) = 0`;
    var generalForm = `${normal[0]}x + ${normal[1]}y = ${
      normal[0] * point[0] + normal[1] * point[1]
    }`;
  } else if (point.length === 3 && normal.length === 3) {
    // Calculate point-normal form and general form equations for 3D
    var pointNormalForm = `(${normal[0]})(x - ${point[0]}) + (${normal[1]})(y - ${point[1]}) + (${normal[2]})(z - ${point[2]}) = 0`;
    var generalForm = `${normal[0]}x + ${normal[1]}y + ${normal[2]}z = ${
      normal[0] * point[0] + normal[1] * point[1] + normal[2] * point[2]
    }`;
  } else {
    // Handle invalid input
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
      "<p><strong>Error:</strong> Please enter valid 2D or 3D coordinates.</p>";
    return;
  }

  // Display the results
  var resultDiv = document.getElementById("result");
  document.getElementById("a-2").innerHTML = ` ${pointNormalForm}`;
  document.getElementById("b").innerHTML += `${generalForm}`;
}
