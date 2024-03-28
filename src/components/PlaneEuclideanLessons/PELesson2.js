import React, { useEffect, useState } from "react";

//Images
import examplec1 from "../../assets/images/Lessons Images/PELesson2/examplec1.png";
import examplec2 from "../../assets/images/Lessons Images/PELesson2/examplec2.png";
import exampled1 from "../../assets/images/Lessons Images/PELesson2/exampled1.png";
import exampled2 from "../../assets/images/Lessons Images/PELesson2/exampled2.png";
import image2 from "../../assets/images/Lessons Images/PELesson2/image-2.png";

//Videos
import ExampleA1 from "../../assets/videos/PELesson1/Example A1.mp4";
import ExampleA2 from "../../assets/videos/PELesson1/Example A2.mp4";
import ExampleB1 from "../../assets/videos/PELesson1/Example B1.mp4";
import ExampleB2 from "../../assets/videos/PELesson1/Example B2.mp4";
import ExampleC from "../../assets/videos/PELesson1/Example C.mp4";

import {
  GetWindowWidth,
  calculateComponentForm,
  calculateDistance,
  calculateNorm,
  calculateNorm3D,
  calculateVector,
  graphVector,
  performOperations,
  performOperations3D,
} from "../../utils";

function PELesson2() {
  const [norm, setNorm] = useState({
    x: 0,
    y: 0,
  });

  const solveNorm = () => {
    if (!isNaN(norm.x) && !isNaN(norm.y)) {
      calculateNorm(norm.x, norm.y);
    }
  };

  const [norm2, setNorm2] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const solveNorm2 = () => {
    if (!isNaN(norm2.x) && !isNaN(norm2.y) && !isNaN(norm2.z)) {
      calculateNorm3D(norm2.x, norm2.y, norm2.z);
    }
  };

  const [distance, setDistance] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const solveDistance = () => {
    if (
      !isNaN(distance.x1) &&
      !isNaN(distance.y1) &&
      !isNaN(distance.x2) &&
      !isNaN(distance.y2)
    ) {
      calculateDistance(distance.x1, distance.y1, distance.x2, distance.y2);
    }
  };

  return (
    <div className="Topic_Container">
      {/* NORM */}
      <div id="topic7" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">NORM</p>
          <p className="Sub_Title">Definition 2.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              The norm of a vector, also known as the magnitude of a vector or
              length of a vector, determines the measure from the vector’s
              origin to the endpoint in a given space. The norm of vector v is
              denoted by ||v||.
            </p>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">Norm of Vector v in R²</p>
            <p className="Explanation">
              Let v = (x, y) be a vector in R² . Then the norm of v is:
            </p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <p>
                || v || = <span className="squareRoot_Symbol">&radic;</span>
                x² + y²
              </p>
            </div>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">Norm of Vector v in R³</p>
            <p className="Explanation">
              Let v = (x, y, z) be a vector in R³ . Then the norm of v is:
            </p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <p>
                || v || = <span className="squareRoot_Symbol">&radic;</span>x² +
                y² + z²
              </p>
            </div>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">Norm of Vector v in Rⁿ</p>
            <p className="Explanation">
              Let v = (v₁, v₂, ..., vₙ) be a vector in Rⁿ . Then the norm of v
              is:
            </p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <p>
                || v || = <span className="squareRoot_Symbol">&radic;</span>v₁²
                + v₂² + ... + vₙ²
              </p>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Determine the norm of the following vectors.</p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">1.) v = (7, 2)</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>72 + 22
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>49 + 4
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>53
                  </p>
                </div>
              </div>
              <div className="Solution_Example">
                <p className="label">2.) v = (5, -8)</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>5² + (-8)²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>25 + 64
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>89
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <p className="label">3.) v = (6, 1, -4)</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y² + z²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>6² + 1² +
                    (-4)²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>36 + 1 +
                    16
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>53
                  </p>
                </div>
              </div>
              <div className="Solution_Example">
                <p className="label">4.) v = (0, -3, 7)</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y² + z²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>0² + (3)²
                    + 7²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>9 + 49
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>58
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description two">
              <div className="left">2-space</div>
              <div className="right">
                Let v be a vector in 2-space. Try entering its corresponding x
                and y values and observe its norm.
              </div>
            </div>
            <div className="Side_By_Side">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Label">Vector v</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>v = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={norm.x || 0}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setNorm({
                                ...norm,
                                x: 0,
                              });
                            } else {
                              setNorm({
                                ...norm,
                                x: parseInt(e.target.value),
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
                          value={norm.y || 0}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setNorm({
                                ...norm,
                                y: 0,
                              });
                            } else {
                              setNorm({
                                ...norm,
                                y: parseInt(e.target.value),
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
                      <button onClick={() => solveNorm()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div className="Label">Norm</div>
                  <div className="Vertical">
                    <p>
                      || v || ={" "}
                      <span className="squareRoot_Symbol">&radic;</span>x² + y²
                    </p>
                    <div className="Output_Rectangles_Holder">
                      || v || ={" "}
                      <span className="squareRoot_Symbol">&radic;</span>
                      <div
                        id="rectangle-4-1"
                        className="Output_Rectangles"
                      ></div>
                      ² +
                      <div
                        id="rectangle-3-1"
                        className="Output_Rectangles"
                      ></div>
                      ²
                    </div>
                  </div>
                  <div className="Vertical">
                    <div className="Output_Rectangles_Holder">
                      || v || ={" "}
                      <div id="rectangle-a" className="Output_Rectangles"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Description two">
              <div className="left">3-space</div>
              <div className="right">
                Let v be a vector in 3-space. Try entering its corresponding x,
                y, and z values and observe its norm.
              </div>
            </div>
            <div className="Side_By_Side">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Label">Vector v</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>v = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={norm2.x}
                          maxLength={2}
                          onChange={(e) => {
                            if (
                              isNaN(e.target.value) ||
                              e.target.value === ""
                            ) {
                              setNorm2({
                                ...norm2,
                                x: 0,
                              });
                            } else {
                              setNorm2({
                                ...norm2,
                                x: parseInt(e.target.value),
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
                          value={norm2.y}
                          maxLength={2}
                          onChange={(e) => {
                            if (
                              isNaN(e.target.value) ||
                              e.target.value === ""
                            ) {
                              setNorm2({
                                ...norm2,
                                y: 0,
                              });
                            } else {
                              setNorm2({
                                ...norm2,
                                y: parseInt(e.target.value),
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
                          value={norm2.z}
                          maxLength={2}
                          onChange={(e) => {
                            if (
                              isNaN(e.target.value) ||
                              e.target.value === ""
                            ) {
                              setNorm2({
                                ...norm2,
                                z: 0,
                              });
                            } else {
                              setNorm2({
                                ...norm2,
                                z: parseInt(e.target.value),
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
                      <button onClick={() => solveNorm2()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div className="Label">Norm</div>
                  <div className="Vertical">
                    <p>
                      || v || ={" "}
                      <span className="squareRoot_Symbol">&radic;</span>x² + y²
                      + z²
                    </p>
                    <div className="Output_Rectangles_Holder">
                      || v || ={" "}
                      <span className="squareRoot_Symbol">&radic;</span>
                      <div
                        id="rectangle-4-2"
                        className="Output_Rectangles"
                      ></div>
                      ² +
                      <div
                        id="rectangle-3-2"
                        className="Output_Rectangles"
                      ></div>
                      ² +
                      <div
                        id="rectangle-2-1"
                        className="Output_Rectangles"
                      ></div>
                      ²
                    </div>
                  </div>
                  <div className="Vertical">
                    <div className="Output_Rectangles_Holder">
                      || v || ={" "}
                      <div
                        id="rectangle-aa"
                        className="Output_Rectangles"
                      ></div>
                    </div>
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
                Let <span className="Italic">v</span> be a vector in Rⁿ, and
                <span className="Italic">k</span> be any scalars, then:
              </p>
              <div className="List">
                <p>
                  1. The norm of a vector is always non-negative. That is, || v
                  || ≥ 0.
                </p>
                <p>
                  2. || v || = 0 iff. v ={" "}
                  <span className="stack">
                    <div>→</div>
                  </span>
                  0 (zero vector)
                </p>
                <p>3. || kv || = | k | || v ||</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UNIT VECTOR */}
      <div id="topic8" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">UNIT VECTOR</p>
          <p className="Sub_Title">Definition 2.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>A unit vector is a vector that has a norm of 1.</p>
          </div>
          <div className="Example_Label">
            <p>Example B</p>
          </div>
          <div className="Paragraph_Topic">
            <p>A unit vector is a vector that has a norm of 1.</p>
          </div>
          <div className="Solution_Example">
            <p className="label">
              1.) v=
              <span className="large">(</span>
              <div className="fraction">
                <span className="upper">-3</span>
                <span className="divider"></span>
                <span className="bottom">2</span>
              </div>
              ,
              <div className="fraction">
                <span className="upper">4</span>
                <span className="divider"></span>
                <span className="bottom">5</span>
              </div>
              <span className="large">)</span>
            </p>
            <div className="start">
              <p className="left">|| v ||</p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                x² + y²
              </p>
            </div>
            <div className="solution">
              <p className="left">|| v ||</p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">-3</span>
                  <span className="divider"></span>
                  <span className="bottom">2</span>
                </div>
                <span className="large">)</span>² +{" "}
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">4</span>
                  <span className="divider"></span>
                  <span className="bottom">52</span>
                </div>
                <span className="large">)</span>²
              </p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">9</span>
                  <span className="divider"></span>
                  <span className="bottom">25</span>
                </div>
                <span className="large">)</span>² +{" "}
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">16</span>
                  <span className="divider"></span>
                  <span className="bottom">25</span>
                </div>
                <span className="large">)</span>²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                <div className="fraction">
                  <span className="upper">25</span>
                  <span className="divider"></span>
                  <span className="bottom">25</span>
                </div>
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">1</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center"></p>
              <p className="right">
                Since its norm is equal to 1, then v is a unit vector.
              </p>
            </div>
          </div>
          <div className="Solution_Example">
            <p className="label">
              2.) v =<span className="large">(</span>
              <div className="fraction">
                <span className="upper">-5</span>
                <span className="divider"></span>
                <span className="bottom">
                  <span className="squareRoot_Symbol">&radic;</span>65
                </span>
              </div>
              ,
              <div className="fraction">
                <span className="upper">2</span>
                <span className="divider"></span>
                <span className="bottom">
                  <span className="squareRoot_Symbol">&radic;</span>65
                </span>
              </div>
              ,
              <div className="fraction">
                <span className="upper">-6</span>
                <span className="divider"></span>
                <span className="bottom">
                  <span className="squareRoot_Symbol">&radic;</span>65
                </span>
              </div>
              <span className="large">)</span>
            </p>
            <div className="start">
              <p className="left">|| v ||</p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                x² + y² + z²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">-5</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>65
                  </span>
                </div>
                <span className="large">)</span>² +{" "}
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">2</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>65
                  </span>
                </div>
                <span className="large">)</span>²+{" "}
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">-6</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>65
                  </span>
                </div>
                <span className="large">)</span>²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">25</span>
                  <span className="divider"></span>
                  <span className="bottom">65</span>
                </div>
                <span className="large">)</span>² +{" "}
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">4</span>
                  <span className="divider"></span>
                  <span className="bottom">65</span>
                </div>
                <span className="large">)</span>²+{" "}
                <span className="large">(</span>
                <div className="fraction">
                  <span className="upper">36</span>
                  <span className="divider"></span>
                  <span className="bottom">65</span>
                </div>
                <span className="large">)</span>²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                <div className="fraction">
                  <span className="upper">65</span>
                  <span className="divider"></span>
                  <span className="bottom">65</span>
                </div>
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">1</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center"></p>
              <p className="right">
                Since its norm is equal to 1, then v is a unit vector.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NORMALIZING THE VECTOR */}
      <div id="topic9" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">NORMALIZING THE VECTOR</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let <span className="Italic">v</span> be a nonzero vector in Rⁿ.
                Normalizing a vector
                <span className="Italic">v</span> is the process of finding the
                unit vector in the direction of
                <span className="Italic"> v</span>
              </p>

              <div className="Label visual">
                The vector{" "}
                <div className="Light_Blue fraction">
                  <p>
                    u ={" "}
                    <div className="fraction">
                      <span className="upper">v</span>
                      <span className="divider blue"></span>
                      <span className="bottom">||v||</span>
                    </div>
                  </p>
                </div>
                is the unit vector (has a norm 1) in the direction of v.
              </div>
            </div>
          </div>
          <div className="Example_Label">
            <p>Example C</p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Determine the unit vector in the direction of the given vectors.
            </p>
          </div>
          <div className="Paragraph_Topic">
            <p>1.) v = (4, −1)</p>
          </div>
          <div className="Paragraph_Topic">
            <p>Let u be vector in R².</p>
          </div>

          <div className="Paragraph_Topic equation">
            <div>
              The unit vector in the direction of v is u ={" "}
              <div className="fraction">
                <span className="upper">v</span>
                <span className="divider"></span>
                <span className="bottom">||v||</span>
              </div>
            </div>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">Finding || v ||</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>4² + (-1)²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>16 + 1
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>17
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <p className="label">Substituting to u</p>
                <div className="start">
                  <p className="left">u</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">v</span>
                      <span className="divider"></span>
                      <span className="bottom">||v||</span>
                    </div>
                  </p>
                </div>
                <div className="solution">
                  <p className="left">u</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">(4, -1)</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>17
                      </span>
                    </div>
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">1</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>17
                      </span>
                    </div>
                    <span>(4, -1)</span>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">4</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>17
                      </span>
                    </div>
                    <span>,</span>
                    <div className="fraction">
                      <span className="upper">-1</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>17
                      </span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>2.) v = (1, 5, -3)</p>
          </div>
          <div className="Paragraph_Topic">
            <p>Let u be vector in R³.</p>
          </div>

          <div className="Paragraph_Topic equation">
            <div>
              The unit vector in the direction of v is u ={" "}
              <div className="fraction">
                <span className="upper">v</span>
                <span className="divider"></span>
                <span className="bottom">||v||</span>
              </div>
            </div>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">Finding || v ||</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y² + z²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>1² + + 5²
                    (-3)²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>1 + 25 + 9
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>35
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <p className="label">Substituting to u</p>
                <div className="start">
                  <p className="left">u</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">v</span>
                      <span className="divider"></span>
                      <span className="bottom">||v||</span>
                    </div>
                  </p>
                </div>
                <div className="solution">
                  <p className="left">u</p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">(1, 5, -3)</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>35
                      </span>
                    </div>
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="fraction">
                      <span className="upper">1</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>35
                      </span>
                    </div>
                    <span>(1, 5, -3)</span>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">1</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>35
                      </span>
                    </div>
                    <span>,</span>
                    <div className="fraction">
                      <span className="upper">5</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>35
                      </span>
                    </div>
                    <span>,</span>
                    <div className="fraction">
                      <span className="upper">-3</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        <span className="squareRoot_Symbol">&radic;</span>35
                      </span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DISTANCE */}
      <div id="topic10" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DISTANCE</p>
          <p className="Sub_Title">Definition 2.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> be vectors in Rⁿ. The distance
              between <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> is the measure of how far apart
              these vectors are in a given space. We denote the distance between
              <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> by d
              <span className="Italic">(u, v)</span> .
            </p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              If u = (u₁, u₂, ..., uₙ) & v = (v₁, v₂, ..., vₙ), then the
              distance between <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> is:
            </p>
          </div>
          <div className="Example_Label">
            <p>Example D</p>
          </div>
          <div className="Paragraph_Topic">
            <p>Determine the distance between the following given vectors.</p>
          </div>
          <div className="Solution_Example">
            <p className="label">1). (9, -7), (5, -7)</p>
            <div className="start">
              <p className="left">d(u, v)</p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                (u₁ - v₁)² + (u₂ - v₂)²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                (9 - 5)² + (-7 - (-7))²
              </p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                (4)²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">4</p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">2). (-5, 2, 1), (-5, 5, 4)</p>
            <div className="start">
              <p className="left">d(u, v)</p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                (u₁ - v₁)² + (u₂ - v₂)² + (u₃ - v₃)²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                (-5 - (-5))² + (2 - 5)² + (1 - 4)²
              </p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>
                (-3)² + (-3)²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>9 + 9
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>18
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                3<span className="squareRoot_Symbol">&radic;</span>2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="topic10" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">PROPERTIES OF DISTANCE</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                1. The distance between two vectors is always non-negative. That
                is d(u, v) ≥ 0.
              </p>
              <p className="Label">2. d(u, v) = 0 iff. u = v.</p>
              <p className="Label">3. d(u, v) = d(v, u)</p>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Bold">Euclidean Plane E²</p>
            <p className="Note">
              The Euclidean Plane E² is a vector space R² equipped with the
              distance function d.
            </p>
          </div>

          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description two">
              <div className="left">2-space</div>
              <div className="right">
                Let u and v be vectors in R². Try entering its corresponding x
                and y values and observe its distance.
              </div>
            </div>
            <div className="Side_By_Side">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Label">Vectors</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>u = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={distance.x1}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setDistance({
                                ...distance,
                                x1: 0,
                              });
                            } else {
                              setDistance({
                                ...distance,
                                x1: parseInt(e.target.value),
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
                          value={distance.y1}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setDistance({
                                ...distance,
                                y1: 0,
                              });
                            } else {
                              setDistance({
                                ...distance,
                                y1: parseInt(e.target.value),
                              });
                            }
                          }}
                        />
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>v = (</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="[0-99]*"
                          value={distance.x2}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setDistance({
                                ...distance,
                                x2: 0,
                              });
                            } else {
                              setDistance({
                                ...distance,
                                x2: parseInt(e.target.value),
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
                          value={distance.y2}
                          maxLength={2}
                          onChange={(e) => {
                            if (e.target.value === 0) {
                              setDistance({
                                ...distance,
                                y2: 0,
                              });
                            } else {
                              setDistance({
                                ...distance,
                                y2: parseInt(e.target.value),
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
                      <button onClick={() => solveDistance()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div className="Label">Distance</div>
                  <div className="Solution_Example">
                    <div className="solution">
                      <p className="left">d (u, v)</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <span className="squareRoot_Symbol">&radic;</span>
                          (u₁ - v₁)² + (u₂ - v₂)²
                        </div>
                      </p>
                    </div>
                    <div className="solution">
                      <p className="left">d (u, v)</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <span className="squareRoot_Symbol">&radic;</span>(
                          <div
                            id="rectangle-12-1"
                            className="Output_Rectangles"
                          ></div>{" "}
                          -{" "}
                          <div
                            id="rectangle-11-1"
                            className="Output_Rectangles"
                          ></div>
                          <span>)² + (</span>
                          <div
                            id="rectangle-10-1"
                            className="Output_Rectangles"
                          ></div>{" "}
                          -{" "}
                          <div
                            id="rectangle-9-1"
                            className="Output_Rectangles"
                          ></div>
                          )²
                        </div>
                      </p>
                    </div>
                    <div className="solution">
                      <p className="left">d (u, v)</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <div
                            id="rectangle-8"
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
        </div>
      </div>

      {/* DOT PRODUCT */}
      <div id="topic11" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DOT PRODUCT</p>
          <p className="Sub_Title">Definition 2.4</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              The dot product, also known as Euclidean inner product or scalar
              product, measures the alignment between two vectors based on the
              directions in which they point. The dot product of u and v is
              denoted by u ⋅ v .
            </p>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">Dot Product with Angle</p>
            <p className="Explanation">
              Let u & v be a vector in R² or R³ , and θ be the angle between u &
              v. Then the dot product of u & v is:
            </p>
          </div>

          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Light_Blue">
                <p>u ⋅ v = ||u|| ||v|| cos θ</p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Topic_Visual">
                <div className="Visual_Holder image">
                  <img src={image2} alt="Graph Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="Bullet_Topic">
            <p className="Title">Component Form of the Dot Product</p>
            <p className="Explanation">Let u & v be vectors in Rⁿ .</p>
            <p className="Explanation">
              If u = (u₁, u₂, ..., uₙ ) & v = (v₁, v₂, ..., vₙ) , then the dot
              product of u & v is:
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue">
              <p>u ⋅ v = u₁v₁ + u₂v₂ + ... + uₙvₙ</p>
            </div>
          </div>

          <div class="Example_Label">
            <p>Example E</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Determine the dot product between the following given vectors:
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">1.) u = (1, 1), v = (2,-2), θ = 90°</p>
            <div className="start">
              <p className="left">u ⋅ v</p>
              <p className="center">=</p>
              <p className="right">|| u || || v || cos θ</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                (<span className="squareRoot_Symbol">&radic;</span>1² + 1²) (
                <span className="squareRoot_Symbol">&radic;</span>2² + (-2)²)
                cos 90°
              </p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                (<span className="squareRoot_Symbol">&radic;</span>2) ( 2
                <span className="squareRoot_Symbol">&radic;</span>2) (0)
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">0</p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">2.) u = (-4, 2, 1), v = (4, 0, 3), θ = 55°</p>
            <div className="start">
              <p className="left">u ⋅ v</p>
              <p className="center">=</p>
              <p className="right">|| u || || v || cos θ</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                (<span className="squareRoot_Symbol">&radic;</span>(-4)² + 2² +
                1²) (<span className="squareRoot_Symbol">&radic;</span>4² + 4² +
                3²) cos 55°
              </p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>17
                  </span>
                </div>
                <span>(4, -1)</span>
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <div className="large">(</div>
                <div className="fraction">
                  <span className="upper">4</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>17
                  </span>
                </div>
                <span>,</span>
                <div className="fraction">
                  <span className="upper">-1</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="squareRoot_Symbol">&radic;</span>17
                  </span>
                </div>
                <div className="large">)</div>
              </p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">3.) u = (12, -3), v = (7, 6)</p>
            <div className="start">
              <p className="left">u ⋅ v</p>
              <p className="center">=</p>
              <p className="right">u₁v₁ + u₂v₂</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(12)(7) + (-3)(6)</p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">84 - 18</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">66</p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">4.) u = (-2, 5, 0), v = (1, -8, -4)</p>
            <div className="start">
              <p className="left">u ⋅ v</p>
              <p className="center">=</p>
              <p className="right">u₁v₁ + u₂v₂ + u₃v₃</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-2)(1) + (5)(-8) + (0)(-4)</p>
            </div>

            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-2 - 40</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-42</p>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Bold">Inner Product Space R²</p>
            <p className="Note">
              The Inner Product Space R² is a vector space R² equipped with the
              dot product function.
            </p>
          </div>
        </div>
      </div>
      <div id="topic11" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">PROPERTIES OF DOT PRODUCT</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 2.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let u, v, & w be vectors in Rn. and k be any scalars. Then:
              </p>
            </div>
          </div>

          <div className="Table">
            <div className="Side_By_Side_Row">
              <div className="left">
                <p>1. SYMMETRY PROPERTY</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>u ⋅ v = v ⋅ u</p>
                </div>
              </div>
            </div>

            <div className="Single_Row">
              <p>2. DISTRIBUTIVE PROPERTY</p>
            </div>

            <div className="Side_By_Side_Row dark">
              <div className="left">
                <p>Left Distributive Property over Addition of Vectors</p>
              </div>
              <div className="right">
                <p>Left Distributive Property over Addition of Vectors</p>
              </div>
            </div>

            <div className="Side_By_Side_Row noBorder">
              <div className="left">
                <div className="Light_Blue">
                  <p>u ⋅ (v + w) = u ⋅ v + u ⋅ w</p>
                </div>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>(u + v) ⋅ w = u ⋅ w + v ⋅ w</p>
                </div>
              </div>
            </div>

            <div className="Side_By_Side_Row dark">
              <div className="left">
                <p>Left Distributive Property over Subtraction of Vectors</p>
              </div>
              <div className="right">
                <p>Right Distributive Property over Subtraction of Vectors</p>
              </div>
            </div>

            <div className="Side_By_Side_Row noBorder">
              <div className="left">
                <div className="Light_Blue">
                  <p>u ⋅ (v - w) = u ⋅ v - u ⋅ w</p>
                </div>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>(u - v) ⋅ w = u ⋅ w - v ⋅ w</p>
                </div>
              </div>
            </div>

            <div className="Side_By_Side_Row">
              <div className="left">
                <p>3. HOMOGENEITY PROPERTY</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>k (u ⋅ v) = (ku) ⋅ v = u ⋅ (kv)</p>
                </div>
              </div>
            </div>

            <div className="Side_By_Side_Row">
              <div className="left">
                <p>4. POSITIVITY PROPERTYY</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>u ⋅ v ≥ 0 and v ⋅ v = 0 iff. v = 0</p>
                </div>
              </div>
            </div>

            <div className="Single_Row">
              <p>5.</p>
              <div className="Light_Blue">
                <p>
                  v ⋅ v = ||v||² or ||v|| ={" "}
                  <span className="squareRoot_Symbol">&radic;</span>v ⋅ v
                </p>
              </div>
            </div>

            <div className="Single_Row">
              <p>6.</p>
              <div className="Light_Blue">
                <p>
                  <span className="stack">
                    <div>→</div>
                  </span>
                  0 ⋅ v = v ⋅{" "}
                  <span className="stack">
                    <div>→</div>
                  </span>
                  0 = 0
                </p>
              </div>
            </div>
          </div>

          <div class="Example_Label">
            <p>Example F</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Let u = (-9, 4), v = (5, -7), and w = (-1. -3). Perform the
              following operations.
            </p>
          </div>

          <div className="Solution_Example">
            <p className="label">1.) (-3u) ⋅ v</p>
            <div className="start">
              <p className="left">By Theorem 2.4 (3),</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">(-3u) ⋅ v</p>
              <p className="center">=</p>
              <p className="right"> -3 (u ⋅ v)</p>
            </div>
            <div className="solution">
              <p className="left">Now,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">(-3u) ⋅ v</p>
              <p className="center">=</p>
              <p className="right">-3 (u₁v₁ + u₂v₂)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-3 (-9(5) + 4(-7))</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-3 (-45 + -28)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-3 (-73)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">219</p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">
              2.) <span className="squareRoot_Symbol">&radic;</span>u ⋅ u
            </p>
            <div className="start">
              <p className="left">By Theorem 2.4 (5),</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">
                <span className="squareRoot_Symbol">&radic;</span>u ⋅ u
              </p>
              <p className="center">=</p>
              <p className="right">|| u ||</p>
            </div>
            <div className="solution">
              <p className="left">Now,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">|| u ||</p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>x² + y²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>(-9)² + 4²
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>81 + 16
              </p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">
                <span className="squareRoot_Symbol">&radic;</span>97
              </p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">3.) (w - v) ⋅ u</p>
            <div className="start">
              <p className="left">First,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">w - v</p>
              <p className="center">=</p>
              <p className="right">(-1 - 5, -3 - (-7))</p>
            </div>
            <div className="start">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-6, 4)</p>
            </div>
            <div className="solution">
              <p className="left">Now,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">(w - v) ⋅ u</p>
              <p className="center">=</p>
              <p className="right">(-6, 4) ⋅ (-9, 4)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-6)(-9) + (4)(4)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">63 + 16</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">79</p>
            </div>
          </div>

          <div className="Solution_Example">
            <p className="label">4.) (w ⋅ 3u) + (w ⋅ -v)</p>
            <div className="start">
              <p className="left">By Theorem 2.4 (2, a),</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">(w ⋅ 3u) + (w ⋅ -v)</p>
              <p className="center">=</p>
              <p className="right">w ⋅ (3u + -v)</p>
            </div>
            <div className="solution">
              <p className="left">First,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="start">
              <p className="left">3u</p>
              <p className="center">=</p>
              <p className="right">3(-9, 4)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-27, 12)</p>
            </div>
            <div className="solution">
              <p className="left">Now,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="solution">
              <p className="left">3u + -v</p>
              <p className="center">=</p>
              <p className="right">(-27, 12) + (-5, 7)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(-32, 19)</p>
            </div>
            <div className="solution">
              <p className="left">Finally,</p>
              <p className="center"></p>
              <p className="right"></p>
            </div>
            <div className="solution">
              <p className="left">w ⋅ (3u + -v)</p>
              <p className="center">=</p>
              <p className="right">(-1, -3) ⋅ (-32, 19)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">((-1)(-32) + (-3)(19))</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">(32 - 57)</p>
            </div>
            <div className="solution">
              <p className="left"></p>
              <p className="center">=</p>
              <p className="right">-25</p>
            </div>
          </div>
        </div>
      </div>

      {/* ANGLE BETWEEN TWO VECTORS */}
      <div id="topic12" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">ANGLE BETWEEN TWO VECTORS</p>
          <p className="Sub_Title">Definition 2.5</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let u & v be any nonzero vectors in Rⁿ . Then the angle θ between
              u & v is:
            </p>
          </div>

          <div className="Light_Blue_Holder">
            <div className="Light_Blue row">
              <p>θ = cos⁻¹</p>
              <div className="large">(</div>
              <div className="fraction">
                <span className="upper">u ⋅ v</span>
                <span className="divider blue"></span>
                <span className="bottom">||u|| ||v||</span>
              </div>
              <div className="large">)</div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              The angle between the zero vector and another vector is undefined.
            </p>
          </div>

          <div class="Example_Label">
            <p>Example G</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Determine the angle between the following vectors.</p>
          </div>
          <div className="Paragraph_Topic">
            <p>1.) u = (-4, 11) v = (0, -2)</p>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">Finding || u ||:</p>
                <div className="start">
                  <p className="left">|| u ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>(-4)² +
                    11²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>16 + 121
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>137
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <p className="label">Finding || v ||:</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>0² + (-2)²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>4
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">Substituting to θ:</p>
                <div className="start">
                  <p className="left">θ</p>
                  <p className="center">=</p>
                  <p className="right">
                    cos⁻¹ <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">u ⋅ v</span>
                      <span className="divider"></span>
                      <span className="bottom">||u|| ||v||</span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    cos⁻¹ <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">(-4)(0) + (11)(-2)</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        (<span className="squareRoot_Symbol">&radic;</span>137)
                        (2)
                      </span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    cos⁻¹ <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">-22</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        2<span className="squareRoot_Symbol">&radic;</span>137
                      </span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">≈</p>
                  <p className="right">160.02°</p>
                </div>
              </div>
            </div>
            <div className="Right_Side"></div>
          </div>

          <div className="Paragraph_Topic">
            <p>2.) u = (3, 7) v = (-2, 5)</p>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">Finding || u ||:</p>
                <div className="start">
                  <p className="left">|| u ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>3² + 7²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>9 + 49
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>58
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <p className="label">Finding || v ||:</p>
                <div className="start">
                  <p className="left">|| v ||</p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>(-2)² + 5²
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>4 + 25
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    <span className="squareRoot_Symbol">&radic;</span>29
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Solution_Example">
                <p className="label">Substituting to θ:</p>
                <div className="start">
                  <p className="left">θ</p>
                  <p className="center">=</p>
                  <p className="right">
                    cos⁻¹ <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">u ⋅ v</span>
                      <span className="divider"></span>
                      <span className="bottom">||u|| ||v||</span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    cos⁻¹ <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">(3)(-2) + (7)(5)</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        (<span className="squareRoot_Symbol">&radic;</span>58) (
                        <span className="squareRoot_Symbol">&radic;</span>29)
                      </span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>

                <div className="solution">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">
                    cos⁻¹ <div className="large">(</div>
                    <div className="fraction">
                      <span className="upper">29</span>
                      <span className="divider"></span>
                      <span className="bottom">
                        29<span className="squareRoot_Symbol">&radic;</span>2
                      </span>
                    </div>
                    <div className="large">)</div>
                  </p>
                </div>
                <div className="solution">
                  <p className="left"></p>
                  <p className="center">≈</p>
                  <p className="right">45°</p>
                </div>
              </div>
            </div>
            <div className="Right_Side"></div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              The norm, distance, and dot product are scalar, not another
              vector.
            </p>

            <p className="Note">
              The norm, distance, and dot product are scalar, not another
              vector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson2;
