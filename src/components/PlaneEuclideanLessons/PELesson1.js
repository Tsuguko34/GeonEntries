import React, { useEffect, useState } from "react";

//Images
import l1p1 from "../../assets/images/Lessons Images/PELesson1/l1p1.png";
import l1p2 from "../../assets/images/Lessons Images/PELesson1/l1p2.png";
import headtail1 from "../../assets/images/Lessons Images/PELesson1/head-tail-1.png";
import direction_new from "../../assets/images/Lessons Images/PELesson1/direction_new.png";
import magnitude_new from "../../assets/images/Lessons Images/PELesson1/magnitude_new.png";
import magnitude_direction from "../../assets/images/Lessons Images/PELesson1/magnitude-direction-1.png";
//Videos
import ExampleA1 from "../../assets/videos/PELesson1/Example A1.mp4";
import ExampleA2 from "../../assets/videos/PELesson1/Example A2.mp4";
import ExampleB1 from "../../assets/videos/PELesson1/Example B1.mp4";
import ExampleB2 from "../../assets/videos/PELesson1/Example B2.mp4";
import ExampleC from "../../assets/videos/PELesson1/Example C.mp4";

import {
  GetWindowWidth,
  calculateComponentForm,
  calculateVector,
  graphVector,
  performOperations,
  performOperations3D,
} from "../../utils";

function PELesson1() {
  const windowWidth = GetWindowWidth();
  const [canvasSize, setCanvasSize] = useState({
    height: 335,
    width: 510,
  });

  useEffect(() => {
    if (windowWidth <= 320) {
      setCanvasSize({ height: 160, width: 190 });
    } else if (windowWidth <= 430) {
      setCanvasSize({ height: 190, width: 245 });
    } else if (windowWidth <= 680) {
      setCanvasSize({ height: 210, width: 295 });
    }
  }, [windowWidth]);

  const [exampleA, setExampleA] = useState({
    xAxis: 0,
    yAxis: 0,
  });

  const [exampleC2, setExampleC2] = useState({
    initialX: 0,
    initialY: 0,
    terminalX: 0,
    terminalY: 0,
  });

  const [exampleC3, setExampleC3] = useState({
    initialX: 0,
    initialY: 0,
    initialZ: 0,
    terminalX: 0,
    terminalY: 0,
    terminalZ: 0,
  });

  const [vectorOp1, setVectorOp1] = useState({
    vX: 0,
    vY: 0,
    wX: 0,
    wY: 0,
  });

  const [vectorOp2, setVectorOp2] = useState({
    vX: 0,
    vY: 0,
    vZ: 0,
    wX: 0,
    wY: 0,
    wZ: 0,
  });

  const solveVector1 = () => {
    if (
      !isNaN(vectorOp1.vX) &&
      !isNaN(vectorOp1.vY) &&
      !isNaN(vectorOp1.wX) &&
      !isNaN(vectorOp1.wY)
    ) {
      performOperations(vectorOp1.vX, vectorOp1.vY, vectorOp1.wX, vectorOp1.wY);
    }
  };

  const solveVector2 = () => {
    if (
      !isNaN(vectorOp2.vX) &&
      !isNaN(vectorOp2.vY) &&
      !isNaN(vectorOp2.vZ) &&
      !isNaN(vectorOp2.wX) &&
      !isNaN(vectorOp2.wY) &&
      !isNaN(vectorOp2.wZ)
    ) {
      performOperations3D(
        vectorOp2.vX,
        vectorOp2.vY,
        vectorOp2.vZ,
        vectorOp2.wX,
        vectorOp2.wY,
        vectorOp2.wZ
      );
    }
  };

  const graphExample1 = () => {
    if (!isNaN(exampleA.xAxis) && !isNaN(exampleA.yAxis))
      graphVector(
        exampleA.xAxis,
        exampleA.yAxis,
        canvasSize.width,
        canvasSize.height
      );
  };

  const solveExampleC2 = () => {
    if (
      !isNaN(exampleC2.initialX) &&
      !isNaN(exampleC2.initialY) &&
      !isNaN(exampleC2.terminalX) &&
      !isNaN(exampleC2.terminalY)
    ) {
      calculateVector(
        exampleC2.initialX,
        exampleC2.initialY,
        exampleC2.terminalX,
        exampleC2.terminalY
      );
    }
  };

  const solveExampleC3 = () => {
    console.log(exampleC3);
    if (
      !isNaN(exampleC3.initialX) &&
      !isNaN(exampleC3.initialY) &&
      !isNaN(exampleC3.initialZ) &&
      !isNaN(exampleC3.terminalX) &&
      !isNaN(exampleC3.terminalY) &&
      !isNaN(exampleC3.terminalZ)
    ) {
      calculateComponentForm(
        exampleC3.initialX,
        exampleC3.initialY,
        exampleC3.initialZ,
        exampleC3.terminalX,
        exampleC3.terminalY,
        exampleC3.terminalZ
      );
    }
  };

  useEffect(() => {
    const videos = document.querySelectorAll("video");

    const handlePlay = (event) => {
      // Pause other videos when one video starts playing
      videos.forEach((otherVideo) => {
        if (otherVideo !== event.target) {
          otherVideo.pause();
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (!entry.isIntersecting && !video.paused) {
          // Pause the video if it's not in view and is currently playing
          video.pause();
        } else if (entry.isIntersecting && video.paused) {
          // Play the video if it's in view and is currently paused
          // Check if the document has been interacted with before trying to play
          document.documentElement.addEventListener(
            "click",
            () => {
              video.play().catch((error) => {
                console.error("Failed to play video:", error);
              });
            },
            { once: true }
          ); // Ensure the event listener runs only once
        }
      });
    });

    videos.forEach((video) => {
      observer.observe(video);
      video.addEventListener("play", handlePlay);
    });

    return () => {
      // Cleanup: remove event listeners and observers when component unmounts
      videos.forEach((video) => {
        observer.unobserve(video);
        video.removeEventListener("play", handlePlay);
      });
    };
  }, []);

  return (
    <div className="Topic_Container">
      {/* Vector Spaces */}
      <div id="topic1" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VECTOR SPACES</p>
          <p className="Sub_Title">Definition 1.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Bullet_Topic">
            <p className="Title">N-Space (Rⁿ)</p>
            <p className="Explanation">
              <p>•</p>set of all n-tuples
            </p>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">2-Space/2D Space (R²)</p>
            <p className="Explanation">
              <p>•</p>set of all ordered pairs (x, y) of real numbers
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={l1p1} alt="Graph Image" />
            </div>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">3-Space/3D Space (R³)</p>
            <p className="Explanation">
              <p>•</p>set of all ordered triples (x, y, z) of real numbers
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={l1p2} alt="Graph Image" />
            </div>
          </div>
        </div>
      </div>
      {/* Vectors */}
      <div id="topic2" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VECTORS</p>
          <p className="Sub_Title">Definition 1.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Vectors are graphically represented as a directed line segment
              that starts from the origin pointing from one point (tail) to
              another point (head).
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={headtail1} alt="Graph Image" />
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Vectors are usually denoted by lowercase letter such as v or u .
            </p>
          </div>
          <div className="Formula_Field">
            <div className="Formula">
              <p className="Label">in 2-SPACE:</p>
              <div className="Formula_Main">
                <div className="Formula_Part">v = (x, y)</div>
                <div className="Formula_Part">or</div>
                <div className="Formula_Part">
                  <p>v = </p>
                  <p className="Expression">&nbsp;[</p>
                  <p className="Vertical">
                    <p>x</p>
                    <p>y</p>
                  </p>
                  <p className="Expression">]</p>
                </div>
                <div className="Formula_Part vertical  center">
                  <p>Components:</p>
                  <p>&nbsp;&nbsp;(x, y)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Formula_Field">
            <div className="Formula">
              <p className="Label">in 3-SPACE:</p>
              <div className="Formula_Main">
                <div className="Formula_Part">v = (x, y, z)</div>
                <div className="Formula_Part">or</div>
                <div className="Formula_Part">
                  <p>v = </p>
                  <p className="Expression">&nbsp;[</p>
                  <p className="Vertical">
                    <p>x</p>
                    <p>y</p>
                    <p>z</p>
                  </p>
                  <p className="Expression">] </p>
                </div>
                <div className="Formula_Part vertical center">
                  <p>Components:</p>
                  <p>&nbsp;&nbsp;(x, y)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Illustrate each vector in the plane using a directed line segment.
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Label">{`1.) v = (4, 3)`}</div>
            <div className="Visual_Holder video">
              <video controls>
                <source src={ExampleA1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="Topic_Visual">
            <div className="Label">{`2.) u = (-5, -2)`}</div>
            <div className="Visual_Holder video">
              <video controls>
                <source src={ExampleA2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description">
              Enter a vector and observe its graphical representation on the 2D
              plane.
            </div>
            <div className="Graph_Plotting">
              <div className="Input_Group">
                <div className="Inputs">
                  <p>v = (</p>
                  <div className="vertical">
                    <p>x</p>
                    <input
                      type="text"
                      pattern="-?([0-9]|1[0-6])"
                      value={exampleA.xAxis || ""}
                      maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                          if (value === "-" || value >= -16) {
                            setExampleA({
                              ...exampleA,
                              xAxis: value,
                            });
                          }
                        } else {
                          const intValue = parseInt(value);
                          if (
                            value === "" || // Allow empty value
                            (!isNaN(intValue) &&
                              intValue >= -16 &&
                              intValue <= 16)
                          ) {
                            setExampleA({
                              ...exampleA,
                              xAxis: intValue,
                            });
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
                      pattern="[0-99]*"
                      value={exampleA.yAxis || ""}
                      maxLength={2}
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
                          if (value === "-" || value >= -16) {
                            setExampleA({
                              ...exampleA,
                              yAxis: value,
                            });
                          }
                        } else {
                          const intValue = parseInt(value);
                          if (
                            value === "" || // Allow empty value
                            (!isNaN(intValue) &&
                              intValue >= -16 &&
                              intValue <= 16)
                          ) {
                            setExampleA({
                              ...exampleA,
                              yAxis: intValue,
                            });
                          }
                        }
                      }}
                    />
                  </div>
                  <p>)</p>
                </div>
                <div className="Submit">
                  <button onClick={() => graphExample1()}>PLOT</button>
                </div>
              </div>
              <div className="Graph">
                <canvas
                  id="vectorCanvas"
                  width={canvasSize.width}
                  height={canvasSize.height}
                ></canvas>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>
              In 3D, vectors are represented using three coordinates (x, y, z),
              allowing them to move not only horizontally and vertically (like
              in 2D) but also in depth. This means they can extend along the x,
              y, and z axes, giving rise to a more comprehensive spatial
              understanding compared to the limited plane of a 2D graph.
            </p>
          </div>

          <div className="Example_Label">
            <p>Example B</p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Illustrate each vector in 3-space using a directed line segment
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Label">{`1.) v = (2, 5, 4)`}</div>
            <div className="Visual_Holder video">
              <video controls>
                <source src={ExampleB1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="Topic_Visual">
            <div className="Label">{`2.) u = (-1, 6, -3)`}</div>
            <div className="Visual_Holder video">
              <video controls>
                <source src={ExampleB2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              In a graphical representation of vector, the DIRECTION is
              indicated by the arrow-heads orientation, while the MAGNITUDE or
              NORM corresponds to the length of the arrow.
            </p>
            <div className="Note_Visual">
              <div className="Visual_Holder image">
                <img src={magnitude_direction} alt="Graph Image" />
              </div>
            </div>
            <p className="Note">
              ZERO VECTOR is a vector with no direction, and has both is initial
              and terminal points at the same location.
            </p>
            <div className="Note_Visual">
              <div className="Visual_Holder image">
                <img src={headtail1} alt="Graph Image" />
              </div>
            </div>

            <div className="Paragraph_Topic">
              <p className="withStack">
                Zero vector is denoted as
                <span className="stack">
                  <sup>→</sup>
                  <p>0</p>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* COMPONENT FORM AND STANDARD UNIT FORM */}
      <div id="topic3" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">COMPONENT FORM AND STANDARD UNIT FORM</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Vectors are graphically represented as a directed line segment
              that starts from the origin pointing from one point (tail) to
              another point (head).
            </p>
          </div>
          <div className="Paragraph_Topic">
            <div className="Bullet_Topic">
              <p className="Title">IN 2-SPACE</p>
            </div>
            <div className="Formula_Field">
              <div className="Formula">
                <div className="Formula_Main">
                  <div className="Left_Side">
                    <div className="Top">
                      <p className="Italic">Component Form</p>
                      <p>v = (x, y)</p>
                    </div>
                    <div className="Bottom">
                      <p className="Italic">Standard Unit Form</p>
                      <p>v = (x, y)</p>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <p>where</p>
                    <div className="Vertical others">
                      <p>i = (1, 0),</p>
                      <p>j = (0, 1)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Bullet_Topic">
              <p className="Title">IN 3-SPACE</p>
            </div>
            <div className="Formula_Field">
              <div className="Formula">
                <div className="Formula_Main">
                  <div className="Left_Side">
                    <div className="Top">
                      <p className="Italic">Component Form</p>
                      <p>v = (x, y, z)</p>
                    </div>
                    <div className="Bottom">
                      <p className="Italic">Standard Unit Form</p>
                      <p>v = xi + yj + zk</p>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <p>where</p>
                    <div className="Vertical others">
                      <p>i = (1, 0, 0),</p>
                      <p>i = (0, 1, 0),</p>
                      <p>j = (0, 0, 1)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VECTORS WITH INITIAL POINT NOT ON THE ORIGIN */}
      <div id="topic4" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VECTORS WITH INITIAL POINT NOT ON THE ORIGIN</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              If a vector starts at a point other than the origin, you can still
              describe it by considering its position relative to the origin in
              other words, you can represent it using its component.
            </p>
          </div>
          <div className="Paragraph_Topic">
            <p className="withStack">
              Let be{" "}
              <span className="stack">
                <sup>→</sup>
                <p>PQ</p>
              </span>{" "}
              a vector in 2-space with initial point P (x₁, y₁) and terminal
              point Q (x₂, y₂). Then the components of its vector are:
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder text">
              <div className="Formula">
                <p className="withStack">
                  <span className="stack">
                    <sup>→</sup>
                    <p>PQ</p>
                  </span>{" "}
                  = (x₂ - x₁ , y₂ - y₁)
                </p>
              </div>
              <p>or</p>
              <div className="Formula">
                <p className="withStack">
                  <span className="stack">
                    <sup>→</sup>
                    <p>PQ</p>
                  </span>{" "}
                  =
                </p>
                <div>
                  <p className="Expression">[</p>
                  <div className="Vertical">
                    <p>x₂ - x₁</p>
                    <p>y₂ - y₁</p>
                  </div>
                  <p className="Expression">]</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Paragraph_Topic">
            <p className="withStack">
              Now, let be{" "}
              <span className="stack">
                <sup>→</sup>
                <p>PQ</p>
              </span>{" "}
              a vector in 3-space with initial point P (x₁, y₁, z₁) and terminal
              point Q (x₂, y₂, z₂). Then the components of its vector are:
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder text">
              <div className="Formula">
                <p className="withStack">
                  <span className="stack">
                    <sup>→</sup>
                    <p>PQ</p>
                  </span>{" "}
                  = (x₂ - x₁ , y₂ - y₁ , z₂ - z₁)
                </p>
              </div>
              <p>or</p>
              <div className="Formula">
                <p className="withStack">
                  <span className="stack">
                    <sup>→</sup>
                    <p>PQ</p>
                  </span>{" "}
                  =
                </p>
                <div>
                  <p className="Expression">[</p>
                  <div className="Vertical">
                    <p>x₂ - x₁</p>
                    <p>y₂ - y₁</p>
                    <p>z₂ - z₁</p>
                  </div>
                  <p className="Expression">]</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Example_Label">
            <p>Example C</p>
          </div>
          <div className="Paragraph_Topic">
            <p className="withStack">
              Let{" "}
              <span className="stack">
                <sup>→</sup>
                <p>PQ</p>
              </span>{" "}
              be a vector with initial point P (3, 2) and terminal point Q (9,
              7). Sketch the vector PQ and express it in both component form and
              standard unit form.
            </p>
          </div>
          <div className="Paragraph_Topic">
            <p>Solution:</p>
          </div>
          <div className="Side_By_Side">
            <div className="Left_Side">
              <div className="Paragraph_Topic">
                <p>P (3, 2)</p>
                <p>Q (9, 7)</p>
                <p>Sketching the graph:</p>
              </div>
              <div className="Paragraph_Topic">
                <div className="Topic_Visual sideBySide">
                  <div className="Visual_Holder video">
                    <video controls>
                      <source src={ExampleC} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Solution_Example">
                <p className="label Italic">Component Form:</p>
                <div className="start">
                  <p className="left">
                    <span className="stack">
                      <sup>→</sup>
                      <p>PQ</p>
                    </span>
                  </p>
                  <p className="center">=</p>
                  <p className="right">(x₂ - x₁, y₂ - y₁)</p>
                </div>
                <div className="start">
                  <p className="left"></p>
                  <p className="center">=</p>
                  <p className="right">(9 - 3, 7 -2)</p>
                </div>
                <div className="start">
                  <p className="left">
                    <span className="stack">
                      <sup>→</sup>
                      <p>PQ</p>
                    </span>
                  </p>
                  <p className="center">
                    <span>=</span>
                  </p>
                  <p className="right">
                    <span>(6, 5)</span>
                  </p>
                </div>
              </div>
              <div className="Horizontal">
                <div className="Solution_Example">
                  <p className="label Italic">Standard Unit Form:</p>
                  <div className="start">
                    <p className="left">
                      <span className="stack">
                        <sup>→</sup>
                        <p>PQ</p>
                      </span>
                    </p>
                    <p className="center">=</p>
                    <p className="right">(6, 5)</p>
                  </div>
                  <div className="start">
                    <p className="left"></p>
                    <p className="center">=</p>
                    <p className="right">6i + 5j</p>
                  </div>
                </div>
                <div className="Solution_Example largerLeft">
                  <div className="start">
                    <p className="left">where i</p>
                    <p className="center">=</p>
                    <p className="right">(1, 0)</p>
                  </div>
                  <div className="start">
                    <p className="left">j</p>
                    <p className="center">=</p>
                    <p className="right">(0, 1)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Try_It_Yourself">
            <div className="Label">TRY IT YOURSELF</div>
            <div className="Description two">
              <div className="left">2-space</div>
              <div className="right withStack">
                Let{" "}
                <span className="stack">
                  <sup>→</sup>
                  <p>AB</p>
                </span>{" "}
                be a vector in 2-space. Try entering an initial point and
                terminal point and observe it corresponding components.
              </div>
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Label">Initial Point</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>A(</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC2.initialX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC2({
                                  ...exampleC2,
                                  initialX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC2({
                                  ...exampleC2,
                                  initialX: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC2.initialY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC2({
                                  ...exampleC2,
                                  initialY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC2({
                                  ...exampleC2,
                                  initialY: intValue,
                                });
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
                  <div className="Label">Terminal Point</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>B(</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC2.terminalX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC2({
                                  ...exampleC2,
                                  terminalX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC2({
                                  ...exampleC2,
                                  terminalX: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC2.terminalY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC2({
                                  ...exampleC2,
                                  terminalY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC2({
                                  ...exampleC2,
                                  terminalY: intValue,
                                });
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
                      <button onClick={() => solveExampleC2()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div class="Label">Component Form:</div>
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">
                        <p className="withStack">
                          <span className="stack">
                            <sup>→</sup>
                            <p>AB</p>
                          </span>{" "}
                        </p>
                      </p>
                      <p className="center">=</p>
                      <p className="right">(x₂ - x₁, y₂ - y₁)</p>
                    </div>

                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          (
                          <div
                            id="rectangle-26-1"
                            className="Output_Rectangles"
                          ></div>
                          -
                          <div
                            id="rectangle-25-1"
                            className="Output_Rectangles"
                          ></div>
                          ,
                          <div
                            id="rectangle-24-1"
                            className="Output_Rectangles"
                          ></div>
                          -
                          <div
                            id="rectangle-23-1"
                            className="Output_Rectangles"
                          ></div>
                          )
                        </div>
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">
                        <span className="stack">
                          <sup>→</sup>
                          <p>AB</p>
                        </span>{" "}
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          (
                          <div
                            id="rectangle-22-1"
                            className="Output_Rectangles"
                          ></div>
                          ,
                          <div
                            id="rectangle-20-1"
                            className="Output_Rectangles"
                          ></div>
                          ) ■
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Description two">
              <div className="left">3-space</div>
              <div className="right withStack">
                Let{" "}
                <span className="stack">
                  <sup>→</sup>
                  <p>AB</p>
                </span>{" "}
                be a vector in 3-space. Try entering an initial point and
                terminal point and observe it corresponding components.
              </div>
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Label">Initial Point</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>A(</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC3.initialX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC3({
                                  ...exampleC3,
                                  initialX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC3({
                                  ...exampleC3,
                                  initialX: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC3.initialY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC3({
                                  ...exampleC3,
                                  initialY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC3({
                                  ...exampleC3,
                                  initialY: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC3.initialZ || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC3({
                                  ...exampleC3,
                                  initialZ: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC3({
                                  ...exampleC3,
                                  initialZ: intValue,
                                });
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
                  <div className="Label">Terminal Point</div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>B(</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC3.terminalX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC3({
                                  ...exampleC3,
                                  terminalX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC3({
                                  ...exampleC3,
                                  terminalX: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC3.terminalY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC3({
                                  ...exampleC3,
                                  terminalY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC3({
                                  ...exampleC3,
                                  terminalY: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={exampleC3.terminalZ || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setExampleC3({
                                  ...exampleC3,
                                  terminalZ: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setExampleC3({
                                  ...exampleC3,
                                  terminalZ: intValue,
                                });
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
                      <button onClick={() => solveExampleC3()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div class="Label">Component Form:</div>
                  <div className="Solution_Example">
                    <div className="start">
                      <p className="left">
                        <p className="withStack">
                          <span className="stack">
                            <sup>→</sup>
                            <p>AB</p>
                          </span>{" "}
                        </p>
                      </p>
                      <p className="center">=</p>
                      <p className="right">(x₂ - x₁, y₂ - y₁, z₂ - z₁)</p>
                    </div>

                    <div className="start">
                      <p className="left"></p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          (
                          <div
                            id="rectangle-26"
                            className="Output_Rectangles"
                          ></div>
                          -
                          <div
                            id="rectangle-25"
                            className="Output_Rectangles"
                          ></div>
                          ,
                          <div
                            id="rectangle-24"
                            className="Output_Rectangles"
                          ></div>
                          -
                          <div
                            id="rectangle-23"
                            className="Output_Rectangles"
                          ></div>
                          ,
                          <div
                            id="rectangle-28"
                            className="Output_Rectangles"
                          ></div>
                          -
                          <div
                            id="rectangle-27"
                            className="Output_Rectangles"
                          ></div>
                          )
                        </div>
                      </p>
                    </div>
                    <div className="start">
                      <p className="left">
                        <span className="stack">
                          <sup>→</sup>
                          <p>AB</p>
                        </span>
                      </p>
                      <p className="center">=</p>
                      <p className="right">
                        <div className="Output_Rectangles_Holder">
                          (
                          <div
                            id="rectangle-22"
                            className="Output_Rectangles"
                          ></div>
                          ,
                          <div
                            id="rectangle-20"
                            className="Output_Rectangles"
                          ></div>
                          ,
                          <div
                            id="rectangle-21"
                            className="Output_Rectangles"
                          ></div>
                          ) ■
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
      {/* VECTOR-SCALAR MULTIPLICATION */}
      <div id="topic5" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VECTOR-SCALAR MULTIPLICATION</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Bullet_Topic">
            <p className="Title">MAGNITUDE of the NEW VECTOR</p>
            <p className="Explanation">
              The magnitude or norm of the new vector is the absolute value of k
              times the length of v.
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={magnitude_new} alt="Graph Image" />
            </div>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">DIRECTION of the NEW VECTOR</p>
            <p className="Explanation">
              If k is positive, the new vector points in the same direction v.
              if k is negative, the new vector points in the opposite direction.
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={direction_new} alt="Graph Image" />
            </div>
          </div>
        </div>
      </div>
      {/* VECTOR OPERATIONS IN Rⁿ */}
      <div id="topic6" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VECTOR OPERATIONS IN Rⁿ</p>
          <p className="Sub_Title">Definition 1.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Let v = (v₁, v₂, ... , vₙ) and w = (w₁, w₂, ... , wₙ) be vectors
              in Rⁿ and k be any scalar. Then:
            </p>
          </div>
          <div className="Table">
            <div className="Side_By_Side_Row">
              <div className="left">
                <p>1. VECTOR ADDITION</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>v + w = (v₁ + w₁, v₂ + w₂, ... , vₙ + wₙ)</p>
                </div>
              </div>
            </div>
            <div className="Row_With_Label">
              <div className="Label">Example D</div>
              <div className="Content">
                <div className="left">
                  <div className="Vertical">
                    <p className="number">1.) If</p>
                    <p className="formula">v = (5, 7),</p>
                    <p className="formula">w = (8, 3)</p>
                    <p className="word">Then</p>
                    <p className="formula"> v + w = (5 + 8, 7 + 3)</p>
                    <p className="formula answer">= (13 , 10) ■</p>
                  </div>
                </div>
                <div className="right">
                  <div className="Vertical">
                    <p className="wnumber">2.) If</p>
                    <p className="formula">v = (-2, 9, 4)</p>
                    <p className="formula">w = (1, -7, -4)</p>
                    <p className="word">Then</p>
                    <p className="formula">v + w = (-2 + 1, 9 – 7, 4 – 4)</p>
                    <p className="formula answer">= (-1, 2, 0) ■</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Side_By_Side_Row">
              <div className="left">
                <p>2. SCALAR MULTIPLICATION</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>kv = (kv₁, kv₂, ... , kvₙ)</p>
                </div>
              </div>
            </div>
            <div className="Row_With_Label">
              <div className="Label">Example E</div>
              <div className="Content">
                <div className="left">
                  <div className="Vertical">
                    <p className="number">1.) If</p>
                    <p className="formula">v = (-2, 7)</p>
                    <p className="formula">k = 5</p>
                    <p className="word">Then</p>
                    <p className="formula">kv = (5 (-2), 5 (7))</p>
                    <p className="formula answer">= (-10, 35) ■</p>
                  </div>
                </div>
                <div className="right">
                  <div className="Vertical">
                    <p className="number">2.) If</p>
                    <p className="formula">v = (3, -1, 10)</p>
                    <p className="formula">k = 2</p>
                    <p className="word">Then</p>
                    <p className="formula">kv = (2 (3), 2 (-1), 2 (-10))</p>
                    <p className="formula answer">= (6, -2, -20) ■</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Side_By_Side_Row">
              <div className="left">
                <p>3. NEGATIVE OF A VECTOR</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <p>-v = (-v₁, -v₂, ..., -vₙ)</p>
                </div>
              </div>
            </div>
            <div className="Row_With_Label">
              <div className="Label">Example F</div>
              <div className="Content">
                <div className="left">
                  <div className="Vertical">
                    <p className="number">1.) If</p>
                    <p className="formula">v = (4, -9)</p>
                    <p className="word">Then</p>
                    <p className="formula">-v = (-4, 9) ■</p>
                  </div>
                </div>
                <div className="right">
                  <div className="Vertical">
                    <p className="number">2.) If</p>
                    <p className="formula">v = (3, -14, 8)</p>
                    <p className="word">Then</p>
                    <p className="formula">-v = (-3, 14, -8) ■</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Side_By_Side_Row">
              <div className="left">
                <p>4. SUBTRACTION OF VECTORS</p>
              </div>
              <div className="right">
                <div className="Light_Blue">
                  <div className="Solution_Example">
                    <div className="start  DarkBlue">
                      <p className="left">w - v</p>
                      <p className="center">=</p>
                      <p className="right"> w + (-v</p>
                    </div>
                    <div className="start  DarkBlue">
                      <p className="left">w - v</p>
                      <p className="center">=</p>
                      <p className="right">(w₁ - v₁, w₂ - v₂, ..., wₙ - vₙ)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Row_With_Label">
              <div className="Label">Example G</div>
              <div className="Content">
                <div className="left">
                  <div className="Vertical">
                    <p className="number">1.) If</p>
                    <p className="formula">v = (3, -6),</p>
                    <p className="formula">w = (-8, 2)</p>
                    <p className="word">Then</p>
                    <p className="formula">w - v = (-8 - 3, 2 - (-6))</p>
                    <p className="formula answer">= (-11 , 8) ■</p>
                  </div>
                </div>
                <div className="right">
                  <div className="Vertical">
                    <p className="number">2.) If</p>
                    <p className="formula">v = (0, -5, 7)</p>
                    <p className="formula">w = (-8, 2, -2)</p>
                    <p className="word">Then</p>
                    <p className="formula">
                      w - v = (-8 - 0, 2 – (-5), -2 – 7)
                    </p>
                    <p className="formula asnwer">= (-8, 7, -9) ■</p>
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
                Let v and w be a vector in 2-space. Try entering a value for
                these vectors and observe their value after performing the
                following operations:
              </div>
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>v = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp1.vX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  vX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  vX: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp1.vY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  vY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  vY: intValue,
                                });
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
                    <div className="Inputs">
                      <p>w = (</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp1.wX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  wX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  wX: intValue,
                                });
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp1.wY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  wY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp1({
                                  ...vectorOp1,
                                  wY: intValue,
                                });
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
                      <button onClick={() => solveVector1()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>1.</p>
                      <p className="equal">v + w = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <div
                          id="rectangle-13"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>y</p>
                        <div
                          id="rectangle-12"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>2.</p>
                      <p className="equal">3v = (</p>
                      <div className="vertical">
                        <div
                          id="rectangle-11-2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-10-2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>3.</p>
                      <p className="equal">-v = (</p>
                      <div className="vertical">
                        <div
                          id="rectangle-11-3"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-10-3"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>4.</p>
                      <p className="equal">w - v = (</p>
                      <div className="vertical">
                        <div
                          id="rectangle-11-4"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-10-4"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Description two">
              <div className="left">3-space</div>
              <div className="right">
                Let v and w be a vector in 3-space. Try entering a value for
                these vectors and observe their value after performing the
                following operations:
              </div>
            </div>
            <div className="Side_By_Side noGap">
              <div className="left">
                <p className="Label">INPUT</p>
                <div className="Content">
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>v = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp2.vX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  vX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  vX: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp2.vY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  vY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  vY: intValue,
                                });
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
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp2.vZ || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  vZ: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  vZ: intValue,
                                });
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
                    <div className="Inputs">
                      <p>w = (</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp2.wX || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  wX: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  wX: intValue,
                                });
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp2.wY || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  wY: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  wY: intValue,
                                });
                              }
                            }
                          }}
                        />
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <input
                          type="text"
                          pattern="-?([0-9]|1[0-6])"
                          value={vectorOp2.wZ || ""}
                          maxLength={3} // Increase maxLength to accommodate the optional '-' sign
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
                              if (value === "-" || value >= -99) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  wZ: value,
                                });
                              }
                            } else {
                              const intValue = parseInt(value);
                              if (
                                value === "" || // Allow empty value
                                (!isNaN(intValue) &&
                                  intValue >= -99 &&
                                  intValue <= 99)
                              ) {
                                setVectorOp2({
                                  ...vectorOp2,
                                  wZ: intValue,
                                });
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
                      <button onClick={() => solveVector2()}>SOLVE</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="divider dashed_vertical"></div> */}
              <div className="right">
                <p className="Label">OUTPUT</p>
                <div className="Content output">
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>1.</p>
                      <p className="equal">v+ w = (</p>
                      <div className="vertical">
                        <p>x</p>
                        <div
                          id="rectangle-11-6"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>y</p>
                        <div
                          id="rectangle-10-6"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <p>z</p>
                        <div
                          id="rectangle-16-2"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>2.</p>
                      <p className="equal">3v= (</p>
                      <div className="vertical">
                        <div
                          id="rectangle-11-7"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-10-7"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-16-3"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>3.</p>
                      <p className="equal">-v = (</p>
                      <div className="vertical">
                        <div
                          id="rectangle-11-8"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-10-8"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-16-4"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                  <div className="Input_Group">
                    <div className="Inputs">
                      <p>4.</p>
                      <p className="equal">w - v = (</p>
                      <div className="vertical">
                        <div
                          id="rectangle-11-9"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-10-9"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>,</p>
                      <div className="vertical">
                        <div
                          id="rectangle-16-5"
                          className="Output_Rectangles"
                        ></div>
                      </div>
                      <p>)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.1</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let <span className="Italic">u , v</span> , and{" "}
                <span className="Italic">w</span> be vectors in R² or R³, and{" "}
                <span className="Italic">k </span>
                and <span className="Italic">m</span> be scalars, then:
              </p>
              <div className="List">
                <p>1. u + v = v + u</p>
                <p>2. (u + v) + w = u + (v + w)</p>
                <p>
                  3. u +{" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>{" "}
                  = u
                </p>
                <p>
                  4. u + (-u) ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                </p>
                <p>5. k(u + v) = ku + kv</p>
                <p>6. (k + m)u = ku + mu</p>
                <p>7. k(mu) = (km)u</p>
                <p>8. 1u = u</p>
              </div>
            </div>
          </div>
          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Bold">Additive Identity</p>
            <p className="Note">
              The additive identity in both the R² and R³ is represented by the
              zero vector denoted by{" "}
              <span className="stack">
                <sup>→</sup>
                <p>0</p>
              </span>
              = (0, 0) and{" "}
              <span className="stack">
                <sup>→</sup>
                <p>0</p>
              </span>{" "}
              = (0, 0, 0).
            </p>
            <p className="Bold">Additive Inverse</p>
            <p className="Note">
              The additive inverse of v is represented by -v.
            </p>
          </div>
          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Let <span className="Italic">v</span> be a vector in R² or R³,
                and
                <span className="Italic"> k</span> be a scalar, then:
              </p>
              <div className="List">
                <p>
                  1. The additive identity is unique. That is, if v + u = v,
                  then u ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                  .
                </p>
                <p>
                  The additive inverse of v is unique. That is, if v + u ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                  , then u = -v.
                </p>
                <p>
                  3. 0 v ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                </p>
                <p>
                  4. <span className="Italic">k</span>{" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>{" "}
                  ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                </p>
                <p>
                  5. If <span className="Italic">kv</span> ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                  , then <span className="Italic">k</span> = 0 or{" "}
                  <span className="Italic">v</span> ={" "}
                  <span className="stack">
                    <sup>→</sup>
                    <p>0</p>
                  </span>
                  .
                </p>
                <p>
                  6. -(- <span className="Italic">v</span> ) ={" "}
                  <span className="Italic">v</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson1;
