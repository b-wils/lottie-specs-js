Lottie Specs
============

JS bindings for the Lottie specs


## Usage

Node:

```js
// Imports
const ajv2020 = require("ajv/dist/2020");
const {Validator, get_schema_path} = require("src/validator.js");

// Data
const data = {...}; // Lottie data to validate

// Create validator
const schema = JSON.parse(fs.readFileSync(get_schema_path(), "utf8"));
const validator = new Validator(ajv2020.Ajv2020, schema);
// Get errors
const errors = validator.validate(data);
```

Browser:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ajv/8.16.0/ajv2020.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lottie-animation-community/lottie-specs/src/validator.js"></script>

<script>
    // Data
    const data = {...}; // Lottie data to validate

    // You'll need to fetch the schema
    fetch(get_schema_url()).then( r => r.json() ).then(schema => {
        const validator = new Validator(ajv2020.Ajv2020, schema);
        const errors = validator.validate(data);
    });
</script>
```


### Returned Errors

Returned error objects have the following properties:

* `type`: `"error"` or `"warning"`
* `warning`: (only on warnings)
    * `"type"` whether it's an unknown object type
    * `"property"` whether it's an unknown property
* `message`: Human readable message
* `path`: JSON path to the object causing the error (empty string refers to the top-level object)
* `name`: Name of the object type as per the schema
* `docs`: Link to the specs describing the object

By default `Validator.validate` returns warnings, to suppress them pass `false` as second parameter.


## Links

* NPM: https://www.npmjs.com/package/@lottie-animation-community/lottie-specs
* GitHub: https://github.com/lottie/lottie-specs-js

## Publishing the package

```bash
npm login
npm publish --access public
```
