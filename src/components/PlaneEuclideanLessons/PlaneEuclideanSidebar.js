import React, { useEffect, useState } from "react";

import { Collapse } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function PlaneEuclideanSidebar({ handleScrollClick, closeSidebar }) {
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
      setOpen(1);
    } else if (location.pathname.includes("NormDistanceAndDotProduct")) {
      setActivePage(2);
      setOpen(2);
    } else if (location.pathname.includes("Orthogonality")) {
      setActivePage(3);
      setOpen(3);
    } else if (location.pathname.includes("EquationsOfLinesAndPlanes")) {
      setActivePage(4);
      setOpen(4);
    } else if (location.pathname.includes("CrossProduct")) {
      setActivePage(5);
      setOpen(5);
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
          handleRedirect(
            "/Lesson/PlaneEuclideanGeometry/VectorsIn2Space3Space",
            1
          )
        }
      >
        <p>1. Vectors in 2-Space & 3-Space</p>
      </div>
      <Collapse in={open === 1} timeout="auto" unmountOnExit>
        <div
          className={`SubItems_Container ${
            activeContent === "topic1" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic1")}>
            Vector Spaces
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic2" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic2")}>
            Vectors
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic3" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic3")}>
            Component Form and Standard Unit Form
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic4" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic4")}>
            Vectors with Initial Point Not on the Origin
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic5" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic5")}>
            Vector-Scalar Multiplication
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic6" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic6")}>
            Vector Operations in Rⁿ
          </p>
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
        <div
          className={`SubItems_Container ${
            activeContent === "topic7" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic7")}>
            Norm
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic8" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic8")}>
            Unit Vector
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic9" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic9")}>
            Normalizing the Vector
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic10" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic10")}>
            Distance
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic11" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic11")}>
            Dot Product
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic12" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic12")}>
            Angles Between Two Vectors
          </p>
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
        <div
          className={`SubItems_Container ${
            activeContent === "topic13" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic13")}>
            Orthogonal Vectors
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic14" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic14")}>
            Point-Normal Equation of the Line
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic15" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic15")}>
            Point-Normal Equation of the Plane
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic16" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic16")}>
            Orthogonal Projections
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic17" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic17")}>
            Distance Between a Point and a Line
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic18" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic18")}>
            Distance Between a Point and Plane
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic19" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic19")}>
            Distance Between Parallel Planes
          </p>
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
        <div
          className={`SubItems_Container ${
            activeContent === "topic20" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic20")}>
            Equations of Lines in R²
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic21" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic21")}>
            Equations of Planes in R³
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic22" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic22")}>
            Two-Point Vector Equations
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic23" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic23")}>
            Intersecting, Parallel, & Perpendicular Lines
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic24" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic24")}>
            Parallel & Intersecting Planes
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic25" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic25")}>
            Angle Between Two Planes
          </p>
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
        <div
          className={`SubItems_Container ${
            activeContent === "topic26" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic26")}>
            Cross Product of Two Vectors
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic27" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic27")}>
            Cross Product of Unit Vectors
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic28" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic28")}>
            Magnitude of the Cross Product
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic29" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic29")}>
            Area of a Parallelogram in R²
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic30" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic30")}>
            Scalar Triple Product
          </p>
        </div>
        <div
          className={`SubItems_Container ${
            activeContent === "topic31" ? "active" : ""
          }`}
        >
          <span>•</span>
          <p className="Sub_Item" onClick={() => scrollTo("topic31")}>
            Volume of a Parallelepiped in R³
          </p>
        </div>
      </Collapse>
    </>
  );
}

export default PlaneEuclideanSidebar;
