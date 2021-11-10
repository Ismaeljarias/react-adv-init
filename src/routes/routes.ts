import { lazy, LazyExoticComponent } from "react";

import { NoLazy } from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

export interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "LazyLayout" */ "../lazyload/layout/LazyLayout"
        )
    ),
    name: "LazyLoading Nested",
  },
  {
    path: "/no-lazy",
    component: NoLazy,
    name: "NoLazyLoading Component",
  },
];
