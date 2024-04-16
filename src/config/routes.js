import {
  LandingPage,
  Lesson,
  LessonsList,
  PageNotFound,
  Quiz,
  ScoreOverview,
} from "../pages";
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
    path: "/Lesson/Quiz/:lessonName",
    component: <Quiz />,
  },
  {
    path: "/Lesson/ScoreOverview/:lessonName",
    component: <ScoreOverview />,
  },
  {
    path: "/*",
    component: <PageNotFound />,
  },
];

export default routes;
