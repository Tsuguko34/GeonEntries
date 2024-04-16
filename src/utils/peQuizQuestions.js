import c1 from "../assets/images/Quiz Images/peQuizImages/c-1.png";
import c2 from "../assets/images/Quiz Images/peQuizImages/c-2.png";
import c3 from "../assets/images/Quiz Images/peQuizImages/c-3.png";
import c4 from "../assets/images/Quiz Images/peQuizImages/c-4.png";
import p1 from "../assets/images/Quiz Images/peQuizImages/p1.png";
import p2 from "../assets/images/Quiz Images/peQuizImages/p2.png";
import p4 from "../assets/images/Quiz Images/peQuizImages/p4.png";
import p5 from "../assets/images/Quiz Images/peQuizImages/p5.png";
import p6 from "../assets/images/Quiz Images/peQuizImages/p6.png";
import p7 from "../assets/images/Quiz Images/peQuizImages/p7.png";
import p8 from "../assets/images/Quiz Images/peQuizImages/p8.png";
import p9 from "../assets/images/Quiz Images/peQuizImages/p9.png";
import p10 from "../assets/images/Quiz Images/peQuizImages/p10.png";
import p11 from "../assets/images/Quiz Images/peQuizImages/p11.png";
import p12 from "../assets/images/Quiz Images/peQuizImages/p12.png";
import p13 from "../assets/images/Quiz Images/peQuizImages/p13.png";
import p14 from "../assets/images/Quiz Images/peQuizImages/p14.png";
import p15 from "../assets/images/Quiz Images/peQuizImages/p15.png";
import p16 from "../assets/images/Quiz Images/peQuizImages/p16.png";
import p17 from "../assets/images/Quiz Images/peQuizImages/p17.png";
import p18 from "../assets/images/Quiz Images/peQuizImages/p18.png";
import p19 from "../assets/images/Quiz Images/peQuizImages/p19.png";
import p20 from "../assets/images/Quiz Images/peQuizImages/p20.png";
import p21 from "../assets/images/Quiz Images/peQuizImages/p21.png";
import p22 from "../assets/images/Quiz Images/peQuizImages/p22.png";
import p23 from "../assets/images/Quiz Images/peQuizImages/p23.png";
import p24 from "../assets/images/Quiz Images/peQuizImages/p24.png";
import p25 from "../assets/images/Quiz Images/peQuizImages/p25.png";
import p26 from "../assets/images/Quiz Images/peQuizImages/p26.png";
import p27 from "../assets/images/Quiz Images/peQuizImages/p27.png";
import p28 from "../assets/images/Quiz Images/peQuizImages/p28.png";
import p29 from "../assets/images/Quiz Images/peQuizImages/p29.png";
import p30 from "../assets/images/Quiz Images/peQuizImages/p30.png";
import q10 from "../assets/images/Quiz Images/peQuizImages/q10.png";
import q11 from "../assets/images/Quiz Images/peQuizImages/q11.png";
import q12 from "../assets/images/Quiz Images/peQuizImages/q12.png";
import q15 from "../assets/images/Quiz Images/peQuizImages/q15.png";
import q19 from "../assets/images/Quiz Images/peQuizImages/q19.png";
import q25 from "../assets/images/Quiz Images/peQuizImages/q25.png";

var questions = [
  {
    question: "What is the norm of the vector v = (11, -2, 7)?",
    choices: ["174", "√174", "√147", "147"],
    correctAnswer: "√174",
    type: "text",
    explanation: p1,
    explanationType: "image",
  },
  {
    question: "Evaluate: k × (-3j × 2j)",
    choices: ["i", "j", "k", "0"],
    correctAnswer: "0",
    explanation: p2,
    explanationType: "image",
    type: "text",
  },
  {
    question: "What is the graph of the vector v = (1, -1, 4)?",
    choices: [c1, c2, c3, c4],
    correctAnswer: c4,
    explanation: `
        EXPLANATION:<br><br>
        To graph the given vector u = (1, -1, 4), traverse continuously 1 unit<br><br>
        downward to the positive side of x-axis, 1 unit left to the negative<br><br>
        side of y-axis, and 4 units upward to the positive side of the z-axis.
        `,
    type: "images",
    video: "video_Explanations/Quiz3_Video.mp4",
  },
  {
    question:
      "Let u be a zero vector and v be a nonzero vector. What is the vector component of u orthogonal to v?",
    choices: ["-projᵥu", "projᵥu", "-v", "v"],
    correctAnswer: "-projᵥu",
    explanation: p4,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let P = (-8, 5) and Q = (0, 7). What is the midpoint of segment PQ?",
    choices: ["(-8, 12)", "(-4, 6)", "(8, -12)", "(4, -6)"],
    correctAnswer: "(-4, 6)",
    explanation: p5,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the component of the vector with an initial point (12, -9) and terminal point (-2, -3)?",
    choices: ["(14, -6)", "(10, -12)", "(-14, -12)", "(-24, 27)"],
    correctAnswer: "(-14, -12)",
    explanation: p6,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following is NOT true?",
    choices: [
      "The cross product is associative.",
      "The zero vector in Rⁿ is orthogonal to all vectors in Rⁿ.",
      "The dot product is also known as Euclidean inner product.",
      "The distance between u & v is 0 iff. u = v.",
    ],
    correctAnswer: "The cross product is associative.",
    explanation: p7,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Let a = (-2, 7, 9, -4) and b = (5, 0, -3, 8). What is -a – 3b?",
    choices: [
      "(-13, -7, 0, -20)",
      "(17, -7, -18, 28)",
      "(-13, 7, 0, -20)",
      "(-17, 7, 18, -28)",
    ],
    correctAnswer: "(-13, -7, 0, -20)",
    explanation: p8,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following pairs of planes are orthogonal?",
    choices: [
      "3z + 7y = x - 3 and 2x - 6z - 14y = 4",
      "8y = z - 2x + 5 and 6x + 2y = 2 + 3z",
      "15z - 1 = 3y + 3x and y = x - 5z + 4",
      "8x - 1 = 7z - 9y and 3x - 3z = 5y – 10",
    ],
    correctAnswer: "8x - 1 = 7z - 9y and 3x - 3z = 5y – 10",
    explanation: p9,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the distance between point (6, -8) and the line 7y - x + 4 = 12?",
    choices: ["10", "12", "14", "16"],
    correctAnswer: "10",
    explanation: p10,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Let u = (2, 0, -7) and v = (1, -10, 8). What is -(v × u)?",
    choices: [
      "(70, 9, -20)",
      "(70, 23, -20)",
      "(-70, -23, -20)",
      "(-70, -9, -20)",
    ],
    correctAnswer: "(-70, -23, -20)",
    explanation: p11,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the angle between the planes x + 6z – 1 – 4y = 0 and 2 = 3y – 8x + z = 2?",
    choices: ["90°", "77.08°", "62.3°", "106.49°"],
    correctAnswer: "77.08°",
    explanation: p12,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "If i = (1, 0, 0), j = (0, 1, 0), and k = (0, 0, 1), what is (i + j + k) ⋅ 2k?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: "2",
    explanation: p13,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "A plane passes through point (13, -7, 3) and is orthogonal to vector n = (-1, -5, 2). Determine the z-intercept of the plane.",
    choices: ["(0, 0, 14)", "(0, 0, -28)", "(0, 0, -14)", "(0, 0, 28)"],
    correctAnswer: "(0, 0, -14)",
    explanation: p14,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let u = (0, -3, 0) and v = (12, 8, -1). What is the magnitude of their cross product?",
    choices: ["(3, 0, 36)", "3 √145", "1305", "(3, 0, -36)"],
    correctAnswer: "3 √145",
    explanation: p15,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "Let k be a scalar. If -(k + 2)(-10, 6, -14) = (5, -3, 7), what is k?",
    choices: ["3/2", "-3/2", "1/2", "-1/2"],
    correctAnswer: "-3/2",
    explanation: p16,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following is a vector?",
    choices: ["dot product", "norm", "scalar triple product", "cross product"],
    correctAnswer: "cross product",
    explanation: p17,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the vector equation of a line passing through points (-7, 5) and (13, -4)?",
    choices: [
      "(x, y) = (13, -4) + t(20, -9)",
      "(x, y) = (20, -9) + t(-7, 5)",
      "(x, y) = (-7, 5) + t(20, -9)",
      "(x, y) = (20, -9) + t(13, -4)",
    ],
    correctAnswer: "(x, y) = (-7, 5) + t(20, -9)",
    explanation: p18,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the scalar triple product of vectors u = (-8, 2, 1), v = (12, -7, -8) and unit vector k?",
    choices: ["24", "56", "80", "32"],
    correctAnswer: "32",
    explanation: p19,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "If one of the vectors is a scalar multiple of the other, then the two vectors are",
    choices: ["orthogonal", "parallel", "intersecting", "equidistant"],
    correctAnswer: "parallel",
    explanation: p20,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following is a unit vector?",
    choices: [
      "(4/√31, 8/√31, 1/√31)",
      "(4/9, 8/9, 1/9)",
      "(2/√17, 15/√17, 8/√17)",
      "(8/5, 1, √11/5)",
    ],
    correctAnswer: "(4/9, 8/9, 1/9)",
    explanation: p21,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following is TRUE?",
    choices: [
      "(u + v) × w = (u + w) × (v + w)",
      "The angle between the zero vector and another vector is indeterminate.",
      "In the point-normal equation a(x – x₀) + b(y – y₀) = 0, a and b are the components of the vector orthogonal to the line.",
      "X is between P & Q iff. d(P, X) - d(X, Q) = d(P, Q)",
    ],
    correctAnswer:
      "In the point-normal equation a(x – x₀) + b(y – y₀) = 0, a and b are the components of the vector orthogonal to the line.",
    explanation: p22,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the unit vector in the direction of vector v = (-5, -7, 13)?",
    choices: [
      "(5/(9√3), (-7)/(9√3), 13/(9√3))",
      "((-5)/(9√3), 7/(9√3), (-13)/(9√3))",
      "((-5)/(9√3), 7/(9√3), 13/(9√3))",
      "((-5)/(9√3), (-7)/(9√3), 13/(9√3))",
    ],
    correctAnswer: "((-5)/(9√3), (-7)/(9√3), 13/(9√3))",
    explanation: p23,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What are the parametric equations of the plane that passes through the origin and is parallel to vectors (8, -4, 15) and unit vector j?",
    choices: [
      "x = 8t₁; y = -4t₁ + t₂; z = 15t₁",
      "x = 8t₁ + t₂; y = -4t₁; z = 15t₁",
      "x = 8t₁; y = -4t₁; z = 15t₁ + t₂",
      "x = 8t₁ + t2; y = -4t₁ + t₂; z = 15t₁ + t₂",
    ],
    correctAnswer: "x = 8t₁; y = -4t₁ + t₂; z = 15t₁",
    explanation: p24,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the area of the parallelogram EFGH if E = (2, 3), F = (6, 4), G = (1, 0), and H = (5, 1)?",
    choices: ["9 sq. units", "10 sq. units", "11 sq. units", "12 sq. units"],
    correctAnswer: "11 sq. units",
    explanation: p25,
    explanationType: "image",
    type: "text",
  },
  {
    question: "What are the vectors that are orthogonal to (-16, 4)?",
    choices: [
      "m(1/4, 1) ∀ m ∈ ℝ",
      "m(1, 1/4) ∀ m ∈ ℝ",
      "m(4, 1) ∀ m ∈ ℝ",
      "m(1, 4) ∀ m ∈ ℝ",
    ],
    correctAnswer: "m(1/4, 1) ∀ m ∈ ℝ",
    explanation: p26,
    explanationType: "image",
    type: "text",
  },
  {
    question: "Which of the following does NOT belong to the group?",
    choices: [
      "Euclidean inner product",
      "Scalar product",
      "Vector triple product",
      "Dot product",
    ],
    correctAnswer: "Vector triple product",
    explanation: p27,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "What is the distance between u = (-14, -5, 9) and v = (-26, -3, 17)?",
    choices: ["2√19", "2√53", "6√65", "4√17"],
    correctAnswer: "2√53",
    explanation: p28,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "If u = (-11, 6) and v = (5, 2), what is the orthogonal projection of u onto v?",
    choices: [
      "(215/29, -86/29)",
      "(-215/29, -86/29)",
      "(-215/29, 86/29)",
      "(215/29, 86/29)",
    ],
    correctAnswer: "(-215/29, -86/29)",
    explanation: p29,
    explanationType: "image",
    type: "text",
  },
  {
    question:
      "If u = (5, -9), v = (-6, -11), and w = (-1, 8), what is -3(v + w) ⋅ u?",
    choices: ["-438", "477", "186", "24"],
    correctAnswer: "24",
    explanation: p30,
    explanationType: "image",
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
var peQuestions = shuffle(questions);

// Now shuffledQuestions contains the questions in a random order
export default peQuestions;
