import fs from "node:fs";

/**
 *
 * @param {string} input_json_path
 * @param {string} output_csv_path
 */
export function convertJsonToCsv(
  input_json_path,
  output_csv_path,
) {
  const file_buffer = fs.readFileSync(input_json_path);

  /** @type {object[]} */
  const array_of_objects = JSON.parse(file_buffer);

  let csv = getCsvFromArray(array_of_objects);
  fs.writeFileSync(output_csv_path, csv);
}

/**
 *
 * @param {object[]} array_of_objects
 * @returns {string}
 */
export function getCsvFromArray(array_of_objects) {
  const INVALID_INPUT_MESSAGE = "Input JSON must be an array of objects";

  if (Array.isArray(array_of_objects) === false) {
    throw new Error(INVALID_INPUT_MESSAGE, { cause: array_of_objects });
  }

  // Convert object properties into headings and rows
  const headings = [];
  const rows = [];

  for (let i = 0; i < array_of_objects.length; i++) {
    const obj = array_of_objects[i];

    if (typeof obj !== "object") {
      throw new Error(INVALID_INPUT_MESSAGE);
    }

    const row = [];
    for (const column_name of Object.keys(obj)) {
      const cell_value = obj[column_name];

      let column = headings.indexOf(column_name);
      if (column === -1) {
        headings.push(column_name);
        column = headings.length - 1;
      }

      row[column] = cell_value;
    }
    rows.push(row);
  }

  // Join with delimiter and write to file
  let csv = "";
  csv += headings.join(";");
  for (const row of rows) {
    csv += "\n";
    csv += row.join(";");
  }

  return csv;
}
