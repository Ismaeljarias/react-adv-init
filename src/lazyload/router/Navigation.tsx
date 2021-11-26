import { Link, Navigate, useRoutes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const lazyRoutes = [
  {
    path: "/lazy1",
    element: <LazyPage1 />,
  },
  {
    path: "/lazy2",
    element: <LazyPage2 />,
  },
  {
    path: "/lazy3",
    element: <LazyPage3 />,
  },
  {
    path: "*",
    element: <Navigate replace to={"lazy1"} />,
  },
];

export const Navigation = () => {
  let element = useRoutes(lazyRoutes);

  return (
    <>
      <h1>LazyLayout pages</h1>
      <ul>
        <li>
          <Link to="lazy1">Lazy Page 1</Link>
        </li>
        <li>
          <Link to="lazy2">Lazy Page 2</Link>
        </li>
        <li>
          <Link to="lazy3">Lazy Page 3</Link>
        </li>
      </ul>

      {element}
    </>
  );
};
