import React, { useContext } from "react";
import "../styles/sidebar.css";
import { useLocation, useParams } from "react-router-dom";
import PlaneEuclideanSidebar from "./PlaneEuclideanLessons/PlaneEuclideanSidebar";
import NonEuclideanSidebar from "./NonEuclideanLessons/NonEuclideanSidebar";
import { SidebarContext } from "../context/context";

import * as IoIcons from "react-icons/io";

function Sidebar() {
  const location = useLocation();
  const { toggleSidebar, setToggleSidebar } = useContext(SidebarContext);
  const convertLessonName = (name) => {
    if (name.includes("PlaneEuclideanGeometry")) {
      return "Plane Euclidean Geometry";
    } else if (name.includes("NonEuclideanGeometry")) {
      return "Non-Euclidean Geometry";
    }
  };
  return (
    <div id="Sidebar" className="Sidebar">
      <div className="Content">
        <div className="Close_Icon">
          <IoIcons.IoMdClose onClick={() => setToggleSidebar(false)} />
        </div>
        <p className="Title">{convertLessonName(location.pathname)}</p>
        <div className="List">
          {location.pathname &&
            location.pathname.includes("PlaneEuclideanGeometry") && (
              <PlaneEuclideanSidebar />
            )}
          {location.pathname &&
            location.pathname.includes("NonEuclideanGeometry") && (
              <NonEuclideanSidebar />
            )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
