import React, { useEffect, useState } from "react";

//Images
import tiling1 from "../../assets/images/Lessons Images/NELesson1/tiling-1.png";
import hyp1 from "../../assets/images/Lessons Images/NELesson1/hyp-p1.png";
import hyp2 from "../../assets/images/Lessons Images/NELesson1/hyp-p2.png";
import image26 from "../../assets/images/Lessons Images/NELesson1/image-26.png";
import image27 from "../../assets/images/Lessons Images/NELesson1/image-27.png";
import image28 from "../../assets/images/Lessons Images/NELesson1/image-28.png";
import image29 from "../../assets/images/Lessons Images/NELesson1/image-29.png";
import image30 from "../../assets/images/Lessons Images/NELesson1/image-30.png";
import image31 from "../../assets/images/Lessons Images/NELesson1/image-31.png";
import image33 from "../../assets/images/Lessons Images/NELesson1/image-33.png";
import image34 from "../../assets/images/Lessons Images/NELesson1/image-34.png";
import image35 from "../../assets/images/Lessons Images/NELesson1/image-35.png";
import image36 from "../../assets/images/Lessons Images/NELesson1/image-36.png";
import image38 from "../../assets/images/Lessons Images/NELesson1/image-38.png";
import image40 from "../../assets/images/Lessons Images/NELesson1/image-40.png";
import image46 from "../../assets/images/Lessons Images/NELesson1/image-46.png";
import image49 from "../../assets/images/Lessons Images/NELesson1/image-49.png";
import image50 from "../../assets/images/Lessons Images/NELesson1/image-50.png";
import image51 from "../../assets/images/Lessons Images/NELesson1/image-51.png";
import image52 from "../../assets/images/Lessons Images/NELesson1/image-52.png";
import image56 from "../../assets/images/Lessons Images/NELesson1/image-56.png";
import image58 from "../../assets/images/Lessons Images/NELesson1/image-58.png";
import image59 from "../../assets/images/Lessons Images/NELesson1/image-59.png";
import image60 from "../../assets/images/Lessons Images/NELesson1/image-60.png";
import image61 from "../../assets/images/Lessons Images/NELesson1/image-61.png";
import image62 from "../../assets/images/Lessons Images/NELesson1/image-62.png";
import image63 from "../../assets/images/Lessons Images/NELesson1/image-63.png";

import { calculateCrossProduct, calculatePoint3D } from "../../utils";

function NELesson1() {
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
      {/* EUCLID’S FIRST FIVE POSTULATE */}
      <div id="topic32" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">EUCLID’S FIRST FIVE POSTULATE</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              Euclid was an ancient Greek mathematician often referred to as the
              "Father of Geometry." Euclid's book "Elements" not only provides a
              comprehensive summary of the current knowledge in geometry but
              also encompasses results in number theory and basic or geometric
              algebra.
            </p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Euclid identified a set of basic assumptions that he called
              postulates (or axioms ) and common notions that serves as the
              fundamental principles upon which the rest of his geometric
              arguments and proofs were built.
            </p>
          </div>

          <div className="Paragraph_Topic">
            <p className="Bold_Underline noPadding">FIRST FIVE POSTULATE</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    1. Two distinct points on the plane determine a line segment
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image29} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    2. Any straight line segment can be extended indefinitely in
                    a straight line.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image28} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    3. For any straight line segment , a circle can be drawn
                    having the segment as radius and one endpoint as center.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image27} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>4. All right angles are congruent</p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image26} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    5. If a line segment intersects two straight lines, and the
                    interior angles on one side add up to less than π, then
                    those two lines will eventually meet when extended
                    indefinitely on the side where the interior angles are
                    formed.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image30} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EUCLID’S FIFTH POSTULATE */}
      <div id="topic33" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">EUCLID’S FIFTH POSTULATE</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p className="Bold_Underline noPadding">
              EQUIVALENT STATEMENTS OF THE PARALLEL POSTULATE
            </p>
            <p>
              Controversies regarding the fifth postulate (also called the
              parallel postulate ) emerged following the publication of Euclid's
              Elements . Mathematicians began to question whether if the fifth
              postulate is considered as a postulate. A number of alternative
              statements for the said postulates were proposed including the
              following:
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p className="Bold_Underline noPadding">
                    1. PLAYFAIR’S AXIOM
                  </p>

                  <p>
                    Let P be a point not on line l. Then there is exactly one
                    line m through the point P parallel to l .
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image31} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    2. The sum of the angles of any triangle is equal to two
                    right angles.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image33} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>3. There exists a pair of similar triangles.</p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image34} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    4. There exists a pair of straight lines that are everywhere
                    equidistant from one another.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image35} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    5. There exists a unique circle passing through three
                    noncollinear points.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image36} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Paragraph_Topic block">
                  <p>
                    6. If three angles of a quadrilateral are right angles, then
                    the fourth angle is also a right angle.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image38} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Mathematicians such as Carl Friedrich Gauss concluded that the
              fifth postulate could never be proved from the others.
              Consequently, there can exist geometries where the fifth
              postulate's negation is an axiom, leading to the later association
              of the term "non-Euclidean" with these geometries.
            </p>
          </div>

          <div className="Paragraph_Topic">
            <p>
              Two very different non-Euclidean geometries are produced by the
              two possible negations of Playfair's axiom, namely hyperbolic and
              elliptic .
            </p>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <div className="Paragraph_Topic paddingLeft">
              <p className="Bold_Underline noPadding noMargin">
                EUCLIDEAN GEOMETRY
              </p>
              <p>based on Euclid’s Postulate 1-4 and Playfair’s axiom</p>
            </div>

            <div className="Paragraph_Topic paddingLeft">
              <p className="Bold_Underline noPadding noMargin">
                NON-EUCLIDEAN GEOMETRY
              </p>
              <p>
                based on Euclid’s Postulate 1-4 and a negation of Playfair’s
                axiom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* THE HYPERBOLIC AXIOM */}
      <div id="topic34" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">THE HYPERBOLIC AXIOM</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block">
            <p>
              Let P be a point not on line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>XY</p>
              </span>
              . Then there are at least two distinct lines through the point P
              that do not intersect the line
              <span className="stack">
                <sup>⟷</sup>
                <p>XY</p>
              </span>
              .
            </p>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image40} alt="Graph Image" />
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.1</p>
            </div>
            <div className="Theorem_Content">
              <div className="Paragraph_Topic block">
                <p>
                  Let P be a point not on line{" "}
                  <span className="stack">
                    <sup>⟷</sup>
                    <p>XY</p>
                  </span>
                  . Then there are infinite number of lines through the point P
                  that do not intersect the line{" "}
                  <span className="stack">
                    <sup>⟷</sup>
                    <p>XY</p>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NONINTERSECTING LINES */}
      <div id="topic35" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">NONINTERSECTING LINES</p>
          <p className="Sub_Title">Definition 1.1</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic paddingLeft">
            <div className="Bullet_Topic">
              <p className="Title">SENSED PARALLEL LINES</p>
              <p className="Explanation block">
                Let P be a point not on line{" "}
                <span className="stack">
                  <sup>⟷</sup>
                  <p>XY</p>
                </span>{" "}
                . In hyperbolic geometry, the first lines in either direction
                through the point P that do not intersect the line{" "}
                <span className="stack">
                  <sup>⟷</sup>
                  <p>XY</p>
                </span>{" "}
                are called parallel lines or sensed parallel lines .
              </p>
            </div>
          </div>
          <div className="Paragraph_Topic paddingLeft">
            <div className="Bullet_Topic">
              <p className="Title">ULTRAPARALLEL LINES</p>
              <p className="Explanation block">
                Let P be a point not on line{" "}
                <span className="stack">
                  <sup>⟷</sup>
                  <p>XY</p>
                </span>{" "}
                . In hyperbolic geometry, the line through the point P that do
                not intersect the line{" "}
                <span className="stack">
                  <sup>⟷</sup>
                  <p>XY</p>
                </span>{" "}
                , and not parallel to it, are called nonintersecting lines or
                ultraparallel lines .
              </p>
            </div>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image52} alt="Graph Image" />
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft">
            <p>
              There are exactly two parallels to line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>XY</p>
              </span>{" "}
              that passes through point{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>P</p>
              </span>
              , namely line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>{" "}
              and line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PR</p>
              </span>
              .
            </p>
          </div>

          <div className="Paragraph_Topic block center">
            <p>
              Line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>{" "}
              is the left-hand parallel.
            </p>
          </div>

          <div className="Paragraph_Topic block center">
            <p>
              Line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PR</p>
              </span>{" "}
              is the right-hand parallel .
            </p>
          </div>

          <div className="Paragraph_Topic block paddingLeft">
            <p>
              Angles ZPQ and ZPR are the angles of parallelism with respect to
              the distance PZ.
            </p>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.2</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The two angles of parallelism for the same segment are
                <span className="Bold">congruent</span> and{" "}
                <span className="Bold">acute</span>.{" "}
                <span className="Italic">
                  (Hence, angles ZPQ and ZPR are congruent and acute.)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IDEAL POINTS */}
      <div id="topic36" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">IDEAL POINTS</p>
          <p className="Sub_Title">Definition 1.2</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block paddingLeft">
            <p>
              In hyperbolic geometry, two parallel lines are said to meet at an
              distinct ideal point.
            </p>
          </div>

          <div className="Paragraph_Topic block paddingLeft">
            <p>For instance:</p>
          </div>

          <div className="Paragraph_Topic block paddingLeft2">
            <p>
              Let line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PR</p>
              </span>{" "}
              and{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>{" "}
              be the parallels of line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>XY</p>
              </span>{" "}
              .
            </p>
          </div>

          <div className="Paragraph_Topic block paddingLeft2">
            <p>
              If the right-hand parallel{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PR</p>
              </span>{" "}
              is extended indefinitely to the right side, it will meet the line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>XY</p>
              </span>{" "}
              in the ideal point Ω.
            </p>
          </div>

          <div className="Paragraph_Topic block paddingLeft">
            <p>
              Equivalently, if the left-hand parallel{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>PQ</p>
              </span>{" "}
              is extended indefinitely to the left side, it will meet the line{" "}
              <span className="stack">
                <sup>⟷</sup>
                <p>XY</p>
              </span>{" "}
              in the ideal point Ω’.
            </p>
          </div>

          <div className="Topic_Visual">
            <div className="Visual_Holder image">
              <img src={image46} alt="Graph Image" />
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <p className="Note">
              Ideal points in hyperbolic geometry differ from points of
              intersection in the conventional Euclidean sense. Ideal point
              represents a common endpoint where two parallel lines converge
              when extended indefinitely in hyperbolic space.
            </p>
          </div>
        </div>
      </div>

      {/* OMEGA TRIANGLES */}
      <div id="topic37" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">OMEGA TRIANGLES</p>
          <p className="Sub_Title">Definition 1.3</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Paragraph_Topic">
                  <p>
                    Let line l and m be sensed parallel lines with a transversal
                    intersecting the two lines at point P and Q. Then the
                    figured formed is referred to as an omega triangle or
                    asymptotic triangle .
                  </p>
                </div>
                <div className="Paragraph_Topic">
                  <p>
                    If Ω is the ideal point determined by the sensed parallel
                    lines, then we denote the triangle as △PQΩ.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image50} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <div className="Note">
              <div className="Side_By_Side">
                <div className="Left_Side">
                  <div className="Paragraph_Topic">
                    <p className="Bold_Underline noPadding noMargin">
                      PASCH’S AXIOM
                    </p>
                    <p>
                      A line entering a triangle at its vertex intersects the
                      opposite side of the triangle.
                    </p>
                  </div>
                </div>
                <div className="Right_Side">
                  <div className="Topic_Visual">
                    <div className="Visual_Holder image">
                      <img src={image49} alt="Graph Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.3</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                Pasch’s Axiom holds for an omega triangle, whether the line
                enters a vertex or at a point not on the vertex.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.4</p>
            </div>
            <div className="Theorem_Content">
              <div className="Label">
                <div className="Side_By_Side">
                  <div className="Left_Side">
                    <div className="Paragraph_Topic">
                      <p>
                        Let △PQΩ be an omega triangle, then the measures of the
                        exterior angles formed by extending PQ are greater than
                        the measures of their opposite interior angles.
                      </p>
                    </div>
                  </div>
                  <div className="Right_Side">
                    <div className="Topic_Visual">
                      <div className="Visual_Holder image">
                        <img src={image51} alt="Graph Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HYPERBOLIC QUADRILATERALS AND TRIANGLES */}
      <div id="topic38" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">HYPERBOLIC QUADRILATERALS AND TRIANGLES</p>
          <p className="Sub_Title">Definition 1.4</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic block paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side">
                <div className="Bullet_Topic">
                  <p className="Title">SACCHERI QUADRILATERAL</p>
                  <p className="Explanation">
                    Let PQRS be a Saccheri quadrilateral. A Saccheri
                    quadrilateral is a quadrilateral with two congruent sides PR
                    and QS and two adjacent right angles at R and S .
                  </p>
                  <p className="Explanation" style={{ marginTop: "10px" }}>
                    Side PQ is the base of the quadrilateral. Side RS is the
                    summit of the quadrilateral.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image56} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.5</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The angles at the summit of a Saccheri quadrilateral are
                congruent and acute.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.6</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The segment joining the midpoints of the base and summit of a
                Saccheri quadrilateral is perpendicular to both.
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft">
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
                    <img src={image58} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.7</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The fourth angle of a Lambert quadrilateral is acute.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.8</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                The sum of the measures of the interior angles of any hyperbolic
                triangle is less than π.
              </p>
            </div>
          </div>

          <div className="Paragraph_Topic block paddingLeft2">
            <div className="Bullet_Topic">
              <p className="Title">DEFECT</p>
              <p className="Explanation">
                The defect of the triangle is the difference between π and the
                angle sum of a hyperbolic triangle.
              </p>
            </div>
          </div>

          <div className="Theorem">
            <div className="Label_Container">
              <p className="Label">THEOREM 1.9</p>
            </div>
            <div className="Theorem_Content">
              <p className="Label">
                ● Let α, β, and γ be the interior angles of a hyperbolic
                triangle. The area of a hyperbolic triangle is given by
              </p>
              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>Area △ = π - (α + β + γ)</p>
                </div>
                <p>
                  (Thus, defect is equal to the area of a hyperbolic triangle.)
                </p>
              </div>

              <p className="Label">
                ● Now, let θ₁, θ₂, ..., θₙ be the interior angles of an n-gon on
                a hyperbolic plane. The area of the n-gon is given by
              </p>

              <div className="Light_Blue_Holder">
                <div className="Light_Blue fraction">
                  <p>Area n-gon = (n - 2)(π) - (θ₁ + θ₂ + ... + θₙ)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HYPERBOLIC PLANE MODEL */}
      <div id="topic39" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">HYPERBOLIC PLANE MODEL</p>
          <p className="Sub_Title"></p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p>
              A hyperbolic plane model is a way of representing the geometry of
              a hyperbolic plane in a Euclidean space. There are two common
              models of hyperbolic plane, namely the Klein-Beltrami disk model
              and Poincaré disk model.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Bullet_Topic">
                  <p className="Title">KLEIN-BELTRAMI</p>
                  <p className="Explanation">
                    Klein-Beltrami represents the hyperbolic plane as a disk
                    where hyperbolic lines are depicted as straight lines within
                    the model.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={hyp1} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Bullet_Topic">
                  <p className="Title">POINCARÉ DISK</p>
                  <p className="Explanation">
                    Poincaré disk model is a hyperbolic model that converts
                    hyperbolic straight lines into circle arcs while preserving
                    angles.
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={hyp2} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <div className="Side_By_Side">
              <div className="Left_Side larger">
                <div className="Bullet_Topic">
                  <p className="Title">POINCARÉ UPPER HALF-PLANE</p>
                  <p className="Explanation">
                    If the Poincaré disk model is inverted, it becomes the
                    Poincaré Upper Half-Plane Model, which also maintains
                    angles. Hyperbolic lines are represented as either vertical
                    lines or circular arcs
                  </p>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Topic_Visual">
                  <div className="Visual_Holder image">
                    <img src={image61} alt="Graph Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HYPERBOLIC TESSELATIONS */}
      <div id="topic40" className="Sub_Topic">
        <div className="Sub_Topic_Header">
          <p className="Title">HYPERBOLIC TESSELATIONS</p>
          <p className="Sub_Title">Definition 1.5</p>
        </div>
        <div className="Sub_Topic_Lesson">
          <div className="Paragraph_Topic">
            <p className="Bold_Underline noPadding">TESSELLATIONS</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>
              Tessellation or tiling is a covering of the plane by regular
              polygons such that same number of polygons meet at every vertex.
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p className="Bold_Underline noPadding noMargin">Schläfli Symbol</p>
          </div>

          <div className="Paragraph_Topic block paddingLeft2">
            <p>
              The Schläfli symbol describes every regular tessellations of
              Euclidean, hyperbolic, and n-sphere spaces.
            </p>
            <p>
              It is denoted by{" "}
              <span className="Light_Blue" style={{ padding: "5px" }}>
                <p>{`{(n, k)}`}</p>
              </span>
              , where n is the number of sides of the polygon and k is the
              number of polygons that meet in each vertex.
            </p>
          </div>

          <div className="Paragraph_Topic block paddingLeft3">
            <div className="Side_By_Side">
              <div className="Left_Side noGap">
                <div className="Solution_Example largerLeft">
                  <div className="start">
                    <p className="left">The angle at each vertex is:</p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Light_Blue fraction">
                        <p>
                          θ ={" "}
                          <div className="fraction">
                            <span className="upper">2π</span>
                            <span className="divider blue"></span>
                            <span className="bottom">k</span>
                          </div>
                        </p>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Right_Side">
                <div className="Solution_Example largerLeft">
                  <div className="start">
                    <p className="left">The angle sum is:</p>
                    <p className="center"></p>
                    <p className="right">
                      <span className="Light_Blue fraction">
                        <p>
                          ∑ θ =
                          <div className="fraction">
                            <span className="upper">2πn </span>
                            <span className="divider blue"></span>
                            <span className="bottom">k</span>
                          </div>
                        </p>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Notes_Container">
            <div className="Label">Note:</div>
            <div className="Paragraph_Topic paddingLeft">
              <p className="Bold_Underline noPadding noMargin">
                EUCLIDEAN TESSELLATION
              </p>
            </div>

            <div className="Paragraph_Topic center">
              <p>
                If
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">n</span>{" "}
                </div>{" "}
                +{" "}
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">k</span>
                </div>
                ={" "}
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">2</span>
                </div>
                , then the tessellation is{" "}
                <span className="Italic">Euclidean</span> .
              </p>
            </div>

            <div className="Paragraph_Topic paddingLeft">
              <p className="Bold_Underline noPadding noMargin">
                HYPERBOLIC TESSELLATION
              </p>
            </div>

            <div className="Paragraph_Topic center">
              <p>
                If
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">n</span>{" "}
                </div>{" "}
                +{" "}
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">k</span>
                </div>
                {`<`}
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">2</span>
                </div>
                , then the tessellation is{" "}
                <span className="Italic">hyperbolic</span> .
              </p>
            </div>

            <div className="Paragraph_Topic paddingLeft">
              <p className="Bold_Underline noPadding noMargin">
                ELLIPTIC TESSELLATION
              </p>
            </div>

            <div className="Paragraph_Topic center">
              <p>
                If
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">n</span>{" "}
                </div>{" "}
                +{" "}
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">k</span>
                </div>
                {`>`}
                <div className="fraction">
                  <span className="upper">1</span>
                  <span className="divider"></span>
                  <span className="bottom">2</span>
                </div>
                , then the tessellation is{" "}
                <span className="Italic">elliptic</span> .
              </p>
            </div>
          </div>

          <div className="Example_Label">
            <p>Example A</p>
          </div>

          <div className="Paragraph_Topic paddingLeft">
            <p>Consider the given figure. Determine the following:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p>a.) Schläfli symbol:</p>
            <p>b.) Angle at each vertex of the n-gon</p>
            <p>c.) Angle sum of the n-gon</p>
            <p>d.) Area of the n-gon</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Whole_Image_Holder">
              <img src={tiling1} alt="" className="Whole_Image" />
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">a.) Schläfli symbol</p>
          </div>
          <div className="Paragraph_Topic paddingLeft3">
            <p>
              The Schläfli symbol {`{(n, k)}`} is consists of two variables, the
              n and the k, where
            </p>
          </div>

          <div className="Paragraph_Topic block center">
            <p>n - the number of sides of the polygon</p>
          </div>
          <div className="Paragraph_Topic block center">
            <p>k - the number of polygons that meets in each vertex.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>To determine n and k , choose any vertex in the figure.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Whole_Image_Holder end">
              <img src={image62} alt="" className="Whole_Image full" />
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Observe that one polygon has 4 sides, thus, n = 4.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Whole_Image_Holder end">
              <img src={image63} alt="" className="Whole_Image full" />
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Observe that 5 polygons meet in one vertex, thus, k = 5.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Since n = 4 and k = 5, thus, the Schläfli symbol is{" "}
              <span className="LimeGreen">{`{4, 5}`} </span>
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">b.) Angle at each vertex of the n-gon</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>The angle at each vertex is given by:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">θ</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">2π</span>
                    <span className="divider"></span>
                    <span className="bottom">k</span>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Since k = 5, then,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start LimeGreen">
                <p className="left">θ</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">2π</span>
                    <span className="divider LimeGreen"></span>
                    <span className="bottom">5</span>
                  </div>
                  rad.
                </p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">c.) Angle sum of the n-gon</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>The angle sum is given by:</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">∑ θ</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">2πn</span>
                    <span className="divider"></span>
                    <span className="bottom">k</span>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>Since n = 4 and k = 5, then,</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">∑ θ</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">2π(4)</span>
                    <span className="divider"></span>
                    <span className="bottom">5</span>
                  </div>
                </p>
              </div>

              <div className="start LimeGreen">
                <p className="left">∑ θ</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">8π</span>
                    <span className="divider  LimeGreen"></span>
                    <span className="bottom">5</span>
                  </div>
                  rad.
                </p>
              </div>
            </div>
          </div>

          <div className="Paragraph_Topic paddingLeft2">
            <p className="Italic Bold">d.) Area of the n-gon</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>The area of the n -gon is given by:</p>
          </div>

          <div className="Paragraph_Topic center">
            <p>Area n-gon = (n - 2)(π) - (θ₁ + θ₂ + ... + θₙ)</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>where ( θ₁ + θ₂ + ... + θₙ ) is the angle sum.</p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <p>
              Since n = 4 and the angle sum is ∑ θ ={" "}
              <div className="fraction">
                <span className="upper">8π</span>
                <span className="divider"></span>
                <span className="bottom">5</span>
              </div>
              rad. , then,
            </p>
          </div>

          <div className="Paragraph_Topic paddingLeft3">
            <div className="Solution_Example">
              <div className="start">
                <p className="left">Area n-gon</p>
                <p className="center">=</p>
                <p className="right">(n - 2)(π) - ( θ₁ + θ₂ + ... + θₙ )</p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  (4 - 2) (π) -{" "}
                  <div className="fraction">
                    <span className="upper">8π</span>
                    <span className="divider"></span>
                    <span className="bottom">5</span>
                  </div>
                </p>
              </div>

              <div className="start">
                <p className="left"></p>
                <p className="center">=</p>
                <p className="right">
                  2π -
                  <div className="fraction">
                    <span className="upper">8π</span>
                    <span className="divider"></span>
                    <span className="bottom">5</span>
                  </div>
                </p>
              </div>

              <div className="start LimeGreen">
                <p className="left">Area n-gon</p>
                <p className="center">=</p>
                <p className="right">
                  <div className="fraction">
                    <span className="upper">2π</span>
                    <span className="divider LimeGreen"></span>
                    <span className="bottom">5</span>
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

export default NELesson1;
