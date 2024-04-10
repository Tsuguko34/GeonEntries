export default function calculateCrossProduct(u1, u2, u3, v1, v2, v3) {
  var result = [u2 * v3 - u3 * v2, u3 * v1 - u1 * v3, u1 * v2 - u2 * v1];

  document.getElementById("outputRec").innerHTML =
    " (" + result.join(", ") + ")";
}
