import XLSX from "xlsx";

export const readExcelFile = (filePath) => {

  const workbook =
    XLSX.readFile(filePath);

  const sheetName =
    workbook.SheetNames[0];

  const worksheet =
    workbook.Sheets[sheetName];

  const data =
    XLSX.utils.sheet_to_json(
      worksheet
    );

  return data;
};