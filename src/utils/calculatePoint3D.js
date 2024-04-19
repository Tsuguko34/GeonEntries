export default function calculatePoint3D(pointInput, directionInput) {
  // Parse input into arrays
  const pointCoordinates = pointInput.split(",").map(Number);
  const directionComponents = directionInput.split(",").map(Number);

  if (pointCoordinates && directionComponents) {
    // Determine vector space
    const dimension = directionComponents.length;
    const vectorSpace = dimension === 2 ? "(x, y)" : "(x, y, z)";

    // Calculate equations
    const vectorEquation = `${vectorSpace} = (${pointCoordinates[0]} + t * ${
      directionComponents[0]
    }, ${pointCoordinates[1]} + t * ${directionComponents[1]}${
      dimension === 3
        ? `, ${pointCoordinates[2]} + t * ${directionComponents[2]}`
        : ""
    })`;
    const parametricEquations = `x = ${pointCoordinates[0]} + t * ${
      directionComponents[0]
    }\n y = ${pointCoordinates[1]} + t * ${directionComponents[1]}${
      dimension === 3
        ? `\n z = ${pointCoordinates[2]} + t * ${directionComponents[2]}`
        : ""
    }`;
    const symmetricEquations = `(x - ${pointCoordinates[0]}) / ${
      directionComponents[0]
    } = (y - ${pointCoordinates[1]}) / ${directionComponents[1]}${
      dimension === 3
        ? ` = (z - ${pointCoordinates[2]}) / ${directionComponents[2]}`
        : ""
    }`;

    // Display the results
    document.getElementById("a-4").innerText = vectorEquation;
    document.getElementById("b-3").innerText = parametricEquations;
    document.getElementById("c").innerText = symmetricEquations;
  }
}
