import React, { useEffect, useState } from "react";

//Images
import image93 from "../../assets/images/Lessons Images/PELesson5/image-93.png";
import image94 from "../../assets/images/Lessons Images/PELesson5/image-94.png";
import image97 from "../../assets/images/Lessons Images/PELesson5/image-97.png";
import image100 from "../../assets/images/Lessons Images/PELesson5/image-100.png";
import image101 from "../../assets/images/Lessons Images/PELesson5/image-101.png";
import image102 from "../../assets/images/Lessons Images/PELesson5/image-102.png";

import { calculateCrossProduct, calculatePoint3D } from "../../utils";

function PELesson5() {
  const [vectors, setVectors] = useState({
    ux: 0,
    uy: 0,
    uz: 0,
    vx: 0,
    vy: 0,
    vz: 0,
  });

  const isNumeric = () => {
    const isNumbers = /^[0-9]+$/;

    for (const key in vectors) {
      if (!isNumbers.test(vectors[key])) {
        // If any value is not numeric, return false
        return false;
      }
    }
    // If all values are numeric, return true
    return true;
  };
  const solvePoint3D = () => {
    if (isNumeric()) {
      calculateCrossProduct(
        vectors.ux,
        vectors.uy,
        vectors.uz,
        vectors.vx,
        vectors.vy,
        vectors.vz
      );
    }
  };

  return (
    <div className="Topic_Container">
      {/* CROSS PRODUCT OF TWO VECTORS */}
      <div id="topic26" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">CROSS PRODUCT OF TWO VECTORS</p>
          <p className="Sub_Title">Definition 5.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Paragraph_Topic block">
                <p>
                  Let u & v be vectors in R³ . The cross product of u & v is an
                  operation in 3-space that produces a vector orthogonal to both
                  u & v . We denote the cross product of u & v by u × v .
                </p>
              </div>

              <div className="Paragraph_Topic block center">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">If u</p>
                    <p className="center">=</p>
                    <p className="right">(u₁, u₂, u₃)</p>
                  </div>
                  <div className="start">
                    <p className="left">v</p>
                    <p className="center">=</p>
                    <p className="right">(v₁, v₂, v₃)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image93} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic block">
            <p>then the cross product of u & v is:</p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <div className="Solution_Example blue">
                <div className="start">
                  <p className="left">u × v</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="large">(</span>
                    <span className="Vertical borderLeft">
                      <span>u₂</span> <span>v₂</span>
                    </span>
                    <span className="Vertical borderRight">
                      <span>u₃</span> <span>v₃</span>
                    </span>
                    , -
                    <span className="Vertical borderLeft">
                      <span>u₁</span> <span>v₁</span>
                    </span>
                    <span className="Vertical borderRight">
                      <span>u₃</span> <span>v₃</span>
                    </span>
                    ,
                    <span className="Vertical borderLeft">
                      <span>u₁</span> <span>v₁</span>
                    </span>
                    <span className="Vertical borderRight">
                      <span>u₂</span> <span>v₂</span>
                    </span>
                    <span className="large">)</span>
                  </p>
                </div>
                <div className="start">
                  <p className="left">v</p>
                  <p className="center">=</p>
                  <p className="right">
                    ( u₂ v₃ - u₃ v₂ , u₃ v₁ - u₁ v₃ , u₁ v₂ - u₂ v₁ )
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic block">
            <p>
              To easily memorize the formula for cross product, create a 2 x 3
              matrix such that the first row contains u-components and the
              second row contains v-components.
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              <span className="large">[</span>
              <span className="Vertical">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical">
                <span>u₂</span> <span>v₂</span>
              </span>
              <span className="Vertical">
                <span>u₃</span> <span>v₃</span>
              </span>
              <span className="large">]</span>
            </p>
          </div>

          <div className="Paragraph_Topic block">
            <p>
              1. For the first component of u × v, delete the first column and
              take the determinant
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical DarkBlue disabled">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical Orange">
                <span>u₂</span> <span>v₂</span>
              </span>
              <span className="Vertical Orange">
                <span>u₃</span> <span>v₃</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>{" "}
              <span className="Vertical Orange  borderLeft white">
                <span>u₂</span> <span>v₂</span>
              </span>
              <span className="Vertical Orange borderRight white">
                <span>u₃</span> <span>v₃</span>
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic block">
            <p>
              2. For the second component of u × v, delete the second column and
              take the negative of the determinant
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical Orange">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical DarkBlue disabled">
                <span>u₂</span> <span>v₂</span>
              </span>
              <span className="Vertical Orange">
                <span>u₃</span> <span>v₃</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>{" "}
              <span className="Orange">-</span>
              <span className="Vertical Orange  borderLeft white">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical Orange borderRight white">
                <span>u₃</span> <span>v₃</span>
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic block">
            <p>
              3. For the third component of u × v, delete the third column and
              take the determinant.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical Orange">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical Orange">
                <span>u₂</span> <span>v₂</span>
              </span>
              <span className="Vertical DarkBlue disabled">
                <span>u₃</span> <span>v₃</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>{" "}
              <span className="Vertical Orange  borderLeft white">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical Orange borderRight white">
                <span>u₂</span> <span>v₂</span>
              </span>
            </p>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <div className="Note withVertical">
              Let A be a 2x2 matrix, such that A ={" "}
              <span className="large">[</span>
              <span className="Vertical">
                <span>a</span> <span>c</span>
              </span>
              <span className="Vertical">
                <span>b</span> <span>d</span>
              </span>
              <span className="large">]</span>
            </div>
            <div className="Note">
              Then, the determinants of matrix A is given by:
            </div>
            <div className="Note withVertical center">
              <span className="Bold">det A</span>
              <span className="large">[</span>
              <span className="Vertical">
                <span>a</span> <span>c</span>
              </span>
              <span className="Vertical">
                <span>b</span> <span>d</span>
              </span>
              <span className="large">]</span>={" "}
              <span className="Vertical borderLeft white">
                <span>a</span> <span>c</span>
              </span>
              <span className="Vertical borderRight white">
                <span>b</span> <span>d</span>
              </span>
              = ad - bc
            </div>
            <div className="Note withVertical">
              Now, let B be a 3x3 matrix, such that B ={" "}
              <span className="large">[</span>
              <span className="Vertical">
                <span>a</span> <span>d</span> <span>g</span>
              </span>
              <span className="Vertical">
                <span>b</span> <span>e</span> <span>h</span>
              </span>
              <span className="Vertical">
                <span>c</span> <span>f</span> <span>i</span>
              </span>
              <span className="large">]</span>
            </div>
            <div className="Note">
              Then, the determinants of matrix B is given by:
            </div>
            <div className="Solution_Example largerLeft">
              <div className="start">
                <p className="left">
                  <span className="Bold">det B</span>
                  <span className="large">[</span>
                  <span className="Vertical">
                    <span>a</span> <span>d</span> <span>g</span>
                  </span>
                  <span className="Vertical">
                    <span>b</span> <span>e</span> <span>h</span>
                  </span>
                  <span className="Vertical">
                    <span>c</span> <span>f</span> <span>i</span>
                  </span>
                  <span className="large">]</span>
                </p>
                <p className="center">=</p>
                <p className="right">
                  a
                  <span className="Vertical borderLeft white">
                    <span>e</span> <span>h</span>
                  </span>
                  <span className="Vertical borderRight white">
                    <span>f</span> <span>i</span>
                  </span>
                  -b
                  <span className="Vertical borderLeft white">
                    <span>d</span> <span>g</span>
                  </span>
                  <span className="Vertical borderRight white">
                    <span>f</span> <span>i</span>
                  </span>
                  +c
                  <span className="Vertical borderLeft white">
                    <span>d</span> <span>g</span>
                  </span>
                  <span className="Vertical borderRight white">
                    <span>e</span> <span>h</span>
                  </span>
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">a (ei - fh) - b (di - fg) + c (dh - eg)</p>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic block">
            <p>Determine the cross product of the given vectors.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>u = (-4, 7, 3)</p>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <p>v = (9, -8, -1)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Create a 2 x 3 matrix containing u and v components.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical">
                <span>u₁</span> <span>v₁</span>
              </span>
              <span className="Vertical">
                <span>u₂</span> <span>v₂</span>
              </span>
              <span className="Vertical">
                <span>u₃</span> <span>v₃</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>
              <span className="large">[</span>
              <span className="Vertical">
                <span>-4</span> <span>9</span>
              </span>
              <span className="Vertical">
                <span>7</span> <span>-8</span>
              </span>
              <span className="Vertical">
                <span>3</span> <span>-1</span>
              </span>
              <span className="large">]</span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical DarkBlue disabled">
                <span>-4</span> <span>9</span>
              </span>
              <span className="Vertical Orange">
                <span>7</span> <span>-8</span>
              </span>
              <span className="Vertical Orange">
                <span>3</span> <span>-1</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>
              <span className="Vertical borderLeft white Orange">
                <span>7</span> <span>-8</span>
              </span>
              <span className="Vertical borderRight white Orange">
                <span>3</span> <span>-1</span>
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical Orange">
                <span>-4</span> <span>9</span>
              </span>
              <span className="Vertical DarkBlue disabled">
                <span>7</span> <span>-8</span>
              </span>
              <span className="Vertical Orange">
                <span>3</span> <span>-1</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>
              <span className="Orange">-</span>
              <span className="Vertical borderLeft white Orange">
                <span>-4</span> <span>9</span>
              </span>
              <span className="Vertical borderRight white Orange">
                <span>3</span> <span>-1</span>
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <p>
              <span className="large">[</span>
              <span className="Vertical Orange">
                <span>-4</span> <span>9</span>
              </span>
              <span className="Vertical Orange">
                <span>7</span> <span>-8</span>
              </span>
              <span className="Vertical DarkBlue disabled">
                <span>3</span> <span>-1</span>
              </span>
              <span className="large">]</span> <span className="arrow">→</span>
              <span className="Vertical borderLeft white Orange">
                <span>-4</span> <span>9</span>
              </span>
              <span className="Vertical borderRight white Orange">
                <span>7</span> <span>-8</span>
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft center">
            <div className="Solution_Example largerLeft">
              <div className="start">
                <p className="left">
                  <span className="Bold">u × v</span>
                </p>
                <p className="center">=</p>
                <p className="right">
                  <span className="large">(</span>
                  <span className="Vertical borderLeft white">
                    <span>7</span> <span>-8</span>
                  </span>
                  <span className="Vertical borderRight white">
                    <span>3</span> <span>-1</span>
                  </span>
                  , -
                  <span className="Vertical borderLeft white">
                    <span>-4</span> <span>9</span>
                  </span>
                  <span className="Vertical borderRight white">
                    <span>3</span> <span>-1</span>
                  </span>
                  ,
                  <span className="Vertical borderLeft white">
                    <span>-4</span> <span>9</span>
                  </span>
                  <span className="Vertical borderRight white">
                    <span>7</span> <span>-8</span>
                  </span>
                  <span className="large">)</span>
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  (7(-1) - 3(-8) , -(-4(-1) - 3(9)) , -4(-8) - 7(9))
                </p>
              </div>

              <div className="start LimeGreen">
                <p className="left">u × v</p>
                <p className="center">=</p>
                <p className="right">(17, 23, -31)</p>
              </div>
            </div>
          </div>

          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description">
              Let u and v be vectors in R³ . Try entering 2 vectors u and v and
              observe their cross products.
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Group">
                    <div className="Label">Vectors</div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>u = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={vectors.ux}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setVectors({
                                ...vectors,
                                ux: 0,
                              });
                            } else {
                              setVectors({
                                ...vectors,
                                ux: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>y</p>
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={vectors.uy}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setVectors({
                                ...vectors,
                                uy: 0,
                              });
                            } else {
                              setVectors({
                                ...vectors,
                                uy: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>z</p>
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={vectors.uz}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setVectors({
                                ...vectors,
                                uz: 0,
                              });
                            } else {
                              setVectors({
                                ...vectors,
                                uz: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                </div>

                <div className="Content">
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>v = (</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={vectors.vx}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setVectors({
                                ...vectors,
                                vx: 0,
                              });
                            } else {
                              setVectors({
                                ...vectors,
                                vx: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={vectors.vy}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setVectors({
                                ...vectors,
                                vy: 0,
                              });
                            } else {
                              setVectors({
                                ...vectors,
                                vy: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={vectors.vz}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setVectors({
                                ...vectors,
                                vz: 0,
                              });
                            } else {
                              setVectors({
                                ...vectors,
                                vz: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>)</p>
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
                    <div className="Label">Cross Product</div>
                  </div>
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">u × v</p>
                      <p className="center">=</p>
                      <p className="right">( u₂ v₃ - u₃ v₂ , </p>
                    </div>

                    <div className="start">
                      <p className="left"></p>
                      <p className="center"></p>
                      <p className="right">u₃ v₁ - u₁ v₃ ,</p>
                    </div>

                    <div className="start">
                      <p className="left"></p>
                      <p className="center"></p>
                      <p className="right">u₁ v₂ - u₂ v₁ )</p>
                    </div>

                    <div className="start">
                      <p className="left">u × v</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder Long noPadding">
                          <div
                            id="outputRec"
                            className="Output_Rectangles"
                          ></div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">Let u , v, and w be vectors in R³, then:</p>
              <div className="Paragraph_Topic paddingLeft2">
                <div className="Bullet_Topic">
                  <p className="Title">
                    1. (u × v) is orthogonal to both u and v. Equivalently,
                  </p>
                  <p className="Explanation">● u ⋅ (u × v) = 0</p>
                  <p className="Explanation">● v ⋅ (u × v) = 0</p>
                </div>
              </div>
              <div className="Paragraph_Topic paddingLeft2">
                <div className="Bullet_Topic">
                  <p className="Title">2. Vector Triple Product</p>
                  <p className="Explanation">
                    ● u × (v × w) = (u ⋅ w)(v) - (u ⋅ v)(w)
                  </p>
                  <p className="Explanation">
                    ● (u × v) × w = (u ⋅ w)(v) - (v ⋅ w)(u)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              Cross product is not associative. Thus, u × (v × w) ≠ (u × v) × w.
            </p>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let u , v, and w be vectors in R³, and k is a scalar, then:
              </p>
              <div className="Paragraph_Topic paddingLeft2">
                <p>1. u × v = -(v × u)</p>
                <p>2. u × (v + w) = (u × v) + (u × w)</p>
                <p>3. (u + v) × w = (u × w) + (v × w)</p>
                <p>4. k(u × v) = (ku) × v = u × (kv)</p>
                <div style={{ position: "relative" }}>
                  5. u ×{" "}
                  <span className="stack">
                    <div>→</div>
                  </span>
                  0 ={" "}
                  <span className="stack">
                    <div>→</div>
                  </span>
                  0 × v ={" "}
                  <span className="stack">
                    <div>→</div>
                  </span>
                  0
                </div>
                <p>6. u × u = 0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CROSS PRODUCT OF UNIT VECTORS */}
      <div id="topic27" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">CROSS PRODUCT OF UNIT VECTORS</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block">
            <p>
              Recall from Lesson 1 that vectors in 3-space can be represented in
              two ways: the component form and the standard unit form.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Component Form</p>
          </div>
          <div className="Paragraph_Topic paddingLeft3">
            <p>v = (x, y, z)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side noGap">
                <div className="Paragraph_Topic">
                  <p>Component Form</p>
                </div>
                <div className="Paragraph_Topic paddingLeft">
                  <p>v = (x, y, z)</p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example">
                  <div className="start">
                    <p className="left">where i </p>
                    <p className="center">=</p>
                    <p className="right">(1, 0, 0),</p>
                  </div>

                  <div className="start">
                    <p className="left">j</p>
                    <p className="center">=</p>
                    <p className="right">(0, 1, 0),</p>
                  </div>

                  <div className="start">
                    <p className="left">k</p>
                    <p className="center">=</p>
                    <p className="right">(0, 0, 1)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic block">
            <p>
              The cross product of two distinct unit vectors produces another
              unit vector orthogonal to the both vectors. Consequently,
            </p>
          </div>

          <div className="Paragraph_Topic center">
            <p>
              i × j =<span className="large">(</span>
              <span className="Vertical borderLeft white">
                <span>0</span> <span>0</span>
              </span>
              <span className="Vertical borderRight white">
                <span>1</span> <span>0</span>
              </span>
              , -
              <span className="Vertical borderLeft white">
                <span>1</span> <span>0</span>
              </span>
              <span className="Vertical borderRight white">
                <span>0</span> <span>0</span>
              </span>
              ,
              <span className="Vertical borderLeft white">
                <span>1</span> <span>0</span>
              </span>
              <span className="Vertical borderRight white">
                <span>0</span> <span>1</span>
              </span>
              <span className="large">)</span>= (0, 0, 1) = k
            </p>
          </div>

          <div className="Paragraph_Topic block paddingLeft">
            <p>Equivalently,</p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <div className="Triple_Grid">
                <div className="left">
                  <div className="Solution_Example largerLeft center">
                    <div className="start  DarkBlue">
                      <p className="left">i × j</p>
                      <p className="center">=</p>
                      <p className="right">k</p>
                    </div>

                    <div className="start  DarkBlue">
                      <p className="left">j × i</p>
                      <p className="center">=</p>
                      <p className="right">-k</p>
                    </div>
                  </div>
                </div>
                <div className="middle noBorder">
                  <div className="Solution_Example largerLeft">
                    <div className="start  DarkBlue">
                      <p className="left">j × k</p>
                      <p className="center">=</p>
                      <p className="right">i</p>
                    </div>

                    <div className="start  DarkBlue">
                      <p className="left">k × j</p>
                      <p className="center">=</p>
                      <p className="right">-i</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="Solution_Example largerLeft">
                    <div className="start  DarkBlue">
                      <p className="left">k × i</p>
                      <p className="center">=</p>
                      <p className="right">j</p>
                    </div>
                    <div className="start  DarkBlue">
                      <p className="left">i × k</p>
                      <p className="center">=</p>
                      <p className="right">-j</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">Cross product is not commutative.</p>
          </div>

          <div className="Example_Label">
            <p>Example B</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Evaluate the given expression.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>5i × (8i × 2j)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example largerLeft">
                  <div className="start">
                    <p className="left">5i × (8i × 2j)</p>
                    <p className="center">=</p>
                    <p className="right">5i × (8)(i × 2j)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">5i × (8)(2)(i × j)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">5i × (16)(k)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">5(i × 16k)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">5(16)(i × k)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">80(-j)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">-80j</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">-80(0, 1, 0)</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left">5i × (8i × 2j)</p>
                    <p className="center">=</p>
                    <p className="right">(0, -80, 0)</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example largerLeft">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">i × j = k</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">i × k = -j</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">80(-j) = (80)(-1)(j) = -80j</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">j = (0, 1, 0)</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Scalar Multiplication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>(7k × 5i) × (-8i × 4j)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example largerLeft2">
                  <div className="start">
                    <p className="left">(7k × 5i) × (-8i × 4j)</p>
                    <p className="center">=</p>
                    <p className="right">(7)(k × 5i) × (-8)(i × 4j)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">(7)(5)(k × i) × (-8)(4)(i × j)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">(35)(k × i) × (-32)(i × j)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">35j × -32k</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">(35)(j × -32k)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">(35)(-32)(j × k)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">-1120(j × k)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">-1120i</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">-1120(1, 0, 0)</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left">(7k × 5i) × (-8i × 4j)</p>
                    <p className="center">=</p>
                    <p className="right">(-1120, 0, 0)</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example largerLeft">
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Multiplication of Scalars</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">k × i = j and i × j = k</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Theorem 5.2 (4)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Multiplication of Scalars</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">j × k = i</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">i = (1, 0, 0)</p>
                  </div>

                  <div className="start LimeGreen">
                    <p className="left"></p>
                    <p className="center"></p>
                    <p className="right Italic">Scalar Multiplication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAGNITUDE OF THE CROSS PRODUCT */}
      <div id="topic28" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">MAGNITUDE OF THE CROSS PRODUCT</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.3</p>
            </div>
            <div className="Theorem_Content">
              <div className="Paragraph_Topic paddingLeft2">
                <div className="Side_By_Side">
                  <div className="Left_Side">
                    <div className="Paragraph_Topic block">
                      <p>
                        Let u & v be vectors in R³, and θ be the angle between
                        them. Then the magnitude of the cross product is,
                      </p>
                    </div>

                    <div className="Light_Blue_Holder">
                      <div className="Light_Blue Bold">
                        || u × v || = ||u|| ||v|| sin θ
                      </div>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <div className="Topic_Visual">
                      <div className="Visual_Holder image">
                        <img src={image94} alt="Graph Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.4</p>
            </div>
            <div className="Theorem_Content">
              <div className="Paragraph_Topic paddingLeft2">
                Let u & v be vectors in R³. Then, || u × v || is equal to the
                area of the parallelogram determined by vectors u & v .
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example D</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the magnitude of the cross product of the given vectors.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>u = (-12, 4, 7)</p>
            <p>v = (2, -8, 5)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Paragraph_Topic block">
                  <p className="label">Finding || u ||:</p>
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">|| u ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="squareRoot_Symbol">&radic;</span>x² +
                        y² + z²
                      </p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="squareRoot_Symbol">&radic;</span>(-12)²
                        + 4² + 7²
                      </p>
                    </div>

                    <div className="start">
                      <p className="left">|| u ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="squareRoot_Symbol">&radic;</span>209
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Paragraph_Topic block">
                  <p className="label">Finding || v ||:</p>
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="squareRoot_Symbol">&radic;</span>x² +
                        y² + z²
                      </p>
                    </div>
                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="squareRoot_Symbol">&radic;</span>2² +
                        (-8)² + 5²
                      </p>
                    </div>

                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="squareRoot_Symbol">&radic;</span>93
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Finding θ:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>By Definition 2.5, the angle between two vectors u & v is</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              θ = cos-1{" "}
              <div className="fraction">
                <span className="upper">(u ⋅ v)</span>
                <span className="divider"></span>
                <span className="bottom">||u|| ||v||</span>
              </div>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              θ = cos-1{" "}
              <div className="fraction">
                <span className="upper">(-12)(2) + (4)(-8) + (7)(5)</span>
                <span className="divider"></span>
                <span className="bottom">
                  <span className="squareRoot_Symbol">&radic;</span>209{" "}
                  <span className="squareRoot_Symbol">&radic;</span>93
                </span>
              </div>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>θ ≈ 98.66°</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>Finding ||u × v||:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>By Theorem 5.3, magnitude of the cross product of u & v is:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>||u × v|| = ||u|| ||v|| sin θ</p>
            <p>
              ||u × v|| = <span className="squareRoot_Symbol">&radic;</span>209{" "}
              <span className="squareRoot_Symbol">&radic;</span>93 (sin 98.66°)
            </p>
            <p className="LimeGreen">||u × v|| ≈ 137.83</p>
          </div>
        </div>
      </div>

      {/* AREA OF A PARALLELOGRAM IN R² */}
      <div id="topic29" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">AREA OF A PARALLELOGRAM IN R²</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.5</p>
            </div>
            <div className="Theorem_Content">
              <div className="Paragraph_Topic paddingLeft">
                <div className="Side_By_Side">
                  <div className="Left_Side">
                    <div className="Paragraph_Topic block">
                      <p>
                        The{" "}
                        <span className="Bold">
                          area of the parallelogram in R²
                        </span>{" "}
                        determined by the vectors{" "}
                        <span className="Italic">
                          u = (u₁, u₂) & v = (v₁, v₂)
                        </span>{" "}
                        is:
                      </p>
                    </div>

                    <div className="Light_Blue_Holder">
                      <div className="Light_Blue row">
                        A ▱ = abs <span className="large">(</span>det
                        <span className="large">[</span>
                        <span className="Vertical borderLeft center DarkBlue">
                          <span>u₂</span> <span>v₂</span>
                        </span>
                        <span className="Vertical borderRight center DarkBlue">
                          <span>u₃</span> <span>v₃</span>
                        </span>
                        <span className="large">]</span>
                        <span className="large">)</span>
                      </div>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <div className="Topic_Visual">
                      <div className="Visual_Holder image">
                        <img src={image97} alt="Graph Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example E</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Determine the area of the given parallelogram.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side noGap">
                <div className="Paragraph_Topic block">
                  <p>Parallelogram ABCD, where</p>
                </div>
                <div className="Paragraph_Topic block paddingLeft">
                  <p>A = (3, 4) C = (2, 2)</p>
                  <p>B = (6, 3) D = (5, 1)</p>
                </div>
                <div
                  className="Paragraph_Topic block"
                  style={{ marginTop: "50px" }}
                >
                  <p>
                    Let{" "}
                    <span className="stack">
                      <div>→</div>
                    </span>
                    AB be vector u and{" "}
                    <span className="stack">
                      <div>→</div>
                    </span>
                    AC vector v
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image100} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example largerLeft">
                  <p className="label">Finding the components of</p>
                  <p className="label">u:</p>
                  <div className="start">
                    <p className="left withStack">
                      <span className="stack">
                        <div>→</div>
                      </span>
                      AB = u
                    </p>
                    <p className="center">=</p>
                    <p className="right">(x₂ - x₁, y₂ - y₁)</p>
                  </div>

                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">(6 - 3, 3 - 4)</p>
                  </div>

                  <div className="start Bold">
                    <p className="left">u</p>
                    <p className="center">=</p>
                    <p className="right">(3, -1)</p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example largerLeft">
                  <p className="label">Finding the components of</p>
                  <p className="label">v:</p>
                  <div className="start">
                    <p className="left withStack">
                      <span className="stack">
                        <div>→</div>
                      </span>
                      AC = v
                    </p>
                    <p className="center">=</p>
                    <p className="right">(x₂ - x₁, y₂ - y₁)</p>
                  </div>

                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">(2 - 3, 2 - 4)</p>
                  </div>

                  <div className="start Bold">
                    <p className="left">v</p>
                    <p className="center">=</p>
                    <p className="right">(-1, -2)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              By Theorem 5.6, the area of the parallelogram determined by u & v
              is:
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example largerLeft">
              <div className="start">
                <p className="left withStack">
                  A ▱ = abs <span className="large">(</span>det
                  <span className="large">[</span>
                  <span className="Vertical borderLeft center white">
                    <span>u₂</span> <span>v₂</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>u₃</span> <span>v₃</span>
                  </span>
                  <span className="large">]</span>
                  <span className="large">)</span>
                </p>
                <p className="center">=</p>
                <p className="right">
                  abs <span className="large">(</span>det
                  <span className="large">[</span>
                  <span className="Vertical borderLeft center white">
                    <span>3</span> <span>-1</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>-1</span> <span>-2</span>
                  </span>
                  <span className="large">]</span>
                  <span className="large">)</span>
                </p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">| 3(-2) - (-1)(-1) |</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">| -6 - 1 |</p>
              </div>

              <div className="start">
                <p className="left">A ▱</p>
                <p className="center">=</p>
                <p className="right">|-7|</p>
              </div>

              <div className="start LimeGreen">
                <p className="left">A ▱</p>
                <p className="center">=</p>
                <p className="right">7 sq. units.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCALAR TRIPLE PRODUCT */}
      <div id="topic30" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">SCALAR TRIPLE PRODUCT</p>
          <p className="Sub_Title">Definition 5.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let <span className="Italic">u, v, & w</span> be vectors in R³ .
              We denote the scalar triple product of{" "}
              <span className="Italic">u, v, & w</span> by{" "}
              <span className="Bold">u ⋅ ( v × w)</span> .
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">If u</p>
                <p className="center">=</p>
                <p className="right">(u₁, u₂, u₃),</p>
              </div>
              <div className="start">
                <p className="left">v</p>
                <p className="center">=</p>
                <p className="right">(v₁, v₂, v₃),</p>
              </div>
              <div className="start">
                <p className="left">w</p>
                <p className="center">=</p>
                <p className="right">(w₁, w₂, w₃)</p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              then the scalar triple product of{" "}
              <span className="Italic">u, v, & w</span> is:
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue row Bold">
              u ⋅ (v × w) = det
              <span className="large" style={{ fontWeight: "300" }}>
                [
              </span>
              <span className="Vertical borderLeft center DarkBlue">
                <span>u₁</span> <span>v₁</span> <span>w₁</span>
              </span>
              <span className="Vertical center DarkBlue">
                <span>u₂</span> <span>v₂</span> <span>w₂</span>
              </span>
              <span className="Vertical borderRight center DarkBlue">
                <span>u₃</span> <span>v₃</span> <span>w₃</span>
              </span>
              <span className="large" style={{ fontWeight: "300" }}>
                ]
              </span>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.6</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let <span className="Italic">u, v, & w</span> be vectors in R³.
                If vectors <span className="Italic">u, v, & w</span> have the
                same initial point, then they line in the same plane iff.{" "}
                <span className="Bold">u ⋅ (v × w) = 0</span> .
              </p>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              Accordingly,{" "}
              <span className="Bold">
                u ⋅ (v × w) = w ⋅ (u × v) = v ⋅ (w × u)
              </span>
              .
            </p>
          </div>

          <div className="Example_Label">
            <p>Example C</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Determine the scalar triple product of the given vectors.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>u = (-11, 5, -2)</p>
            <p>v = (-1, 4, 9)</p>
            <p>w = (0, 12, -7)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">
                  det
                  <span className="large" style={{ fontWeight: "300" }}>
                    [
                  </span>
                  <span className="Vertical borderLeft center white">
                    <span>u₁</span> <span>v₁</span> <span>w₁</span>
                  </span>
                  <span className="Vertical center white">
                    <span>u₂</span> <span>v₂</span> <span>w₂</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>u₃</span> <span>v₃</span> <span>w₃</span>
                  </span>
                  <span className="large" style={{ fontWeight: "300" }}>
                    ]
                  </span>
                </p>
                <p className="center">=</p>
                <p className="right">
                  det
                  <span className="large" style={{ fontWeight: "300" }}>
                    [
                  </span>
                  <span className="Vertical borderLeft center white">
                    <span>-11</span> <span>-1</span> <span>0</span>
                  </span>
                  <span className="Vertical center white">
                    <span>5</span> <span>4</span> <span>12</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>-2</span> <span>9</span> <span>-7</span>
                  </span>
                  <span className="large" style={{ fontWeight: "300" }}>
                    ]
                  </span>
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  -11
                  <span className="Vertical borderLeft center white">
                    <span>4</span> <span>12</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>9</span>
                    <span>-7</span>
                  </span>
                  -5
                  <span className="Vertical borderLeft center white">
                    <span>-1</span> <span>0</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>9</span>
                    <span>-7</span>
                  </span>
                  -2
                  <span className="Vertical borderLeft center white">
                    <span>-1</span> <span>0</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>4</span>
                    <span>12</span>
                  </span>
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">-11 (-28 - 108) - 5(7 - 0) - 2(-12 - 0)</p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">-11(-136) - 5(7) - 2(-12)</p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">1496 - 35 + 24</p>
              </div>
              <div className="start LimeGreen">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">1485</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VOLUME OF A PARALLELEPIPED IN R³ */}
      <div id="topic31" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VOLUME OF A PARALLELEPIPED IN R³</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 5.7</p>
            </div>
            <div className="Theorem_Content">
              <div className="Paragraph_Topic paddingLeft">
                <div className="Side_By_Side">
                  <div className="Left_Side larger">
                    <div className="Paragraph_Topic block">
                      <p>
                        The{" "}
                        <span className="Bold">
                          volume of the parallelepiped in R³
                        </span>{" "}
                        determined by the vectors{" "}
                        <span className="Italic">
                          u = (u₁, u₂, u₃) , v = (v₁, v₂, v₃), & w = (w₁,
                        </span>
                        <span className="Italic"> w₂, w₃) </span>
                        is:
                      </p>
                    </div>

                    <div className="Light_Blue_Holder">
                      <div className="Light_Blue row Bold">
                        V ▱ = abs
                        <span className="large" style={{ fontWeight: "300" }}>
                          (
                        </span>
                        det
                        <span className="large" style={{ fontWeight: "300" }}>
                          [
                        </span>
                        <span className="Vertical borderLeft center DarkBlue">
                          <span>u₁</span> <span>v₁</span> <span>w₁</span>
                        </span>
                        <span className="Vertical center DarkBlue">
                          <span>u₂</span> <span>v₂</span> <span>w₂</span>
                        </span>
                        <span className="Vertical borderRight center DarkBlue">
                          <span>u₃</span> <span>v₃</span> <span>w₃</span>
                        </span>
                        <span className="large" style={{ fontWeight: "300" }}>
                          ]
                        </span>
                        <span className="large" style={{ fontWeight: "300" }}>
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <div className="Topic_Visual">
                      <div className="Visual_Holder image">
                        <img src={image102} alt="Graph Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example F</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Determine the volume of the given parallelepiped.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger noGap">
                <div className="Paragraph_Topic block">
                  <p>Parallelepiped with adjacent edges u, v, & w, where:</p>
                </div>

                <div className="Paragraph_Topic center">
                  <p>u = (2, 1, 3)</p>
                </div>
                <div className="Paragraph_Topic center">
                  <p>v = (-1, 3, 2)</p>
                </div>
                <div className="Paragraph_Topic center">
                  <p>w = (1, 1, -2)</p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image101} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>By Theorem 5.7, the volume of the parallelepiped is:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Solution_Example largerLeft2">
              <div className="start">
                <p className="left">
                  V ▱ = abs
                  <span className="large" style={{ fontWeight: "300" }}>
                    (
                  </span>
                  det
                  <span className="large" style={{ fontWeight: "300" }}>
                    [
                  </span>
                  <span className="Vertical borderLeft center white">
                    <span>u₁</span> <span>v₁</span> <span>w₁</span>
                  </span>
                  <span className="Vertical center white">
                    <span>u₂</span> <span>v₂</span> <span>w₂</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>u₃</span> <span>v₃</span> <span>w₃</span>
                  </span>
                  <span className="large" style={{ fontWeight: "300" }}>
                    ]
                  </span>
                  <span className="large" style={{ fontWeight: "300" }}>
                    )
                  </span>
                </p>
                <p className="center">=</p>
                <p className="right">
                  det
                  <span className="large" style={{ fontWeight: "300" }}>
                    [
                  </span>
                  <span className="Vertical borderLeft center white">
                    <span>2</span> <span>-1</span> <span>1</span>
                  </span>
                  <span className="Vertical center white">
                    <span>1</span> <span>3</span> <span>1</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>3</span> <span>2</span> <span>-2</span>
                  </span>
                  <span className="large" style={{ fontWeight: "300" }}>
                    ]
                  </span>
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  abs
                  <span className="large" style={{ fontWeight: "300" }}>
                    (
                  </span>
                  2
                  <span className="Vertical borderLeft center white">
                    <span>3</span> <span>1</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>2</span>
                    <span>-2</span>
                  </span>
                  -1
                  <span className="Vertical borderLeft center white">
                    <span>-1</span> <span>1</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>2</span>
                    <span>-2</span>
                  </span>
                  +3
                  <span className="Vertical borderLeft center white">
                    <span>-1</span> <span>1</span>
                  </span>
                  <span className="Vertical borderRight center white">
                    <span>3</span>
                    <span>1</span>
                  </span>
                  <span className="large" style={{ fontWeight: "300" }}>
                    )
                  </span>
                </p>
              </div>
              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">| 2(-6 - 2) - 1(2 - 2) + 3(-1 - 3) |</p>
              </div>
              <div className="start">
                <p className="left">v</p>
                <p className="center">=</p>
                <p className="right">|-28|</p>
              </div>
              <div className="start LimeGreen">
                <p className="left">v</p>
                <p className="center">=</p>
                <p className="right">28 sq. units.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson5;
