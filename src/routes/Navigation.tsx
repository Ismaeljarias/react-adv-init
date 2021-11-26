import { Suspense } from "react";

import logo from "../logo.svg";
import { CustomLink } from "../lazyload/components/CustomLink";
import { routes } from "./routes";
import { Navigate, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            {routes.map(({ name, to }) => (
              <li key={`${name}-${to}`}>
                <CustomLink to={to}>{name}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </Suspense>
  );
};
