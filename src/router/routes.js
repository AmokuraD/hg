/** @type { import("vue-router").RouteConfig[] } */
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layouts/basic-layout"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home"),
      },
    ],
  },
];

export default routes;
