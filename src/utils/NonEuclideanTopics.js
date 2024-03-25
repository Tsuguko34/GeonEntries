//Images
import ne1 from "../assets/images/Lessons Images/NE1.png";
import ne2 from "../assets/images/Lessons Images/NE2.png";

const NonEuclideanTopics = [
  {
    lessonNo: 1,
    lessonTitle: "1. Hyperbolic Geometry",
    lessonDescription:
      "Hyperbolic geometry differs from Euclidean geometry by allowing multiple parallel lines through a point, replacing the parallel postulate. This leads to triangles with angles summing to less than 180 degrees and distinct behaviors of circles and lines compared to Euclidean geometry.",
    lessonImage: ne1,
    lessonPath: "/Lesson/NonEuclideanGeometry/HyperbolicGeometry",
  },
  {
    lessonNo: 2,
    lessonTitle: "2. Spherical Geometry",
    lessonDescription:
      "Spherical geometry focuses on curved surfaces like a sphere, defines lines as great circles, and measures angles along the sphere's surface. Unlike Euclidean geometry, the sum of angles in a spherical triangle always exceeds 180 degrees.",
    lessonImage: ne2,
    lessonPath: "/Lesson/NonEuclideanGeometry/SphericalGeometry",
  },
];

export default NonEuclideanTopics;
