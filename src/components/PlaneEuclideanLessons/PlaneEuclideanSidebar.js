import React, { useEffect, useState } from "react";

import { Collapse } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function PlaneEuclideanSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [open, setOpen] = useState(0);

  const handleOpenClose = (number) => {
    if (open === number) {
      setOpen(0);
    } else {
      setOpen(number);
    }
  };

  useEffect(() => {
    if (location.pathname.includes("VectorsIn2Space3Space")) {
      setActivePage(1);
    } else if (location.pathname.includes("NormDistanceAndDotProduct")) {
      setActivePage(2);
    } else if (location.pathname.includes("Orthogonality")) {
      setActivePage(3);
    } else if (location.pathname.includes("EquationsOfLinesAndPlanes")) {
      setActivePage(4);
    } else if (location.pathname.includes("CrossProduct")) {
      setActivePage(5);
    }
  }, [location.pathname]);

  const handleRedirect = (link, page) => {
    handleOpenClose(page);
    navigate(link);
  };
  return (
    <>
      <div
        className={`List_Item ${activePage === 1 && "active"}`}
        onClick={() =>
          handleRedirect(
            "/Lesson/PlaneEuclideanGeometry/VectorsIn2Space3Space",
            1
          )
        }
      >
        <p>1. Vectors in 2-Space & 3-Space</p>
      </div>
      <Collapse in={open === 1} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Vector Spaces</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Vectors</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Component Form and Standard Unit Form</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">
            Vectors with Initial Point Not on the Origin
          </p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Vector-Scalar Multiplication</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Vector Operations in Rⁿ</p>
        </div>
      </Collapse>
      <div
        className={`List_Item ${activePage === 2 && "active"}`}
        onClick={() =>
          handleRedirect(
            "/Lesson/PlaneEuclideanGeometry/NormDistanceAndDotProduct",
            2
          )
        }
      >
        <p>2. Norm, Distance, and Dot Product</p>
      </div>
      <Collapse in={open === 2} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Norm</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Unit Vector</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Normalizing the Vector</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Distance</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Dot Product</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Angles Between Two Vectors</p>
        </div>
      </Collapse>
      <div
        className={`List_Item ${activePage === 3 && "active"}`}
        onClick={() =>
          handleRedirect("/Lesson/PlaneEuclideanGeometry/Orthogonality", 3)
        }
      >
        <p>3. Orthogonality</p>
      </div>
      <Collapse in={open === 3} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Orthogonal Vectors</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Point-Normal Equation of the Line</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Point-Normal Equation of the Plane</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Orthogonal Projections</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Distance Between a Point and a Line</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Distance Between a Point and Plane</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Distance Between Parallel Planes</p>
        </div>
      </Collapse>
      <div
        className={`List_Item ${activePage === 4 && "active"}`}
        onClick={() =>
          handleRedirect(
            "/Lesson/PlaneEuclideanGeometry/EquationsOfLinesAndPlanes",
            4
          )
        }
      >
        <p>4. Equations of Lines and Planes</p>
      </div>
      <Collapse in={open === 4} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Equations of Lines in R²</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Equations of Planes in R³</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Two-Point Vector Equations</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">
            Intersecting, Parallel, & Perpendicular Lines
          </p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Parallel & Intersecting Planes</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Angle Between Two Planes</p>
        </div>
      </Collapse>
      <div
        className={`List_Item ${activePage === 5 && "active"}`}
        onClick={() =>
          handleRedirect("/Lesson/PlaneEuclideanGeometry/CrossProduct", 5)
        }
      >
        <p>5. Cross Product</p>
      </div>
      <Collapse in={open === 5} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Cross Product of Two Vectors</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Cross Product of Unit Vectors</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Magnitude of the Cross Product</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Area of a Parallelogram in R²</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Scalar Triple Product</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Volume of a Parallelepiped in R³</p>
        </div>
      </Collapse>
    </>
  );
}

export default PlaneEuclideanSidebar;
