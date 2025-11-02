# Description

A simple, zero-dependency tool to convert JSON files to CSV files.

<details>

  <summary>Backstory</summary>

  **For a company I'm working with**, I was exporting some data from the web application's servers which was in JSON, and I wanted to format it in a way that was easier for non-technical people (or technical people who couldn't be bothered) to view.

  **At first**, I built a custom tool to convert the company's JSON format into CSV form, and after some trial-and-error, I got it working, correctly converting keys into a heading row, and values into data rows.

  **Then immediately after I was done**, I thought "Why not generalize this to all JSONs?", and there you go: I made a tool for all JSONs.

</details>

<br/>

## How it works

1. Reads and parses a JSON array of objects from the provided input path, and treats every object as a "row" in a table
2. Converts all property **keys** into a heading row, adding new ones if any objects contain new properties
3. Converts all property **values** into data rows underneath the correct header associated with its property key
4. Writes the output to the provided CSV file path

# Usage

```js
import { convertJsonToCsv } from "json-to-csv-js";

convertJsonToCsv(
  "path/to/original.json",
  "path/to/output.csv",
);
```

## Requirements

Input JSON must be an array of non-nested objects

```json
[
  {
    "name": "John",
    "email": "john@mail.com",
  },
  {
    "id": 1
  },
  {
    "random": "asdlkfhjsalkfj",
    "milk": "So Nice"
  },
]
```
