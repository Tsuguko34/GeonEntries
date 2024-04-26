import p1 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/1 N L1.png";
import p2 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/2 N L1.png";
import p3 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/3 N L1.png";
import p4 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/4 N L1.png";
import p5 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/5 N L1.png";
import p6 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/6 N L1.png";
import p7 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/7 N L1.png";
import p8 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/8 N L1.png";
import p9 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/9 N L1.png";
import p10 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/10 N L1.png";
import p11 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/11 N L1.png";
import p12 from "../assets/images/Quiz Images/lessonQuizImages/NELesson1Quiz/12 N L1.png";

var questions = [
  {
    question:
      "It is a hyperbolic model preserve the angles while converting hyperbolic straight lines into circle arcs.",
    choices: [
      "Poincaré",
      "Klein-Beltrami",
      "Schläfli",
      "Poincaré Upper Half-Plane",
    ],
    correctAnswer: "Poincaré",
    type: "text",
    explanation: p1,
    explanationType: "image",
  },
  {
    question: "Which of the following is a Euclidean’s Postulate?",
    choices: [
      "There exists a pair of similar triangles.",
      "For any straight-line segment, a circle can be drawn having the segment as radius and one endpoint as center.",
      "There exists a unique circle passing through three noncollinear points.",
      "There exists a pair of straight lines that are everywhere equidistant from one another.",
    ],
    correctAnswer:
      "For any straight-line segment, a circle can be drawn having the segment as radius and one endpoint as center.",
    type: "text",
    explanation: p2,
    explanationType: "image",
  },
  {
    question:
      "Let O be a point not on line (AB) ⃡. What do we call the lines through the point O that do not intersect line (AB) ⃡ and are not parallel to it?",
    choices: ["asymptotic", "nonparallel", "ideal", "ultraparallel"],
    correctAnswer: "ultraparallel",
    type: "text",
    explanation: p3,
    explanationType: "image",
  },
  {
    question:
      "What do you call the figure formed by two sensed parallel lines with a transversal intersecting the two lines?",
    choices: [
      "Saccheri quadrilateral",
      "asymptotic triangle",
      "hyperbolic tessellation",
      "Poincaré upper half-plane",
    ],
    correctAnswer: "Saccheri quadrilateral",
    type: "text",
    explanation: p4,
    explanationType: "image",
  },
  {
    question: "Which of the following is a Euclidean tessellation?",
    choices: ["{7, 3}", "{5, 4}", "{3, 5}", "{4, 4}"],
    correctAnswer: "{4, 4}",
    type: "text",
    explanation: p5,
    explanationType: "image",
  },
  {
    question: "What is the angle sum of any hyperbolic triangle?",
    choices: [
      "greater than π",
      "less than π",
      "less than or equal to π",
      "greater than or equal to π",
    ],
    correctAnswer: "less than π",
    type: "text",
    explanation: p6,
    explanationType: "image",
  },
  {
    question:
      "It is a quadrilateral with two congruent sides and two adjacent right angles.",
    choices: [
      "elliptic quadrilateral",
      "Lambert quadrilateral",
      "Saccheri quadrilateral",
      "Euclidean quadrilateral",
    ],
    correctAnswer: "Saccheri quadrilateral",
    type: "text",
    explanation: p7,
    explanationType: "image",
  },
  {
    question:
      "Let {4, 6} be the Schläfli symbol of a hyperbolic tessellation. What is the area of each quadrilateral in the tessellation?",
    choices: ["4π/3", "3π/2", "2π/3", "3π/4"],
    correctAnswer: "2π/3",
    type: "text",
    explanation: p8,
    explanationType: "image",
  },
  {
    question:
      "The Schläfli symbol of a regular tessellation is given by {7, 5}. The tessellation is",
    choices: ["Euclidean", "Klein-Beltrami", "Hyperbolic", "Elliptic"],
    correctAnswer: "Hyperbolic",
    type: "text",
    explanation: p9,
    explanationType: "image",
  },
  {
    question:
      "Let {6, 5} be the Schläfli symbol of a hyperbolic tessellation. What is the angle at each vertex of the hexagon in the tessellation?",
    choices: ["5π/12", "5π/2", "12π/5", "2π/5"],
    correctAnswer: "2π/5",
    type: "text",
    explanation: p10,
    explanationType: "image",
  },
  {
    question:
      "Let {3, 7} be the Schläfli symbol of a hyperbolic tessellation. What is the angle sum of each triangle in the tessellation?",
    choices: ["6π/7", "2π/7", "7π/6", "7π/2"],
    correctAnswer: "6π/7",
    type: "text",
    explanation: p11,
    explanationType: "image",
  },
  {
    question:
      "Let X be a point not on line  (AB) ⃡. In hyperbolic geometry, what do you call the first lines in either direction that do not intersect the line (AB) ⃡ and passes through point X?",
    choices: ["sensed parallel", "ultraparallel", "asymptotic", "nonparallel"],
    correctAnswer: "sensed parallel",
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
var neLesson1Questions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default neLesson1Questions;
