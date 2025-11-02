import { test, describe } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { getCsvFromArray } from "../index.js";

describe(`convertJsonToCsv`, () => {
  describe(`getCsvFromArray`, () => {
    test(`converts all keys into headings and all values into rows`, async () => {
      const expected_csv = "name;email;title;id;random\nJames;james@email.com;Boss\nStephanie;;Big boss\nJohnson;johnson@email.com;Rando;420.69\n;;No one\n;;;0;asdolckioruvh";

      const file_buffer = fs.readFileSync("test/sample_a.json");
      const array_of_objects = JSON.parse(file_buffer);
      const csv = getCsvFromArray(array_of_objects);

      assert.equal(csv, expected_csv);
    });
  });
});
