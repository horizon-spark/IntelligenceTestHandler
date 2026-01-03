export const criteriaConfig = {
  tests: {
    conceptualIntuitiveIntellect: {
      type: "grade",
      criteria: {
        7: [5, 8, 13],
        8: [5, 9, 14],
        9: [6, 10, 14],
        10: [7, 10, 15],
        11: [7, 10, 16],
      },
    },
    conceptualLogicalIntellect: {
      type: "grade_profile",
      criteria: {
        7: {
          humanitarian: [4, 8, 13],
          default: [3, 7, 12],
        },
        8: {
          humanitarian: [4, 9, 14],
          default: [3, 8, 13],
        },
        9: {
          default: [5, 9, 15],
        },
        10: {
          default: [6, 10, 15],
        },
        11: {
          default: [7, 10, 16],
        },
      },
    },
    conceptualCategorization: {
      type: "grade_profile",
      criteria: {
        7: {
          default: [3, 7, 12],
        },
        8: {
          default: [4, 8, 13],
        },
        9: {
          default: [5, 9, 14],
        },
        10: {
          linguistic: [5, 11, 17],
          default: [5, 10, 15],
        },
        11: {
          linguistic: [5, 11, 17],
          default: [5, 10, 15],
        },
      },
    },
    abstractIntellect: {
      type: "grade_profile",
      criteria: {
        7: {
          default: [4, 8, 13],
        },
        8: {
          default: [5, 9, 14],
        },
        9: {
          default: [6, 10, 15],
        },
        10: {
          mathematical: [6, 12, 17],
          default: [6, 11, 16],
        },
        11: {
          mathematical: [7, 13, 19],
          default: [6, 11, 17],
        },
      },
    },
    mathematicalIntuition: {
      type: "grade_profile",
      criteria: {
        7: {
          default: [5, 8, 12],
        },
        8: {
          default: [5, 8, 13],
        },
        9: {
          default: [6, 9, 14],
        },
        10: {
          mathematical: [8, 12, 17],
          default: [7, 10, 15],
        },
        11: {
          mathematical: [8, 12, 17],
          default: [7, 10, 15],
        },
      },
    },
    structuralVisualIntellect: {
      type: "universal",
      criteria: [9, 10, 11],
    },
    dynamicVisualIntellect: {
      type: "universal",
      criteria: [7, 9, 11],
    },
    combinatorialVisualIntellect: {
      type: "universal",
      criteria: [7, 9, 11],
    },
    abstractVisualIntellect: {
      type: "grade",
      criteria: {
        7: [5, 8, 10],
        8: [5, 8, 10],
        default: [6, 9, 11],
      },
    },
    figurativeSynthesis: {
      type: "grade_profile",
      criteria: {
        7: {
          default: [5, 9, 14],
        },
        8: {
          default: [5, 9, 14],
        },
        9: {
          default: [5, 9, 14],
        },
        10: {
          mathematical: [5, 10, 16],
          default: [5, 9, 14],
        },
        11: {
          mathematical: [5, 10, 16],
          default: [5, 9, 14],
        },
      },
    },
    spatialAnalysis: {
      type: "grade_profile",
      criteria: {
        7: {
          default: [5, 9, 16],
        },
        8: {
          default: [5, 9, 16],
        },
        9: {
          mathematical: [6, 11, 18],
          default: [5, 9, 16],
        },
        10: {
          mathematical: [7, 12, 18],
          default: [5, 9, 16],
        },
        11: {
          mathematical: [7, 12, 18],
          default: [5, 9, 16],
        },
      },
    },
    divergentIntellect: {
      type: "universal",
      criteria: [2.5, 4.5, 7],
    },
    imagination: {
      type: "universal",
      criteria: [6, 9, 15],
    },
    awareness: {
      type: "grade_profile",
      criteria: {
        7: {
          humanitarian: [5, 9, 13],
          default: [4, 8, 13],
        },
        8: {
          humanitarian: [5, 9, 14],
          default: [4, 9, 13],
        },
        9: {
          humanitarian: [5, 9, 15],
          default: [5, 9, 14],
        },
        10: {
          humanitarian: [6, 10, 16],
          default: [6, 10, 15],
        },
        11: {
          humanitarian: [6, 11, 16],
          default: [6, 10, 16],
        },
      },
    },
    russianReadingSkill: {
      type: "universal",
      criteria: [4, 7, 9],
    },
    englishReadingSkill: {
      type: "universal",
      criteria: [4, 7, 9],
    },
    logicalMemory: {
      type: "grade",
      criteria: {
        7: [9, 13, 16],
        8: [10, 14, 17],
        9: [12, 15, 18],
        10: [13, 16, 18],
        11: [13, 17, 19],
      },
    },
    informationProcessingSpeed: {
      type: "grade",
      criteria: {
        7: [36, 45, 57],
        8: [38, 48, 59],
        9: [40, 50, 64],
        10: [44, 54, 69],
        11: [49, 62, 77],
      },
    },
    attentiveness: {
      type: "grade",
      criteria: {
        7: [0.91, 0.95, 0.97],
        8: [0.91, 0.95, 0.97],
        default: [0.92, 0.95, 0.97],
      },
    },
  },
};
