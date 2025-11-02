# Description

A simple, zero-dependency tool to convert JSON files to CSV files.

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
