import React, { useEffect, useState } from "react";

import { Collapse } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function NonEuclideanSidebar({ handleScrollClick, closeSidebar }) {
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
    if (location.pathname.includes("HyperbolicGeometry")) {
      setActivePage(1);
      setOpen(1);
    } else if (location.pathname.includes("SphericalGeometry")) {
      setActivePage(2);
      setOpen(2);
    }
    closeSidebar(false);
  }, [location.pathname]);

  const handleRedirect = (link, page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleOpenClose(page);
    navigate(link);
  };

  const scrollTo = (id) => {
    closeSidebar(false);
    handleScrollClick(id);
  };

  const [activeContent, setActiveContent] = useState(null);

  const handleScroll = () => {
    const sidebarItems = document.querySelectorAll(".Sub_Topic");
    let maxVisibleHeight = 0;
    let currentContent = null;

    sidebarItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      // If the current item has more visible height than the previous ones, update the active content
      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        currentContent = item.id;
      }
    });

    setActiveContent(currentContent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);
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
        <div
          className={`SubItems_Container ${
            activeContent === "topic32" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic32")}>
            Euclid's First Five Postulate
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic33" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic33")}>
            Euclid's Fifth Postulate
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic34" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic34")}>
            The Hyperbolic Axiom
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic35" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic35")}>
            Nonintersecting Lines
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic36" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic36")}>
            Ideal Points
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic37" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic37")}>
            Omega Triangles
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic38" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic38")}>
            Hyperbolic Quadrilaterals and Triangles
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic39" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic39")}>
            Hyperbolic Plane Model
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic40" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic40")}>
            Hyperbolic Tesselations
          </p>
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
        <div
          className={`SubItems_Container ${
            activeContent === "topic41" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic41")}>
            The Elliptic Axiom
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic42" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic42")}>
            Elliptic Quadrilaterals and Triangles
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic43" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic43")}>
            The Sphere S² in R³
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic44" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic44")}>
            Distance and Spherical Distance
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic45" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic45")}>
            Spherical Triangles
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic46" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic46")}>
            Napier's Rule
          </p>
        </div>
      </Collapse>
    </>
  );
}

export default NonEuclideanSidebar;
