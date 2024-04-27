export default function calculatePoint3D(pointInput, directionInput) {
  // Parse input into arrays

  if (!pointInput.includes(",") || !directionInput.includes(",")) {
    console.error("Both pointInput and normalInput must contain a comma.");
    return;
  }
  const pointCoordinates = pointInput.split(",").map(parseFloat);
  const directionComponents = directionInput.split(",").map(parseFloat);

  if (pointCoordinates && directionComponents) {
    // Determine vector space
    const dimension = directionComponents.length;
    const vectorSpace = dimension === 2 ? "(x, y)" : "(x, y, z)";

    // Calculate equations
    const vectorEquation = `${vectorSpace} = (${
      parseFloat(pointCoordinates[0]) >= 0 ? "+" : ""
    }${parseFloat(pointCoordinates[0]).toFixed(2)} + t * ${parseFloat(
      directionComponents[0]
    ).toFixed(2)}, ${
      parseFloat(pointCoordinates[1]) >= 0 ? "+" : ""
    }${parseFloat(pointCoordinates[1]).toFixed(2)} + t * ${parseFloat(
      directionComponents[1]
    ).toFixed(2)}${
      dimension === 3
        ? `, ${parseFloat(pointCoordinates[2]) >= 0 ? "+" : ""}${parseFloat(
            pointCoordinates[2]
          ).toFixed(2)} + t * ${parseFloat(directionComponents[2]).toFixed(2)}`
        : ""
    })`;

    const parametricEquations = `x = ${
      parseFloat(pointCoordinates[0]) >= 0 ? "+" : ""
    }${parseFloat(pointCoordinates[0]).toFixed(2)} + t * ${parseFloat(
      directionComponents[0]
    ).toFixed(2)}\n y = ${
      parseFloat(pointCoordinates[1]) >= 0 ? "+" : ""
    }${parseFloat(pointCoordinates[1]).toFixed(2)} + t * ${parseFloat(
      directionComponents[1]
    ).toFixed(2)}${
      dimension === 3
        ? `\n z = ${
            parseFloat(pointCoordinates[2]) >= 0 ? "+" : ""
          }${parseFloat(pointCoordinates[2]).toFixed(2)} + t * ${parseFloat(
            directionComponents[2]
          ).toFixed(2)}`
        : ""
    }`;

    const symmetricEquations = `(x ${
      parseFloat(pointCoordinates[0]) >= 0 ? "-" : "+"
    } ${Math.abs(parseFloat(pointCoordinates[0])).toFixed(2)}) / ${parseFloat(
      directionComponents[0]
    ).toFixed(2)} = (y ${
      parseFloat(pointCoordinates[1]) >= 0 ? "-" : "+"
    } ${Math.abs(parseFloat(pointCoordinates[1])).toFixed(2)}) / ${parseFloat(
      directionComponents[1]
    ).toFixed(2)}${
      dimension === 3
        ? ` = (z ${parseFloat(pointCoordinates[2]) >= 0 ? "-" : "+"} ${Math.abs(
            parseFloat(pointCoordinates[2])
          ).toFixed(2)}) / ${parseFloat(directionComponents[2]).toFixed(2)}`
        : ""
    }`;

    // Display the results
    document.getElementById("a-4").innerText = vectorEquation;
    document.getElementById("b-3").innerText = parametricEquations;
    document.getElementById("c").innerText = symmetricEquations;
  }
}
