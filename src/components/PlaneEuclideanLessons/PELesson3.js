import React, { useEffect, useState } from "react";

//Images
import pl from "../../assets/images/Lessons Images/PELesson3/pl.png";
import image_5_1 from "../../assets/images/Lessons Images/PELesson3/image-5-1.png";
import image_6 from "../../assets/images/Lessons Images/PELesson3/image-6.png";

//Videos
import ExampleA1 from "../../assets/videos/PELesson1/Example A1.mp4";

import {
  calculateDistance,
  calculateNorm,
  calculateNorm3D,
  calculatePointNormal,
} from "../../utils";

function PELesson3() {
  const [pointNormal, setPointNormal] = useState({
    point: "",
    normal: "",
  });

  const isNumeric = (value) => {
    return /^[0-9,]+$/.test(value);
  };
  const solvePointNormal = () => {
    if (isNumeric(pointNormal.point) && isNumeric(pointNormal.normal)) {
      calculatePointNormal(pointNormal.point, pointNormal.normal);
    }
  };

  return (
    <div className="Topic_Container">
      {/* ORTHOGONAL VECTORS */}
      <div id="topic13" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">ORTHOGONAL VECTORS</p>
          <p className="Sub_Title">Definition 3.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>Let u & v be nonzero vectors in Rⁿ.</p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <p>If u ⋅ v = 0, then u & v are orthogonal (or perpendicular).</p>
            </div>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Now, let v = (x, y). We define v ⊥= (-y, x). Clearly, v and v ⊥are
              orthogonal.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine whether if the following vectors are orthogonal or not.
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">1.) u = (-6, 4), v = (2, 3)</p>
            <p className="label">
              By Definition 3.1, a vector is orthogonal if u ⋅ v = 0
            </p>
            <div className="start">
              <p className="left">Solving for u ⋅ v,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="solution">
              <p className="left">u ⋅ v</p>
              <p className="center">=</p>
              <p className="right">(-6, 4) ⋅ (2, 3)</p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-6)(2) + (4)(3)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-12 + 12</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">0</p>
            </div>
            <p className="label">
              Since u ⋅ v = 0, then u = (-6, 4) and v = (2, 3) are orthogonal.
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">2.) u = (2, 9, -1), v = (7, -1, 5)</p>
            <p className="label">
              By Definition 3.1, a vector is orthogonal if u ⋅ v = 0
            </p>
            <div className="start">
              <p className="left">Solving for u ⋅ v,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="solution">
              <p className="left">u ⋅ v</p>
              <p className="center">=</p>
              <p className="right">( 2, 9, -1 ) ⋅ ( 7, -1, 5 )</p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-6)(2) + (4)(3)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(2)(7) + (9)(-1) + (-1)(5)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">14 + (-9) + (-5)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">0</p>
            </div>
            <p className="label">
              Since u ⋅ v = 0, then u = (2, 9, -1) and v = (7, -1, 5) are
              orthogonal.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example B</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the vectors that are orthogonal to the following given
              vectors.
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">1.) u = (9, -1)</p>
            <p className="label">Let v = (x, y) be orthogonal to u .</p>
            <p className="label">
              By Definition 3.1, a vector is orthogonal if u ⋅ v = 0
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side withBorder">
              <div className="Solution_Example largerLeft2">
                <p className="label">Then,</p>
                <div className="solution">
                  <p className="left">u ⋅ v </p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>

                <div className="solution">
                  <p className="left">(9, -1) ⋅ (x, y)</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="solution">
                  <p className="left">9x - y</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="solution">
                  <p className="left">9x</p>
                  <p className="center">=</p>
                  <p className="right">y</p>
                </div>
                <div className="solution">
                  <p className="left">y</p>
                  <p className="center">=</p>
                  <p className="right">9x</p>
                </div>
                <p className="label">Let y = m ∈ ℝ , then,</p>
                <div className="solution">
                  <p className="left">m</p>
                  <p className="center">=</p>
                  <p className="right">9x</p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example largerLeft2">
                <p className="label">Solving for x,</p>
                <div className="start">
                  <p className="left">x</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">m</span>
                      <span className="divider"></span>
                      <span className="bottom">9</span>
                    </div>
                  </p>
                </div>
                <p className="label">
                  Thus, every vector that is orthogonal to u = (9, -1) is
                </p>

                <p className="label">
                  v = (
                  <div className="fraction">
                    <span className="upper">m</span>
                    <span className="divider"></span>
                    <span className="bottom">9</span>
                  </div>
                  , m) or v = m (
                  <div className="fraction">
                    <span className="upper">1</span>
                    <span className="divider"></span>
                    <span className="bottom">9</span>
                  </div>
                  , 1), ∀ m ∈ ℝ.
                </p>
              </div>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">2.) u = (5, 11)</p>
            <p className="label">Let v = (x, y) be orthogonal to u .</p>
            <p className="label">
              By Definition 3.1, a vector is orthogonal if u ⋅ v = 0
            </p>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side withBorder">
              <div className="Solution_Example largerLeft2">
                <p className="label">Then,</p>
                <div className="solution">
                  <p className="left">u ⋅ v </p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>

                <div className="solution">
                  <p className="left">(5, 11) ⋅ (x, y)</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="solution">
                  <p className="left">5x + 11y</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="solution">
                  <p className="left">5x</p>
                  <p className="center">=</p>
                  <p className="right">-11y</p>
                </div>
                <div className="solution">
                  <p className="left">x</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">-11y</span>
                      <span className="divider"></span>
                      <span className="bottom">5</span>
                    </div>
                  </p>
                </div>
                <p className="label">Let y = m ∈ ℝ , then,</p>
                <div className="solution">
                  <p className="left">m</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">-11y</span>
                      <span className="divider"></span>
                      <span className="bottom">5</span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example largerLeft2">
                <p className="label">Solving for y,</p>
                <div className="start">
                  <p className="left">5m</p>
                  <p className="center">=</p>
                  <p className="right">-11y</p>
                </div>
                <div className="start">
                  <p className="left">y</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">5m-</span>
                      <span className="divider"></span>
                      <span className="bottom">11</span>
                    </div>
                  </p>
                </div>
                <p className="label">
                  Thus, every vector that is orthogonal to u = (5, 11) is
                </p>

                <p className="label">
                  v = ( m ,
                  <div className="fraction">
                    <span className="upper">-5m</span>
                    <span className="divider"></span>
                    <span className="bottom">11</span>
                  </div>
                  ) or v = m ( 1 ,
                  <div className="fraction">
                    <span className="upper">-5</span>
                    <span className="divider"></span>
                    <span className="bottom">11</span>
                  </div>
                  ), ∀ m ∈ ℝ.
                </p>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              The zero vector in Rⁿ is orthogonal to every vector in Rⁿ.
            </p>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 3.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let u & v be vectors in Rⁿ with Euclidean inner product. Then u
                and v are orthogonal iff.
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue">
                  <p>||u + v||² = ||u||² + ||v||²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POINT-NORMAL EQUATIONS OF THE LINE */}
      <div id="topic14" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">POINT-NORMAL EQUATIONS OF THE LINE</p>
          <p className="Sub_Title">Definition 3.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              A normal is a nonzero vector n orthogonal to the line that passes
              through a point P₀(x₀, y₀).
            </p>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Paragraph_Topic">
                <p>The point-normal equation of the line is written as:</p>
              </div>
              <div className="Light_Blue">
                <p>u ⋅ v = ||u|| ||v|| cos θ</p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={pl} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>where,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>n = (a, b), the normal vector which is orthogonal to the line</p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>P₀ (x₀, y₀), any point on the line</p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>P(x, y), an arbitrary point on the line</p>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 3.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Bold_Underline">GENERAL EQUATION OF THE LINE</p>
              <p className="Label">Let a & b be nonzero constants.</p>
              <div className="Paragraph_Topic block">
                <p>
                  Then the equation{" "}
                  <span className="Light_Blue">
                    <p>ax + by + c = 0</p>
                  </span>{" "}
                  is a line in R² with normal vector n = (a, b).
                </p>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example C</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the (a.) point-normal equation and (b.) general equation
              of the line passing through point P₀ and having a normal vector n.
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">1.) P₀ (-4, 7) and n = (3, 11)</p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side withBorder">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">a.</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">
                      By Definition 3.2, the point-normal equation of the line
                      is
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Blue">a</span> (x -{" "}
                      <span className="Orange">x₀</span> ) +{" "}
                      <span className="Blue">b</span> (y -{" "}
                      <span className="Orange">y₀</span> ) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      Substituting the value of P₀ and n to the equation,
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Blue">3</span> (x -{" "}
                      <span className="Orange">(-4)</span> ) +{" "}
                      <span className="Blue">11</span> (y -{" "}
                      <span className="Orange">7</span> ) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">
                        Point-Normal Equation:
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">
                        3(x + 4) + 11(y - 7) = 0
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">b .</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">Evaluating the equation,</p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">3x + 12 + 11y - 77 = 0</p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">General Equation:</span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">3x + 11y - 65 = 0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">2.) P₀ (0, -8) and n = (-12, 5)</p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side withBorder">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">a.</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">
                      By Definition 3.2, the point-normal equation of the line
                      is
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Blue">a</span> (x -{" "}
                      <span className="Orange">x₀</span> ) +{" "}
                      <span className="Blue">b</span> (y -{" "}
                      <span className="Orange">y₀</span> ) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      Substituting the value of P₀ and n to the equation,
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Blue">-12</span> (x -{" "}
                      <span className="Orange">0</span> ) +{" "}
                      <span className="Blue">b</span> (y -{" "}
                      <span className="Orange">(-8)</span> ) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">
                        Point-Normal Equation:
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">-12x + 5(y + 8) = 0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">b .</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">Evaluating the equation,</p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">General Equation:</span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">-12x + 5y + 40 = 0 </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POINT-NORMAL EQUATIONS OF THE PLANE */}
      <div id="topic15" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">POINT-NORMAL EQUATIONS OF THE PLANE</p>
          <p className="Sub_Title">Definition 3.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Similar to the line, a normal is a nonzero vector n orthogonal to
              the plane that passes through a point P₀(x₀, y₀, z₀) .
            </p>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Paragraph_Topic">
                <p>The point-normal equation of the line is written as:</p>
              </div>
              <div className="Light_Blue">
                <p>a(x - x₀) + b(y - y₀) + c(z - z₀) = 0</p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image_5_1} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>where,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              n = (a, b, c), the normal vector which is orthogonal to the plane
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>P₀ (x₀, y₀, z₀), any point on the plane</p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>P(x, y, z), an arbitrary point on the plane</p>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 3.3</p>
            </div>
            <div className="Theorem_Content">
              <p className="Bold_Underline">GENERAL EQUATION OF THE PLANE</p>
              <p className="Label">Let a, b, and c be nonzero constants.</p>
              <div className="Label visual">
                Then the equation{" "}
                <div className="Light_Blue fraction">
                  <p>ax + by + cz + d = 0</p>
                </div>
                is a plane in R³ with normal vector n = (a, b, c).
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example D</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the (a.) point-normal equation and (b.) general equation
              of the plane that passes through point P₀ and having a normal
              vector n. (c.) Identify the plane's intercept.
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">1.) P₀ (9, -14, 0) and n = (-5, -1, 2)</p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side withBorder">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">a.</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">
                      By Definition 3.3, the point-normal equation of the line
                      is
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right noFraction">
                      <span className="Blue">a</span> (x -{" "}
                      <span className="Orange">x₀</span> ) +{" "}
                      <span className="Blue">b</span> (y -{" "}
                      <span className="Orange">y₀</span> ) +{" "}
                      <span className="Blue">c</span>(z -{" "}
                      <span className="Orange">z₀</span>) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      Substituting the value of P₀ and n to the equation,
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right noFraction">
                      <span className="Blue">(-5)</span> (x -{" "}
                      <span className="Orange">9</span> ) +{" "}
                      <span className="Blue">(-1)</span> (y -{" "}
                      <span className="Orange">(-14)</span> ) +{" "}
                      <span className="Blue">2</span>(z -{" "}
                      <span className="Orange">0</span>) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">
                        Point-Normal Equation:
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">
                        -5(x - 9) - (y + 14) + 2z
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <div className="start">
                  <p className="left">
                    <span className="Bold">b .</span>
                  </p>
                  <p className="center"></p>
                  <p className="right">Evaluating the equation,</p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">-5x + 45 - y - 14 + 2z = 0</p>
                </div>
              </div>
              <div className="Solution_Example">
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="Italic Bold">General Equation:</span>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">-5x - y + 2z + 31 = 0</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>
              <span className="Bold">c.</span> To find the intercepts of the
              plane, set the value of the other variables as 0 and substitute it
              to the general equation.
            </p>
          </div>
          <div className="Triple_Grid">
            <div className="left">
              <div className="Solution_Example">
                <p className="label">Finding x-intercepts:</p>
                <p className="label">Let y = 0 and z = 0. Then,</p>
                <div className="start reverse">
                  <p className="left">
                    <span className="Bold">-5x - y + 2z + 31</span>
                  </p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">-5x - 0 + 2(0) + 31</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">-5x</p>
                  <p className="center">=</p>
                  <p className="right">31</p>
                </div>
                <div className="start reverse">
                  <p className="left">x</p>
                  <p className="center">=</p>
                  <p className="right">31/5</p>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="Solution_Example">
                <p className="label">Finding y-intercepts:</p>
                <p className="label">Let x = 0 and z = 0. Then,</p>
                <div className="start reverse">
                  <p className="left">-5x - y + 2z + 31</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">-5(0) - y + 2(0) + 31</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">-y</p>
                  <p className="center">=</p>
                  <p className="right">-31</p>
                </div>
                <div className="start reverse">
                  <p className="left">y</p>
                  <p className="center">=</p>
                  <p className="right">31</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="Solution_Example">
                <p className="label">Finding z-intercepts:</p>
                <p className="label">Let x = 0 and y = 0. Then,</p>
                <div className="start reverse">
                  <p className="left">-5x - y + 2z + 31</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">-5(0) - 0 + 2z + 31</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">2z</p>
                  <p className="center">=</p>
                  <p className="right">-31</p>
                </div>
                <div className="start reverse">
                  <p className="left">z</p>
                  <p className="center">=</p>
                  <p className="right">31/2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Triple_Grid">
            <div className="left">
              <div className="Solution_Example">
                <p className="label">
                  <span className="Italic Bold">Plane’s Intercept:</span>
                </p>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">x-intercepts:</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">(31/5, 0, 0)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="middle noBorder">
              <div className="Solution_Example">
                <p className="label">&nbsp;</p>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">y-intercepts:</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">(0,31, 0)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="Solution_Example">
                <p className="label">&nbsp;</p>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">y-intercepts:</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">(0, 0, -31/2)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">2.) P₀ (-8, 3, -4) and n = (7, 2, -6)</p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side withBorder">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">a.</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">
                      By Definition 3.3, the point-normal equation of the line
                      is
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right noFraction">
                      <span className="Blue">a</span> (x -{" "}
                      <span className="Orange">x₀</span> ) +{" "}
                      <span className="Blue">b</span> (y -{" "}
                      <span className="Orange">y₀</span> ) +{" "}
                      <span className="Blue">c</span>(z -{" "}
                      <span className="Orange">z₀</span>) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      Substituting the value of P₀ and n to the equation,
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right noFraction">
                      <span className="Blue">7</span> (x -{" "}
                      <span className="Orange">(-8)</span> ) +{" "}
                      <span className="Blue">2</span> (y -{" "}
                      <span className="Orange">3</span> ) +{" "}
                      <span className="Blue">(-6)</span>(z -{" "}
                      <span className="Orange">(-4)</span>) = 0
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">
                        Point-Normal Equation:
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">
                        7(x + 8) + 2(y - 3) - 6(z + 4) = 0
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Group">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">
                      <span className="Bold">b .</span>
                    </p>
                    <p className="center"></p>
                    <p className="right">Evaluating the equation,</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">7x + 56 + 2y - 6 - 6z - 24 = 0</p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Italic Bold">General Equation:</span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="LimeGreen">7x + 2y - 6z + 26 = 0</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              <span className="Bold">c.</span> To find the intercepts of the
              plane, set the value of the other variables as 0 and substitute it
              to the general equation.
            </p>
          </div>
          <div className="Triple_Grid">
            <div className="left">
              <div className="Solution_Example">
                <p className="label">Finding x-intercepts:</p>
                <p className="label">Let y = 0 and z = 0. Then,</p>
                <div className="start reverse">
                  <p className="left">7x + 2y - 6z + 26</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">7x + 2(0) - 6(0) + 26</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">7x</p>
                  <p className="center">=</p>
                  <p className="right">-26</p>
                </div>
                <div className="start reverse">
                  <p className="left">x</p>
                  <p className="center">=</p>
                  <p className="right">-26/7</p>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="Solution_Example">
                <p className="label">Finding y-intercepts:</p>
                <p className="label">Let x = 0 and z = 0. Then,</p>
                <div className="start reverse">
                  <p className="left">7x + 2y - 6z + 26</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">7(0) + 2y - 6(0) + 26</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">2y</p>
                  <p className="center">=</p>
                  <p className="right">-26</p>
                </div>
                <div className="start reverse">
                  <p className="left">y</p>
                  <p className="center">=</p>
                  <p className="right">-13</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="Solution_Example">
                <p className="label">Finding z-intercepts:</p>
                <p className="label">Let x = 0 and y = 0. Then,</p>
                <div className="start reverse">
                  <p className="left">7x + 2y - 6z + 26</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">7(0) + 2(0) - 6z + 26</p>
                  <p className="center">=</p>
                  <p className="right">0</p>
                </div>
                <div className="start reverse">
                  <p className="left">-6z</p>
                  <p className="center">=</p>
                  <p className="right">-26</p>
                </div>
                <div className="start reverse">
                  <p className="left">z</p>
                  <p className="center">=</p>
                  <p className="right">13/3</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Triple_Grid">
            <div className="left">
              <div className="Solution_Example">
                <p className="label">
                  <span className="Italic Bold">Plane’s Intercept:</span>
                </p>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">x-intercepts:</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">(-26/7, 0, 0)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="middle noBorder">
              <div className="Solution_Example">
                <p className="label">&nbsp;</p>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">y-intercepts:</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">(0, -13, 0)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="Solution_Example">
                <p className="label">&nbsp;</p>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">y-intercepts:</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center"></p>
                  <p className="right">
                    <span className="LimeGreen">(0, 0, 13/3)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description">
              Let n be the normal vector orthogonal to the line or plane passing
              through a point P₀(x₀, y₀) in R² or P₀(x₀, y₀, z₀) in R³. Try
              entering a value for n and P₀ and observe their point-normal
              equations and general equations.
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Point on the Line/Plane</div>
                    <div className="Sub_Label">(comma-separated)</div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <input
                        type="text"
                        className="Long_Input"
                        placeholder="e.g. 1, 2"
                        value={pointNormal.point}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setPointNormal({
                              ...pointNormal,
                              point: inputValue,
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Normal Vector</div>
                    <div className="Sub_Label">(comma-separated)</div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <input
                        type="text"
                        className="Long_Input"
                        placeholder="e.g. 1, 2"
                        value={pointNormal.normal}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (isNumeric(inputValue) || inputValue === "") {
                            setPointNormal({
                              ...pointNormal,
                              normal: inputValue,
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
                      <button onClick={() => solvePointNormal()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Point-Normal Form:</div>
                    <div className="Sub_Label">&nbsp;</div>
                  </div>
                  <div className="Output_Rectangles_Holder Long">
                    <div id="a-2" className="Output_Rectangles"></div>
                  </div>
                </div>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">General Form:</div>
                    <div className="Sub_Label">&nbsp;</div>
                  </div>
                  <div className="Output_Rectangles_Holder Long">
                    <div id="b" className="Output_Rectangles"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ORTHOGONAL PROJECTIONS */}
      <div id="topic16" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">ORTHOGONAL PROJECTIONS</p>
          <p className="Sub_Title">Definition 3.4</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 3.4</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let u & v be vectors in Rⁿ. If v is a nonzero vector, then u can
                be uniquely represented in the form
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue">
                  <p>u = w₁ + w₂</p>
                </div>
              </div>
              <p className="Label">where,</p>
              <p className="Label paddingLeft">w₁ is a scalar multiple of v</p>
              <p className="Label paddingLeft">w₂ is orthogonal to v</p>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              vector w₁ is called the orthogonal projection of u onto v denoted
              by projᵥu
            </p>
            <p className="Note">
              vector w₂ is called the vector component of u orthogonal to v
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Group">
                <div className="Paragraph_Topic">
                  <p className="Bold_Underline noPadding">
                    Orthogonal Projection of u onto v
                  </p>
                </div>
                <div className="Paragraph_Topic">
                  <p>
                    Let u & v be vectors in an inner product space Rⁿ such that
                    v is a nonzero vector. Then the orthogonal projection of u
                    onto v is
                  </p>
                </div>
              </div>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>
                    projᵥu ={" "}
                    <div className="fraction">
                      <span className="upper">u ⋅ v</span>
                      <span className="divider blue"></span>
                      <span className="bottom">v ⋅ v</span>
                    </div>
                    v
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image_6} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p className="Bold_Underline noPadding">
              Vector Component of u orthogonal to v
            </p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Let u & v be vectors in an inner product space Rⁿ such that v is a
              nonzero vector. Then the vector component of u orthogonal to v is
            </p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Light_Blue fraction">
              <p>
                u - projᵥu = u -
                <div className="fraction">
                  <span className="upper">u ⋅ v</span>
                  <span className="divider blue"></span>
                  <span className="bottom">v ⋅ v</span>
                </div>
                v
              </p>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example E</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine (a.) the orthogonal projection of u onto v or projᵥu and
              (b.) the vector component of u orthogonal v or u - projᵥu .
            </p>
          </div>

          <div className="Solution_Example">
            <div className="start">
              <p className="left">
                <span>u = (3, 8) and v = (6, -1)</span>
              </p>
              <p className="center"></p>
              <p className="right Bold"></p>
            </div>
          </div>

          <div className="Solution_Example">
            <div className="start">
              <p className="left">
                <span className="Bold">a.</span>
              </p>
              <p className="center"></p>
              <p className="right Bold">Orthogonal projection of u onto v</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center"></p>
              <p className="right">
                Substitute the value of u and v to projᵥu ={" "}
                <div className="fraction">
                  <span className="upper">u ⋅ v</span>
                  <span className="divider"></span>
                  <span className="bottom">v ⋅ v</span>
                </div>
                (By Definition 3.4)
              </p>
            </div>
            <div className="solution">
              <p className="left">projᵥu</p>
              <p className="center">=</p>
              <p className="right row">
                <div className="fraction">
                  <span className="upper">(3, 8) ⋅ (6, -1)</span>
                  <span className="divider"></span>
                  <span className="bottom">(6, -1) ⋅ (6, -1)</span>
                </div>
                (6, -1)
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right row">
                <div className="fraction">
                  <span className="upper">(3)(6) + (8)(-1)</span>
                  <span className="divider"></span>
                  <span className="bottom">(6)(6) + (-1)(-1)</span>
                </div>
                (6, -1)
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right row">
                <div className="fraction">
                  <span className="upper">18 - 8</span>
                  <span className="divider"></span>
                  <span className="bottom">36 + 1</span>
                </div>
                (6, -1)
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right row">
                <div className="fraction">
                  <span className="upper">10</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                (6, -1)
              </p>
            </div>
            <div className="solution">
              <p className="left">projᵥu</p>
              <p className="center">=</p>
              <p className="right">
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">60</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                ,
                <div className="fraction">
                  <span className="upper">-10</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                <span className="large">)</span>
              </p>
            </div>
          </div>

          <div className="Solution_Example">
            <div className="start">
              <p className="left">
                <span className="Bold">b.</span>
              </p>
              <p className="center"></p>
              <p className="right Bold">
                Vector component of u orthogonal to v
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center"></p>
              <p className="right">
                Substitute the value of u and projᵥu to u - projᵥu = u -{" "}
                <div className="fraction">
                  <span className="upper">u ⋅ v</span>
                  <span className="divider"></span>
                  <span className="bottom">v ⋅ v</span>
                </div>
                v (By Definition 3.4)
              </p>
            </div>
            <div className="solution">
              <p className="left">u - projᵥu</p>
              <p className="center">=</p>
              <p className="right row">
                (3, 8) -<span className="large">(</span>
                <div className="fraction">
                  <span className="upper">60</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                ,
                <div className="fraction">
                  <span className="upper">-10</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                <span className="large">)</span>
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right row">
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">51</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                ,
                <div className="fraction">
                  <span className="upper">306</span>
                  <span className="divider"></span>
                  <span className="bottom">37</span>
                </div>
                <span className="large">)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DISTANCE BETWEEN A POINT AND A LINE */}
      <div id="topic17" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DISTANCE BETWEEN A POINT AND A LINE</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 3.5</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let P₀(x₀, y₀) be a point and ax + by + c = 0 be a line in R².
                Then the distance between P₀(x₀, y₀) and ax + by + c = 0 is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>
                    D ={" "}
                    <div className="fraction">
                      <span className="upper">|ax₀ + by₀ + c|</span>
                      <span className="divider blue"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>a² +
                        b²
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example F</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the distance between the point (-5, 7) and the line 6x -
              y + 15 = 2.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>By Theorem 3.5, the distance between a point and a line is</p>
          </div>

          <div className="Light_Blue_Holder row">
            D =
            <div className="fraction white">
              <span className="upper">
                <div className="Italic">|ax₀ + by₀ + c|</div>
              </span>
              <span className="divider"></span>
              <span className="bottom">
                <span className="squareRoot_Symbol">&radic;</span>a² + b²
              </span>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>Substituting the values extracted from the given,</p>
          </div>

          <div className="Light_Blue_Holder row gap20">
            <span>x₀ = -5,</span>
            <span>y₀ = 7,</span>
            <span>a = 6,</span>
            <span>b = -1,</span>
            <span>c = 13</span>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">D</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">|(6)(-5) + (-1)(7) + 13|</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>(6)² +
                      (-1)²
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">|24|</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>36 + 1
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">24</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>37
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left">D</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">
                      24<span className="squareRoot_Symbol">&radic;</span>37
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">37</span>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISTANCE BETWEEN A POINT AND A PLANE */}
      <div id="topic18" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DISTANCE BETWEEN A POINT AND A PLANE</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 3.6</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let P₀(x₀, y₀, z₀) be a point and ax + by + cz + d = 0 be a
                plane in R³. Then the distance between P₀(x₀, y₀, z₀) and ax +
                by + cz + d = 0 is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>
                    D ={" "}
                    <div className="fraction">
                      <span className="upper">|ax₀ + by₀ + cz₀ +d|</span>
                      <span className="divider blue"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>a² +
                        b² + c²
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example G</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the distance between the point (8, 0, -11) and the plane
              8z + 13 = -x + 12y + 7
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>By Theorem 3.6, the distance between a point and a plane is</p>
          </div>

          <div className="Light_Blue_Holder row">
            D ={" "}
            <div className="fraction">
              <span className="upper">|ax₀ + by₀ + cz₀ +d|</span>
              <span className="divider"></span>
              <span className="bottom">
                <span className="squareRoot_Symbol">&radic;</span>a² + b² + c²
              </span>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>The plane 8z + 13 = -x + 12y + 7 can be rewritten as</p>
          </div>
          <div className="Light_Blue_Holder row gap20">
            x - 12y + 8z + 6 = 0
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>Substituting the values extracted from the given,</p>
          </div>
          <div className="Light_Blue_Holder row gap20">
            <span>x₀ = 8,</span>
            <span>y₀ = 0, </span>
            <span>z₀ = -11, </span>
            <span>a = 1,</span>
            <span>b = -12,</span>
            <span>c = 8,</span>
            <span>d = 6</span>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">D</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">
                      |(1)(8) + (-12)(0) + (8)(-11) + 6|
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>(8)² +
                      (-11)²
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">|-74|</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>185
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">74</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>185
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left">D</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">
                      2<span className="squareRoot_Symbol">&radic;</span>185
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">5</span>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISTANCE BETWEEN PARALLEL PLANES */}
      <div id="topic19" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DISTANCE BETWEEN PARALLEL PLANES</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Two planes are parallel if their normal vectors are parallel. Take
              note that two vectors are parallel if one of the vectors is a
              scalar multiple of the other. By Definition 3.3, the normal vector
              n is given by n = (a, b, c).
            </p>
          </div>

          <div className="Paragraph_Topic">
            <p>To find the distance D between the two parallel planes:</p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Paragraph_Topic paddingLeft">
              <p>Select an intercept in one of the planes.</p>
              <p>
                Find the distance of the intercept to the other plane using the
                formula from
              </p>
            </div>
          </div>

          <div className="Light_Blue_Holder row">
            <div className="Paragraph_Topic paddingLeft center">
              <p>
                Theorem 3.6: D ={" "}
                <span className="Italic">
                  <div className="fraction">
                    <span className="upper">|ax₀ + by₀ + cz₀ + d|</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>a² + b²
                      + c²
                    </span>
                  </div>
                </span>
              </p>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example H</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the distance between 4z + 2 = 7y + 5 - 3x and 21y - 9x =
              5 + 12z.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>The planes can be rewritten as</p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Paragraph_Topic paddingLeft center">
              <p>
                (1) 4z + 2 = 7y + 5 - 3x <span className="arrow">→</span> 3x -
                7y + 4z - 3 = 0
              </p>
            </div>
            <div className="Paragraph_Topic paddingLeft center">
              <p>
                (2) 21y - 9x = 5 + 12z <span className="arrow">→</span> -9x +
                21y - 12z - 5 = 0
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>and, respectively, has normal vectors of</p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Paragraph_Topic paddingLeft center">
              <p>n₁ = (3, -7, 4)</p>
            </div>
            <div className="Paragraph_Topic paddingLeft center">
              <p>n₂ = (-9, 21, -12)</p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              Observe that n₂ is a scalar multiple of n₁ by a factor -3. Thus,
              the normal vectors of the two planes are parallel .
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Paragraph_Topic paddingLeft center">
              <p>
                <span className="LimeGreen">-3</span> n₁ ={" "}
                <span className="LimeGreen">-3</span> (3, -7, 4)
              </p>
            </div>
            <div className="Paragraph_Topic paddingLeft center">
              <p>= (-9, 21, -12)</p>
            </div>
            <div className="Paragraph_Topic paddingLeft center">
              <p>
                <span className="LimeGreen">-3</span> n₁ = n₂
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              Equivalently, the two planes are also considered parallel . To
              determine the distance between the two parallel planes, find an
              intercept in either of the planes.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <p>By Theorem 3.6, the distance between a point and a plane is</p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Paragraph_Topic paddingLeft center">
              <p>
                D ={" "}
                <div className="fraction">
                  <span className="upper">|ax₀ + by₀ + cz₀ + d|</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>a² + b² +
                    c²
                  </span>
                </div>
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Consider the plane -9x + 21y - 12z - 5 = 0 and point P₀(1, 0, 0),
              we can extract
            </p>
          </div>

          <div className="Light_Blue_Holder row gap20">
            <span>x₀ = 1,</span>
            <span>y₀ = 0, </span>
            <span>z₀ = 0, </span>
            <span>a = -9,</span>
            <span>b = 21,</span>
            <span>c = -12,</span>
            <span>d = -5</span>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Substituting the extracted values from the plane and the point to
              the equation,
            </p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">D</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">
                      |(-9)(1) + (21)(0) + (-12)(0) - 5|
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>(-9)² +
                      (21)²
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">|-74|</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>185
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">|-14|</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>522
                    </span>
                  </div>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">14</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="squareRoot_Symbol">&radic;</span>522
                    </span>
                  </div>
                </p>
              </div>

              <div className="solution">
                <p className="left">D</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">
                      7<span className="squareRoot_Symbol">&radic;</span>58
                    </span>
                    <span className="divider"></span>
                    <span className="bottom">87</span>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson3;
