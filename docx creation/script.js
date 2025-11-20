import * as fs from "fs";
import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
} from "docx";

const name = "Иванов Петр";
const schoolNumber = 9;
const grade = "11-A";

const majorRecommendations = [
  createTableRow("1. Физико-математические науки"),
  createTableRow("2. Естественные науки"),
  createTableRow("3. Гуманитарные науки"),
  createTableRow("4. Общественные науки"),
  createTableRow("5. Программирование"),
  createTableRow("6. Экономика"),
  createTableRow("7. Менеджмент"),
  createTableRow("8. Лингвистика"),
  createTableRow("9. Инженерно-конструкторская деятельность"),
  createTableRow("10. Педагогика"),
];

const intellectFeatures = [
  createTableRow("1. Понятийное интуитивное мышление"),
  createTableRow("2. Понятийное логическое мышление"),
  createTableRow("3. Понятийная категоризация"),
  createTableRow("4. Абстрактное мышление"),
  createTableRow("5. Математическая интуиция"),
  createTableRow("6. Визуальный интеллект: структурный"),
  createTableRow("динамический"),
  createTableRow("комбинаторный"),
  createTableRow("абстрактный"),
  createTableRow("образный синтез"),
  createTableRow("пространственный анализ"),
  createTableRow("7. Дивергентное мышление"),
  createTableRow("8. Воображение"),
  createTableRow("9. Осведомленность, эрудиция"),
  createTableRow("10. Навык чтения (русский язык)"),
  createTableRow("11. Навык чтения (английский язык)"),
  createTableRow("12. Оперативная логическая память"),
  createTableRow("13. Скорость переработки информации"),
  createTableRow("14. Внимательность"),
];

const personalFeatures = [
  createTableRow("1. Исполнительность"),
  createTableRow("2. Волевое самоуправление"),
  createTableRow("3. Честолюбие"),
  createTableRow("4. Самокритичность"),
  createTableRow("5. Самостоятельность"),
  createTableRow("6. Прагматизм"),
  createTableRow("7. Тревожность"),
  createTableRow("8. Беспечность"),
  createTableRow("9. Эмоциональность"),
  createTableRow("10. Дипломатичность"),
  createTableRow("11. Коммуникативная активность"),
  createTableRow("12. Конформизм"),
  createTableRow("13. Потребность в общении"),
  createTableRow("14. Доброжелательность"),
  createTableRow("15. Объективность в оценке людей"),
  createTableRow("16. Психологическая энергия"),
  createTableRow("17. Физиологичекская энергия"),
];

function createTableRow(heading) {
  const row = new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph(`${heading}`)],
      }),
      new TableCell({
        children: [],
      }),
      new TableCell({
        children: [],
      }),
      new TableCell({
        children: [],
      }),
      new TableCell({
        children: [],
      }),
    ],
  });
  return row;
}

const personalData = new Table({
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: `Ф.И. ${name}`,
                  italics: true,
                }),
              ],
            }),
          ],
          alignment: AlignmentType.LEFT,
          borders: {
            top: {
              style: BorderStyle.NIL,
            },
            left: {
              style: BorderStyle.NIL,
            },
            right: {
              style: BorderStyle.NIL,
            },
            bottom: {
              style: BorderStyle.NIL,
            },
          },
        }),
        new TableCell({
          children: [],
          borders: {
            top: {
              style: BorderStyle.NIL,
            },
            left: {
              style: BorderStyle.NIL,
            },
            right: {
              style: BorderStyle.NIL,
            },
            bottom: {
              style: BorderStyle.NIL,
            },
          },
        }),
        new TableCell({
          children: [new Paragraph(`школа №${schoolNumber}`)],
          alignment: AlignmentType.RIGHT,
          borders: {
            top: {
              style: BorderStyle.NIL,
            },
            left: {
              style: BorderStyle.NIL,
            },
            right: {
              style: BorderStyle.NIL,
            },
            bottom: {
              style: BorderStyle.NIL,
            },
          },
        }),
        new TableCell({
          children: [new Paragraph(`класс ${grade}`)],
          alignment: AlignmentType.RIGHT,
          borders: {
            top: {
              style: BorderStyle.NIL,
            },
            left: {
              style: BorderStyle.NIL,
            },
            right: {
              style: BorderStyle.NIL,
            },
            bottom: {
              style: BorderStyle.NIL,
            },
          },
        }),
      ],
    }),
  ],
});

const table = new Table({
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph("Способности")],
          rowSpan: 2,
        }),
        new TableCell({
          children: [new Paragraph("Уровень выраженности")],
          columnSpan: 4,
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph("Слабый")],
        }),
        new TableCell({
          children: [new Paragraph("Средний")],
        }),
        new TableCell({
          children: [new Paragraph("Хороший")],
        }),
        new TableCell({
          children: [new Paragraph("Высокий")],
        }),
      ],
    }),
    ...majorRecommendations,
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: "Интеллектуальные особенности",
              alignment: AlignmentType.CENTER,
            }),
          ],
          columnSpan: 5,
        }),
      ],
    }),
    ...intellectFeatures,
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: "Личностные особенности",
              alignment: AlignmentType.CENTER,
            }),
          ],
          columnSpan: 5,
        }),
      ],
    }),
    ...personalFeatures,
  ],
});

const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          text: "Психологическая характеристика",
          alignment: AlignmentType.CENTER,
          spacing: {
            after: 200,
          },
        }),
        personalData,
        // new Paragraph({}),
        table,
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
