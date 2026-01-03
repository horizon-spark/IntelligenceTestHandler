"use strict";

import { criteriaConfig } from "./criteria.js";

const personalFields = ["name", "surname", "school", "letter"];
const commonFields = ["grade", "specialization"];

const printObject = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
};

const handleField = (testName, score, grade, profile) => {
  if (!criteriaConfig.tests[testName]) {
    console.log(`Тест ${testName} не найден`);
    return -1;
  }
  let type = criteriaConfig.tests[testName].type;
  let criteria;
  if (type === "universal") {
    criteria = criteriaConfig.tests[testName].criteria;
  } else if (type === "grade") {
    criteria = criteriaConfig.tests[testName].criteria[grade]
      ? criteriaConfig.tests[testName].criteria[grade]
      : criteriaConfig.tests[testName].criteria.default;
  } else {
    criteria = criteriaConfig.tests[testName].criteria[grade][profile]
      ? criteriaConfig.tests[testName].criteria[grade][profile]
      : criteriaConfig.tests[testName].criteria[grade].default;
  }
  if (score <= criteria[0]) {
    return 0;
  } else if (score <= criteria[1]) {
    return 1;
  } else if (score <= criteria[2]) {
    return 2;
  } else {
    return 3;
  }
};

const handleTest = (testData) => {
  let { grade, specialization: profile } = testData;
  let results = {};
  for (const [testName, score] of Object.entries(testData)) {
    results[testName] = handleField(testName, score, grade, profile);
  }
  return results;
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const personalData = {};
  const testData = {};

  for (const [key, value] of formData.entries()) {
    if (commonFields.includes(key)) {
      personalData[key] = value;
      testData[key] = value;
    } else if (personalFields.includes(key)) {
      personalData[key] = value;
    } else {
      testData[key] = value;
    }
  }
  let results = handleTest(testData);
  printObject(results);
});
