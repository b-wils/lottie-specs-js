Lottie Specs
============

JS bindings for the Lottie specs


## Usage

Node:

```js
// Imports
const path = require("path");
const ajv2020 = require("ajv/dist/2020");
const {Validator} = require("src/validator.js");

// Data
const schema_path = "path/to/lottie.schema.json";
const data = {...}; // Lottie data to validate

// Create validator
const schema = JSON.parse(fs.readFileSync(schema_path, "utf8"));
const validator = new Validator(ajv2020.Ajv2020, schema);
// Get errors
const errors = validator.validate(data);
```

Browser:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ajv/8.16.0/ajv2020.min.js"></script>
<script src="../js/validator.js"></script>

<script>
    const validator = new Validator(ajv2020.Ajv2020, schema);
    const errors = validator.validate(data);
</script>
```
