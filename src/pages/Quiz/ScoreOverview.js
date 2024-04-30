import React, { useContext, useEffect, useState } from "react";
import "../../styles/scoreoverview.css";

import pent1 from "../../assets/images/Quiz Images/scoreOverview/pent-1.png";
import leftGreen from "../../assets/images/Quiz Images/scoreOverview/left-green.png";
import rightRed from "../../assets/images/Quiz Images/scoreOverview/right-red-2.png";
import miniLogo from "../../assets/images/miniLogo.png";
import { useNavigate, useParams } from "react-router-dom";
import { SidebarContext } from "../../context/context";
import { GetWindowWidth, neQuestions, peQuestions } from "../../utils";
import { Tooltip } from "@mui/material";

function ScoreOverview() {
  const windowWith = GetWindowWidth();
  const navigate = useNavigate();
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
    questions,
    setQuestions,
  } = useContext(SidebarContext);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const calculatePercentage = () => {
    if (questions) {
      const totalScore = Math.round((score / questions.length) * 100);
      return totalScore;
    }
  };

  useEffect(() => {
    document.title = `Score Overview`;
    if (isNaN(calculatePercentage())) {
      navigate(`/Lesson/Quiz/${lessonName}`);
    }
  }, []);

  const navigateToLesson = (name) => {
    console.log(name);
    if (name === "PlaneEuclideanGeometry" || name === "NonEuclideanGeometry") {
      navigate(`/Lesson/${name}`);
    } else if (name === "VectorsIn2Space3Space") {
      navigate(`/Lesson/PlaneEuclideanGeometry/${name}`);
    } else if (name === "NormDistanceAndDotProduct") {
      navigate(`/Lesson/PlaneEuclideanGeometry/${name}`);
    } else if (name === "Orthogonality") {
      navigate(`/Lesson/PlaneEuclideanGeometry/${name}`);
    } else if (name === "EquationsOfLinesAndPlanes") {
      navigate(`/Lesson/PlaneEuclideanGeometry/${name}`);
    } else if (name === "CrossProduct") {
      navigate(`/Lesson/PlaneEuclideanGeometry/${name}`);
    } else if (name === "HyperbolicGeometry") {
      navigate(`/Lesson/NonEuclideanGeometry/${name}`);
    } else if (name === "SphericalGeometry") {
      navigate(`/Lesson/NonEuclideanGeometry/${name}`);
    }
  };
  return (
    <section id="ScoreOverview" className="ScoreOverview">
      <div className="wrapper">
        <img src={miniLogo} alt="" className="BottomLogo" />
        <div className="Background_Image">
          <img src={pent1} alt="" />
        </div>
        <div className="Contents">
          <div className="Score_Container">
            <div className="Left_Side">
              <div className="Percentage">
                <p>{calculatePercentage()}%</p>
              </div>
              <div className="Tally">
                <p
                  className={`correct ${leftHover ? "hover" : ""}`}
                  onMouseEnter={() => setLeftHover(true)}
                  onMouseLeave={() => setLeftHover(false)}
                >
                  {score} correct
                </p>
                <p
                  className={`wrong ${rightHover ? "hover" : ""}`}
                  onMouseEnter={() => setRightHover(true)}
                  onMouseLeave={() => setRightHover(false)}
                >
                  {questions.length > 0 && questions.length - score} wrong
                </p>
              </div>
            </div>
            <div className="Right_Side">
              <div className="Visual_Container">
                <div
                  className="Left"
                  onMouseEnter={() => setLeftHover(true)}
                  onMouseLeave={() => setLeftHover(false)}
                >
                  <img
                    src={leftGreen}
                    alt=""
                    className={`${leftHover ? "hover" : ""} ${
                      rightHover ? "hide" : ""
                    }`}
                  />
                  <div
                    className={`Container_With_Count wrong ${
                      rightHover ? "show" : ""
                    }`}
                  >
                    <p>{questions.length > 0 && questions.length - score} </p>
                  </div>
                </div>
                <div className="Center">
                  <div
                    className={`total ${rightHover || leftHover ? "hide" : ""}`}
                  >
                    <p className="Total_Items">
                      {questions.length > 0 && questions.length}
                    </p>
                    <p>items</p>
                  </div>
                </div>
                <div
                  className="Right"
                  onMouseEnter={() => setRightHover(true)}
                  onMouseLeave={() => setRightHover(false)}
                >
                  <img
                    src={rightRed}
                    alt=""
                    className={`${rightHover ? "hover" : ""} ${
                      leftHover ? "hide" : ""
                    }`}
                  />
                  <div
                    className={`Container_With_Count correct ${
                      leftHover ? "show" : ""
                    }`}
                  >
                    <p>{score}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Actions">
            <Tooltip
              placement={windowWith > 1439 ? "top-start" : "top"}
              title={<p style={{ fontSize: "14px" }}>Retry Quiz</p>}
            >
              <button
                className="Retry"
                onClick={() => navigate(`/Lesson/Quiz/${lessonName}`)}
              ></button>
            </Tooltip>

            <Tooltip
              placement="top"
              title={<p style={{ fontSize: "14px" }}>Home</p>}
            >
              <button
                className="Home"
                onClick={() => navigate(`/LessonsList`)}
              ></button>
            </Tooltip>

            <Tooltip
              placement="top-end"
              title={<p style={{ fontSize: "14px" }}>Back to lesson</p>}
            >
              <button
                className="Lessons"
                onClick={() => navigateToLesson(lessonName)}
              ></button>
            </Tooltip>
          </div>

          <div className="Bottom_Text">
            <p>YOUR</p>
            <p>RESULT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScoreOverview;
