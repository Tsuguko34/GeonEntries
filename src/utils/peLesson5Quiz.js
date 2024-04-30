import p1 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/1 P L5.png";
import p2 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/2 P L5.png";
import p3 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/3 P L5.png";
import p4 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/4 P L5.png";
import p5 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/5 P L5.png";
import p6 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/6 P L5.png";
import p7 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/7 P L5.png";
import p8 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/8 P L5.png";
import p9 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/9 P L5.png";
import p10 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/10 P L5.png";
import p11 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/11 P L5.png";
import p12 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/12 P L5.png";
import p13 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/13 P L5.png";
import p14 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/14 P L5.png";
import p15 from "../assets/images/Quiz Images/lessonQuizImages/PELesson5Quiz/15 P L5.png";

import c10a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 10A.png";
import c10b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 10B.png";
import c10c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 10C.png";
import c10d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 10D.png";
import c12a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 12A.png";
import c12b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 12B.png";
import c12c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 12C.png";
import c12d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 12D.png";
import c15a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 15A.png";
import c15b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 15B.png";
import c15c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 15C.png";
import c15d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson5Choices/L5 15D.png";

var questions = [
  {
    question:
      "What is the cross product of u = (-2, 0, -13) and v = (-21, -1, -8)?",
    choices: [
      "(13, 257, 2)",
      "(-13, -257, 2)",
      "(-13, 257, 2)",
      "(-13, 257, -2)",
    ],
    correctAnswer: "(-13, 257, 2)",
    type: "text",
    explanation: p1,
    explanationType: "image",
  },
  {
    question:
      "What is the cross product of u = (-11, 0, 0) and v = (-8, 3, -7)?",
    choices: ["(0, 77, -33)", "(0, -77, -33)", "(0, 77, 33)", "(0, -77, 33)"],
    correctAnswer: "(0, -77, -33)",
    type: "text",
    explanation: p2,
    explanationType: "image",
  },
  {
    question:
      "Let v = (1, 4, -2) and k = (0, 0, 1). What is the magnitude of v × k?",
    choices: ["(4, -1, 0)", "17", "(4, 1, 0)", "√17"],
    correctAnswer: "√17",
    type: "text",
    explanation: p3,
    explanationType: "image",
  },
  {
    question:
      "What is the scalar triple product of vectors u = (7, -5, 0), v = (-3, 10, 6), and w = (9, 4, -4)?",
    choices: ["-658", "658", "238", "-238"],
    correctAnswer: "-658",
    type: "text",
    explanation: p4,
    explanationType: "image",
  },
  {
    question:
      "What is the volume of the parallelepiped with adjacent edges a = (-1, -2, 1), b = (4, 3, 2), and c = (0, -5, -2)?",
    choices: ["40 cu. units", "30 cu. units", "20 cu. units", "10 cu. units"],
    correctAnswer: "40 cu. units",
    type: "text",
    explanation: p5,
    explanationType: "image",
  },
  {
    question:
      "What is four times the scalar triple product of the unit vectors i, j, and k?",
    choices: ["0", "1", "4", "1/4"],
    correctAnswer: "4",
    type: "text",
    explanation: p6,
    explanationType: "image",
  },
  {
    question:
      "Let u = (10, 0, 7) and v = (-2, 5, -1). What is the magnitude of u × v?",
    choices: ["(-35, -4, 50)", "61.16", "71.17", "81.18"],
    correctAnswer: "61.16",
    type: "text",
    explanation: p7,
    explanationType: "image",
  },
  {
    question:
      "What is the area of the parallelogram ABCD if A = (1, 5), B = (-1, 4), C = (1, 3), and D = (3, 4)?",
    choices: ["16 sq. units", "12 sq. units", "8 sq. units", "4 sq. units"],
    correctAnswer: "4 sq. units",
    type: "text",
    explanation: p8,
    explanationType: "image",
  },
  {
    question:
      "What is the area of the parallelogram PQRS if P = (-5, 3), Q = (-1, 3), R = (-2, 5), and S = (-6, 5)?",
    choices: ["8 sq. units", "10 sq. units", "6 sq. units", "4 sq. units"],
    correctAnswer: "8 sq. units",
    type: "text",
    explanation: p9,
    explanationType: "image",
  },
  {
    question: "Evaluate: 4j × (-7i × 10k)",
    choices: [c10a, c10b, c10c, c10d],
    correctAnswer: c10b,
    type: "images",
    explanation: p10,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question: "Evaluate: (4i × -6k) × (2k × -8j)",
    choices: ["(0, 0, 384)", "(0, 0, -384)", "(0, -384, 0)", "(0, 384, 0)"],
    correctAnswer: "(0, 0, -384)",
    type: "text",
    explanation: p11,
    explanationType: "image",
  },
  {
    question: "Evaluate: (6i × -15k) × (-j × -j)",
    choices: [c12a, c12b, c12c, c12d],
    correctAnswer: c12d,
    type: "images",
    explanation: p12,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the cross product of u = (-7, 13, 0) and v = (4, -1, -9)?",
    choices: [
      "(117, -63, 45)",
      "(117, 63, -45)",
      "(-117, -63, -45)",
      "(-117, 63, -45)",
    ],
    correctAnswer: "(-117, -63, -45)",
    type: "text",
    explanation: p13,
    explanationType: "image",
  },
  {
    question:
      "What is the scalar triple product of vectors u = (1, -1, 4), v = (-8, 3, -2), and w = (-5, 11, -6)?",
    choices: ["326", "-326", "-250", "250"],
    correctAnswer: "-250",
    type: "text",
    explanation: p14,
    explanationType: "image",
  },
  {
    question: "Which of the following is NOT true?",
    choices: [c15a, c15b, c15c, c15d],
    correctAnswer: c15d,
    type: "images",
    explanation: p15,
    explanationType: "image",
    imageChoice: true,
  },
];

// Function to shuffle array
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Shuffling the questions array
var peLesson5Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peLesson5Questions;
