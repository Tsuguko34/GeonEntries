import p1 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/1 P L2.png";
import p2 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/2 P L2.png";
import p3 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/3 P L2.png";
import p4 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/4 P L2.png";
import p5 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/5 P L2.png";
import p6 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/6 P L2.png";
import p7 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/7 P L2.png";
import p8 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/8 P L2.png";
import p9 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/9 P L2.png";
import p10 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/10 P L2.png";
import p11 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/11 P L2.png";
import p12 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/12 P L2.png";
import p13 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/13 P L2.png";
import p14 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/14 P L2.png";
import p15 from "../assets/images/Quiz Images/lessonQuizImages/PELesson2Quiz/15 P L2.png";
import c1a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 1A.png";
import c1b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 1B.png";
import c1c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 1C.png";
import c1d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 1D.png";
import c3a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 3A.png";
import c3b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 3B.png";
import c3c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 3C.png";
import c3d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 3D.png";
import c5a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 5A.png";
import c5b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 5B.png";
import c5c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 5C.png";
import c5d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 5D.png";
import c6a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 6A.png";
import c6b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 6B.png";
import c6c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 6C.png";
import c6d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 6D.png";
import c12a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 12A.png";
import c12b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 12B.png";
import c12c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 12C.png";
import c12d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 12D.png";
import c15a from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 15A.png";
import c15b from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 15B.png";
import c15c from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 15C.png";
import c15d from "../assets/images/Quiz Images/lessonQuizChoicesImages/PELesson2Choices/L2 15D.png";

var questions = [
  {
    question:
      "What is the distance between the zero vector and the standard unit vector j in R2?",
    choices: [c1a, c1b, c1c, c1d],
    correctAnswer: c1a,
    type: "images",
    explanation: p1,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question: "Which of the does not belong to the group?",
    choices: [
      "Euclidean inner product",
      "inner product space",
      "dot product",
      "scalar product",
    ],
    correctAnswer: "inner product space",
    type: "text",
    explanation: p2,
    explanationType: "image",
  },
  {
    question: "What is the unit vector in the direction of v = (-1, -8)?",
    choices: [c3a, c3b, c3c, c3d],
    correctAnswer: c3d,
    type: "images",
    explanation: p3,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question: "Which of the following is NOT true?",
    choices: [
      "The norm of a vector and the dot product between two vectors is always nonnegative.",
      "The distance between u and v is equal to the distance between v and u.",
      "Two vectors are in the same direction if one of the vectors is a scalar multiple of the other.",
      "The angle between the zero vector and the standard unit vector k in R3 is undefined.",
    ],
    correctAnswer:
      "The angle between the zero vector and the standard unit vector k in R3 is undefined.",
    type: "text",
    explanation: p4,
    explanationType: "image",
  },
  {
    question: "What is the norm of the vector w = (-12, 8, -7)?",
    choices: [c5a, c5b, c5c, c5d],
    correctAnswer: c5c,
    type: "images",
    explanation: p5,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question: "What is the norm of the vector u = (-9, 0, -4, 17)?",
    choices: [c6a, c6b, c6c, c6d],
    correctAnswer: c6a,
    type: "images",
    explanation: p6,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question: "Let u = (2, -1) and v = (-4, -1). What is [d(u, v)](u ⋅ v)?",
    choices: ["-42", "6", "42", "-7"],
    correctAnswer: "-42",
    type: "text",
    explanation: p7,
    explanationType: "image",
  },
  {
    question:
      "What is the angle between the two vectors u = (5, -14) and v = (-2, -9)?",
    choices: ["23°", "121°", "112°", "32°"],
    correctAnswer: "32°",
    type: "text",
    explanation: p8,
    explanationType: "image",
  },
  {
    question:
      "Let a, b, & c be vectors and Rn, and m be any scalars. Which of the following is TRUE?",
    choices: [
      "m(a ⋅ b) = ma ⋅ mb",
      "a ⋅ (b + c) = ab + ac",
      "(b - c) ⋅ a = (b ⋅ a) – (c ⋅ a)",
      "a ⋅ (mb) = m ⋅ (ab)",
    ],
    correctAnswer: "(b - c) ⋅ a = (b ⋅ a) – (c ⋅ a)",
    type: "text",
    explanation: p9,
    explanationType: "image",
  },
  {
    question:
      "If u = (-4, 0), v = (8, -6), w = (-1, 2), what is -v ⋅ (u – 4w)?",
    choices: ["48", "-48", "-84", "84"],
    correctAnswer: "-48",
    type: "text",
    explanation: p10,
    explanationType: "image",
  },
  {
    question: "If a = (3, 4, 1), b = (-10, 0, -14), m = -2, what is m(-a ⋅ b)?",
    choices: ["88", "-44", "44", "-88"],
    correctAnswer: "-88",
    type: "text",
    explanation: p11,
    explanationType: "image",
  },
  {
    question: "If u = (9, 5) and v = (3, 8), what is 2[d(u, v)]?",
    choices: [c12a, c12b, c12c, c12d],
    correctAnswer: c12a,
    type: "images",
    explanation: p12,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "It measures the alignment between the two vectors in terms of their directions.",
    choices: ["normalizing the vector", "dot product", "norm", "unit vector"],
    correctAnswer: "dot product",
    type: "text",
    explanation: p13,
    explanationType: "image",
  },
  {
    question:
      "It determines the measure from the vector’s origin to the endpoint in a given space.",
    choices: ["distance", "magnitude", "unit vector", "dot product"],
    correctAnswer: "magnitude",
    type: "text",
    explanation: p14,
    explanationType: "image",
  },
  {
    question: "Which of the following is a unit vector?",
    choices: [c15a, c15b, c15c, c15d],
    correctAnswer: c15b,
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
var peLesson2Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peLesson2Questions;
