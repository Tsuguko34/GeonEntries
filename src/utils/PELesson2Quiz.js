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

var questions = [
  {
    question:
      "What is the distance between the zero vector and the standard unit vector j in R2?",
    choices: ["1", "0", "√2", "2"],
    correctAnswer: "1",
    type: "text",
    explanation: p1,
    explanationType: "image",
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
    choices: [
      "(-1/8,-1 )",
      "(1/√65,8/√65  )",
      "(-8/√65,-1/√65  )",
      "(-1/√65,-8/√65  )",
    ],
    correctAnswer: "(-1/√65,-8/√65  )",
    type: "text",
    explanation: p3,
    explanationType: "image",
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
    choices: ["257", "√275", "√257", "275"],
    correctAnswer: "√257",
    type: "text",
    explanation: p5,
    explanationType: "image",
  },
  {
    question: "What is the norm of the vector u = (-9, 0, -4, 17)?",
    choices: ["√386", "368", "√368", "386"],
    correctAnswer: "√386",
    type: "text",
    explanation: p6,
    explanationType: "image",
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
    choices: ["6√5", "3√5", "2√5", "2√41"],
    correctAnswer: "6√5",
    type: "text",
    explanation: p12,
    explanationType: "image",
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
    choices: [
      "((-2)/√78,3/√78)",
      "(5/√89,(-8)/√89)",
      "((-1)/√3,(-2)/√3)",
      "(7/17,10/17)",
    ],
    correctAnswer: "(5/√89,(-8)/√89)",
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
var peLesson2Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peLesson2Questions;
