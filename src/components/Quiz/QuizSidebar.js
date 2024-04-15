import React, { useContext, useEffect, useState } from "react";

import { Collapse } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import * as MdIcons from "react-icons/md";
import { peQuestions, neQuestions } from "../../utils";
import { SidebarContext } from "../../context/context";

function QuizSidebar({ handleScrollClick, closeSidebar }) {
  const location = useLocation();
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
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [open, setOpen] = useState(0);

  const nextQuestion = () => {
    setActiveQuestion((prev) => prev + 1);
    setNextButton(false);
    setAnswerStatus("");
    setSelectedAnswer(null);
  };

  const getQuestions = (lessonName) => {
    if (lessonName.includes("NonEuclideanGeometry")) {
      return neQuestions;
    } else if (lessonName.includes("PlaneEuclideanGeometry")) {
      return peQuestions;
    }
  };

  const questions = getQuestions(location.pathname);

  return (
    <>
      <div className="Questions_Container">
        {questions.map((question, index) => (
          <p
            id={`question${index + 1}`}
            key={index}
            className={`Question ${
              activeQuestion === index + 1 ? "active" : ""
            } ${question.status && question.status}`}
          >
            Question {index + 1}
          </p>
        ))}
      </div>
      <div className="Actions">
        {showNextButton && questions.length !== activeQuestion && (
          <button onClick={() => nextQuestion()}>
            <div className="Icon">
              <MdIcons.MdKeyboardDoubleArrowRight />
            </div>
            <div className="Text">Next</div>
          </button>
        )}

        {showNextButton && questions.length === activeQuestion && (
          <button className="Score">
            <div className="Icon">
              <MdIcons.MdKeyboardDoubleArrowRight />
            </div>
            <div className="Text">View Score</div>
          </button>
        )}
      </div>
    </>
  );
}

export default QuizSidebar;
