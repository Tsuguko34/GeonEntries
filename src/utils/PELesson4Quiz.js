import p1 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/1 P L4.png";
import p2 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/2 P L4.png";
import p3 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/3 P L4.png";
import p4 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/4 P L4.png";
import p5 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/5 P L4.png";
import p6 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/6 P L4.png";
import p7 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/7 P L4.png";
import p8 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/8 P L4.png";
import p9 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/9 P L4.png";
import p10 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/10 P L4.png";
import p11 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/11 P L4.png";
import p12 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/12 PL 4.png";
import p13 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/13 P L4.png";
import p14 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/14 P L4.png";
import p15 from "../assets/images/Quiz Images/lessonQuizImages/PELesson4Quiz/15 P L4.png";
import c1a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 1A.png";
import c1b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 1B.png";
import c1c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 1C.png";
import c1d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 1D.png";
import c6a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 6A.png";
import c6b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 6B.png";
import c6c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 6C.png";
import c6d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 6D.png";
import c9a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 9A.png";
import c9b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 9B.png";
import c9c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 9C.png";
import c9d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 9D.png";
import c12a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 12A.png";
import c12b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 12B.png";
import c12c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 12C.png";
import c12d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson4Choices/L4 12D.png";

var questions = [
  {
    question: "Which of the following is TRUE?",
    choices: [c1a, c1b, c1c, c1d],
    correctAnswer: c1a,
    type: "images",
    explanation: p1,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the vector equation of a line passing through points (-1, 8) and (-6, -14)?",
    choices: [
      "(x, y) = (-1, 8) + t(-5, -22)",
      "(x, y) = (-5, -22) + t(-1, -8)",
      "(x, y) = (-1, 8) + t(-5, 22)",
      "(x, y) = (-5, -22) + t(-6, -14)",
    ],
    correctAnswer: "(x, y) = (-1, 8) + t(-5, -22)",
    type: "text",
    explanation: p2,
    explanationType: "image",
  },
  {
    question:
      "What is the vector equation of a line passing through the origin and is parallel to vector (-12, -7, 15)?",
    choices: [
      "(x, y) = t(12, 7, -15)",
      "(x, y, z) = t(12, 7, -15)",
      "(x, y) = t(-12, -7, 15)",
      "(x, y, z) = t(-12, -7, 15)",
    ],
    correctAnswer: "(x, y, z) = t(-12, -7, 15)",
    type: "text",
    explanation: p3,
    explanationType: "image",
  },
  {
    question: "Which of the following pair of planes are parallel?",
    choices: [
      "2b – 7c + a + 4 = 0 and -21c + 6b – 3a + 12 = 0",
      "2y + 6x = 1 + 4z and y – 3x – 2z = 2",
      "5b + 8a + 2c = 6 and 24a = 6c + 4 – 15b",
      "10y – 26z – 14x + 8 = 0 and 13z – 5y – 4 + 7x = 0",
    ],
    correctAnswer: "10y – 26z – 14x + 8 = 0 and 13z – 5y – 4 + 7x = 0",
    type: "text",
    explanation: p4,
    explanationType: "image",
  },
  {
    question:
      "Let P = (-8, 14) and Q = (0, -2). What is the midpoint of segment PQ?",
    choices: ["(4, -6)", "(-4, 6)", "(4, -8)", "(-4, 8)"],
    correctAnswer: "(-4, 6)",
    type: "text",
    explanation: p5,
    explanationType: "image",
  },
  {
    question:
      "What are the parametric equations of the plane 5z + 11x = y + 2?",
    choices: [c6a, c6b, c6c, c6d],
    correctAnswer: c6a,
    type: "images",
    explanation: p6,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the angle measure between planes 8x – 2y + 3z = 1 and 10z – 6x – 9y = 4?",
    choices: ["63.4°", "81.6°", "90°", "72.5°"],
    correctAnswer: "90°",
    type: "text",
    explanation: p7,
    explanationType: "image",
  },
  {
    question:
      "What is the angle measure between planes 5z – y + 14x = 1 and 6y – 8z = 11 - x?",
    choices: ["66.55°", "77.66°", "90°", "55.44°"],
    correctAnswer: "77.66°",
    type: "text",
    explanation: p8,
    explanationType: "image",
  },
  {
    question:
      "What is the symmetric equation of the line in R2 that passes through point P₀(-13, 3) and is parallel to vector v = (2, -7)?",
    choices: [c9a, c9b, c9c, c9d],
    correctAnswer: c9b,
    type: "images",
    explanation: p9,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the vector equation of a plane passing through point P₀(13, -22, 5) and is parallel to vectors v1 = (11, -4, 18) and v2 = (-9, 6, -1)?",
    choices: [
      "r = (13, -22, 5) + t1(11, -4, 18) + t2(-9, 6, -1)",
      "r = (-9, 6, -1) + t1(11, -4, 18) + t2(13, -22, 5)",
      "r = (11, -4, 18) + t1(13, -22, 5) + t2(-9, 6, -1)",
      "r = (13, -22, 5) - t1(11, -4, 18) + t2(-9, 6, -1)",
    ],
    correctAnswer: "r = (13, -22, 5) + t1(11, -4, 18) + t2(-9, 6, -1)",
    type: "text",
    explanation: p10,
    explanationType: "image",
  },
  {
    question: "Which of the following pair of planes are NOT parallel?",
    choices: [
      "7b + 2a + 3 – c = 0 and 2c – 4a = 14b + 4",
      "8 + 15x – 12y = 6z and 5x – 3z = 4y",
      "5a + b + 5c = 0 and a + 5b = 5 – c",
      "x = 8y – 3z – 1 and -9z – 3x = 1 – 24y",
    ],
    correctAnswer: "5a + b + 5c = 0 and a + 5b = 5 – c",
    type: "text",
    explanation: p11,
    explanationType: "image",
  },
  {
    question:
      "What is the symmetric equation of the line in R3 that passes through point P₀(-1, 13, 2) and is parallel to vector v = (8, -1, 5)?",
    choices: [c12a, c12b, c12c, c12d],
    correctAnswer: c12d,
    type: "images",
    explanation: p12,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the vector equation of a line passing through points (11, -5) and (-9, -17)?",
    choices: [
      "(x, y) = (11, -5) + t(20, 12)",
      "(x, y) = (20, 12) + t(11, -5)",
      "(x, y) = (11, -5) + t(2, -22)",
      "(x, y) = (2, -22) + t(11, -5)",
    ],
    correctAnswer: "(x, y) = (11, -5) + t(20, 12)",
    type: "text",
    explanation: p13,
    explanationType: "image",
  },
  {
    question:
      "What is the angle measure between planes 3z – 11y + x = 4 and 7x – 4z - 10= 5y?",
    choices: ["90°", "51.47°", "40.36°", "62.58°"],
    correctAnswer: "62.58°",
    type: "text",
    explanation: p14,
    explanationType: "image",
  },
  {
    question:
      "Let P = (-25, 18) and Q = (39, -54). What is the midpoint of segment PQ?",
    choices: ["(-32, -36)", "(7, -18)", "(-7, 18)", "(32, -36)"],
    correctAnswer: "(7, -18)",
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
var peLesson4Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peLesson4Questions;
