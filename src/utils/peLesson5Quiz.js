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
    choices: ["k", "0 ⃗", "i", "j"],
    correctAnswer: "0 ⃗",
    type: "text",
    explanation: p10,
    explanationType: "image",
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
    choices: ["k", "i", "j", "0 ⃗"],
    correctAnswer: "0 ⃗",
    type: "text",
    explanation: p12,
    explanationType: "image",
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
    choices: [
      "The cross product of u & v is an operation in R3 that produces a vector orthogonal to both u & v.",
      "Cross product is associative.",
      "The area of the parallelogram determined by vectors u & v is the magnitude of the cross product of u & v.",
      "The cross product of two distinct unit vectors produces another unit vector.",
    ],
    correctAnswer: "Cross product is associative.",
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
var peLesson5Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peLesson5Questions;
