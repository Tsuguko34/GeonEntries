import React, { useContext, useEffect, useState } from "react";
import "../../styles/quiz.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import miniLogo from "../../assets/images/miniLogo.png";
import correctIcon from "../../assets/images/Quiz Images/check.png";
import wrongIcon from "../../assets/images/Quiz Images/wrong.png";
import ExampleA1 from "../../assets/videos/PELesson1/Example A1.mp4";

import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { SidebarContext } from "../../context/context";
import { GetWindowWidth, neQuestions, peQuestions } from "../../utils";

function Quiz() {
  const navigate = useNavigate();
  const { lessonName } = useParams();
  const windowWidth = GetWindowWidth();

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
    questions,
    setQuestions,
  } = useContext(SidebarContext);
  const getLessonName = (lessonName) => {
    if (lessonName === "NonEuclideanGeometry") {
      return "Non-Euclidean Geometry";
    } else if (lessonName === "PlaneEuclideanGeometry") {
      return "Plane Euclidean Geometry";
    }
  };

  const removeStatusField = (arrayOfObjects) => {
    return arrayOfObjects.map((obj) => {
      const { status, ...rest } = obj;
      return rest;
    });
  };

  const getQuestions = (lessonName) => {
    setQuestions([]);
    let questionList = [];
    if (lessonName === "NonEuclideanGeometry") {
      questionList = neQuestions;
    } else if (lessonName === "PlaneEuclideanGeometry") {
      questionList = peQuestions;
    }
    setQuestions(removeStatusField(questionList));
  };

  const nextQuestion = () => {
    setActiveQuestion((prev) => prev + 1);
    setNextButton(false);
    setAnswerStatus("");
    setSelectedAnswer(null);
  };

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
    const container = document.getElementById("explanationContainer");
    if (container) {
      if (explanationP) {
        explanationP.innerHTML = questions[activeQuestion - 1].explanation;
      }
      setTimeout(() => {
        window.scrollTo({
          behavior: "smooth",
          top: document.body.scrollHeight,
        });
      }, 200);
    }

    setNextButton(true);
  };

  useEffect(() => {
    document.title = `${getLessonName(lessonName)} Quiz`;
    setScore(0);
    setActiveQuestion(1);
    setNextButton(false);
    setAnswerStatus("");
    setSelectedAnswer(null);
    getQuestions(lessonName);
  }, []);

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
                {activeQuestion}.{" "}
                {questions.length > 0 && questions[activeQuestion - 1].question}
              </p>
            </div>
            <div className="Actions">
              <div className="Choices_Container">
                <div className="Choices">
                  {questions.length > 0 &&
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

                {showNextButton &&
                  questions.length !== activeQuestion &&
                  windowWidth <= 1024 && (
                    <button className="Next" onClick={() => nextQuestion()}>
                      <div className="Icon">
                        <MdIcons.MdKeyboardDoubleArrowRight />
                      </div>
                      <div className="Text">Next</div>
                    </button>
                  )}

                {showNextButton &&
                  questions.length === activeQuestion &&
                  windowWidth <= 1024 && (
                    <button
                      className="Next Score"
                      onClick={() =>
                        navigate(`/Lesson/ScoreOverview/${lessonName}`)
                      }
                    >
                      <div className="Icon">
                        <MdIcons.MdKeyboardDoubleArrowRight />
                      </div>
                      <div className="Text">View Score</div>
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>

        <div
          id="explanationContainer"
          className={`Explanation_Container ${showNextButton ? "show" : ""}`}
        >
          <div className="Explanation_Icon">
            {answerStatus === "correct" && (
              <img src={correctIcon} alt="Correct" />
            )}

            {answerStatus === "wrong" && <img src={wrongIcon} alt="Wrong" />}
          </div>
          <div className="Explanation">
            {questions.length > 0 &&
              !questions[activeQuestion - 1].explanationType && (
                <p id="Explanation_P"></p>
              )}

            {questions.length > 0 &&
              questions[activeQuestion - 1].explanationType === "image" && (
                <img
                  id="Explanation_img"
                  src={questions[activeQuestion - 1].explanation}
                  alt=""
                />
              )}

            {questions.length > 0 &&
              questions[activeQuestion - 1].explanationType === "image2" && (
                <img
                  id="Explanation_img"
                  className="large"
                  src={questions[activeQuestion - 1].explanation}
                  alt=""
                />
              )}

            {questions.length > 0 && questions[activeQuestion - 1].video && (
              <video controls>
                <source id="Example_video" src={ExampleA1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
