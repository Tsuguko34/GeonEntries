/**
 ** This function removes the navigation bar on specific pages
 **/

export default function hasNavBar(location, routes) {
  const excludedPaths = [];

  return routes.some((route) => {
    const isExcluded = excludedPaths.includes(route.path);
    let pathname = location.pathname;
    if (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }

    if (route.path === "/Lesson/:lessonName") {
      return (
        pathname.startsWith(route.path.split("/:")[0]) &&
        /^\/Lesson\/[a-zA-Z0-9]+$/.test(pathname)
      );
    } else if (route.path === "/Lesson/:lessonName/:lessonTitle") {
      return (
        pathname.startsWith(route.path.split("/:")[0]) &&
        /^\/Lesson\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/.test(pathname)
      );
    } else if (route.path === "/Lesson/Quiz/:lessonName") {
      return (
        pathname.startsWith(route.path.split("/:")[0]) &&
        /^\/Lesson\/Quiz\/[a-zA-Z0-9]+$/.test(pathname)
      );
    } else {
      return !isExcluded && route.path === pathname;
    }
  });
}
