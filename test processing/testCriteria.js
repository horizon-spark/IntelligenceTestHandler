"use strict";

const ConceptualIntuitiveIntellectCriteria = new Map();

ConceptualIntuitiveIntellectCriteria.set(
  JSON.stringify({ grade: 7 }),
  [5, 8, 13]
);

// const calculateConceptualIntuitiveIntellect = (points, grade) => {
//   if (grade === 7) {
//     return determineSubtestLevel(points, 5, 8, 13);
//   } else if (grade === 8) {
//     return determineSubtestLevel(points, 5, 9, 14);
//   } else if (grade === 9) {
//     return determineSubtestLevel(points, 6, 10, 14);
//   } else if (grade === 10) {
//     return determineSubtestLevel(points, 7, 10, 15);
//   } else if (grade === 11) {
//     return determineSubtestLevel(points, 7, 10, 16);
//   } else {
//     return -1;
//   }
// };
