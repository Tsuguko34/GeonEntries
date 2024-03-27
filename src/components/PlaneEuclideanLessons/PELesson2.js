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
              <div className="Vertical">
                <div className="Solution_Example">
                  <p className="given">1.) v = (7, 2)</p>
                  <p className="start">
                    || v || = <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>72 + 22
                  </p>

                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>49 + 4
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>53
                  </p>
                </div>
                <div className="Solution_Example">
                  <p className="given">2.) v = (5, -8)</p>
                  <p className="start">
                    || v || = <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>5² +
                    (-8)²
                  </p>

                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>25 + 64
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>89
                  </p>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Vertical">
                <div className="Solution_Example">
                  <p className="given">3.) v = (7, 2)</p>
                  <p className="start">
                    || v || = <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>72 + 22
                  </p>

                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>49 + 4
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>53
                  </p>
                </div>
                <div className="Solution_Example">
                  <p className="given">4.) v = (5, -8)</p>
                  <p className="start">
                    || v || = <span className="squareRoot_Symbol">&radic;</span>
                    x² + y²
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>5² +
                    (-8)²
                  </p>

                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>25 + 64
                  </p>
                  <p className="solution">
                    = <span className="squareRoot_Symbol">&radic;</span>89
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
            <p className="given">
              1.) v = <span className="large">(</span>
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
            <p className="start">
              || v || = <span className="squareRoot_Symbol">&radic;</span>
              x² + y²
            </p>
            <p className="solution">
              = <span className="squareRoot_Symbol">&radic;</span>
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

            <p className="solution">
              = <span className="squareRoot_Symbol">&radic;</span>
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
            <p className="solution">
              = <span className="squareRoot_Symbol">&radic;</span>
              <div className="fraction">
                <span className="upper">25</span>
                <span className="divider"></span>
                <span className="bottom">25</span>
              </div>
            </p>
            <p className="solution">= 1</p>
            <p className="solution">
              Since its norm is equal to 1, then v is a unit vector.
            </p>
          </div>
          <div className="Solution_Example">
            <p className="given">
              2.) v = <span className="large">(</span>
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
            <p className="start">
              || v || = <span className="squareRoot_Symbol">&radic;</span>
              x² + y² + z²
            </p>
            <p className="solution">
              = <span className="squareRoot_Symbol">&radic;</span>
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
            <p className="solution">
              = <span className="squareRoot_Symbol">&radic;</span>
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
            <p className="solution">
              = <span className="squareRoot_Symbol">&radic;</span>
              <div className="fraction">
                <span className="upper">65</span>
                <span className="divider"></span>
                <span className="bottom">65</span>
              </div>
            </p>
            <p className="solution">= 1</p>
            <p className="solution">
              Since its norm is equal to 1, then v is a unit vector.
            </p>
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
          <div className="Solution_Example">
            <p className="given">1.) v = (4, −1)</p>
            <p className="start">Let u be vector in R2.</p>
            <div className="start">
              The unit vector in the direction of v is u ={" "}
              <div className="fraction">
                <span className="upper">v</span>
                <span className="divider"></span>
                <span className="bottom">||v||</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson2;
