import React, { useEffect, useState } from "react";

//Images
import l1p1 from "../../assets/images/Lessons Images/PELesson1/l1p1.png";
import l1p2 from "../../assets/images/Lessons Images/PELesson1/l1p2.png";
import headtail1 from "../../assets/images/Lessons Images/PELesson1/head-tail-1.png";

//Videos
import ExampleA1 from "../../assets/videos/PELesson1/Example A1.mp4";
import ExampleA2 from "../../assets/videos/PELesson1/Example A2.mp4";
import ExampleB1 from "../../assets/videos/PELesson1/Example B1.mp4";
import ExampleB2 from "../../assets/videos/PELesson1/Example B2.mp4";

import { graphVector } from "../../utils";

function PELesson1() {
  const [exampleA, setExampleA] = useState({
    xAxis: 0,
    yAxis: 0,
  });

  const graphExample1 = () => {
    if (!isNaN(exampleA.xAxis) && !isNaN(exampleA.yAxis))
      graphVector(exampleA.xAxis, exampleA.yAxis);
  };

  return (
    <div className="Topic_Container">
      {/* Vector Spaces */}
      <div className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">VECTOR SPACES</p>
          <p className="Sub_Title">Definition 1.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Bullet_Topic">
            <p className="Title">N-Space (Rⁿ)</p>
            <p className="Explanation">
              <span>•</span>set of all n-tuples
            </p>
          </div>
          <div className="Bullet_Topic">
            <p className="Title">2-Space/2D Space (R²)</p>
            <p className="Explanation">
              <span>•</span>set of all ordered pairs (x, y) of real numbers
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
              <span>•</span>set of all ordered triples (x, y, z) of real numbers
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
      <div className="Sub_Topic">
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
                  <span>v = </span>
                  <span className="Expression">[</span>
                  <span className="Vertical">
                    <span>x</span>
                    <span>y</span>
                  </span>
                  <span className="Expression">]</span>
                </div>
                <div className="Formula_Part vertical">
                  <span>Components:</span> <span>(x, y)</span>
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
                  <span>v = </span>
                  <span className="Expression">[</span>
                  <span className="Vertical">
                    <span>x</span>
                    <span>y</span>
                    <span>z</span>
                  </span>
                  <span className="Expression">]</span>
                </div>
                <div className="Formula_Part vertical">
                  <span>Components:</span> <span>(x, y)</span>
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
                  <span>v = (</span>
                  <div className="vertical">
                    <span>x</span>
                    <input
                      type="text"
                      pattern="[0-99]*"
                      value={exampleA.xAxis || 0}
                      maxLength={2}
                      onChange={(e) => {
                        if (e.target.value === 0) {
                          setExampleA({
                            ...exampleA,
                            xAxis: 0,
                          });
                        } else {
                          setExampleA({
                            ...exampleA,
                            xAxis: parseInt(e.target.value),
                          });
                        }
                      }}
                    />
                  </div>
                  <span>,</span>
                  <div className="vertical">
                    <span>y</span>
                    <input
                      type="text"
                      pattern="[0-99]*"
                      value={exampleA.yAxis || 0}
                      maxLength={2}
                      onChange={(e) => {
                        if (e.target.value === 0) {
                          setExampleA({
                            ...exampleA,
                            yAxis: 0,
                          });
                        } else {
                          setExampleA({
                            ...exampleA,
                            yAxis: parseInt(e.target.value),
                          });
                        }
                      }}
                    />
                  </div>
                  <span>)</span>
                </div>
                <div className="Submit">
                  <button onClick={() => graphExample1()}>PLOT</button>
                </div>
              </div>
              <div className="Graph">
                <canvas id="vectorCanvas" width="510" height="335"></canvas>
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
                <img src={headtail1} alt="Graph Image" />
              </div>
            </div>
            <p className="Note">
              Zero vector is denoted as 0.→ZERO VECTOR is a vector with no
              direction, and has both is initial and terminal points at the same
              location.
            </p>
            <div className="Note_Visual">
              <div className="Visual_Holder image">
                <img src={headtail1} alt="Graph Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* COMPONENT FORM AND STANDARD UNIT FORM */}
      <div className="Sub_Topic">
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
          <div className="Bullet_Topic">
            <p className="Title">IN 2-SPACE</p>
          </div>
          <div className="Formula_Field">
            <div className="Formula">
              <div className="Formula_Main">
                <div className="Left_Side">
                  <div className="Top">
                    <span className="Italic">Component Form</span>
                    <span>v = (x, y)</span>
                  </div>
                  <div className="Bottom">
                    <span className="Italic">Standard Unit Form</span>
                    <span>v = (x, y)</span>
                  </div>
                </div>
                <div className="Right_Side">
                  <span>where</span>
                  <div className="Vertical others">
                    <span>i = (1, 0),</span>
                    <span>j = (0, 1)</span>
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
                    <span className="Italic">Component Form</span>
                    <span>v = (x, y, z)</span>
                  </div>
                  <div className="Bottom">
                    <span className="Italic">Standard Unit Form</span>
                    <span>v = xi + yj + zk</span>
                  </div>
                </div>
                <div className="Right_Side">
                  <span>where</span>
                  <div className="Vertical others">
                    <span>i = (1, 0, 0),</span>
                    <span>i = (0, 1, 0),</span>
                    <span>j = (0, 0, 1)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* VECTORS WITH INITIAL POINT NOT ON THE ORIGIN */}
      <div className="Sub_Topic">
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
            <p>
              Let be{" "}
              <span className="stack">
                <div>→</div>
              </span>{" "}
              PQ a vector in 2-space with initial point P (x₁, y₁) and terminal
              point Q (x₂, y₂). Then the components of its vector are:
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder text">
              <div className="Formula">
                <p>
                  <span className="stack">
                    <div>→</div>
                    <div></div>
                  </span>
                  <span>PQ</span> = (x₂ - x₁ , y₂ - y₁)
                </p>
              </div>
              <span>or</span>
              <div className="Formula">
                <p>
                  <span className="stack">
                    <div>→</div>
                  </span>
                  <span>PQ</span> =
                </p>
                <div>
                  <span className="Expression">[</span>
                  <div className="Vertical">
                    <span>x₂ - x₁</span>
                    <span>y₂ - y₁</span>
                  </div>
                  <span className="Expression">]</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Now, let be{" "}
              <span className="stack">
                <div>→</div>
              </span>{" "}
              PQ a vector in 3-space with initial point P (x₁, y₁, z₁) and
              terminal point Q (x₂, y₂, z₂). Then the components of its vector
              are:
            </p>
          </div>
          <div className="Topic_Visual">
            <div className="Visual_Holder text">
              <div className="Formula">
                <p>
                  <span className="stack">
                    <div>→</div>
                    <div></div>
                  </span>
                  <span>PQ</span> = (x₂ - x₁ , y₂ - y₁ , z₂ - z₁)
                </p>
              </div>
              <span>or</span>
              <div className="Formula">
                <p>
                  <span className="stack">
                    <div>→</div>
                  </span>
                  <span>PQ</span> =
                </p>
                <div>
                  <span className="Expression">[</span>
                  <div className="Vertical">
                    <span>x₂ - x₁</span>
                    <span>y₂ - y₁</span>
                    <span>z₂ - z₁</span>
                  </div>
                  <span className="Expression">]</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Example_Label">
            <p>Example C</p>
          </div>
          <div className="Paragraph_Topic">
            <p>
              Let{" "}
              <span className="stack">
                <div>→</div>
              </span>{" "}
              PQ be a vector with initial point P (3, 2) and terminal point Q
              (9, 7). Sketch the vector PQ and express it in both component form
              and standard unit form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PELesson1;
