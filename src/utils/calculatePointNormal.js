export default function calculatePointNormal(pointInput, normalInput) {
  // Check if both inputs contain a comma
  if (!pointInput.includes(",") || !normalInput.includes(",")) {
    console.error("Both pointInput and normalInput must contain a comma.");
    return;
  }

  // Parse input values as arrays
  var point = pointInput.split(",").map(parseFloat);
  var normal = normalInput.split(",").map(parseFloat);

  if (point && normal) {
    // Check if only 2D coordinates are provided
    if (point.length === 2 && normal.length === 2) {
      var pointNormalForm = `${parseFloat(normal[0]).toFixed(2)}(x ${
        parseFloat(point[0]) >= 0 ? "-" : "+"
      } ${Math.abs(parseFloat(point[0])).toFixed(2)}) + ${parseFloat(
        normal[1]
      ).toFixed(2)}(y ${parseFloat(point[1]) >= 0 ? "-" : "+"} ${Math.abs(
        parseFloat(point[1])
      ).toFixed(2)}) = 0`;
      var generalForm = `${parseFloat(normal[0]).toFixed(2)}x + ${parseFloat(
        normal[1]
      ).toFixed(2)}y = ${parseFloat(
        normal[0] * point[0] + normal[1] * point[1]
      ).toFixed(2)}`;
    } else if (point.length === 3 && normal.length === 3) {
      // Calculate point-normal form and general form equations for 3D
      var pointNormalForm = `(${parseFloat(normal[0]).toFixed(2)})(x ${
        parseFloat(point[0]) >= 0 ? "-" : "+"
      } ${Math.abs(parseFloat(point[0])).toFixed(2)}) + (${parseFloat(
        normal[1]
      ).toFixed(2)})(y ${parseFloat(point[1]) >= 0 ? "-" : "+"} ${Math.abs(
        parseFloat(point[1])
      ).toFixed(2)}) + (${parseFloat(normal[2]).toFixed(2)})(z ${
        parseFloat(point[2]) >= 0 ? "-" : "+"
      } ${Math.abs(parseFloat(point[2])).toFixed(2)}) = 0`;
      var generalForm = `${parseFloat(normal[0]).toFixed(2)}x + ${parseFloat(
        normal[1]
      ).toFixed(2)}y + ${parseFloat(normal[2]).toFixed(2)}z = ${parseFloat(
        normal[0] * point[0] + normal[1] * point[1] + normal[2] * point[2]
      ).toFixed(2)}`;
    }

    // Display the results
    document.getElementById("a-2").innerHTML = ` ${pointNormalForm}`;
    document.getElementById("b").innerHTML += `${generalForm}`;
  }
}
