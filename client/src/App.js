import "./styles/style.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./config";
import { Navbar } from "./components";
import { hasNavBar } from "./utils";

function App() {
  const location = useLocation();
  const pageHasNavBar = hasNavBar(location, routes);
  return (
    <div>
      {/* {isPageHasSideBar && <SideBar />} */}

      <div className={`Navbar_Container ${pageHasNavBar && "active"}`}>
        {pageHasNavBar && <Navbar />}
      </div>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
