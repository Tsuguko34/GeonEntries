import { LandingPage, Lesson, LessonsList, PageNotFound } from "../pages";
import LessonTopics from "../pages/Lessons/LessonTopics";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/LessonsList",
    component: <LessonsList />,
  },
  {
    path: "/Lesson/:lessonName",
    component: <LessonTopics />,
  },
  {
    path: "/Lesson/:lessonName/:lessonTitle",
    component: <Lesson />,
  },
  {
    path: "/*",
    component: <PageNotFound />,
  },
];

export default routes;
