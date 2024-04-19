export default function calculateSides(angleAInput, angleBInput, angleCInput) {
  if ((angleAInput, angleBInput)) {
    // Count the number of angles provided
    var anglesProvided = [angleAInput, angleBInput].filter(function (angle) {
      return angle.trim() !== "";
    });

    // Check if at least two angles are provided
    if (anglesProvided.length < 2) {
      document.getElementById("resultSides").innerHTML =
        "Please provide at least two angles.";
      return;
    }

    // Parse input to extract angles
    var angleA = parseDMS(angleAInput);
    var angleB = parseDMS(angleBInput);

    // Assuming C is constant and equal to 90°
    var angleC = 90;
    // Calculate p using the given formula
    var p = radToDeg(
      Math.acos(
        Math.sin(degToRad(90 - angleA.degrees)) /
          Math.cos(degToRad(90 - angleB.degrees))
      )
    );

    // Calculate q using the given formula
    var q = radToDeg(
      Math.acos(
        Math.sin(degToRad(90 - angleB.degrees)) /
          Math.cos(degToRad(90 - angleA.degrees))
      )
    );

    // Calculate r using the given formula
    var r =
      90 -
      radToDeg(
        Math.asin(
          Math.tan(degToRad(90 - angleB.degrees)) *
            Math.tan(degToRad(90 - angleA.degrees))
        )
      );

    // Display the result
    document.getElementById("rectangle-p2").innerHTML = "" + p.toFixed(0) + "°";
    document.getElementById("rectangle-2-q2").innerHTML =
      "" + q.toFixed(0) + "°";
    document.getElementById("rectangle-3-r2").innerHTML =
      "" + r.toFixed(0) + "°";
  }
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(radians) {
  return radians * (180 / Math.PI);
}

function parseDMS(input) {
  var components = input.split(" ");
  return {
    degrees: parseInt(components[0]),
    minutes: parseInt(components[1]),
    seconds: parseInt(components[2]),
  };
}
