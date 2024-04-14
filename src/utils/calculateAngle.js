export default function calculateAngle(side1Input, side2Input, side3Input) {
  var anglesProvided = [side1Input, side2Input, side3Input].filter(function (
    angle
  ) {
    return angle.trim() !== "";
  });

  // Check if only one angle is provided
  if (anglesProvided.length === 1) {
    document.getElementById("result").innerHTML =
      "Please provide at least two angles.";
    return;
  }

  // Parse input to extract degrees, minutes, and seconds
  var side1 = parseDMS(side1Input);
  var side2 = parseDMS(side2Input);
  var side3 = parseDMS(side3Input);

  // Assuming C is constant and equal to 90°
  var angleC = 90;

  // Using the Law of Cosines to find the missing angle
  var cosA =
    Math.cos(degToRad(side1.degrees)) * Math.cos(degToRad(side2.degrees)) +
    Math.sin(degToRad(side1.degrees)) *
      Math.sin(degToRad(side2.degrees)) *
      Math.cos(degToRad(angleC));
  var angleA1 = radToDeg(Math.acos(cosA));

  // Check if side r is provided
  if (side3Input.trim() == "") {
    // Solve for angleA using the formula A = arctan(tan p / sin q)
    var tanP = Math.tan(degToRad(side1.degrees));
    var sinQ = Math.sin(degToRad(side2.degrees));
    var angleA2 = radToDeg(Math.atan(tanP / sinQ));

    // Solve for angleB using the formula B = arctan(tan q / sin p)
    var tanQOverSinP =
      Math.tan(degToRad(side2.degrees)) / Math.sin(degToRad(side1.degrees));
    var angleB = radToDeg(Math.atan(tanQOverSinP));

    // Display the result with the appropriate formula
    document.getElementById("rectangle-4-a2").innerHTML =
      "" + angleA2.toFixed(0) + "°";
    document.getElementById("rectangle-5-b2").innerHTML =
      "" + angleB.toFixed(0) + "°";
    document.getElementById("rectangle-6-c2").innerHTML = "90°";
  } else if (side1Input.trim() == "") {
    // Solve for angleA using the formula A = 90 - arcsin((tan q)(tan 90 - r))
    var tanQ = Math.tan(degToRad(side2.degrees));
    var tan90MinusR = Math.tan(degToRad(90 - side3.degrees));
    var angleA = 90 - radToDeg(Math.asin(tanQ * tan90MinusR));

    // Solve for angleB using the formula B = 90 - arccos((sin q) / (cos 90 - r))
    var sinQ = Math.sin(degToRad(side2.degrees));
    var cos90MinusR = Math.cos(degToRad(90 - side3.degrees));
    var angleB = 90 - radToDeg(Math.acos(sinQ / cos90MinusR));

    // Display the result with the appropriate formula
    document.getElementById("rectangle-4-a2").innerHTML =
      "" + angleA2.toFixed(0) + "°";
    document.getElementById("rectangle-5-b2").innerHTML =
      "" + angleB.toFixed(0) + "°";
    document.getElementById("rectangle-6-c2").innerHTML = "90°";
  } else {
    // Solve for angleA using the formula A = 90 - arccos(sin p / cos(90 - r))
    var sinP = Math.sin(degToRad(side1.degrees));
    var cos90MinusR = Math.cos(degToRad(90 - side3.degrees));
    var angleA2 = 90 - radToDeg(Math.acos(sinP / cos90MinusR));

    // Solve for angleB using the formula B = 90 - arcsin((tan p)(tan 90-r))
    var tanP = Math.tan(degToRad(side1.degrees));
    var tanPOverTan90MinusR = tanP * Math.tan(degToRad(90 - side3.degrees));
    var angleB = 90 - radToDeg(Math.asin(tanPOverTan90MinusR));

    // Display the result with the appropriate formula
    document.getElementById("rectangle-4-a2").innerHTML =
      "" + angleA2.toFixed(0) + "°";
    document.getElementById("rectangle-5-b2").innerHTML =
      "" + angleB.toFixed(0) + "°";
    document.getElementById("rectangle-6-c2").innerHTML = "90°";
  }
}

function parseDMS(input) {
  var components = input.split(" ");
  return {
    degrees: parseInt(components[0]),
    minutes: parseInt(components[1]),
    seconds: parseInt(components[2]),
  };
}

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(radians) {
  return radians * (180 / Math.PI);
}
