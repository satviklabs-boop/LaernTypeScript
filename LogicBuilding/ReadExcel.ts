import * as XLSX from 'xlsx';

// Read the Excel file
const workbook = XLSX.readFile('./testdata.xlsx');

// Get the first sheet
const sheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert Excel data into JSON objects
const data = XLSX.utils.sheet_to_json(sheet);

// Print all rows
console.log(data);

// Read a specific row and column
console.log(data[0]);
