import { Outlet } from "react-router-dom";
import { CustomLink } from "../components/CustomLink";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <CustomLink to="page-1">Page 1</CustomLink>
          </li>
          <li>
            <CustomLink to="page-2">Page 2</CustomLink>
          </li>
          <li>
            <CustomLink to="page-3">Page 3</CustomLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
