import React, { useEffect } from "react";

function LessonsList() {
  useEffect(() => {
    document.title = "List of lessons";
  }, []);
  return (
    <section id="LessonsList" className="LessonsList">
      <p>Lesson</p>
    </section>
  );
}

export default LessonsList;
