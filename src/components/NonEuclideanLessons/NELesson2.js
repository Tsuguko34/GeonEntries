import React, { useEffect, useState } from "react";

//Images
import sph1 from "../../assets/images/Lessons Images/NELesson2/sph-p1.png";
import sph2 from "../../assets/images/Lessons Images/NELesson2/sph-p2.png";
import image64 from "../../assets/images/Lessons Images/NELesson2/image-64.png";
import image67 from "../../assets/images/Lessons Images/NELesson2/image-67.png";
import image68 from "../../assets/images/Lessons Images/NELesson2/image-68.png";
import image73 from "../../assets/images/Lessons Images/NELesson2/image-73.png";
import image74 from "../../assets/images/Lessons Images/NELesson2/image-74.png";
import image77 from "../../assets/images/Lessons Images/NELesson2/image-77.png";
import image78 from "../../assets/images/Lessons Images/NELesson2/image-78.png";
import image79 from "../../assets/images/Lessons Images/NELesson2/image-79.png";
import image83 from "../../assets/images/Lessons Images/NELesson2/image-83.png";
import image84 from "../../assets/images/Lessons Images/NELesson2/image-84.png";
import image85 from "../../assets/images/Lessons Images/NELesson2/image-85.png";
import image86 from "../../assets/images/Lessons Images/NELesson2/image-86.png";
import image88 from "../../assets/images/Lessons Images/NELesson2/image-88.png";
import image89 from "../../assets/images/Lessons Images/NELesson2/image-89.png";
import image90 from "../../assets/images/Lessons Images/NELesson2/image-90.png";
import image91 from "../../assets/images/Lessons Images/NELesson2/image-91.png";

import {
  calculateAngle,
  calculateCrossProduct,
  calculatePoint3D,
  calculateSides,
} from "../../utils";
import toast from "react-hot-toast";

function NELesson2() {
  const [sides, setSides] = useState({
    p: 0,
    q: 0,
    r: 0,
  });

  const handleCalculateAngle = () => {
    if (
      sides.p < 10 ||
      sides.p > 89 ||
      sides.q < 10 ||
      sides.q > 89 ||
      sides.r < 10 ||
      sides.r > 89
    ) {
      toast.error("Sides must be between 10° and 89°.");
    } else {
      console.log(true);
      calculateAngle(sides.p, sides.q, sides.r);
    }
  };

  const [angles, setAngles] = useState({
    angleA: 0,
    angleB: 0,
    angleC: 0,
  });

  const handleCalculateSide = () => {
    if (
      angles.angleA < 45 ||
      angles.angleA > 90 ||
      angles.angleB < 45 ||
      angles.angleB > 90
    ) {
      toast.error("Angles must be between 45° and 90°.");
    } else {
      calculateSides(angles.angleA, angles.angleB);
    }
  };

  const isNumeric = (value) => {
    // Remove non-numeric characters except minus sign and decimal point
    const numericValue = value.replace(/[^0-9.-]/g, "");

    // Check if the remaining value is a valid number and within the specified range
    if (
      isNaN(parseFloat(numericValue)) ||
      parseFloat(numericValue) > 99 ||
      parseFloat(numericValue) < -99
    ) {
      return false;
    } else {
      return /^-?\d+(\.\d{0,2})?$/.test(numericValue); // Check for up to 2 decimal places
    }
  };

  return (
    <div className="Topic_Container">
      {/* THE ELLIPTIC AXIOM */}
      <div id="topic41" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">THE ELLIPTIC AXIOM</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>Any two lines in a plane meet at an ordinary point.</p>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image64} alt="Graph Image" />
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p className="withStack">
              Lines
              <span className="stack">
                <sup>⟷</sup>
                <p>CX</p>
              </span>
              and
              <span className="stack">
                <sup>⟷</sup>
                <p>EY</p>
              </span>{" "}
              meet at point A or B, with both being perpendicular to line
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>
              . Point A and B are called the poles of{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>
              . Line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>{" "}
              is called the polar .
            </p>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              There are no parallel or nonintersecting lines in elliptic
              geometry. Ideal points and omega triangles do not exist.
            </p>
          </div>
        </div>
      </div>

      {/* ELLIPTIC QUADRILATERALS AND TRIANGLES */}
      <div id="topic42" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">ELLIPTIC QUADRILATERALS AND TRIANGLES</p>
          <p className="Sub_Title">Definition 2.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Bullet_Topic">
                  <p className="Title">SACCHERI QUADRILATERAL</p>
                  <p className="Explanation">
                    A Saccheri quadrilateral has two congruent sides PR and QS
                    and two adjacent right angles at R and S .
                  </p>
                  <p className="Explanation" style={{ marginTop: "10px" }}>
                    In elliptic geometry, the base and the summit of the
                    Saccheri quadrilateral intersects
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={sph1} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The angles at the summit of a Saccheri quadrilateral are
                congruent and obtuse.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The segment joining the midpoints of the base and summit of a
                Saccheri quadrilateral is perpendicular to both.
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Bullet_Topic">
                  <p className="Title">LAMBERT QUADRILATERAL</p>
                  <p className="Explanation">
                    A Lambert quadrilateral is a quadrilateral PQRS with three
                    right angles.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={sph2} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.3</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The fourth angle of a Lambert quadrilateral is obtuse, and each
                side of this angle is shorter than the opposite.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.4</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The sum of the measures of the interior angles of any elliptic
                triangle is greater than π.
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft2">
            <div className="Bullet_Topic">
              <p className="Title">EXCESS</p>
              <p className="Explanation">
                The excess of the triangle is the difference between π and the
                angle sum of a hyperbolic triangle.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.5</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let θ₁, θ₂, ..., θₙ be the interior angles of an n-gon on a
                elliptic plane. The area of the n-gon -gon is given by
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>Area n-gon = (θ₁ + θ₂ + ... + θₙ) - (n - 2)(π)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE SPHERE S² IN R³ */}
      <div id="topic43" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">THE SPHERE S² IN R³</p>
          <p className="Sub_Title">Definition 2.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic paddingLeft">
            <p className="Bold_Underline noPadding">SPHERE</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              A sphere in 3-space is a set of all points at a constant distance
              (radius, denoted as r ) from a fixed point called the center
              (denoted as O ).
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              The sphere with center O = (h, i, j) and radius r is denoted by:
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue fraction">
              <p>{`S² = {(x, y, z) ∈ R³ | (x - h)² + (y - i)² + (z - j)² = r²}`}</p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              The unit sphere (center O = {"{"}0, 0, 0{"}"} and radius r = 1{" "}
              {"}"} is denoted by:
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue fraction">
              <p>{`S²   = {(x, y, z) ∈ R³ | x² + y² + z² = 1}`}</p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Bold_Underline noPadding">
              GREAT CIRCLE AND SMALL CIRCLE
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Paragraph_Topic paddingLeft">
                  <p className="withStack">
                    A <span className="Bold">great circle</span> is any circle
                    on the sphere that divides the sphere into two equal
                    hemispheres.
                  </p>
                </div>
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image73} alt="Graph Image" />
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Paragraph_Topic paddingLeft">
                  <p className="withStack">
                    A <span className="Bold">small circle</span> is a circle on
                    the sphere whose center does not line up with the center of
                    the sphere.
                  </p>
                </div>
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image74} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISTANCE AND SPHERICAL DISTANCE */}
      <div id="topic44" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DISTANCE AND SPHERICAL DISTANCE</p>
          <p className="Sub_Title">Definition 2.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Bullet_Topic">
                  <p className="Title">DISTANCE</p>
                  <p className="Explanation block">
                    Let P & Q be points in S² . We denote the distance between
                    points P & Q by d(P, Q) .
                  </p>
                </div>
                <div className="Paragraph_Topic paddingLeft">
                  <p>If P = (x₁, y₁, z₁) )</p>
                  <p>Q = (x₂, y₂, z₂) ), </p>
                </div>

                <div className="Paragraph_Topic paddingLeft">
                  <p>then the distance between P & Q is:</p>
                </div>

                <div className="Light_Blue_Holder">
                  <div className="Light_Blue fraction">
                    <p>
                      d (P, Q) ={" "}
                      <span className="squareRoot_Symbol">&radic;</span>(x₂ -
                      x₁)² + (y₂ - y₁)² + (z₂ - z₁)²
                    </p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image77} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Bullet_Topic">
                  <p className="Title">SPHERICAL DISTANCE</p>
                  <p className="Explanation block">
                    Let P & Q be points in S² . The spherical distance between P
                    and Q is the arc length of the shortest path along the
                    surface of the sphere from P to Q. We denote the spherical
                    distance between points P & Q by dS²(P, Q) .
                  </p>
                </div>

                <div className="Paragraph_Topic paddingLeft">
                  <p>The spherical distance between P & Q is:</p>
                </div>

                <div className="Light_Blue_Holder">
                  <div className="Light_Blue fraction">
                    <p>
                      dS² (P, Q) = 2θ = 2 sin⁻¹ <span className="large">(</span>
                      <div className="fraction">
                        <span className="upper">d(P, Q)</span>
                        <span className="divider blue"></span>
                        <span className="bottom">2</span>
                      </div>
                      <span className="large">)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image78} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the (a.) distance and (b.) spherical distance between
              the given points P and Q .
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              P = <span className="large">(</span>
              <div className="fraction">
                <span className="upper">3</span>
                <span className="divider"></span>
                <span className="bottom">4</span>
              </div>
              ,{" "}
              <div className="fraction">
                <span className="upper">
                  <span className="squareRoot_Symbol">&radic;</span>7
                </span>
                <span className="divider"></span>
                <span className="bottom">4</span>
              </div>
              , 0<span className="large">)</span> and Q ={" "}
              <span className="large">(</span>
              <div className="fraction">
                <span className="upper">
                  <span className="squareRoot_Symbol">&radic;</span>3
                </span>
                <span className="divider"></span>
                <span className="bottom">3</span>
              </div>
              ,{" "}
              <div className="fraction">
                <span className="upper">
                  <span className="squareRoot_Symbol">&radic;</span>2
                </span>
                <span className="divider"></span>
                <span className="bottom">2</span>
              </div>
              ,{" "}
              <div className="fraction">
                <span className="upper">
                  <span className="squareRoot_Symbol">&radic;</span>6
                </span>
                <span className="divider"></span>
                <span className="bottom">6</span>
              </div>
              <span className="large">)</span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Italic Bold">a.) Distance d(P, Q)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example">
              <div className="solution">
                <p className="left">d (P, Q)</p>
                <p className="center">=</p>
                <p className="right">
                  <span className="squareRoot_Symbol">&radic;</span>(x₂ - x₁)² +
                  (y₂ - y₁)² + (z₂ - z₁)²
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="squareRoot_Symbol">&radic;</span>
                  <span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">
                      <span className="squareRoot_Symbol">&radic;</span>3
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">3</span>
                  </div>
                  -
                  <div className="fraction">
                    <span className="upper">3</span>
                    <span className="divider"></span>
                    <span className="bottom">4</span>
                  </div>
                  <span className="large">)</span>² +
                  <span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">
                      <span className="squareRoot_Symbol">&radic;</span>2
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">2</span>
                  </div>
                  -
                  <div className="fraction">
                    <span className="upper">
                      <span className="squareRoot_Symbol">&radic;</span>7
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">4</span>
                  </div>
                  <span className="large">)</span>² +
                  <span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">
                      <span className="squareRoot_Symbol">&radic;</span>6
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">6</span>
                  </div>
                  - 0<span className="large">)</span>²
                </p>
              </div>

              <div className="solution LimeGreen">
                <p className="left">d (P, Q)</p>
                <p className="center">≈</p>
                <p className="right">0.4456</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Italic Bold">b.) Spherical Distance d S² (P, Q)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example">
              <div className="solution">
                <p className="left">dS² (P, Q)</p>
                <p className="center">=</p>
                <p className="right">
                  2 sin⁻¹<span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">d(P, Q)</span>
                    <span className="divider"></span>
                    <span className="bottom">2</span>
                  </div>
                  <span className="large">)</span>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  2 sin⁻¹<span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">0.4456</span>
                    <span className="divider"></span>
                    <span className="bottom">2</span>
                  </div>
                  <span className="large">)</span>
                </p>
              </div>

              <div className="solution LimeGreen">
                <p className="left">dS² (P, Q)</p>
                <p className="center">≈</p>
                <p className="right">0.4494 rad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPHERICAL TRIANGLES */}
      <div id="topic45" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">SPHERICAL TRIANGLES</p>
          <p className="Sub_Title">Definition 2.4</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic paddingLeft">
            <div className="Bullet_Topic">
              <p className="Title">SPHERICAL TRIANGLE</p>
              <p className="Explanation">
                A spherical triangle is a region on the sphere bounded by three
                distinct great circles.
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image79} alt="Graph Image" />
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image83} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              The measure of the angles that the great circle arcs subtend at
              the center of a spherical triangle is numerically equal to the
              lengths of its sides. Equivalently, angle p = side BC, angle q =
              side AC, and angle r = side AB.
            </p>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.5</p>
            </div>
            <div className="Theorem_Content">
              <div className="Paragraph_Topic paddingLeft">
                <div className="Side_By_Side">
                  <div className="Left_Side larger">
                    <div className="Bullet_Topic">
                      <p className="Title">KLEIN-BELTRAMI</p>
                      <p className="Explanation">
                        Let △ABC be a spherical triangle where C = π/2, such
                        that p = AB, q = AC, and r = BC.
                      </p>
                    </div>
                    <div className="Paragraph_Topic block paddingLeft">
                      <p>
                        Then,{" "}
                        <span className="Light_Blue">
                          <p>cos r = (cos p) (cos q)</p>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <div className="Topic_Visual">
                      <div className="Visual_Holder image">
                        <img src={image84} alt="Graph Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAPIER’S RULE */}
      <div id="topic46" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">NAPIER’S RULE</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let △ABC be a right spherical right triangle where C = π/2, such
              that p = AB, q = AC, and r = BC. Then the following identities
              hold:
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <p>10 spherical trigonometric identities</p>
              <p>
                <span className="Bold">cos r</span> = (cos p) (cos q)
              </p>
              <p>
                <span className="Bold">sin p</span> = (sin A) (sin C)
              </p>
              <p>
                <span className="Bold">sin q</span> = (sin B) (sin r)
              </p>
              <p>
                <span className="Bold">tan p</span> = (tan A) (sin q)
              </p>
              <p>
                <span className="Bold">tan q</span> = (tan B) (sin p)
              </p>
              <p>
                <span className="Bold">cos r</span> = (cos p) (cos q)
              </p>
              <p>
                <span className="Bold">tan q</span> = (cos A) (tan r)
              </p>
              <p>
                <span className="Bold">tan p</span> = (cos B) (tan r)
              </p>
              <p>
                <span className="Bold">cos A</span> = (sin B) (cos p)
              </p>
              <p>
                <span className="Bold">cos B</span> = (sin A) (cos q)
              </p>
              <p>
                <span className="Bold">cos r</span> = (cot A) (cot B)
              </p>
            </div>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">NAPIER’S MNEMONIC</p>
            <p className="Explanation">
              John Napier found a method to simplify the 10 spherical
              trigonometric identities into just 2 equations to make it easier
              to recall.
            </p>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image85} alt="Graph Image" />
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>Given the figure above, this is how the Napier’s rule works:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Select one part of the circle, say X.</p>
            <p>
              sin X = product of tangent of the{" "}
              <span className="Bold">adjacent </span> parts
            </p>
            <p>
              sin X = product of cosines of the{" "}
              <span className="Bold">opposite </span> parts
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>For instance, the selected part is p.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div
                  className="Paragraph_Topic center"
                  style={{ height: "100%" }}
                >
                  <p className="Bold">sin p = (tan q) (tan π/2 - B)</p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image86} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div
                  className="Paragraph_Topic center"
                  style={{ height: "100%" }}
                >
                  <p className="Bold">sin p = (cos π/2 - r) (cos π/2 - A)</p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image88} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Let △ABC be a right spherical right triangle where C = 90°, such
              that p = AB, q = AC, and r = BC. Determine the missing parts of
              the given right spherical triangle.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>p = 32°17’ ; A = 51°.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Bold_Underline noPadding">For q:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic">
                  <p>
                    Note that we have the values for p and A. In Napier’s
                    Mnemonic, q is adjacent to p and (π/2 - A). By Napier’s
                    Rule,
                  </p>
                </div>

                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">sin q</p>
                    <p className="center">=</p>
                    <p className="right">(tan p) (tan (π/2 - A))</p>
                  </div>

                  <div className="start">
                    <p className="left">sin q</p>
                    <p className="center">=</p>
                    <p className="right">(tan 32° 17’) (tan (90°-51°))</p>
                  </div>

                  <div className="start">
                    <p className="left">q</p>
                    <p className="center">=</p>
                    <p className="right">sin⁻¹ [(tan 32° 17’) (tan 39°)]</p>
                  </div>

                  <div className="start Bold">
                    <p className="left">q</p>
                    <p className="center">=</p>
                    <p className="right">30° 46’ 12.37’’</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image89} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Bold_Underline noPadding">For r:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic">
                  <p>
                    Note that we have the values for p and q. In Napier’s
                    Mnemonic, (π/2 - r) is the opposite part of p and q. By
                    Napier’s Rule,
                  </p>
                </div>

                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">sin (π/2 - r)</p>
                    <p className="center">=</p>
                    <p className="right">(cos p) (cos q)</p>
                  </div>

                  <div className="start">
                    <p className="left">sin (90° - r)</p>
                    <p className="center">=</p>
                    <p className="right">(cos 32° 17’) (cos 30° 46’ 12.37’’)</p>
                  </div>

                  <div className="start">
                    <p className="left">90 - r</p>
                    <p className="center">=</p>
                    <p className="right">
                      sin⁻¹ [ (co s 32° 17’) (cos 30° 46’ 12.37’’)]
                    </p>
                  </div>

                  <div className="start">
                    <p className="left">r</p>
                    <p className="center">=</p>
                    <p className="right">
                      90 - sin⁻¹ [ (co s 32° 17’) (cos 30° 46’ 12.37’’)]
                    </p>
                  </div>

                  <div className="start Bold">
                    <p className="left">r</p>
                    <p className="center">=</p>
                    <p className="right">43° 24’ 50.84’’</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image90} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Bold_Underline noPadding">For B:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic">
                  <p>
                    Note that we have the values for q and A. In Napier’s
                    Mnemonic, (π/2 - B) is the opposite part q and (π/2 - A). By
                    Napier’s Rule,
                  </p>
                </div>

                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">sin (π/2 - B)</p>
                    <p className="center">=</p>
                    <p className="right">(cos q) (cos (π/2 - A))</p>
                  </div>

                  <div className="start">
                    <p className="left">sin (90° - B)</p>
                    <p className="center">=</p>
                    <p className="right">
                      (cos 30° 46’ 12.37’’) (tan (90°-51°))
                    </p>
                  </div>

                  <div className="start">
                    <p className="left">90 - B</p>
                    <p className="center">=</p>
                    <p className="right">
                      sin⁻¹ [ (co s 30° 46’ 12.37’’) (cos 39°)]
                    </p>
                  </div>

                  <div className="start">
                    <p className="left">B</p>
                    <p className="center">=</p>
                    <p className="right">
                      90 - sin⁻¹ [ (co s 30° 46’ 12.37’’) (cos 39°)]
                    </p>
                  </div>

                  <div className="start Bold">
                    <p className="left">B</p>
                    <p className="center">=</p>
                    <p className="right">48° 6’ 24.33’’</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image90} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Paragraph_Topic paddingLeft3">
            <div className="Paragraph_Topic">
              <p>Thus, the parts of the right spherical triangle are:</p>
            </div>
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Solution_Example">
                  <div className="start LimeGreen">
                    <p className="left">A</p>
                    <p className="center">=</p>
                    <p className="right">51°</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left">B</p>
                    <p className="center">=</p>
                    <p className="right">48° 6’ 24.33’’</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left">C</p>
                    <p className="center">=</p>
                    <p className="right">90°</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example">
                  <div className="start LimeGreen">
                    <p className="left">p</p>
                    <p className="center">=</p>
                    <p className="right">32°17’</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left">q</p>
                    <p className="center">=</p>
                    <p className="right">30° 46’ 12.37’’</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left">r</p>
                    <p className="center">=</p>
                    <p className="right">43° 24’ 50.84’’</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description two">
              <div className="left">2 Sides</div>
              <div className="right">
                Let △ABC be a right spherical right triangle where C = 90° with
                sides p, q, and r. Try entering values for the 2 sides of the
                spherical triangle and observe the values of angles A, B, and C.
              </div>
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Sides (in degree)</div>
                  </div>
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}> p = </p>
                    <div className="Inputs">
                      <input
                        type="text"
                        disabled={sides.q && sides.r}
                        className="Long_Input"
                        placeholder="e.g. 90"
                        value={sides.p || ""}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setSides({
                              ...sides,
                              p: inputValue,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}> q = </p>
                    <div className="Inputs">
                      <input
                        type="text"
                        disabled={sides.p && sides.r}
                        className="Long_Input"
                        placeholder="e.g. 90"
                        value={sides.q || ""}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setSides({
                              ...sides,
                              q: inputValue,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}> r = </p>
                    <div className="Inputs">
                      <input
                        type="text"
                        disabled={sides.p && sides.q}
                        className="Long_Input"
                        placeholder="e.g. 90"
                        value={sides.r || ""}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setSides({
                              ...sides,
                              r: inputValue,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div className="Input_Group">
                    <div className="Submit">
                      <button onClick={() => handleCalculateAngle()}>
                        SOLVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Angles (in degree)</div>
                  </div>
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}>
                      {" "}
                      Angle A ={" "}
                    </p>
                    <div className="Inputs">
                      <div
                        className="Output_Rectangles_Holder Long"
                        style={{ minWidth: "250px" }}
                      >
                        <div
                          id="rectangle-4-a2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}>
                      {" "}
                      Angle V ={" "}
                    </p>
                    <div className="Inputs">
                      <div
                        className="Output_Rectangles_Holder Long"
                        style={{ minWidth: "250px" }}
                      >
                        <div
                          id="rectangle-5-b2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}>
                      {" "}
                      Angle C ={" "}
                    </p>
                    <div className="Inputs">
                      <div
                        className="Output_Rectangles_Holder Long"
                        style={{ minWidth: "250px" }}
                      >
                        <div
                          id="rectangle-6-c2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Description two">
              <div className="left">2 Angles</div>
              <div className="right">
                Let △ABC be a right spherical right triangle where C = 90° with
                sides p, q, and r. Try entering values for the 2 angles of the
                spherical triangle and observe the values of sides p, q, and r.
              </div>
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Angles (in degree)</div>
                  </div>
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}>
                      {" "}
                      Angle A ={" "}
                    </p>
                    <div className="Inputs">
                      <input
                        type="text"
                        className="Long_Input"
                        placeholder="e.g. 90"
                        value={angles.angleA || ""}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setAngles({
                              ...angles,
                              angleA: inputValue,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}>
                      {" "}
                      Angle B ={" "}
                    </p>
                    <div className="Inputs">
                      <input
                        type="text"
                        className="Long_Input"
                        placeholder="e.g. 90"
                        value={angles.angleB || ""}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setAngles({
                              ...angles,
                              angleB: inputValue,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div className="Input_Group">
                    <div className="Submit">
                      <button onClick={() => handleCalculateSide()}>
                        SOLVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Sides (in degree)</div>
                  </div>
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}> p = </p>
                    <div className="Inputs">
                      <div
                        className="Output_Rectangles_Holder Long"
                        style={{ minWidth: "250px" }}
                      >
                        <div
                          id="rectangle-p2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}> q = </p>
                    <div className="Inputs">
                      <div
                        className="Output_Rectangles_Holder Long"
                        style={{ minWidth: "250px" }}
                      >
                        <div
                          id="rectangle-2-q2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div
                    className="Input_Group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <p style={{ color: "white", fontSize: "20px" }}> r = </p>
                    <div className="Inputs">
                      <div
                        className="Output_Rectangles_Holder Long"
                        style={{ minWidth: "250px" }}
                      >
                        <div
                          id="rectangle-3-r2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NELesson2;
