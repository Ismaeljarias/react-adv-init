import { Suspense } from "react";
import {
  Routes,
  Route,
  Navigate,
  LinkProps,
  useResolvedPath,
  useMatch,
  Link,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? "nav-active" : ""} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <CustomLink to={path}>{name}</CustomLink>
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
      </>
    </Suspense>
  );
};
