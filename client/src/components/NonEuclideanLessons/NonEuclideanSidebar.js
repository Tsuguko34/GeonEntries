import React, { useEffect, useState } from "react";

import { Collapse } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function NonEuclideanSidebar() {
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
          handleRedirect("/Lesson/NonEuclideanGeometry/HyperbolicGeometry", 1)
        }
      >
        <p>1. Hyperbolic Geometry</p>
      </div>
      <Collapse in={open === 1} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Euclid's First Five Postulate</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Euclid's Fifth Postulate</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">The Hyperbolic Axiom</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Nonintersecting Lines</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Ideal Points</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Omega Triangles</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Hyperbolic Quadrilaterals and Triangles</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Hyperbolic Plane Model</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Hyperbolic Tesselations</p>
        </div>
      </Collapse>
      <div
        className={`List_Item ${activePage === 2 && "active"}`}
        onClick={() =>
          handleRedirect("/Lesson/NonEuclideanGeometry/SphericalGeometry", 2)
        }
      >
        <p>2. Spherical Geometry</p>
      </div>
      <Collapse in={open === 2} timeout="auto" unmountOnExit>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">The Elliptic Axiom</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Elliptic Quadrilaterals and Triangles</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">The Sphere S² in R³</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Distance and Spherical Distance</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Spherical Triangles</p>
        </div>
        <div className="SubItems_Container">
          <span>•</span>
          <p className="Sub_Item">Napier's Rule</p>
        </div>
      </Collapse>
    </>
  );
}

export default NonEuclideanSidebar;
