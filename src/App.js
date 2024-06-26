import "./styles/style.css";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { routes } from "./config";
import { Navbar, Sidebar } from "./components";
import { GetWindowWidth, hasNavBar, hasSidebar } from "./utils";
import { useEffect, useState } from "react";
import { SidebarContext } from "./context/context";
import { Hidden } from "@mui/material";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const windowWidth = GetWindowWidth();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const pageHasNavBar = hasNavBar(location, routes);
  const pagehasSideBar = hasSidebar(location, routes);

  //Quiz Stuff
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [showNextButton, setNextButton] = useState(false);
  const [answerStatus, setAnswerStatus] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (toggleSidebar && windowWidth <= 1366) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleSidebar]);

  useEffect(() => {
    if (location.pathname === "/" && windowWidth >= 1366) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [location.pathname]);

  return (
    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            backgroundColor: "#053b50",
            color: "#FFF",
          },
        }}
      />
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
          activeQuestion,
          setActiveQuestion,
          score,
          setScore,
          setNextButton,
          showNextButton,
          answerStatus,
          setAnswerStatus,
          selectedAnswer,
          setSelectedAnswer,
          questions,
          setQuestions,
        }}
      >
        <div
          className={`Sidebar_Overlay ${
            toggleSidebar && windowWidth <= 1366 && "open"
          }`}
          onClick={() => setToggleSidebar(false)}
        ></div>
        <div
          className={`Navbar_Container ${
            location.pathname === "/" ? "homepage" : ""
          } ${(pageHasNavBar || location.pathname === "/") && "active"}`}
        >
          {(pageHasNavBar || location.pathname === "/") && (
            <Navbar
              setOpenSidebar={setToggleSidebar}
              pageHasSidebar={pagehasSideBar}
            />
          )}
        </div>
        <div className="Main_View">
          <div
            className={pagehasSideBar ? "Main_Content Sidebar" : "Main_Content"}
          >
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </div>

          <div
            className={`Sidebar_Container ${pagehasSideBar && "active"} ${
              toggleSidebar && windowWidth <= 1366 && "open"
            }`}
          >
            {pagehasSideBar && <Sidebar />}
          </div>
        </div>
      </SidebarContext.Provider>
    </div>
  );
}

export default App;
