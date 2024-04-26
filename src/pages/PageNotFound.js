import React from "react";
import largeLogo from "../assets/images/largeLogo.png";
import "../styles/pagenotfound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section id="PageNotFound" className="PageNotFound">
      <div className="wrapper">
        <div className="Illustration">
          <img src={largeLogo} alt="" />
          <p className="White">404</p>
          <p className="Bold">Oops! Page not found!</p>
          <p>The page you’re looking for doesn’t exist or was removed!</p>
        </div>
        <div className="Action">
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
