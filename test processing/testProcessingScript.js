"use strict";

const determineSubtestLevel = (
  points,
  weakTopBorder,
  averageTopBorder,
  goodTopBorder
) => {
  if (points <= weakTopBorder) {
    return 0;
  } else if (points <= averageTopBorder) {
    return 1;
  } else if (points <= goodTopBorder) {
    return 2;
  } else {
    return 3;
  }
};

const calculateConceptualIntuitiveIntellect = (points, grade) => {
  if (grade === 7) {
    return determineSubtestLevel(points, 5, 8, 13);
  } else if (grade === 8) {
    return determineSubtestLevel(points, 5, 9, 14);
  } else if (grade === 9) {
    return determineSubtestLevel(points, 6, 10, 14);
  } else if (grade === 10) {
    return determineSubtestLevel(points, 7, 10, 15);
  } else if (grade === 11) {
    return determineSubtestLevel(points, 7, 10, 16);
  } else {
    return -1;
  }
};

const calculateConceptualLogicalIntellect = (points, grade, isMajor) => {
  if (grade === 7 && !isMajor) {
    return determineSubtestLevel(points, 3, 7, 12);
  } else if (grade === 7 && isMajor) {
    return determineSubtestLevel(points, 4, 8, 13);
  } else if (grade === 8 && !isMajor) {
    return determineSubtestLevel(points, 3, 8, 13);
  } else if (grade === 8 && isMajor) {
    return determineSubtestLevel(points, 4, 9, 14);
  } else if (grade === 9) {
    return determineSubtestLevel(points, 5, 9, 15);
  } else if (grade === 10) {
    return determineSubtestLevel(points, 6, 10, 15);
  } else if (grade === 11) {
    return determineSubtestLevel(points, 7, 10, 16);
  } else {
    return -1;
  }
};

const calculateConceptualCategorization = (points, grade, isMajor) => {
  if (grade === 7) {
    return determineSubtestLevel(points, 3, 7, 12);
  } else if (grade === 8) {
    return determineSubtestLevel(points, 4, 8, 13);
  } else if (grade === 9) {
    return determineSubtestLevel(points, 5, 9, 14);
  } else if ((grade === 10 || grade === 11) && !isMajor) {
    return determineSubtestLevel(points, 5, 10, 15);
  } else if ((grade === 10 || grade === 11) && isMajor) {
    return determineSubtestLevel(points, 5, 11, 17);
  } else {
    return -1;
  }
};

const calculateAbstractIntellect = (points, grade, isMajor) => {
  if (grade === 7) {
    return determineSubtestLevel(points, 4, 8, 13);
  } else if (grade === 8) {
    return determineSubtestLevel(points, 5, 9, 14);
  } else if (grade === 9) {
    return determineSubtestLevel(points, 6, 10, 15);
  } else if (grade === 10 && !isMajor) {
    return determineSubtestLevel(points, 6, 11, 16);
  } else if (grade === 10 && isMajor) {
    return determineSubtestLevel(points, 6, 12, 17);
  } else if (grade === 11 && !isMajor) {
    return determineSubtestLevel(points, 6, 11, 17);
  } else if (grade === 11 && isMajor) {
    return determineSubtestLevel(points, 7, 13, 19);
  } else {
    return -1;
  }
};

const calculateMathematicalIntuition = (points, grade, isMajor) => {
  if (grade === 7) {
    return determineSubtestLevel(points, 5, 8, 12);
  } else if (grade === 8) {
    return determineSubtestLevel(points, 5, 8, 13);
  } else if (grade === 9) {
    return determineSubtestLevel(points, 6, 9, 14);
  } else if ((grade === 10 || grade === 11) && !isMajor) {
    return determineSubtestLevel(points, 7, 10, 15);
  } else if ((grade === 10 || grade === 11) && isMajor) {
    return determineSubtestLevel(points, 8, 12, 17);
  } else {
    return -1;
  }
};

const calculateStructuralVisualIntellect = (points) => {
  return determineSubtestLevel(points, 9, 10, 11);
};

const calculateDynamicVisualIntellect = (points) => {
  return determineSubtestLevel(points, 7, 9, 11);
};

const calculateCombinatorialVisualIntellect = (points) => {
  return determineSubtestLevel(points, 7, 9, 11);
};

const calculateAbstractVisualIntellect = (points, grade) => {
  if (grade === 7 || grade === 8) {
    return determineSubtestLevel(points, 5, 8, 10);
  } else {
    return determineSubtestLevel(points, 6, 9, 11);
  }
};

const calculateFigurativeSynthesis = (points, grade, isMajor) => {
  if ((grade === 10 || grade === 11) && isMajor) {
    return determineSubtestLevel(points, 5, 10, 16);
  } else {
    return determineSubtestLevel(points, 5, 9, 14);
  }
};

const calculateSpatialAnalysis = (points, grade, isMajor) => {
  if (grade === 9 && isMajor) {
    return determineSubtestLevel(points, 6, 11, 18);
  } else if ((grade === 10 || grade === 11) && isMajor) {
    return determineSubtestLevel(points, 7, 12, 18);
  } else {
    return determineSubtestLevel(points, 5, 9, 16);
  }
};

const calculateDivergentIntellect = (points) => {
  return determineSubtestLevel(points, 2.5, 4.5, 7);
};

const calculateImagination = (points) => {
  return determineSubtestLevel(points, 6, 9, 15);
};

const calculateAwareness = (points, grade, isMajor) => {
  if (isMajor) {
    switch (grade) {
      case 7:
        return determineSubtestLevel(points, 5, 9, 13);
      case 8:
        return determineSubtestLevel(points, 5, 9, 14);
      case 9:
        return determineSubtestLevel(points, 5, 9, 15);
      case 10:
        return determineSubtestLevel(points, 6, 10, 16);
      case 11:
        return determineSubtestLevel(points, 6, 11, 16);
    }
  } else {
    switch (grade) {
      case 7:
        return determineSubtestLevel(points, 4, 8, 13);
      case 8:
        return determineSubtestLevel(points, 4, 9, 13);
      case 9:
        return determineSubtestLevel(points, 5, 9, 14);
      case 10:
        return determineSubtestLevel(points, 6, 10, 15);
      case 11:
        return determineSubtestLevel(points, 6, 10, 16);
    }
  }
  return -1;
};

const calculateRussianReadingSkill = (points) => {
  return determineSubtestLevel(points, 4, 7, 9);
};

const calculateEnglishReadingSkill = (points) => {
  return determineSubtestLevel(points, 4, 7, 9);
};

const calculateLogicalMemory = (points, grade) => {
  switch (grade) {
    case 7:
      return determineSubtestLevel(points, 9, 13, 16);
    case 8:
      return determineSubtestLevel(points, 10, 14, 17);
    case 9:
      return determineSubtestLevel(points, 12, 15, 18);
    case 10:
      return determineSubtestLevel(points, 13, 16, 18);
    case 11:
      return determineSubtestLevel(points, 13, 17, 19);
    default:
      return -1;
  }
};

const calculateInformationProcessingSpeed = (points, grade) => {
  switch (grade) {
    case 7:
      return determineSubtestLevel(points, 36, 45, 57);
    case 8:
      return determineSubtestLevel(points, 38, 48, 59);
    case 9:
      return determineSubtestLevel(points, 40, 50, 64);
    case 10:
      return determineSubtestLevel(points, 44, 54, 69);
    case 11:
      return determineSubtestLevel(points, 49, 62, 77);
    default:
      return -1;
  }
};

const calculateAttentiveness = (points, grade) => {
  if (grade <= 8) {
    return determineSubtestLevel(points, 0.91, 0.95, 0.97);
  } else {
    return determineSubtestLevel(points, 0.92, 0.95, 0.97);
  }
};

const ops = [
  calculateConceptualIntuitiveIntellect,
  calculateConceptualLogicalIntellect,
  calculateConceptualCategorization,
  calculateAbstractIntellect,
  calculateMathematicalIntuition,
  calculateStructuralVisualIntellect,
  calculateDynamicVisualIntellect,
  calculateCombinatorialVisualIntellect,
  calculateAbstractVisualIntellect,
  calculateFigurativeSynthesis,
  calculateSpatialAnalysis,
  calculateDivergentIntellect,
  calculateImagination,
  calculateAwareness,
  calculateRussianReadingSkill,
  calculateEnglishReadingSkill,
  calculateLogicalMemory,
  calculateInformationProcessingSpeed,
  calculateAttentiveness,
];

const getResultButton = document.getElementById("getResultButton");
getResultButton.onclick = () => {
  const inputs = Array.from(document.querySelectorAll("ol input")).map(
    (input) => input.value
  );
  const grade = +document.getElementById("grade").value;
  const isHumanitarian = document.getElementById("humanitarian").checked;
  const isLinguistic = document.getElementById("linguistic").checked;
  const isNatural = document.getElementById("natural").checked;
  const isMathematical = document.getElementById("mathematical").checked;
  const isCommon = document.getElementById("noSpecialization").checked;

  const resultTable = document.getElementById("resultTable");
  const rows = resultTable.rows;

  ops.forEach((func, index) => {
    let cells = rows[index + 2].cells;
    for (let i = 1; i < cells.length; i++) {
      cells[i].textContent = "";
    }
    if (index === 3 || index === 4 || index === 9 || index === 10) {
      cells[func(inputs[index], grade, isMathematical) + 1].textContent = "+";
    } else if (index === 1 || index === 13) {
      cells[func(inputs[index], grade, isHumanitarian) + 1].textContent = "+";
    } else if (index === 2) {
      cells[func(inputs[index], grade, isLinguistic) + 1].textContent = "+";
    } else {
      cells[func(inputs[index], grade) + 1].textContent = "+";
    }
  });
};
