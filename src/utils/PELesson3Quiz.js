import p1 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/1 P L3.png";
import p2 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/2 P L3.png";
import p3 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/3 P L3.png";
import p4 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/4 P L3.png";
import p5 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/5 P L3.png";
import p6 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/6 P L3.png";
import p7 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/7 P L3.png";
import p8 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/8 P L3.png";
import p9 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/9 P L3.png";
import p10 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/10 P L3.png";
import p11 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/11 P L3.png";
import p12 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/12 P L3.png";
import p13 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/13 P L3.png";
import p14 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/14 P L3.png";
import p15 from "../assets/images/Quiz Images/lessonQuizImages/PELesson3Quiz/15 P L3.png";
import c5a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 5A.png";
import c5b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 5B.png";
import c5c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 5C.png";
import c5d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 5D.png";
import c6a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 6A.png";
import c6b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 6B.png";
import c6c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 6C.png";
import c6d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 6D.png";
import c9a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 9A.png";
import c9b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 9B.png";
import c9c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 9C.png";
import c9d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 9D.png";
import c14a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 14A.png";
import c14b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 14B.png";
import c14c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 14C.png";
import c14d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson3Choices/L3 14D.png";

var questions = [
  {
    question:
      "What is the point-normal equation of the line passing through point P₀(-14, 2) and having a normal vector n = (8, -17)?",
    choices: [
      "-14(x + 8) + 2(y - 17) = 0",
      "8(x - 14) – 17(y + 2) = 0",
      "-14(x – 8) + 2(y + 17) = 0",
      "8(x + 14) – 17(y – 2) = 0",
    ],
    correctAnswer: "8(x + 14) – 17(y – 2) = 0",
    type: "text",
    explanation: p1,
    explanationType: "image",
  },
  {
    question:
      "What is the general equation of the plane passing through point P₀(5, -11, -7) and having a normal vector n = (0, 13, -6)?",
    choices: [
      "13y + 6z - 185 = 0",
      "13y – 6z + 101 = 0",
      "13y + 6z - 101 = 0",
      "13y – 6z + 185 = 0",
    ],
    correctAnswer: "13y – 6z + 101 = 0",
    type: "text",
    explanation: p2,
    explanationType: "image",
  },
  {
    question:
      "What is the distance between the point (-13, 8) and the line y - 2x = -5?",
    choices: ["17.44", "27.44", "37.44", "47.44"],
    correctAnswer: "17.44",
    type: "text",
    explanation: p3,
    explanationType: "image",
  },
  {
    question:
      "What is the distance between the point (-11, 7, -6) and the plane z – 9y + 7x = -3?",
    choices: ["3.5", "2.5", "1.5", "0.5"],
    correctAnswer: "1.5",
    type: "text",
    explanation: p4,
    explanationType: "image",
  },
  {
    question: "Which of the following is NOT true?",
    choices: [c5a, c5b, c5c, c5d],
    correctAnswer: c5b,
    type: "images",
    explanation: p5,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "Let u = (4, -9) and v = (-1, 2). What is the orthogonal projection of u onto v?",
    choices: [c6a, c6b, c6c, c6d],
    correctAnswer: c6a,
    type: "images",
    explanation: p6,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the normal vector of the plane with a point-normal equation -4(x – 1) + 2z = 0?",
    choices: [
      "n = (-1, 0, 0)",
      "n = (1, 0, 0)",
      "n = (4, 0, -2)",
      "n = (-4, 0, 2)",
    ],
    correctAnswer: "n = (-4, 0, 2)",
    type: "text",
    explanation: p7,
    explanationType: "image",
  },
  {
    question:
      "What is the general equation of the line passing through point P₀(-11, -16) and having a normal vector n = (-2, 2)?",
    choices: [
      "2x - 2y + 54 = 0",
      "-2x + 2y + 54 = 0",
      "-2x + 2y + 10 = 0",
      "2x - 2y + 10 = 0",
    ],
    correctAnswer: "-2x + 2y + 10 = 0",
    type: "text",
    explanation: p8,
    explanationType: "image",
  },
  {
    question: "What are the vectors that are orthogonal to (12, -7)?",
    choices: [c9a, c9b, c9c, c9d],
    correctAnswer: c9a,
    type: "images",
    explanation: p9,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question: "Which of the following vectors are orthogonal?",
    choices: [
      "(2, 8) and (-7, 3)",
      "(-1, 3) and (5, 15)",
      "(-6, 8) and (4, 3)",
      "(2, 8) and (-4, -1)",
    ],
    correctAnswer: "(-6, 8) and (4, 3)",
    type: "text",
    explanation: p10,
    explanationType: "image",
  },
  {
    question: "Which of the following vectors are NOT orthogonal?",
    choices: [
      "(-9, 3) and (-2, -6)",
      "(-4, 10) and (5, 2)",
      "(-8, -2) and (3, -12)",
      "(6, -4) and (-6, 9)",
    ],
    correctAnswer: "(6, -4) and (-6, 9)",
    type: "text",
    explanation: p11,
    explanationType: "image",
  },
  {
    question: "What are the vectors that are orthogonal to (-10, 2)?",
    choices: [
      "u = m(5, -1) ∀ m ∈ ℝ",
      "u = m(1, 5) ∀ m ∈ ℝ",
      "u = m(-1, 5) ∀ m ∈ ℝ",
      "u = m(5, 1) ∀ m ∈ ℝ",
    ],
    correctAnswer: "u = m(1, 5) ∀ m ∈ ℝ",
    type: "text",
    explanation: p12,
    explanationType: "image",
  },
  {
    question:
      "What is the distance between the point (-7, 2, -3) and the plane 13y – 6x = z + 1?",
    choices: ["2.877", "3.877", "4.877", "5.877"],
    correctAnswer: "4.877",
    type: "text",
    explanation: p13,
    explanationType: "image",
  },
  {
    question:
      "Let u = (-3, -7) and v = (-14, 8). What is the vector component of u orthogonal to v?",
    choices: [c14a, c14b, c14c, c14d],
    correctAnswer: c14a,
    type: "images",
    explanation: p14,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the distance between 4x - 3y + z – 5 = 0 and -8x + 6y – 2z + 2 = 0?",
    choices: ["0.78", "2.78", "4.78", "6.78"],
    correctAnswer: "0.78",
    type: "text",
    explanation: p15,
    explanationType: "image",
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
var peLesson3Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peLesson3Questions;
