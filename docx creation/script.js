import {
  AlignmentType,
  Document,
  Packer,
  Paragraph,
  Tab,
  Table,
  TableCell,
  TableRow,
} from "docx";

const name = "Иванов Петр";
const schoolNumber = "№9";
const grade = "11-A";

const createTableRow = (heading) => {
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
};

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
  ],
});

const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          text: "Психологическая характеристика",
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: `Ф.И. ${name}`,
          alignment: AlignmentType.LEFT,
        }),
        table,
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});
