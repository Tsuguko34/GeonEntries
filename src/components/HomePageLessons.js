import React, { useEffect, useRef } from "react";

import "../styles/homepagelessons.css";
import { Navigate, useNavigate } from "react-router-dom";

function HomePageLessons({ isVisible, setIsVisible }) {
  const navigate = useNavigate();
  const lessonRef = useRef(null);
  const lessonRef2 = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      console.log(lessonRef.current);
      if (
        lessonRef.current &&
        !lessonRef.current.contains(event.target) &&
        lessonRef2.current &&
        !lessonRef2.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleEsacapePress(event) {
      if (event.key && event.key === "Escape") {
        setIsVisible(false);
      }
    }

    document.addEventListener("keydown", handleEsacapePress);

    return () => {
      document.removeEventListener("keydown", handleEsacapePress);
    };
  }, []);
  return (
    <section id="HomePageLessons" className="HomePageLessons">
      <div className="wrapper">
        <div className="Container">
          <div
            className="Lesson"
            ref={lessonRef2}
            onClick={() => navigate("/Lesson/PlaneEuclideanGeometry")}
          >
            <div className="Lesson_Title">I. Plane Euclidean Geometry</div>
            <div className="Lesson_Description">
              <p>
                It deals with the properties and relationships of geometric
                shapes in an n-space, based on a set of axioms and postulates
                outlined in Euclid's "Elements".
              </p>
            </div>
          </div>
          <div
            className="Lesson"
            ref={lessonRef}
            onClick={() => navigate("/Lesson/NonEuclideanGeometry")}
          >
            <div className="Lesson_Title">II. Non-Euclidean Geometry</div>
            <div className="Lesson_Description">
              <p>
                It Explores geometrical systems deviating from Euclid's fifth
                postulate or the parallel postulate. It Includes hyperbolic and
                spherical geometry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageLessons;
