import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                end
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                end
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                end
                className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/lazy3" element={<LazyPage3 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy1" element={<LazyPage1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
