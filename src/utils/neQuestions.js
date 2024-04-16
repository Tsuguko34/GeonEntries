import c1 from "../assets/images/Quiz Images/neQuizImages/c-1.png";
import c2 from "../assets/images/Quiz Images/neQuizImages/c-2.png";
import c3 from "../assets/images/Quiz Images/neQuizImages/c-3.png";
import c4 from "../assets/images/Quiz Images/neQuizImages/c-4.png";
import n1 from "../assets/images/Quiz Images/neQuizImages/n1.png";
import n2 from "../assets/images/Quiz Images/neQuizImages/n2.png";
import n3 from "../assets/images/Quiz Images/neQuizImages/n3.png";
import n4 from "../assets/images/Quiz Images/neQuizImages/n4.png";
import n5 from "../assets/images/Quiz Images/neQuizImages/n5.png";
import n6 from "../assets/images/Quiz Images/neQuizImages/n6.png";
import n7 from "../assets/images/Quiz Images/neQuizImages/n7.png";
import n8 from "../assets/images/Quiz Images/neQuizImages/n8.png";
import n9 from "../assets/images/Quiz Images/neQuizImages/n9.png";
import n10 from "../assets/images/Quiz Images/neQuizImages/n10.png";
import q1 from "../assets/images/Quiz Images/neQuizImages/q1.png";
import q2 from "../assets/images/Quiz Images/neQuizImages/q2.png";
import q9 from "../assets/images/Quiz Images/neQuizImages/q9.png";
import q101 from "../assets/images/Quiz Images/neQuizImages/q10-1.png";
import q102 from "../assets/images/Quiz Images/neQuizImages/q10-2.png";

var questions = [
  {
    question: "It is a quadrilateral with three right angles.",
    choices: [
      "Saccheri Quadrilateral",
      "Euclidean Quadrilateral",
      "Elliptic Quadrilateral",
      "Lambert Quadrilateral",
    ],
    correctAnswer: "Lambert Quadrilateral",
    explanation: n1,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the distance between P = (√5/2  ,√5/7,-√3/14) and Q = (-√2/3  ,√2/5,√7/4) in S2?",
    choices: ["0.773", "1.773", "2.773", "3.773"],
    correctAnswer: "1.773",
    explanation: n2,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "The Schlafli symbol of a regular tessellation is given by {4, 5}. The tessellation is",
    choices: ["Hyperbolic", "Euclidean", "Spherical", "Klein-Beltrami"],
    correctAnswer: "Hyperbolic",
    explanation: n3,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "It is the difference between π and the angle sum of a hyperbolic triangle.",
    choices: ["ideal point", "excess", "tessellation", "defect"],
    correctAnswer: "defect",
    explanation: n4,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "The angles at the summit of an elliptic Saccheri quadrilateral are",
    choices: [
      "congruent and acute",
      "congruent and right",
      "congruent and obtuse",
      "congruent and straight",
    ],
    correctAnswer: "congruent and obtuse",
    explanation: n5,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following is NOT true?",
    choices: [
      "Poincaré disk model preserves angles while transforming hyperbolic straight lines into circle arcs.",
      "In hyperbolic geometry, the two angles of parallelism for the same segment are congruent and acute.",
      "The distance between P and Q in S² is the arc length of the shortest path along the surface of the sphere from P to Q.",
      "A circle on the sphere whose center does not coincide with the sphere's center is a small circle.",
    ],
    correctAnswer:
      "The distance between P and Q in S² is the arc length of the shortest path along the surface of the sphere from P to Q.",
    explanation: n6,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let {7, 3} be the Schlafli symbol of a hyperbolic tessellation. What is the angle sum of each heptagon in the tessellation?",
    choices: ["14π/3", "2π/3", "6π/7", "2π/7"],
    correctAnswer: "14π/3",
    explanation: n7,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let {5, 6} be the Schlafli symbol of a hyperbolic tessellation. What is the area of each pentagon in the tessellation?",
    choices: ["5π/3", "4π/3", "3π/5", "3π/4"],
    correctAnswer: "4π/3",
    explanation: n8,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let △ABC be a right spherical right triangle where C = π/2, such that p = AB, q = AC, and r = BC. If r = 43°18’ and B = 67°, what is the angle measure of q?",
    choices: [
      "50° 51’ 14.28’’",
      "26° 46’ 19.3’’",
      "16° 31’ 14.89’’",
      "39° 8’ 45.72’’",
    ],
    correctAnswer: "39° 8’ 45.72’’",
    explanation: n9,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let △ABC be a right spherical right triangle where C = π/2, such that p = AB, q = AC, and r = BC. If p = 15° 49’ 20’’ and q = 67°, what is the excess of the triangle?",
    choices: [
      "79° 29’ 24.02’’",
      "10° 30’ 35.98’’",
      "83° 23’ 53.78’’",
      "17° 6’ 42.2’’",
    ],
    correctAnswer: "10° 30’ 35.98’’",
    explanation: q101,
    explanationType: "image2",
    type: "text",
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
var neQuestions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default neQuestions;
