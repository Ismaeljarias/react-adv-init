import { Suspense } from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end
                    className={({ isActive }) =>
                      isActive ? "nav-active" : ""
                    }>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to={routes[0].path} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
