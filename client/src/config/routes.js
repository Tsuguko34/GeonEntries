import { LandingPage, LessonsList } from "../pages";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/LessonsList",
    component: <LessonsList />,
  },
];

export default routes;
