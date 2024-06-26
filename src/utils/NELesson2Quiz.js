import p1 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/1 N L2.png";
import p2 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/2 N L2.png";
import p3 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/3 N L2.png";
import p4 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/4 N L2.png";
import p5 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/5 N L2.png";
import p6 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/6 N L2.png";
import p7 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/7 N L2.png";
import p8 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/8 N L2.png";
import p9 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/9 N L2.png";
import p10 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/10 N L2.png";
import p11 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/11 N L2.png";
import p12 from "../assets/images/Quiz Images/lessonQuizImages/NELesson2Quiz/12 N L2.png";

import c1a from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 1A.png";
import c1b from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 1B.png";
import c1c from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 1C.png";
import c1d from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 1D.png";
import c6a from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 6A.png";
import c6b from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 6B.png";
import c6c from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 6C.png";
import c6d from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 6D.png";
import c11a from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 11A.png";
import c11b from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 11B.png";
import c11c from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 11C.png";
import c11d from "../assets/images/Quiz Images/lessonQuizChoicesImages/NELesson2Choices/L2 11D.png";

var questions = [
  {
    question: "What is the angle sum of any elliptic triangle?",
    choices: [c1a, c1b, c1c, c1d],
    correctAnswer: c1b,
    type: "images",
    explanation: p1,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "It is a region on the sphere bounded by three distinct great circles",
    choices: ["poles", "unit sphere", "spherical triangle", "small circle"],
    correctAnswer: "spherical triangle",
    type: "text",
    explanation: p2,
    explanationType: "image",
  },
  {
    question:
      "What is the spherical distance between P = (√3/2  ,1/3  ,√3/3  ) and Q = (√2/3  ,√6/4  ,√2/2  ) in S²?",
    choices: ["0.1 rad.", "0.3 rad.", "0.5 rad.", "0.7 rad."],
    correctAnswer: "0.5 rad.",
    type: "text",
    explanation: p3,
    explanationType: "image",
  },
  {
    question: "Which of the following is NOT true?",
    choices: [
      "In a spherical triangle, the sides’ lengths are numerically equal to the measure of the angles that the great circle arcs subtend at the center.",
      "There are no ultraparallel lines in elliptic geometry.",
      "The base and the summit of the elliptic Saccheri quadrilateral intersects.",
      "A circle on the sphere whose center does not coincide with the sphere's center is a unit sphere.",
    ],
    correctAnswer:
      "A circle on the sphere whose center does not coincide with the sphere's center is a unit sphere.",
    question: "Which of the following is NOT true?",
    choices: [
      "In a spherical triangle, the sides’ lengths are numerically equal to the measure of the angles that the great circle arcs subtend at the center.",
      "There are no ultraparallel lines in elliptic geometry.",
      "The base and the summit of the elliptic Saccheri quadrilateral intersects.",
      "A circle on the sphere whose center does not coincide with the sphere's center is a unit sphere.",
    ],
    correctAnswer:
      "A circle on the sphere whose center does not coincide with the sphere's center is a unit sphere.",
    type: "text",
    explanation: p4,
    explanationType: "image",
  },
  {
    question:
      "Let △ABC be a right spherical triangle where C = 90°, such that p = AB, q = AC, and r = BC. If q = 22° 32’ 8’’ and A = 54°, what is the angle measure of B?",
    choices: [
      "41° 38’ 52.69’’",
      "72° 27’ 14.24’’",
      "17° 32’ 45.76’’",
      "48° 21’ 7.31’’",
    ],
    correctAnswer: "41° 38’ 52.69’’",
    type: "text",
    explanation: p5,
    explanationType: "image",
  },
  {
    question:
      "Let △ABC be a right spherical triangle where C = 90°, such that p = AB, q = AC, and r = BC. If we have the values for A and p, which of the following can be used to determine the angle measure of r?",
    choices: [c6a, c6b, c6c, c6d],
    correctAnswer: c6d,
    type: "images",
    explanation: p6,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "What is the distance between P = (-3/2  ,√5/7,√3/8) and Q = (√11/3  ,-√2/6,0) in S²?",
    choices: ["2.6728", "3.6728", "4.6728", "5.6728"],
    correctAnswer: "2.6728",
    type: "text",
    explanation: p7,
    explanationType: "image",
  },
  {
    question:
      "It is the difference between π and the angle sum of an elliptic triangle.",
    choices: ["defect", "distance", "excess", "ideal point"],
    correctAnswer: "excess",
    type: "text",
    explanation: p8,
    explanationType: "image",
  },
  {
    question:
      "Let △ABC be a right spherical triangle where C = π/2, such that p = AB, q = AC, and r = BC. What is the equation for the Spherical Pythagorean Theorem?",
    choices: [
      "cos r = (cos p) (cos q)",
      "cos r = (sin p) (sin q)",
      "sin r = (sin p) (sin q)",
      "sin r = (cos p) (cos q)",
    ],
    correctAnswer: "cos r = (cos p) (cos q)",
    type: "text",
    explanation: p9,
    explanationType: "image",
  },
  {
    question: "The fourth angle of an elliptic Lambert quadrilateral is",
    choices: ["right", "acute", "straight", "obtuse"],
    correctAnswer: "obtuse",
    type: "text",
    explanation: p10,
    explanationType: "image",
  },
  {
    question:
      "Let △ABC be a right spherical triangle where C = 90°, such that p = AB, q = AC, and r = BC. If we have the values for r and B, which of the following can be used to determine the angle measure of A?",
    choices: [c11a, c11b, c11c, c11d],
    correctAnswer: c11d,
    type: "images",
    explanation: p11,
    explanationType: "image",
    imageChoice: true,
  },
  {
    question:
      "Let △ABC be a right spherical triangle with C = 90° and has an excess of 5° 4’ 39’’. If A = 58° 12’ 27’’, what is the angle measure of B?",
    choices: ["26° 42’ 54’’", "153° 17’ 6’’", "116° 42’ 54’’", "36° 52’ 12’’"],
    correctAnswer: "36° 52’ 12’’",
    type: "text",
    explanation: p12,
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
var neLesson2Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default neLesson2Questions;
