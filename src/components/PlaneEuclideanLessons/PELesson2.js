import React, { useEffect, useState } from "react";

//Images
import image2 from "../../assets/images/Lessons Images/PELesson2/image-2.png";

import { calculateDistance, calculateNorm, calculateNorm3D } from "../../utils";
import toast from "react-hot-toast";

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
          <div className="Paragraph_Topic">
            <div className="Bullet_Topic">
              <p className="Title">Norm of Vector v in R²</p>
              <p className="Explanation">
                Let v = (x, y) be a vector in R² . Then the norm of v is:
              </p>
            </div>
            <div className="Light_Blue_Holder">
              <div className="Light_Blue">
                <p>
                  || v || =
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">x² + y²</span>
                  </span>
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
                  || v || ={" "}
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">x² + y² + z²</span>
                  </span>
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
                  || v || ={" "}
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">
                      v₁² + v₂² + ... + vₙ²
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic">
            <p>Determine the norm of the following vectors.</p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example">
                  <p className="label">1.) v = (7, 2)</p>
                  <div className="start">
                    <p className="left">|| v ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">72 + 22</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">49 + 4</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">53</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <p className="label">2.) v = (5, -8)</p>
                  <div className="start">
                    <p className="left">|| v ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">5² + (-8)²</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">25 + 64</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">89</span>
                      </span>
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
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y² + z²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">
                          6² + 1² + (-4)²
                        </span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">36 + 1 + 16</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">53</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="Solution_Example">
                  <p className="label">4.) v = (0, -3, 7)</p>
                  <div className="start">
                    <p className="left">|| v ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y² + z²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">
                          0² + (3)² + 7²
                        </span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">9 + 49</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">58</span>
                      </span>
                    </p>
                  </div>
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
            <div className="Side_By_Side noGap">
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
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={norm.x || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setNorm({
                                  ...norm,
                                  x: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setNorm({
                                  ...norm,
                                  x: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>y</p>
                        <input
                          type="text"
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={norm.y || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setNorm({
                                  ...norm,
                                  y: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setNorm({
                                  ...norm,
                                  y: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
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
                  <div class="Label">Norm</div>
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="Squareroot_Container">
                          <span className="squareRoot_Symbol">&radic;</span>
                          <span className="squareRoot_Formula">x² + y²</span>
                        </span>
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol large">
                              &radic;
                            </span>
                            <span className="squareRoot_Formula">
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
                            </span>
                          </span>
                        </div>
                      </p>
                    </div>

                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <div
                            id="rectangle-a"
                            className="Output_Rectangles"
                          ></div>
                          ■
                        </div>
                      </p>
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
            <div className="Side_By_Side noGap">
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
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={norm2.x || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setNorm2({
                                  ...norm2,
                                  x: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setNorm2({
                                  ...norm2,
                                  x: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>y</p>
                        <input
                          type="text"
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={norm2.y || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setNorm2({
                                  ...norm2,
                                  y: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setNorm2({
                                  ...norm2,
                                  y: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>z</p>
                        <input
                          type="text"
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={norm2.z || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setNorm2({
                                  ...norm2,
                                  z: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setNorm2({
                                  ...norm2,
                                  z: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
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
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <span className="Squareroot_Container">
                          <span className="squareRoot_Symbol">&radic;</span>
                          <span className="squareRoot_Formula">
                            x² + y² + z²
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol large">
                              &radic;
                            </span>
                            <span className="squareRoot_Formula">
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
                            </span>
                          </span>
                        </div>
                      </p>
                    </div>

                    <div className="start">
                      <p className="left">|| v ||</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <div
                            id="rectangle-aa"
                            className="Output_Rectangles"
                          ></div>
                          ■
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
              <p className="Label">THEOREM 2.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let <span className="Italic">v</span> be a vector in Rⁿ, and
                &nbsp;
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
                    <sup>→</sup>
                    <p>0</p>
                  </span>{" "}
                  (zero vector)
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
            <p>Determine the norm of the following vectors:</p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
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
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">x² + y²</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left">|| v ||</p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol large_formula">
                      &radic;
                    </span>
                    <span className="squareRoot_Formula large_formula">
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
                    </span>
                  </span>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol large_formula">
                      &radic;
                    </span>
                    <span className="squareRoot_Formula large_formula">
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
                    </span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol withFraction">
                      &radic;
                    </span>
                    <span className="squareRoot_Formula withFraction">
                      <div className="fraction">
                        <span className="upper">25</span>
                        <span className="divider"></span>
                        <span className="bottom">25</span>
                      </div>
                    </span>
                  </span>
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

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example">
              <p className="label">
                2.) v =<span className="large">(</span>
                <div className="fraction">
                  <span className="upper">-5</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="Squareroot_Container">
                      <span className="squareRoot_Symbol">&radic;</span>
                      <span className="squareRoot_Formula">65</span>
                    </span>
                  </span>
                </div>
                ,
                <div className="fraction">
                  <span className="upper">2</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="Squareroot_Container">
                      <span className="squareRoot_Symbol">&radic;</span>
                      <span className="squareRoot_Formula">65</span>
                    </span>
                  </span>
                </div>
                ,
                <div className="fraction">
                  <span className="upper">-6</span>
                  <span className="divider"></span>
                  <span className="bottom">
                    <span className="Squareroot_Container">
                      <span className="squareRoot_Symbol">&radic;</span>
                      <span className="squareRoot_Formula">65</span>
                    </span>
                  </span>
                </div>
                <span className="large">)</span>
              </p>
              <div className="start">
                <p className="left">|| v ||</p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">x² + y² + z²</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol large_formula">
                      &radic;
                    </span>
                    <span className="squareRoot_Formula large_formula">
                      <span className="large">(</span>
                      <div className="fraction">
                        <span className="upper">-5</span>
                        <span className="divider"></span>
                        <span className="bottom">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">65</span>
                          </span>
                        </span>
                      </div>
                      <span className="large">)</span>² +{" "}
                      <span className="large">(</span>
                      <div className="fraction">
                        <span className="upper">2</span>
                        <span className="divider"></span>
                        <span className="bottom">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">65</span>
                          </span>
                        </span>
                      </div>
                      <span className="large">)</span>²+{" "}
                      <span className="large">(</span>
                      <div className="fraction">
                        <span className="upper">-6</span>
                        <span className="divider"></span>
                        <span className="bottom">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">65</span>
                          </span>
                        </span>
                      </div>
                      <span className="large">)</span>²
                    </span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol large_formula">
                      &radic;
                    </span>
                    <span className="squareRoot_Formula large_formula">
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
                    </span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol withFraction">
                      &radic;
                    </span>
                    <span className="squareRoot_Formula withFraction">
                      <div className="fraction">
                        <span className="upper">65</span>
                        <span className="divider"></span>
                        <span className="bottom">65</span>
                      </div>
                    </span>
                  </span>
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

              <div className="Paragraph_Topic block paddingLeft2 ">
                <p>
                  The vector{" "}
                  <span className="Light_Blue fraction">
                    <p>
                      u ={" "}
                      <span className="fraction">
                        <span className="upper">v</span>
                        <span className="divider blue"></span>
                        <span className="bottom">||v||</span>
                      </span>
                    </p>
                  </span>{" "}
                  is the unit vector (has a norm 1) in the direction of v.
                </p>
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
          <div className="Paragraph_Topic paddingLeft2">
            <p>Let u be vector in R².</p>
          </div>

          <div className="Paragraph_Topic equation paddingLeft2">
            <p>
              The unit vector in the direction of v is u ={" "}
              <span className="fraction">
                <span className="upper">v</span>
                <span className="divider"></span>
                <span className="bottom">||v||</span>
              </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example">
                  <p className="label">Finding || v ||</p>
                  <div className="start">
                    <p className="left">|| v ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">4² + (-1)²</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">16 + 1</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">17</span>
                      </span>
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">17</span>
                          </span>
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">17</span>
                          </span>
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">17</span>
                          </span>
                        </span>
                      </div>
                      <span>,</span>
                      <div className="fraction">
                        <span className="upper">-1</span>
                        <span className="divider"></span>
                        <span className="bottom">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">17</span>
                          </span>
                        </span>
                      </div>
                      <div className="large">)</div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>2.) v = (1, 5, -3)</p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <p>Let u be vector in R³.</p>
          </div>

          <div className="Paragraph_Topic equation paddingLeft2">
            <div>
              The unit vector in the direction of v is u ={" "}
              <div className="fraction">
                <span className="upper">v</span>
                <span className="divider"></span>
                <span className="bottom">||v||</span>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example">
                  <p className="label">Finding || v ||</p>
                  <div className="start">
                    <p className="left">|| v ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y² + z²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">
                          1² + + 5² (-3)²
                        </span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">1 + 25 + 9</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">35</span>
                      </span>
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">35</span>
                          </span>
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">35</span>
                          </span>
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">35</span>
                          </span>
                        </span>
                      </div>
                      <span>,</span>
                      <div className="fraction">
                        <span className="upper">5</span>
                        <span className="divider"></span>
                        <span className="bottom">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">35</span>
                          </span>
                        </span>
                      </div>
                      <span>,</span>
                      <div className="fraction">
                        <span className="upper">-3</span>
                        <span className="divider"></span>
                        <span className="bottom">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">35</span>
                          </span>
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
      </div>

      {/* DISTANCE */}
      <div id="topic10" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">DISTANCE</p>
          <p className="Sub_Title">Definition 2.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block">
            <p>
              Let <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> be vectors in Rⁿ. The distance
              between <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> is the measure of how far apart
              these vectors are in a given space. We denote the distance
              between&nbsp;
              <span className="Italic">u</span> &{" "}
              <span className="Italic">v</span> by d
              <span className="Italic">(u, v)</span> .
            </p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              <div className="Side_By_Side">
                <div className="Left_Side">
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">If u</p>
                      <p className="center">=</p>
                      <p className="right">(u₁, u₂, ..., uₙ)</p>
                    </div>
                    <div className="start">
                      <p className="left">v</p>
                      <p className="center">=</p>
                      <p className="right">(v₁, v₂, ..., vₙ),</p>
                    </div>
                  </div>
                </div>
                <div className="Right_Side larger">
                  <div className="Paragraph_Topic block">
                    <p>&</p>
                    <p style={{ marginTop: "20px" }}>
                      then the distance between{" "}
                      <span className="Italic">u</span> &{" "}
                      <span className="Italic">v</span> is:
                    </p>
                  </div>
                </div>
              </div>
            </p>
          </div>
          <div className="Light_Blue_Holder">
            <div className="Light_Blue start">
              <p>d (u, v) = || u - v ||</p>
              <p>
                ={" "}
                <span className="Squareroot_Container">
                  <span className="squareRoot_Symbol">&radic;</span>
                  <span className="squareRoot_Formula">
                    (u₁ - v₁)² + (u₂ - v₂)² + ... + (uₙ - vₙ)²
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="Example_Label">
            <p>Example D</p>
          </div>
          <div className="Paragraph_Topic">
            <p>Determine the distance between the following given vectors.</p>
          </div>
          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example">
              <p className="label">1). u = (9, -7), v = (5, -7)</p>
              <div className="start">
                <p className="left">d(u, v)</p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">
                      (u₁ - v₁)² + (u₂ - v₂)²
                    </span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">
                      (9 - 5)² + (-7 - (-7))²
                    </span>
                  </span>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">(4)²</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">4</p>
              </div>
            </div>

            <div className="Solution_Example">
              <p className="label">2). u = (-5, 2, 1), v = (-5, 5, 4)</p>
              <div className="start">
                <p className="left">d(u, v)</p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">
                      (u₁ - v₁)² + (u₂ - v₂)² + (u₃ - v₃)²
                    </span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">
                      (-5 - (-5))² + (2 - 5)² + (1 - 4)²
                    </span>
                  </span>
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">(-3)² + (-3)²</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">9 + 9</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">18</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  3
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">2</span>
                  </span>
                </p>
              </div>
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
            <div className="Paragraph_Topic paddingLeft2">
              <p>
                The Euclidean Plane E² is a vector space R² equipped with the
                distance function d.
              </p>
            </div>
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
            <div className="Side_By_Side noGap">
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
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={distance.x1 || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setDistance({
                                  ...distance,
                                  x1: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setDistance({
                                  ...distance,
                                  x1: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>y</p>
                        <input
                          type="text"
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={distance.y1 || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setDistance({
                                  ...distance,
                                  y1: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setDistance({
                                  ...distance,
                                  y1: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
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
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={distance.x2 || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setDistance({
                                  ...distance,
                                  x2: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setDistance({
                                  ...distance,
                                  x2: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="-?\d*\.?\d{0,2}" // Updated pattern to allow negative numbers with up to two decimal places
                          value={distance.y2 || ""}
                          maxLength={6} // Increased maxLength to accommodate the optional '-' sign and decimal part
                          onChange={(e) => {
                            const value = e.target.value;

                            console.log(value);
                            // Check if the input value starts with '-' and is not followed by another '-' or empty
                            if (
                              value === "-" ||
                              (value.startsWith("-") &&
                                !value.startsWith("--") &&
                                value !== "-")
                            ) {
                              if (value === "-" || value >= -999) {
                                setDistance({
                                  ...distance,
                                  y2: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
                            } else {
                              // Allow empty value or valid decimal value with up to two decimal places
                              const decimalPattern = /^-?\d*\.?\d{0,2}$/;
                              if (
                                (value === "" || decimalPattern.test(value)) &&
                                value <= 999
                              ) {
                                setDistance({
                                  ...distance,
                                  y2: value,
                                });
                              } else {
                                toast.error(
                                  "Value can only be between -999 to 999"
                                );
                              }
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
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">
                              (u₁ - v₁)² + (u₂ - v₂)²
                            </span>
                          </span>
                        </div>
                      </p>
                    </div>
                    <div className="solution">
                      <p className="left">d (u, v)</p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol large">
                              &radic;
                            </span>
                            <span className="squareRoot_Formula">
                              (
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
                            </span>
                          </span>
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
                          ■
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
          <div className="Paragraph_Topic">
            <div className="Bullet_Topic">
              <p className="Title">Dot Product with Angle</p>
              <p className="Explanation">
                Let u & v be a vector in R² or R³ , and θ be the angle between u
                & v. Then the dot product of u & v is:
              </p>
            </div>
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

          <div className="Paragraph_Topic">
            <div className="Bullet_Topic">
              <p className="Title">Component Form of the Dot Product</p>
              <p className="Explanation">Let u & v be vectors in Rⁿ .</p>
              <p className="Explanation">
                <div className="Side_By_Side">
                  <div className="Left_Side">
                    <div className="Solution_Example">
                      <div className="start">
                        <p className="left">If u</p>
                        <p className="center">=</p>
                        <p className="right">(u₁, u₂, ..., uₙ)</p>
                      </div>
                      <div className="start">
                        <p className="left">v</p>
                        <p className="center">=</p>
                        <p className="right">(v₁, v₂, ..., vₙ),</p>
                      </div>
                    </div>
                  </div>
                  <div className="Right_Side larger">
                    <div className="Paragraph_Topic block">
                      <p>&</p>
                      <p style={{ marginTop: "20px" }}>
                        then the dot product of u & v is:
                      </p>
                    </div>
                  </div>
                </div>
              </p>
            </div>
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

          <div className="Paragraph_Topic paddingLeft2">
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
                  (
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">1² + 1²</span>
                  </span>
                  ) ({" "}
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">2² + (-2)²</span>
                  </span>
                  ) cos 90°
                </p>
              </div>

              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  (
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">2</span>
                  </span>
                  ) ( 2{" "}
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">2</span>
                  </span>
                  ) (0)
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">0</p>
              </div>
            </div>

            <div className="Solution_Example">
              <p className="label">
                2.) u = (-4, 2, 1), v = (4, 0, 3), θ = 55°
              </p>
              <div className="start">
                <p className="left">u ⋅ v</p>
                <p className="center">=</p>
                <p className="right">|| u || || v || cos θ</p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right noGap">
                  (
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">(-4)² + 2² + 1²</span>
                  </span>
                  ) ({" "}
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">4² + 4² + 3²</span>
                  </span>
                  ) cos 55°
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
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">17</span>
                      </span>
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
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">17</span>
                      </span>
                    </span>
                  </div>
                  <span>,</span>
                  <div className="fraction">
                    <span className="upper">-1</span>
                    <span className="divider"></span>
                    <span className="bottom">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">17</span>
                      </span>
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
                  <p>
                    u ⋅ v ≥ 0 and v ⋅ v = 0 iff. v ={" "}
                    <span className="stack">
                      <sup>→</sup>
                      <p>0</p>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="Single_Row">
              <p>5.</p>
              <div className="Light_Blue">
                <p>
                  v ⋅ v = ||v||² or ||v|| ={" "}
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">v ⋅ v</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="Single_Row">
              <p>6.</p>
              <div className="Light_Blue">
                <p>
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>{" "}
                  ⋅ v = v ⋅{" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>{" "}
                  = 0
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

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Solution_Example largerLeft2">
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

            <div className="Solution_Example largerLeft2">
              <p className="label">
                2.){" "}
                <span className="Squareroot_Container">
                  <span className="squareRoot_Symbol">&radic;</span>
                  <span className="squareRoot_Formula">u ⋅ u</span>
                </span>
              </p>
              <div className="start">
                <p className="left">By Theorem 2.4 (5),</p>
                <p className="center"></p>
                <p className="right"></p>
              </div>
              <div className="start">
                <p className="left">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">u ⋅ u</span>
                  </span>
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
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">x² + y²</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">(-9)² + 4²</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">81 + 16</span>
                  </span>
                </p>
              </div>
              <div className="solution">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  <span className="Squareroot_Container">
                    <span className="squareRoot_Symbol">&radic;</span>
                    <span className="squareRoot_Formula">97</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="Solution_Example largerLeft2">
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

            <div className="Solution_Example largerLeft2">
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

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example">
                  <p className="label">Finding || u ||:</p>
                  <div className="start">
                    <p className="left">|| u ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">(-4)² + 11²</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">16 + 121</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">137</span>
                      </span>
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
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">0² + (-2)²</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">4</span>
                      </span>
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
                          (
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">137</span>
                          </span>
                          ) (2)
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
                          2
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">137</span>
                          </span>
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
          </div>

          <div className="Paragraph_Topic">
            <p>2.) u = (3, 7) v = (-2, 5)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Solution_Example">
                  <p className="label">Finding || u ||:</p>
                  <div className="start">
                    <p className="left">|| u ||</p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">3² + 7²</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">9 + 49</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">58</span>
                      </span>
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
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">x² + y²</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">(-2)² + 5²</span>
                      </span>
                    </p>
                  </div>

                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">4 + 25</span>
                      </span>
                    </p>
                  </div>
                  <div className="solution">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">
                      <span className="Squareroot_Container">
                        <span className="squareRoot_Symbol">&radic;</span>
                        <span className="squareRoot_Formula">29</span>
                      </span>
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
                          (
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">58</span>
                          </span>
                          ) (
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">29</span>
                          </span>
                          )
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
                          29
                          <span className="Squareroot_Container">
                            <span className="squareRoot_Symbol">&radic;</span>
                            <span className="squareRoot_Formula">2</span>
                          </span>
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
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              The norm, distance, and dot product are scalar, not another
              vector.
            </p>

            <p className="Note">
              Two vectors are parallel if one of the vectors is a scalar
              multiple of the other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson2;
