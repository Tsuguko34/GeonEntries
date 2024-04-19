import React, { useEffect, useState } from "react";

//Images
import image10 from "../../assets/images/Lessons Images/PELesson4/image-10.png";
import image11 from "../../assets/images/Lessons Images/PELesson4/image-11.png";
import image13 from "../../assets/images/Lessons Images/PELesson4/image-13.png";
import image14 from "../../assets/images/Lessons Images/PELesson4/image-14.png";
import image16 from "../../assets/images/Lessons Images/PELesson4/image-16.png";
import image17 from "../../assets/images/Lessons Images/PELesson4/image-17.png";
import image19 from "../../assets/images/Lessons Images/PELesson4/image-19.png";
import image75 from "../../assets/images/Lessons Images/PELesson4/image-75.png";

import { calculatePoint3D } from "../../utils";

function PELesson4() {
  const [pointNormal, setPointNormal] = useState({
    point: "",
    normal: "",
  });

  const isNumeric = (value) => {
    return /^[\d,\s-]+$/.test(value);
  };
  const solvePoint3D = () => {
    if (isNumeric(pointNormal.point) && isNumeric(pointNormal.normal)) {
      calculatePoint3D(pointNormal.point, pointNormal.normal);
    }
  };

  return (
    <div className="Topic_Container">
      {/* EQUATIONS OF LINES IN R² */}
      <div id="topic20" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">EQUATIONS OF LINES IN R²</p>
          <p className="Sub_Title">Definition 4.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let L be a line containing point r₀ and is parallel to vector v.
              Suppose r is an arbitrary point on the line. Since the line is
              parallel to v, then the vector r - r₀ will be some scalar multiple
              of vector v, which can be written as tv. Accordingly,
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Light_Blue">
                <p>r - r₀ = tv or equivalently r = r₀ + tv</p>
              </div>
              <div className="Paragraph_Topic block">
                <p>
                  where t ∈ ℝ . Variable t is called the{" "}
                  <span className="Bold">parameter</span>. Vector v is called
                  the <span className="Bold">direction vector</span>.
                </p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image14} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 4.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Bold_Underline">VECTOR EQUATION</p>
              <p className="Label">
                Let L be a line in R² or R³ containing point r₀ and is parallel
                to nonzero vector v. Then the equation of the line through r₀
                that is parallel to v is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>r = r₀ + tv</p>
                </div>
              </div>

              <p className="Label">
                If the line passes through the origin (r₀ = 0), then the
                equation of the line is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>r = tv</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 4.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Bold_Underline">PARAMETRIC EQUATIONS</p>
              <p className="Label">
                Let L be a line containing point (x₀, y₀, z₀) and is parallel to
                nonzero vector v = (a, b, c). Then the parametric equations of
                the line are
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue">
                  <p>x = x₀ + ta</p>
                  <p>y = y₀ + tb</p>
                  <p>z = z₀ + tc</p>
                </div>
              </div>

              <p className="Bold_Underline">SYMMETRIC EQUATIONS</p>
              <p className="Label">
                The symmetric equation of the line L, where a, b, & c are all
                nonzero constants, is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <div className="fraction">
                    <span className="upper">x - x₀</span>
                    <span className="divider blue"></span>
                    <span className="bottom">a</span>
                  </div>
                  =
                  <div className="fraction">
                    <span className="upper">y - y₀</span>
                    <span className="divider blue"></span>
                    <span className="bottom">b</span>
                  </div>
                  =
                  <div className="fraction">
                    <span className="upper">z - z₀</span>
                    <span className="divider blue"></span>
                    <span className="bottom">c</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              In 2D vectors, the parametric equations involve only the ‘x’ and
              ‘y’ coordinates, whereas the 3D vectors incorporate the additional
              ‘z’ coordinate. This also applies with symmetric equations.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the vector equation, parametric equations, and symmetric
              equations of the following line.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>
              1.) A line in R² that passes through point P₀(-6, 4) and is
              parallel to vector v = (-8, 1)
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">VECTOR EQUATION</p>
            <p className="Explanation">
              By Theorem 4.1, the vector equation of the line is
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>r = r₀ + tv</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              Let r = (x, y) and r₀ = (-6, 4). The vector v is represented as
              (-8, 1). Then by substituting the values to the equation, we have
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              <span className="LimeGreen">(x, y) = (-6, 4) + t(-8, 1)</span>
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">PARAMETRIC EQUATIONS</p>
            <p className="Explanation">
              By Theorem 4.2, the parametric equations of the line are in the
              form
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>x = x₀ + ta</p>
          </div>
          <div className="Paragraph_Topic center">
            <p>y = y₀ + tb</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              From the vector equation (x, y) = (-6, 4) + t(-8, 1) , we can
              equate its corresponding components on the two sides of the
              equation to obtain its parametric equation. Accordingly,
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <div className="Explanation">
              <div className="Side_By_Side">
                <div className="Left_Side">
                  <div className="Solution_Example">
                    <p className="label">For x-component:</p>
                    <div className="start">
                      <p className="left">
                        <span>
                          ( <span className="Orange">x</span> , y)
                        </span>
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        ( <span className="Orange">-6</span> , 4) +{" "}
                        <span className="Orange">t</span> ({" "}
                        <span className="Orange">-8</span> , 1)
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">
                        <span>x</span>
                      </p>
                      <p className="center">=</p>
                      <p className="right">-6 - 8t</p>
                    </div>

                    <p className="label">Thus, the parametric equations are:</p>
                    <div className="start">
                      <p className="left">
                        <span className="LimeGreen">x</span>
                      </p>
                      <p className="center">
                        <span className="LimeGreen">=</span>
                      </p>
                      <p className="right">
                        <span className="LimeGreen">-6 - 8t</span>
                      </p>
                    </div>

                    <div className="start">
                      <p className="left">
                        <span className="LimeGreen">y</span>
                      </p>
                      <p className="center">
                        <span className="LimeGreen">=</span>
                      </p>
                      <p className="right">
                        <span className="LimeGreen">4 + t</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Right_Side">
                  <div className="Solution_Example">
                    <p className="label">For y-component:</p>
                    <div className="start">
                      <p className="left">
                        <span>
                          ( x , <span className="Orange">y</span>)
                        </span>
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        ( -6 , <span className="Orange">4</span>) +{" "}
                        <span className="Orange">t</span> ( -8,{" "}
                        <span className="Orange">1</span>)
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">
                        <span>y</span>
                      </p>
                      <p className="center">=</p>
                      <p className="right">4 + t</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">SYMMETRIC EQUATIONS</p>
            <p className="Explanation Bold Italic">METHOD A</p>
            <p className="Explanation">
              From the parametric equation, solve for the value of t for each
              components.
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <div className="Explanation">
              <div className="Side_By_Side">
                <div className="Left_Side">
                  <div className="Solution_Example">
                    <p className="label">For x-component:</p>
                    <div className="start">
                      <p className="left">x</p>
                      <p className="center">=</p>
                      <p className="right">-6 - 8t</p>
                    </div>
                    <div className="start">
                      <p className="left">-8t</p>
                      <p className="center">=</p>
                      <p className="right">x + 6</p>
                    </div>
                    <div className="start">
                      <p className="left">t</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="fraction">
                          <span className="upper">x + 6 </span>
                          <span className="divider"></span>
                          <span className="bottom">-8</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Right_Side">
                  <div className="Solution_Example">
                    <p className="label">For y-component:</p>
                    <div className="start">
                      <p className="left">y</p>
                      <p className="center">=</p>
                      <p className="right">4 + t</p>
                    </div>
                    <div className="start">
                      <p className="left">t</p>
                      <p className="center">=</p>
                      <p className="right">y - 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              Equate the values of t to each other to obtain the symmetric
              equation.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              t ={" "}
              <div className="fraction">
                <span className="upper">x + 6</span>
                <span className="divider"></span>
                <span className="bottom">-8</span>
              </div>
              and t = y - 4<span className="arrow">→</span>
              <div className="fraction LimeGreen">
                <span className="upper">x + 6</span>
                <span className="divider"></span>
                <span className="bottom">-8</span>
              </div>
              <span className="LimeGreen">= y - 4</span>
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation Bold Italic">METHOD B</p>
            <p className="Explanation">
              By Theorem 4.2, the symmetric equations of the line is in the form
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper">x - x₀</span>
                <span className="divider"></span>
                <span className="bottom">a</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">y - y₀</span>
                <span className="divider"></span>
                <span className="bottom">b</span>
              </div>
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              <div className="Paragraph_Topic paddingLeft">
                <p>
                  x₀ and y₀ are the coordinates of the point where the line
                  passes through, thus from point P₀ (-6, 4),
                </p>
              </div>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p className="Orange">x₀ = -6</p>
          </div>
          <div className="Paragraph_Topic paddingLeft center">
            <p className="Orange">y₀ = 4</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              <div className="Paragraph_Topic paddingLeft">
                <p>
                  a and b are the coordinates of the direction vector v , thus,
                </p>
              </div>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p className="Blue">a = -8</p>
          </div>
          <div className="Paragraph_Topic paddingLeft center">
            <p className="Blue">b = 1</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              By substituting the value to the equation
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper">
                  x - <span className="Orange">(-6)</span>
                </span>
                <span className="divider"></span>
                <span className="bottom Blue">-8</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">
                  y - <span className="Orange">4</span>
                </span>
                <span className="divider"></span>
                <span className="bottom Blue">1</span>
              </div>
              <span className="arrow">→</span>
              <div className="fraction LimeGreen">
                <span className="upper">x + 6</span>
                <span className="divider"></span>
                <span className="bottom">-8</span>
              </div>
              <span className="LimeGreen">= y - 4</span>
            </p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              2.) A line in R³ that passes through the origin and is parallel to
              vector v = (4, -7, 5)
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">VECTOR EQUATION</p>
            <p className="Explanation">
              By Theorem 4.1, the vector equation of the line that passes
              through the origin is
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>r = tv</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              Since it passes through the origin, then r₀ = (0, 0, 0). Now, let
              r = (x, y, z). The vector v is represented as (4, -7, 5). Then by
              substituting the values to the equation, we have
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p className="LimeGreen">(x, y, z) = t(4, -7, 5)</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">PARAMETRIC EQUATIONS</p>
            <p className="Explanation">
              By Theorem 4.2, the parametric equations of the line are in the
              form
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>x = x₀ + ta</p>
          </div>
          <div className="Paragraph_Topic center">
            <p>y = y₀ + tb</p>
          </div>
          <div className="Paragraph_Topic center">
            <p>z = z₀ + tc</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">PARAMETRIC EQUATIONS</p>
            <p className="Explanation">
              From the vector equation (x, y, z) = t(4, -7, 5) , we can equate
              its corresponding components on the two sides of the equation to
              obtain its parametric equation.
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">Accordingly,</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <div className="Explanation">
              <div className="Triple_Grid">
                <div className="left">
                  <div className="Solution_Example">
                    <p className="label">For x-component:</p>
                    <div className="start">
                      <p className="left">
                        ( <span className="Orange">x</span> , y, z)
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="Orange">t</span> ({" "}
                        <span className="Orange">4</span>, -7, 5)
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">x</p>
                      <p className="center">=</p>
                      <p className="right">4t</p>
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="Solution_Example">
                    <p className="label">For y-component:</p>
                    <div className="start">
                      <p className="left">
                        ( x, <span className="Orange">y</span>, z)
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="Orange">t</span> ( 4,{" "}
                        <span className="Orange">-7</span>, 5)
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">y</p>
                      <p className="center">=</p>
                      <p className="right">-7t</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="Solution_Example">
                    <p className="label">For z-component:</p>
                    <div className="start">
                      <p className="left">
                        ( x, y, <span className="Orange"> z</span>)
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="Orange">t</span> ( 4, -7,{" "}
                        <span className="Orange">5</span>)
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">z</p>
                      <p className="center">=</p>
                      <p className="right">5t</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">Thus, the parametric equations are:</p>
          </div>

          <div className="Paragraph_Topic center">
            <p className="LimeGreen">x = 4t</p>
          </div>
          <div className="Paragraph_Topic center">
            <p className="LimeGreen">y = -7t</p>
          </div>
          <div className="Paragraph_Topic center">
            <p className="LimeGreen">z = 5t</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Title">SYMMETRIC EQUATIONS</p>
            <p className="Explanation Italic Bold">METHOD A</p>
            <p className="Explanation">
              From the parametric equation, solve for the value of t for each
              components.
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <div className="Explanation">
              <div className="Triple_Grid">
                <div className="left">
                  <div className="Solution_Example">
                    <p className="label">For x-component:</p>
                    <div className="start">
                      <p className="left">x</p>
                      <p className="center">=</p>
                      <p className="right">4t</p>
                    </div>
                    <div className="start">
                      <p className="left">t</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="fraction">
                          <span className="upper">x</span>
                          <span className="divider"></span>
                          <span className="bottom">4</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="middle noBorder">
                  <div className="Solution_Example">
                    <p className="label">For y-component:</p>
                    <div className="start">
                      <p className="left">y</p>
                      <p className="center">=</p>
                      <p className="right">-7t</p>
                    </div>
                    <div className="start">
                      <p className="left">t</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="fraction">
                          <span className="upper">y</span>
                          <span className="divider"></span>
                          <span className="bottom">-7</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="Solution_Example">
                    <p className="label">For y-component:</p>
                    <div className="start">
                      <p className="left">z</p>
                      <p className="center">=</p>
                      <p className="right">5t</p>
                    </div>
                    <div className="start">
                      <p className="left">t</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="fraction">
                          <span className="upper">z</span>
                          <span className="divider"></span>
                          <span className="bottom">5</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              Equate the values of t to each other to obtain the symmetric
              equation.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              t ={" "}
              <div className="fraction">
                <span className="upper">x</span>
                <span className="divider"></span>
                <span className="bottom">4</span>
              </div>
              , t ={" "}
              <div className="fraction">
                <span className="upper">y</span>
                <span className="divider"></span>
                <span className="bottom">-7</span>
              </div>
              and t ={" "}
              <div className="fraction">
                <span className="upper">z</span>
                <span className="divider"></span>
                <span className="bottom">5</span>
              </div>
              <span className="arrow">→</span>
              <div className="fraction LimeGreen">
                <span className="upper">x</span>
                <span className="divider"></span>
                <span className="bottom">4</span>
              </div>
              =
              <div className="fraction LimeGreen">
                <span className="upper">y</span>
                <span className="divider"></span>
                <span className="bottom">-7</span>
              </div>
              =
              <div className="fraction LimeGreen">
                <span className="upper">z</span>
                <span className="divider"></span>
                <span className="bottom">5</span>
              </div>
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation Italic Bold">METHOD B</p>
            <p className="Explanation">
              By Theorem 4.2, the symmetric equations of the line is in the form
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper">x - x₀</span>
                <span className="divider"></span>
                <span className="bottom">a</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">y - y₀</span>
                <span className="divider"></span>
                <span className="bottom">b</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">z - z₀</span>
                <span className="divider"></span>
                <span className="bottom">c</span>
              </div>
            </p>
          </div>
          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              <span className="Italic">x₀ , y₀</span> , and{" "}
              <span className="Italic">z₀</span> are 0 since the line passes
              through the origin.
            </p>
          </div>
          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              <span className="Italic">a, b</span> , and{" "}
              <span className="Italic">c</span> are the coordinates of the
              direction vector <span className="Italic">v,</span> thus,
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>a = 4</p>
          </div>
          <div className="Paragraph_Topic center">
            <p>b = -7</p>
          </div>
          <div className="Paragraph_Topic center">
            <p>c = 5</p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <p className="Explanation">
              By substituting the value to the equation
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper">
                  x - <span className="Orange">0</span>
                </span>
                <span className="divider"></span>
                <span className="bottom Blue">4</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">
                  y - <span className="Orange">0</span>
                </span>
                <span className="divider"></span>
                <span className="bottom Blue">-7</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">
                  z - <span className="Orange">0</span>
                </span>
                <span className="divider"></span>
                <span className="bottom Blue">5</span>
              </div>
              <span className="arrow">→</span>
              <div className="fraction LimeGreen">
                <span className="upper">x</span>
                <span className="divider"></span>
                <span className="bottom">4</span>
              </div>
              =
              <div className="fraction LimeGreen">
                <span className="upper">y</span>
                <span className="divider"></span>
                <span className="bottom">-7</span>
              </div>
              =
              <div className="fraction LimeGreen">
                <span className="upper">z</span>
                <span className="divider"></span>
                <span className="bottom">5</span>
              </div>
            </p>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              The parametric equations and the symmetric equation of a line are
              not unique.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example B</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the vector equation of the line that passes through the
              point P₀ (12, -7) and is parallel to the vector v = (6, 4).
              Identify three points on the line other than P₀.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>By Theorem 4.1, the vector equation of the line is</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>r = r₀ + tv</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              Let r = (x, y) and r₀ = (12, -7). The vector v is represented as
              (6, 4). Then by substituting the values to the equation, we have
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p className="LimeGreen">(x, y) = (12, -7) + t(6, 4)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              To find another points on the line, we can substitute numerical
              values to the parameter t of the vector equation.
            </p>
          </div>

          <div className="Bullet_Topic paddingLeft">
            <div className="Explanation">
              <div className="Triple_Grid">
                <div className="left">
                  <div className="Solution_Example">
                    <p className="label">Let t = 1. Then,</p>
                    <div className="start">
                      <p className="left">(x, y)</p>
                      <p className="center">=</p>
                      <p className="right">(12, -7) + t(6, 4)</p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">(12, -7) + 1(6, 4)</p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">(12 + 6, -7 + 4)</p>
                    </div>
                    <div className="start">
                      <p className="left">(x, y)</p>
                      <p className="center">=</p>
                      <p className="right">(18, -3)</p>
                    </div>
                    <p className="label">Thus,</p>
                    <p className="label LimeGreen center">
                      P₁ (18, -3) if t = 1
                    </p>
                  </div>
                </div>
                <div className="middle">
                  <div className="Solution_Example">
                    <p className="label">Let t = 2. Then,</p>
                    <div className="start">
                      <p className="left">(x, y)</p>
                      <p className="center">=</p>
                      <p className="right">(12, -7) + t(6, 4)</p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">(12, -7) + 2(6, 4)</p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">(12 + 12, -7 + 8)</p>
                    </div>
                    <div className="start">
                      <p className="left">(x, y)</p>
                      <p className="center">=</p>
                      <p className="right">(24, 1)</p>
                    </div>
                    <p className="label">Thus,</p>
                    <p className="label LimeGreen center">
                      P₂ (24, 1) if t = 2
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="Solution_Example">
                    <p className="label">Let t = 3. Then,</p>
                    <div className="start">
                      <p className="left">(x, y)</p>
                      <p className="center">=</p>
                      <p className="right">(12, -7) + t(6, 4)</p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">(12, -7) + 3(6, 4)</p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">(12 + 18, -7 + 12)</p>
                    </div>
                    <div className="start">
                      <p className="left">(x, y)</p>
                      <p className="center">=</p>
                      <p className="right">(30, 5)</p>
                    </div>
                    <p className="label">Thus,</p>
                    <p className="label LimeGreen center">
                      P₃ (30, 5) if t = 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 4.3</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let P & Q be distinct points of E². Then there exists a unique
                line containing both P & Q, denoted as PQ.
              </p>
              <p className="Label">
                Let P, Q, & X be distinct points of E². Then X is between P and
                Q iff:
              </p>
            </div>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side center">
              <div className="Paragraph_Topic">
                <p>d(P, X) + d(X, Q) = d(P, Q)</p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image16} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="topic20" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">CONCURRENT LINES AND COLLINEAR POINTS</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Bullet_Topic">
            <p className="Title">CONCURRENT LINES</p>
            <p className="Explanation">
              Three or more lines that pass through a single point are called
              concurrent lines .
            </p>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image10} alt="Graph Image" />
            </div>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">COLLINEAR POINTS</p>
            <p className="Explanation">
              Three or more points that lie on the same line are called
              collinear points .
            </p>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image11} alt="Graph Image" />
            </div>
          </div>
        </div>
      </div>

      {/* EQUATIONS OF PLANES IN R³ */}
      <div id="topic21" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">EQUATIONS OF PLANES IN R³</p>
          <p className="Sub_Title">Definition 4.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let W be a plane containing point r₀ and is parallel to the
              noncollinear vector v₁ and v₂. Suppose r is an arbitrary point on
              the plane. Since the plane is parallel to v₁ and v₂, then the
              vector r - r₀ will be some scalar multiple of vector v₁ and v₂,
              which can be written as t₁v₁ and t₂v₂. Accordingly,
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Light_Blue">
                <p>r - r₀ = t₁ v₁ + t₂ v₂</p>
                <p>or equivalently</p>
                <p>r = vr₀ + t₁ v₁ + t₂ v₂</p>
              </div>
              <div className="Paragraph_Topic block">
                <p>
                  where t₁, t₂ ∈ ℝ . Variables t₁ and t₂ are called the
                  <span className="Bold">parameters</span>.
                </p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image13} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 4.4</p>
            </div>
            <div className="Theorem_Content">
              <p className="Bold_Underline">VECTOR EQUATION</p>
              <p className="Label">
                Let W be a plane in R³ containing point r₀ and is parallel to
                noncollinear vectors v₁ and v₂. Then the equation of the plane
                through r₀ that is parallel to v₁ and v₂ is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>r = r₀ + t₁ v₁ + t₂ v₂</p>
                </div>
              </div>

              <p className="Label">
                If the plane passes through the origin (r₀ = 0), then the
                equation of the plane is
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>r = t₁ v₁ + t₂ v₂</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note Bold_Underline">
              VECTOR EQUATION TO PARAMETRIC EQUATIONS
            </p>
            <p className="Note">
              From the vector equation r = r₀ + t₁v₁ + t₂v₂ , equate its
              corresponding components on the two sides of the equation.
            </p>
            <p className="Note Bold_Underline">
              PLANE EQUATIONS TO PARAMETRIC EQUATIONS
            </p>
            <p className="Note">
              From the plane equation ax + by + cz + d = 0, express one of the
              variables x, y, or z in terms of the other two, and equate those
              two to parameters t₁ and t₂.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example C</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the vector equation and parametric equations of the
              following plane.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>
              1.) A plane in R³ that passes through point P₀(-1, 9, 5) and is
              parallel to vectors v₁ = (6, 0, -4) and v₂ = (11, -3, -8)
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">VECTOR EQUATION</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>By Theorem 4.4, the vector equation of the plane is</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2 center">
            <p>r = r₀ + t₁v₁ + t₂v₂</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Let r = (x, y, z) and r₀ = (-1, 9, 5). The direction vectors are
              represented as v₁ = (6, 0, -4) and v₂ = (11, -3, -8). Then by
              substituting the values to the equation, we have
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2 center">
            <p className="LimeGreen">
              (x, y, z) = (-1, 9, 5) + t₁ (6, 0, -4) + t₂ (11, -3, -8)
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">PARAMETRIC EQUATIONS</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              From the vector equation (x, y, z) = (-1, 9, 5) + t₁ (6, 0, -4) +
              t₂ (11, -3, -8) , we can equate its corresponding components on
              the two sides of the equation to obtain its parametric equation.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <p>Accordingly,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>For x-component:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  ( <span className="Orange">x</span> , y, z)
                </p>
                <p className="center">=</p>
                <p className="right">
                  ( <span className="Orange">-1</span> , 9, 5) +{" "}
                  <span className="Orange">t₁</span> ({" "}
                  <span className="Orange">6</span> , 0, -4) +{" "}
                  <span className="Orange">t₂</span> ({" "}
                  <span className="Orange">11</span> , -3, -8)
                </p>
              </div>

              <div className="start">
                <p className="left">x</p>
                <p className="center">=</p>
                <p className="right">-1 + 6t₁ + 11t₂</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>For y-component:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  ( x , <span className="Orange">y</span>, z)
                </p>
                <p className="center">=</p>
                <p className="right">
                  ( -1 , <span className="Orange">9</span>, 5) +{" "}
                  <span className="Orange">t₁</span> ( 6 ,{" "}
                  <span className="Orange">0</span>, -4) +{" "}
                  <span className="Orange">t₂</span> ( 11 ,{" "}
                  <span className="Orange">-3</span>, -8)
                </p>
              </div>

              <div className="start">
                <p className="left">y</p>
                <p className="center">=</p>
                <p className="right">9 - 3t₂</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>For z-component:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  ( x , y, <span className="Orange">z</span>)
                </p>
                <p className="center">=</p>
                <p className="right">
                  ( -1 , 9, <span className="Orange">5</span>) +{" "}
                  <span className="Orange">t₁</span> ( 6 , 0,{" "}
                  <span className="Orange">-4</span>) +{" "}
                  <span className="Orange">t₂</span> ( 11 , -3,{" "}
                  <span className="Orange">-8</span>)
                </p>
              </div>

              <div className="start">
                <p className="left">z</p>
                <p className="center">=</p>
                <p className="right">5 - 4t₁ - 8t₂</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Thus, the parametric equations are:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left LimeGreen">x</p>
                <p className="center LimeGreen">=</p>
                <p className="right LimeGreen">-1 - 6t₁ + 11t₂</p>
              </div>

              <div className="start">
                <p className="left LimeGreen">y</p>
                <p className="center LimeGreen">=</p>
                <p className="right LimeGreen">9 - 3t₂</p>
              </div>

              <div className="start">
                <p className="left LimeGreen">z</p>
                <p className="center LimeGreen">=</p>
                <p className="right LimeGreen">5 - 4t₁ - 8t₂</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>2.) Plane 6z = 8y - 13 + x</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Given the plane equation, start by obtaining the parametric
              equations first.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">PARAMETRIC EQUATIONS</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              The plane <span className="Italic">6z = 8y - 13 + x</span> can be
              rewritten as
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>x + 8y - 6z - 13 = 0</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              We can express one of the variables of this equation, say x, in
              terms of y and z. Accordingly,
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>x = -8y + 6z + 13</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              We can express one of the variables of this equation, say x, in
              terms of y and z. Accordingly,
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>Let y = t₁ and z = t₂</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              By substituting the values of y and z to the equation x + 8y - 6z
              - 13 = 0 , we have
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Thus, the parametric equations are:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left LimeGreen">x</p>
                <p className="center LimeGreen">=</p>
                <p className="right LimeGreen">-8t₁ + 6t₂ + 13</p>
              </div>

              <div className="start">
                <p className="left Orange">y</p>
                <p className="center Orange">=</p>
                <p className="right Orange">t₁</p>
              </div>

              <div className="start">
                <p className="left Blue">z</p>
                <p className="center Blue">=</p>
                <p className="right Blue">t₂</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">VECTOR EQUATION</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>By Theorem 4.4, the vector equation of the plane is</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>r = r₀ + t₁v₁ + t₂v₂</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Let r = (x, y, z). Then,</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              ( <span className="LimeGreen">x </span>,{" "}
              <span className="Orange">y </span>,{" "}
              <span className="Blue">z</span> ) = r₀ + t₁v₁ + t₂v₂
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Recall the parametric equations. Equate its corresponding
              components, respectively. Equivalently,
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              ( <span className="LimeGreen">x </span>,{" "}
              <span className="Orange">y </span>,{" "}
              <span className="Blue">z</span> ) = ({" "}
              <span className="LimeGreen">-8t₁ + 6t₂ + 13 </span>,{" "}
              <span className="Orange">t₁ </span>,{" "}
              <span className="Blue">t₂</span> )
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Extracting the constant terms (r₀) and the numerical coefficients
              of the parameters (t₁ and t₂) yields,
            </p>
          </div>

          <div className="TableChart_Container">
            <div className="TableChart">
              <div className="Row Left">
                <p>&nbsp;</p>
                <p>Constant (r₀):</p>
                <p>t₁ coefficient:</p>
                <p>t₂ coefficient:</p>
              </div>

              <div className="Row">
                <p className="Header">-8t₁ + 6t₂ + 13</p>
                <p className="LimeGreen">13</p>
                <p className="Orange">0</p>
                <p className="Blue">0</p>
              </div>

              <div className="Row">
                <p className="Header">t₁</p>
                <p className="LimeGreen">-8</p>
                <p className="Orange">1</p>
                <p className="Blue">0</p>
              </div>

              <div className="Row">
                <p className="Header">t₂</p>
                <p className="LimeGreen">6</p>
                <p className="Orange">0</p>
                <p className="Blue">1</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Thus, following the vector equation form,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center block">
            <p>
              r = r₀ + t₁v₁ + t₂v₂ <span className="arrow">→</span> ({" "}
              <span className="LimeGreen">x</span> ,{" "}
              <span className="Orange">y</span> ,{" "}
              <span className="Blue">z</span>) = ({" "}
              <span className="LimeGreen">13</span> ,{" "}
              <span className="Orange">0</span> ,{" "}
              <span className="Blue">0</span> ) + t₁({" "}
              <span className="LimeGreen">-8</span> ,{" "}
              <span className="Orange">1</span> ,{" "}
              <span className="Blue">0</span> ) + t₂({" "}
              <span className="LimeGreen">6</span> ,{" "}
              <span className="Orange">0</span> ,{" "}
              <span className="Blue">1</span> )
            </p>
          </div>

          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description">
              Let P₀ be a point in a line or in a plane in R² or R³ , and v be
              the direction vector parallel to the line or the plane. Try
              entering a value for P₀ and v and observe their vector equation,
              parametric equations, and symmetric equations.
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
                    <div className="Label">Direction Vector</div>
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
                      <button onClick={() => solvePoint3D()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Vector Equation</div>
                  </div>
                  <div className="Output_Rectangles_Holder Long">
                    <div id="a-4" className="Output_Rectangles"></div>
                  </div>
                </div>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Parametric Equations</div>
                  </div>
                  <div className="Output_Rectangles_Holder Long">
                    <div id="b-3" className="Output_Rectangles Tall"></div>
                  </div>
                </div>

                <div className="Content">
                  <div className="Group">
                    <div className="Label">Symmetric Equations</div>
                  </div>
                  <div className="Output_Rectangles_Holder Long">
                    <div id="c" className="Output_Rectangles"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TWO-POINT VECTOR EQUATIONS */}
      <div id="topic22" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">TWO-POINT VECTOR EQUATIONS</p>
          <p className="Sub_Title">Definition 4.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let r₀ and r₁ be distinct points in Rⁿ. Then the line determined
              by these points is parallel to the vector v = (r₁ - r₀). Since the
              line is parallel to v, then (r₁ - r₀) will be some scalar multiple
              of vector v, which can be written as tv or t(r₁ - r₀).
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Paragraph_Topic block">
                <p>Suppose r is an arbitrary point on the line. Accordingly,</p>
              </div>
              <div className="Light_Blue">
                <p>r - r₀ = t(r₁ - r₀)</p>
                <p>or equivalently</p>
                <p>r = r₀ + t(r₁ - r₀)</p>
              </div>
              <div className="Paragraph_Topic block">
                <p>
                  where t ∈ ℝ. These are called the
                  <span className="Bold"> two-point vector equations</span> of a
                  line in Rⁿ.
                </p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image19} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example D</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              Determine the vector equation, parametric equations, and symmetric
              equations of a line passing through points (12, -5) and (-9, 4)
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">VECTOR EQUATION</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Let r₀ = (12, -5) and r₁ = (-9, 4).</p>
          </div>
          <div className="Paragraph_Topic paddingLeft3">
            <p>Then the vector parallel to the line is</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">v</p>
                <p className="center">=</p>
                <p className="right">r₁ - r₀</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">(-9, 4) - (12, -5)</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">(-9 - 12, 4 - (-5))</p>
              </div>

              <div className="start">
                <p className="left Bold">v</p>
                <p className="center Bold">=</p>
                <p className="right Bold">(-21, 9)</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>By Theorem 4.1, the vector equation of the line is</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>r = r₀ + tv</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Let r = (x, y). The vector v is represented as (-21, 9). Then by
              substituting the values to the equation, we have
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p className="LimeGreen">(x, y) = (12, -5) + t(-21, 9)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">PARAMETRIC EQUATIONS</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              By Theorem 4.2, the parametric equations of the line are in the
              form
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>x = x₀ + ta</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>y = y₀ + tb</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              From the vector equation (x, y) = (12, -5) + t(-21, 9) , we can
              equate its corresponding components on the two sides of the
              equation to obtain its parametric equation.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Accordingly,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>For x-component:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  ( <span className="Orange">x</span> , y)
                </p>
                <p className="center">=</p>
                <p className="right">
                  ( <span className="Orange">12</span> , -5) +{" "}
                  <span className="Orange">t</span> ({" "}
                  <span className="Orange">-21</span> , 9)
                </p>
              </div>

              <div className="start">
                <p className="left">x</p>
                <p className="center">=</p>
                <p className="right">12 - 21t</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>For y-component:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  ( x , <span className="Orange">y</span>)
                </p>
                <p className="center">=</p>
                <p className="right">
                  ( 12 , <span className="Orange">-5</span>) +{" "}
                  <span className="Orange">t</span> ( -21 ,{" "}
                  <span className="Orange">9</span>)
                </p>
              </div>

              <div className="start">
                <p className="left">y</p>
                <p className="center">=</p>
                <p className="right">-5 + 9t</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Thus, the parametric equations are:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left LimeGreen">x</p>
                <p className="center LimeGreen">=</p>
                <p className="right LimeGreen">12 - 21t</p>
              </div>

              <div className="start">
                <p className="left LimeGreen">y</p>
                <p className="center LimeGreen">=</p>
                <p className="right LimeGreen">-5 + 9t</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">SYMMETRIC EQUATIONS</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p className="Italic Bold">METHOD A</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              From the parametric equation, solve for the value of t for each
              components.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example">
                  <p className="label">For x-component:</p>
                  <div className="start">
                    <p className="left">x</p>
                    <p className="center">=</p>
                    <p className="right">12 - 21t</p>
                  </div>
                  <div className="start">
                    <p className="left">-21t</p>
                    <p className="center">=</p>
                    <p className="right">x - 12</p>
                  </div>
                  <div className="start">
                    <p className="left">t</p>
                    <p className="center">=</p>
                    <p className="right">
                      <div className="fraction">
                        <span className="upper">x - 12</span>
                        <span className="divider"></span>
                        <span className="bottom">-21</span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example">
                  <p className="label">For y-component:</p>
                  <div className="start">
                    <p className="left">y</p>
                    <p className="center">=</p>
                    <p className="right">-5 + 9t</p>
                  </div>
                  <div className="start">
                    <p className="left">9t</p>
                    <p className="center">=</p>
                    <p className="right">y + 5</p>
                  </div>

                  <div className="start">
                    <p className="left">t</p>
                    <p className="center">=</p>
                    <p className="right">
                      <div className="fraction">
                        <span className="upper">y + 5</span>
                        <span className="divider"></span>
                        <span className="bottom">9</span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Equate the values of t to each other</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              t ={" "}
              <div className="fraction">
                <span className="upper">x - 12</span>
                <span className="divider"></span>
                <span className="bottom">-21</span>
              </div>
              and{" "}
              <div className="fraction">
                <span className="upper">y + 5</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              <span className="arrow">→</span>
              <div className="fraction LimeGreen">
                <span className="upper">x - 12</span>
                <span className="divider"></span>
                <span className="bottom">-21</span>
              </div>
              <span className="LimeGreen">=</span>
              <div className="fraction LimeGreen">
                <span className="upper">y + 5</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* INTERSECTING, PARALLEL, AND PERPENDICULAR LINES */}
      <div id="topic23" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">
            INTERSECTING, PARALLEL, AND PERPENDICULAR LINES
          </p>
          <p className="Sub_Title">Definition 4.4</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Bullet_Topic">
            <p className="Title">INTERSECTING LINES</p>
            <p className="Explanation">
              If two lines pass through a common point P , then they intersect
              at P . Point P is the point of intersection of the two lines.
            </p>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">PARALLEL LINES</p>
            <p className="Explanation">
              If two lines m & n have no point of intersection, then they are
              parallel , denoted as m || n.
            </p>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">PERPENDICULAR LINES</p>
            <p className="Explanation">
              If two lines m & n have orthogonal direction vectors, then they
              are perpendicular , denoted as m ⊥ n.
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side noGap">
              <div className="Paragraph_Topic">
                <p className="Bold_Underline noPadding">MIDPOINT</p>
              </div>
              <div className="Paragraph_Topic">
                <p>Let M be a point such that</p>
              </div>
              <div className="Paragraph_Topic center">
                <p>d(P, M) = d(M, Q) = 1/2 d(P, Q)</p>
              </div>
              <div className="Paragraph_Topic">
                <p>
                  Then, <span className="Italic">M</span> is a{" "}
                  <span className="Bold">midpoin</span>t of segment PQ.
                </p>
              </div>
              <div className="Paragraph_Topic">
                <p>Each segment has a unique midpoint expressed as</p>
              </div>

              <div className="Light_Blue_Holder">
                <div className="Light_Blue">
                  <p>M = 1/2 (P + Q)</p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image17} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 4.5</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Two distinct lines will always intersect in at most one point.
              </p>
              <p className="Label">
                Two distinct lines are parallel if and only if they have the
                same direction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PARALLEL AND INTERSECTING PLANES */}
      <div id="topic24" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">PARALLEL AND INTERSECTING PLANES</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Bullet_Topic">
            <p className="Title">PARALLEL PLANES</p>
            <p className="Explanation">
              Two planes are parallel if their normal vectors are parallel .
              Take note that two vectors are parallel if one of the vectors is a
              scalar multiple of the other.
            </p>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">INTERSECTING PLANES</p>
            <p className="Explanation">
              If two planes intersect, their intersection is a line.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example E</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine whether if the following pair of planes are parallel or
              intersecting . If they are intersecting, find the parametric and
              symmetric equations of the line formed by their intersection.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>1.) 4 + 3x - 5y = 7z and 6x = 10y - 8 + 14z</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Recall from Theorem 3.3 that the normal vector n of a plane ax +
              by + cz + d = 0 is
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n = (a, b, c)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>The planes can be rewritten as</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              (1) 4 + 3x - 5y = 7z <span className="arrow">→</span> 3x - 5y - 7z
              + 4 = 0
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              (2) 6x = 10y - 8 + 14z <span className="arrow">→</span> 6x - 10y -
              14z + 8 = 0
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>and, respectively, has normal vectors of</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₁ = (3, -5, -7)</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₂ = (6, -10, -14)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Observe that n₂ is a scalar multiple of n₁ by a factor 2. Thus the
              normal vectors of 6x - 10y - 4z + 8 = 0 are parallel .
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  <span>
                    <span className="Orange">2</span> n₁
                  </span>
                </p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Orange">2</span> (3, -7, 4)
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">(6, -10, -14)</p>
              </div>

              <div className="start">
                <p className="left">
                  <span>
                    <span className="Orange">2</span> n₁
                  </span>
                </p>
                <p className="center">=</p>
                <p className="right">n₂</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Equivalently, the two planes are also considered{" "}
              <span className="LimeGreen">parallel</span>.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>2.) 4x + 2y - 5z + 2 = 0 and 3x + y - 7z - 1 = 0</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              The normal vectors of the two planes, given by n₁ = (4, 2, -5) and
              n₂ = (3, 1, -7) respectively are not scalar multiple of one
              another. Hence, they are not parallel ; rather, they intersect in
              a line.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Finding the parametric and symmetric equations of the line,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">PARAMETRIC EQUATIONS</p>
          </div>
          <div className="Paragraph_Topic paddingLeft3">
            <p>Let:</p>
          </div>
          <div className="Solution_Example">
            <div className="start">
              <p className="left Bold">Plane A</p>
              <p className="center">:</p>
              <p className="right">4x + 2y - 5z + 2 = 0</p>
            </div>
            <div className="start">
              <p className="left Bold">Plane B</p>
              <p className="center">:</p>
              <p className="right">3x + y - 7z - 1 = 0</p>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Multiply B by 2.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="Orange"> 2</span> (3x + y - 7z - 1 = 0){" "}
              <span className="arrow">→</span>{" "}
              <span className="Orange">
                6x + 2y - 14z - 2 = 0 . . . . . . B’
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Subtract A from <span className="Orange">B’</span> to eliminate
              the y variable :
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper column">
                  <span className="Orange">6x + 2y - 14z - 2 = 0</span>- (4x +
                  2y - 5z + 2 = 0)
                </span>
                <span className="divider"></span>
                <span className="bottom">2x + 0y - 9z - 4 = 0</span>
              </div>
              <span className="arrow">→</span>{" "}
              <span className="Orange">
                2x - 9z - 4 = 0 . . . . . . . . . . C
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Solving for x from<span className="Orange">C </span> :
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper column">
                  <span className="Orange">2x - 9z - 4 = 0</span>- (4x + 2x = 9z
                  + 4
                </span>
              </div>
              <span className="arrow">→</span>{" "}
              <span className="Blue">x = </span>
              <div className="fraction Blue">
                <span className="upper column">9z + 4</span>
                <span className="divider LightBlue"></span>
                <span className="bottom">2</span>
              </div>
              <span className="Blue">or x = </span>
              <div className="fraction Blue">
                <span className="upper column">9z</span>
                <span className="divider LightBlue"></span>
                <span className="bottom">2</span>
              </div>
              <span className="Blue">+ 2</span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Substituting <span className="Orange">x</span> to B to solve for y
              in terms of z :
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper column">
                  <span>3x + y - 7z - 1 = 0 </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div className="fraction">
                      <span className="upper">
                        <span>
                          3 <span className="Orange">(9z + 4)</span>
                        </span>
                      </span>
                      <span className="divider"></span>
                      <span className="bottom Orange">2</span>
                    </div>
                    + y - 7z - 1 = 0
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    y =
                    <div className="fraction">
                      <span className="upper">-(27z + 12)</span>
                      <span className="divider"></span>
                      <span className="bottom">2</span>
                    </div>
                    + 7z + 1
                  </span>

                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    y =
                    <div className="fraction">
                      <span className="upper">- 27z - 12</span>
                      <span className="divider"></span>
                      <span className="bottom">2</span>
                    </div>
                    +{" "}
                    <div className="fraction">
                      <span className="upper">14z</span>
                      <span className="divider"></span>
                      <span className="bottom">2</span>
                    </div>
                    +{" "}
                    <div className="fraction">
                      <span className="upper">2</span>
                      <span className="divider"></span>
                      <span className="bottom">2</span>
                    </div>
                  </span>
                </span>
              </div>
              <span className="arrow">→</span>{" "}
              <span className="Blue">y = </span>
              <div className="fraction Blue">
                <span className="upper column">-13z - 10</span>
                <span className="divider LightBlue"></span>
                <span className="bottom">2</span>
              </div>
              <span className="Blue">or y = </span>
              <div className="fraction Blue">
                <span className="upper column">-13z</span>
                <span className="divider LightBlue"></span>
                <span className="bottom">2</span>
              </div>
              <span className="Blue">- 5</span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Let <span className="Blue">z = t</span> , then substitute to x and
              y . Thus, the parametric equations are:
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  <span className="LimeGreen">x</span>
                </p>
                <p className="center">
                  <span className="LimeGreen">=</span>
                </p>
                <p className="right LimeGreen">
                  <span className="LimeGreen">
                    <div className="fraction">
                      <span className="upper">9t</span>
                      <span className="divider LimeGreen"></span>
                      <span className="bottom">2</span>
                    </div>{" "}
                  </span>
                  + 2
                </p>
              </div>

              <div className="start">
                <p className="left">
                  <span className="LimeGreen">x</span>
                </p>
                <p className="center">
                  <span className="LimeGreen">=</span>
                </p>
                <p className="right LimeGreen">
                  <span className="LimeGreen">
                    <div className="fraction">
                      <span className="upper">-13t</span>
                      <span className="divider LimeGreen"></span>
                      <span className="bottom">2</span>
                    </div>{" "}
                  </span>
                  - 5
                </p>
              </div>

              <div className="start">
                <p className="left">
                  <span className="LimeGreen">z</span>
                </p>
                <p className="center">
                  <span className="LimeGreen">=</span>
                </p>
                <p className="right LimeGreen">t</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Bold_Underline noPadding">SYMMETRIC EQUATIONS</p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <p>
              From the parametric equation, solve for the value of t for each
              component.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Triple_Grid">
              <div className="left">
                <div className="Solution_Example">
                  <p className="label">For x-component:</p>
                  <div className="start">
                    <p className="left">x</p>
                    <p className="center">=</p>
                    <p className="right">
                      <div className="fraction">
                        <span className="upper">9t</span>
                        <span className="divider"></span>
                        <span className="bottom">2</span>
                      </div>
                      + 2
                    </p>
                  </div>

                  <div className="start">
                    <p className="left">2x</p>
                    <p className="center">=</p>
                    <p className="right">9t + 4</p>
                  </div>

                  <div className="start">
                    <p className="left">9t</p>
                    <p className="center">=</p>
                    <p className="right">2x - 4</p>
                  </div>

                  <div className="start">
                    <p className="left">9t</p>
                    <p className="center">=</p>
                    <p className="right">2(x - 2)</p>
                  </div>

                  <div className="start">
                    <p className="left">t</p>
                    <p className="center">=</p>
                    <p className="right">
                      <div className="fraction">
                        <span className="upper Bold">2(x - 2)</span>
                        <span className="divider"></span>
                        <span className="bottom Bold">9</span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="middle">
                <div className="Solution_Example">
                  <p className="label">For y-component:</p>
                  <div className="start">
                    <p className="left">x</p>
                    <p className="center">=</p>
                    <p className="right">
                      <div className="fraction">
                        <span className="upper">-13t</span>
                        <span className="divider"></span>
                        <span className="bottom">2</span>
                      </div>
                      - 5
                    </p>
                  </div>

                  <div className="start">
                    <p className="left">2y</p>
                    <p className="center">=</p>
                    <p className="right">-13t - 10</p>
                  </div>

                  <div className="start">
                    <p className="left">13t</p>
                    <p className="center">=</p>
                    <p className="right">-2y - 10</p>
                  </div>

                  <div className="start">
                    <p className="left">9t</p>
                    <p className="center">=</p>
                    <p className="right">-2(y + 5)</p>
                  </div>

                  <div className="start">
                    <p className="left">t</p>
                    <p className="center">=</p>
                    <p className="right">
                      <div className="fraction">
                        <span className="upper Bold">-2(y + 5)</span>
                        <span className="divider"></span>
                        <span className="bottom Bold">9</span>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="Solution_Example">
                  <p className="label">For z-component:</p>
                  <div className="start">
                    <p className="left">z</p>
                    <p className="center">=</p>
                    <p className="right">t</p>
                  </div>
                  <div className="start">
                    <p className="left">t</p>
                    <p className="center">=</p>
                    <p className="right">z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Equate the values of t to each other.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              t =
              <div className="fraction">
                <span className="upper">2(x - 2)</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              , t =
              <div className="fraction">
                <span className="upper">-2(y + 5)</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              , and t = z<span className="arrow">→</span>
              <div className="fraction">
                <span className="upper">2(x - 2)</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              =
              <div className="fraction">
                <span className="upper">-2(y + 5)</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              = z
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Multiplying all sides of the equation by 1/2:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <div className="fraction">
                <span className="upper Orange">1</span>
                <span className="divider Orange"></span>
                <span className="bottom Orange">2</span>
              </div>
              ●
              <div className="fraction">
                <span className="upper">2(x - 2)</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              =
              <div className="fraction">
                <span className="upper Orange">1</span>
                <span className="divider Orange"></span>
                <span className="bottom Orange">2</span>
              </div>
              ●
              <div className="fraction">
                <span className="upper">-2(y + 5)</span>
                <span className="divider"></span>
                <span className="bottom">9</span>
              </div>
              =
              <div className="fraction">
                <span className="upper Orange">1</span>
                <span className="divider Orange"></span>
                <span className="bottom Orange">2</span>
              </div>
              ● z <span className="arrow">→</span>
              <div className="fraction LimeGreen">
                <span className="upper">x - 2</span>
                <span className="divider LimeGreen"></span>
                <span className="bottom">9</span>
              </div>
              <span className="LimeGreen">=</span>
              <div className="fraction LimeGreen">
                <span className="upper">y + 5</span>
                <span className="divider LimeGreen"></span>
                <span className="bottom">-9</span>
              </div>
              <span className="LimeGreen">=</span>
              <div className="fraction LimeGreen">
                <span className="upper">z</span>
                <span className="divider LimeGreen"></span>
                <span className="bottom">2</span>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* ANGLE BETWEEN TWO PLANES */}
      <div id="topic25" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">ANGLE BETWEEN TWO PLANES</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let A and B be planes with normal vectors n₁ & n₂, respectively.
              Then angle θ between A and B is equal to the angle θ between n₁ &
              n₂.
            </p>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">PARALLEL PLANES</p>
            <p className="Explanation">
              If n₁ is a scalar multiple of n₂ or vice versa, then A and B are
              parallel.
            </p>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">ORTHOGONAL PLANES</p>
            <p className="Explanation">
              If n₁ ⋅ n₂ = 0, then A and B are orthogonal.
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side noGap">
              <div className="Paragraph_Topic">
                <p className="Bold_Underline noPadding">
                  INTERSECTING BUT NOT ORTHOGONAL
                </p>
              </div>
              <div className="Paragraph_Topic">
                <p>
                  If n₁ ⋅ n₂ ≠ 0, then we can find the angle θ between A and B
                  using the formula:
                </p>
              </div>
              <div className="Paragraph_Topic center">
                <p>d(P, M) = d(M, Q) = 1/2 d(P, Q)</p>
              </div>

              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>
                    θ = cos⁻¹ <span className="large">(</span>
                    <div className="fraction">
                      <span className="upper">|n₁ ⋅ n₂|</span>
                      <span className="divider blue"></span>
                      <span className="bottom">||n₁|| ||n₂||</span>
                    </div>
                    <span className="large">)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image75} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example G</p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Determine whether the following pair of planes are parallel ,
              orthogonal , or intersecting but not orthogonal . If the planes
              are intersecting but not orthogonal , find the measure of the
              angle between them.
            </p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>1.) 6z + 5y = 14x + y + 3 and 1 + 7x = 2y + 3z</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Recall from Theorem 3.3 that the normal vector n of a plane ax +
              by + cz + d = 0 is
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n = (a, b, c)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>The planes can be rewritten as</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              (1) 6z + 5y = 14x + y + 3 <span className="arrow">→</span> 14x -
              4y - 6z + 3 = 0
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              (2) 1 + 7x = 2y + 3z <span className="arrow">→</span> 7x - 2y - 3z
              + 1 = 0
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>and, respectively, has normal vectors of</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₁ = (14, -4, -6)</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₂ = (7, -2, -3)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">a.) Parallelism</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Observe that n₁ is a scalar multiple of n₂ by a factor 2. Thus the
              normal vectors of two planes are parallel .
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <p className="label">For x-component:</p>
              <div className="start">
                <p className="left">
                  <span className="Orange">2</span>n₂
                </p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Orange">2</span>(7, -2, -3)
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">(14, -4, -6)</p>
              </div>

              <div className="start">
                <p className="left">
                  <span className="Orange">2</span>n₂
                </p>
                <p className="center">=</p>
                <p className="right">n₁</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Equivalently, the two planes are also considered{" "}
              <span className="LimeGreen">parallel</span> .
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>2.) 17x - 7y + 3z - 2 = 0 and 4x + 5y - 11z - 6 = 0</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Let n₁ and n₂ be vectors. The planes, respectively, has normal
              vectors of
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₁ = (17, -7, 3)</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₂ = (4, 5, -11)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">a.) Parallelism</p>
          </div>

          <div className="Paragraph_Topic block paddingLeft3">
            <p>
              Observe that the normal vectors of the two planes are not scalar
              multiple of one another. Hence, they are
              <span className="LimeGreen">&nbsp; not parallel</span>.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">b.) Orthogonality</p>
          </div>
          <div className="Paragraph_Topic block paddingLeft3">
            <p>Finding the dot products of the two normal vectors,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">n₁ ⋅ n₂</p>
                <p className="center">=</p>
                <p className="right">(17, -7, 3) ⋅ (4, 5, -11)</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">(17)(4) + (-7)(5) + (3)(-11)</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">68 - 35 - 33</p>
              </div>

              <div className="start">
                <p className="left">n₁ ⋅ n₂</p>
                <p className="center">=</p>
                <p className="right">0</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft3">
            <p>
              Since n₁ ⋅ n₂ = 0, then planes 3z = 7y - 17x + 2 and 4x - 11z = 6
              - 5y are <span className="LimeGreen">orthogonal </span>.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>3.) 6x - 3y - 2z + 2 = 0 and 4x + y - 9z + 5 = 0</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>
              Let n₁ and n₂ be vectors. The planes, respectively, has normal
              vectors of
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₁ = (6, -3, -2)</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>n₂ = (4, 1, -9)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">a.) Parallelism</p>
          </div>

          <div className="Paragraph_Topic block paddingLeft3">
            <p>
              Observe that the normal vectors of the two planes are not scalar
              multiple of one another. Hence, they are
              <span className="LimeGreen">&nbsp; not parallel</span>.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">b.) Orthogonality</p>
          </div>
          <div className="Paragraph_Topic block paddingLeft3">
            <p>Finding the dot products of the two normal vectors,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">n₁ ⋅ n₂</p>
                <p className="center">=</p>
                <p className="right">(6, -3, -2) ⋅ (4, 1, -9)</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">(6)(4) + (-3)(1) + (-2)(-9)</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">24 - 3 + 18</p>
              </div>

              <div className="start">
                <p className="left">n₁ ⋅ n₂</p>
                <p className="center">=</p>
                <p className="right">39</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft3">
            <p>
              Since n₁ ⋅ n₂ ≠ 0, then planes 3z = 7y - 17x + 2 and 4x - 11z = 6
              - 5y are{" "}
              <span className="LimeGreen">intersecting but not orthogonal</span>
              .
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">b.) Angle Between Two Planes</p>
          </div>
          <div className="Paragraph_Topic block paddingLeft3">
            <p>The angle θ between the two planes is:</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              θ = cos⁻¹ <span className="large">(</span>
              <div className="fraction">
                <span className="upper">|n₁ ⋅ n₂|</span>
                <span className="divider"></span>
                <span className="bottom">||n₁|| ||n₂||</span>
              </div>
              <span className="large">)</span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Side_By_Side">
              <div className="Left_Side withBorder">
                <div className="Solution_Example">
                  <p className="label">Finding || n₁ ||</p>
                  <div className="solution">
                    <p className="left">|| n₁ ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="squareRoot_Symbol">&radic;</span>x² + y²
                      + z²
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="squareRoot_Symbol">&radic;</span>6² +
                      (-3)² + (-2)²
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">7</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example">
                  <p className="label">Finding || n₂ ||</p>
                  <div className="solution">
                    <p className="left">|| n₂ ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="squareRoot_Symbol">&radic;</span>x² + y²
                      + z²
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="squareRoot_Symbol">&radic;</span>4² + 1²
                      + (-9)²
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      7<span className="squareRoot_Symbol">&radic;</span>2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft3">
            <div className="Solution_Example">
              <p className="label">Substituting to θ:</p>
              <div className="solution">
                <p className="left">θ</p>
                <p className="center">=</p>
                <p className="right">
                  cos⁻¹ <span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">|n₁ ⋅ n₂|</span>
                    <span className="divider"></span>
                    <span className="bottom">||n₁|| ||n₂||</span>
                  </div>
                  <span className="large">)</span>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  cos⁻¹ <span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">|(6)(4) + (-3)(1) + (-2)(-9)|</span>
                    <span className="divider"></span>
                    <span className="bottom">(7)(7√2)</span>
                  </div>
                  <span className="large">)</span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  cos⁻¹ <span className="large">(</span>
                  <div className="fraction">
                    <span className="upper">39</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      49<span className="squareRoot_Symbol">&radic;</span>2
                    </span>
                  </div>
                  <span className="large">)</span>
                </p>
              </div>

              <div className="solution LimeGreen">
                <p className="left">θ</p>
                <p className="center">≈</p>
                <p className="right">55.75°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson4;
