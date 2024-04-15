import React, { useContext, useState } from "react";
import "../../styles/quiz.css";
import { Link, useParams } from "react-router-dom";

import miniLogo from "../../assets/images/miniLogo.png";
import correctIcon from "../../assets/images/Quiz Images/check.png";
import wrongIcon from "../../assets/images/Quiz Images/wrong.png";
import ExampleA1 from "../../assets/videos/PELesson1/Example A1.mp4";

import * as FaIcons from "react-icons/fa";
import { SidebarContext } from "../../context/context";
import { neQuestions, peQuestions } from "../../utils";

function Quiz() {
  const { lessonName } = useParams();
  const {
    activeQuestion,
    setActiveQuestion,
    score,
    setScore,
    setNextButton,
    showNextButton,
    answerStatus,
    setAnswerStatus,
    selectedAnswer,
    setSelectedAnswer,
  } = useContext(SidebarContext);
  const getLessonName = (lessonName) => {
    if (lessonName === "NonEuclideanGeometry") {
      return "Non-Euclidean Geometry";
    } else if (lessonName === "PlaneEuclideanGeometry") {
      return "Plane Euclidean Geometry";
    }
  };

  const getQuestions = (lessonName) => {
    if (lessonName === "NonEuclideanGeometry") {
      return neQuestions;
    } else if (lessonName === "PlaneEuclideanGeometry") {
      return peQuestions;
    }
  };

  const questions = getQuestions(lessonName);

  const submitAnswer = () => {
    const correctAnswer = questions[activeQuestion - 1].correctAnswer;
    const choiceSelected =
      questions[activeQuestion - 1].choices[selectedAnswer];
    if (correctAnswer === choiceSelected) {
      setScore((prev) => prev + 1);
      setAnswerStatus("correct");
      questions[activeQuestion - 1].status = "correct";
    } else {
      setAnswerStatus("wrong");
      questions[activeQuestion - 1].status = "wrong";
    }

    const explanationP = document.getElementById("Explanation_P");
    if (explanationP) {
      explanationP.innerHTML = questions[activeQuestion - 1].explanation;
      explanationP.scrollIntoView({ behavior: "smooth" });
    }

    setNextButton(true);
  };

  return (
    <section id="Quiz" className="Quiz">
      <div className="wrapper">
        <div className="Quiz_Title">
          <Link to={`/Lesson/${lessonName}`}>{getLessonName(lessonName)}</Link>
        </div>
        <div className="Quiz_Container">
          {/* Quiz Number */}
          <div className={`Quiz_Question_Number ${answerStatus}`}>
            <span>Q</span>
            <span className="Question_Number">{activeQuestion}</span>
          </div>

          {/* Quiz Item */}
          <div className="Quiz_Item">
            <div className="Question">
              <p>
                {activeQuestion}. {questions[activeQuestion - 1].question}
              </p>
            </div>
            <div className="Actions">
              <div className="Choices_Container">
                <div className="Choices">
                  {questions &&
                    questions[activeQuestion - 1].choices.map(
                      (choice, index) => (
                        <div
                          key={`choice${index}`}
                          className={`Choice ${
                            showNextButton &&
                            questions[activeQuestion - 1].correctAnswer ===
                              choice
                              ? "correct"
                              : ""
                          } ${selectedAnswer === index ? "active" : ""}
                          ${
                            answerStatus === "wrong" && selectedAnswer === index
                              ? "wrong"
                              : ""
                          } ${showNextButton ? "noHover" : ""}`}
                          onClick={() => setSelectedAnswer(index)}
                        >
                          {questions[activeQuestion - 1].type === "text" && (
                            <p>{choice}</p>
                          )}
                          {questions[activeQuestion - 1].type === "images" && (
                            <img src={choice} alt="" />
                          )}
                        </div>
                      )
                    )}
                </div>
              </div>
              <div className="Submit">
                {selectedAnswer !== null && !showNextButton && (
                  <button onClick={() => submitAnswer()}>
                    <FaIcons.FaPaperPlane />
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {showNextButton && (
          <div id="explanationContainer" className="Explanation_Container">
            <div className="Explanation_Icon">
              {answerStatus === "correct" && (
                <img src={correctIcon} alt="Correct" />
              )}

              {answerStatus === "wrong" && <img src={wrongIcon} alt="Wrong" />}
            </div>
            <div className="Explanation">
              {questions && !questions[activeQuestion - 1].explanationType && (
                <p id="Explanation_P"></p>
              )}

              {questions &&
                questions[activeQuestion - 1].explanationType === "image" && (
                  <img
                    id="Explanation_img"
                    src={questions[activeQuestion - 1].explanation}
                    alt=""
                  />
                )}

              {questions && questions[activeQuestion - 1].video && (
                <video controls>
                  <source id="Example_video" src={ExampleA1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;
