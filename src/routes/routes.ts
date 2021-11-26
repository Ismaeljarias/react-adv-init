import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ "../lazyload/pages/Page1")
);
const Lazy2 = lazy(
  () => import(/* webpackChunkName: "LazyPage2" */ "../lazyload/pages/Page2")
);
const Lazy3 = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ "../lazyload/pages/Page3")
);

export const routes: Route[] = [
  {
    to: "/lazy-1",
    path: "lazy-1",
    component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy-2",
    path: "lazy-2",
    component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy-3",
    path: "lazy-3",
    component: Lazy3,
    name: "Lazy-3",
  },
];
