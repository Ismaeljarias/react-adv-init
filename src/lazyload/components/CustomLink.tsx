import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

export function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link className={match ? "nav-active" : ""} to={to} {...props}>
        {children}
      </Link>
    </>
  );
}
