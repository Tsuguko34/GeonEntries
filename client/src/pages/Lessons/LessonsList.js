import React, { useEffect } from "react";
import "../../styles/lessonslist.css";
import { Link } from "react-router-dom";

//Images
import pn1 from "../../assets/images/Lessons Images/PN1.png";
import pn2 from "../../assets/images/Lessons Images/PN2.png";
import pn3 from "../../assets/images/Lessons Images/PN3.png";
import pn4 from "../../assets/images/Lessons Images/PN4.png";
import pn5 from "../../assets/images/Lessons Images/PN5.png";
import ne1 from "../../assets/images/Lessons Images/NE1.png";
import ne2 from "../../assets/images/Lessons Images/NE2.png";

function LessonsList() {
  useEffect(() => {
    document.title = "List of lessons";
  }, []);
  return (
    <section id="LessonsList" className="LessonsList">
      <div className="wrapper">
        <div className="Lessons_Holder">
          {/* Plane Euclidean Geometry */}
          <div className="Lesson">
            <div className="Title">
              <Link to={`/Lesson/PlaneEuclideanGeometry`}>
                I. Plane Euclidean Geometry
              </Link>
            </div>
            <div className="Description">
              <p>
                Euclidean geometry is a branch of geometry developed by the
                ancient Greek mathematician Euclid. It deals with the properties
                and relationships of geometric shapes in an n-space, based on a
                set of axioms and postulates outlined in Euclid's "Elements."
              </p>
            </div>
            <div className="Images">
              <div className="Image_Container">
                <div className="Image">
                  <img src={pn1} alt="image1" />
                </div>
              </div>
              <div className="Image_Container">
                <div className="Image">
                  <img src={pn2} alt="image2" />
                </div>
              </div>
              <div className="Image_Container">
                <div className="Image">
                  <img src={pn3} alt="image3" />
                </div>
              </div>
              <div className="Image_Container">
                <div className="Image">
                  <img src={pn4} alt="image4" />
                </div>
              </div>
              <div className="Image_Container">
                <div className="Image">
                  <img src={pn5} alt="image5" />
                </div>
              </div>
            </div>
          </div>
          {/* Non-Euclidean Geometry */}
          <div className="Lesson">
            <div className="Title">
              <Link to={`/Lesson/NonEuclideanGeometry`}>
                II. Non-Euclidean Geometry
              </Link>
            </div>
            <div className="Description">
              <p>
                Non-Euclidean Geometry explores geometrical systems deviating
                from Euclid's fifth postulate or the parallel postulate. It
                includes hyperbolic and spherical geometry, that challenged
                certain assumptions, contributing to the development of modern
                geometry.
              </p>
            </div>
            <div className="Images">
              <div className="Image_Container">
                <div className="Image">
                  <img src={ne1} alt="image1" />
                </div>
              </div>
              <div className="Image_Container">
                <div className="Image">
                  <img src={ne2} alt="image2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LessonsList;
