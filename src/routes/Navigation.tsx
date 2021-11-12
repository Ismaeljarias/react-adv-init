import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import logo from "../logo.svg";
import { Page1, Page2, Page3 } from "../lazyload/pages";
import { CustomLink } from "../lazyload/components/CustomLink";

type RouteProps = RouteObject & {
  name?: string;
};

const Layout = lazy(
  () => import(/* webpackChunkName: "LazyLayout" */ "../lazyload/layout/Layout")
);

export const Navigation = () => {
  let routes: RouteProps[] = [
    {
      name: "Home",
      path: "/",
      element: <h1>Home</h1>,
    },
    {
      name: "About",
      path: "about",
      element: <Layout />,
      children: [
        { path: "page-1", element: <Page1 /> },
        { path: "page-2", element: <Page2 /> },
        { path: "page-3", element: <Page3 /> },
      ],
    },
    {
      name: "Users",
      path: "/users",
      element: <h1>Users</h1>,
    },
    {
      name: "Contact",
      path: "/contact",
      element: <h1>Contact</h1>,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  let element = useRoutes(routes);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            {routes.map(({ name, path }) => (
              <li key={`${name}-${path}`}>
                <CustomLink to={path!}>{name}</CustomLink>
              </li>
            ))}
          </ul>
        </nav>

        {element}
      </div>
    </Suspense>
  );
};
