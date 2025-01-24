Lottie Specs
============

JS bindings for the Lottie specs


## Usage

Node:

```js
// Imports
const ajv2020 = require("ajv/dist/2020");
const {LottieValidator, get_schema_path} = require("src/node.js");

// Data
const data = {...}; // Lottie data to validate

// Create validator
const schema = JSON.parse(fs.readFileSync(get_schema_path(), "utf8"));
const validator = new LottieValidator(ajv2020.Ajv2020, schema);
// Get errors
const errors = validator.validate(data);
```

Browser:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ajv/8.17.1/ajv2020.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lottie-animation-community/lottie-specs/src/validator.js"></script>

<script>
    // Data
    const data = {...}; // Lottie data to validate

    // You'll need to fetch the schema
    fetch(get_schema_url()).then( r => r.json() ).then(schema => {
        const validator = new LottieValidator(ajv2020.Ajv2020, schema);
        const errors = validator.validate(data);
    });
</script>
```

## Configuration

LottieValidator takes an optional second argument for configuration.
These settings are:

* `name_paths`: whether to extract the user specified names from JSON path (default: false) 
* `docs_url`: Base url for information on errors (default: "https://lottie.github.io/lottie-spec/latest")

### Returned Errors

Returned error objects have the following properties:

* `type`: `"error"` or `"warning"`
* `warning`: (only on warnings)
    * `"type"` whether it's an unknown object type
    * `"property"` whether it's an unknown property
* `message`: Human readable message
* `path`: JSON path to the object causing the error (empty string refers to the top-level object)
* `path_names`: User specified list of names from each level where they are available in the JSON path (if enabled)
* `name`: Name of the object type as per the schema
* `docs`: Link to the specs describing the object

By default `LottieValidator.validate` returns warnings, to suppress them pass `false` as second parameter.


## Links

* NPM: https://www.npmjs.com/package/@lottie-animation-community/lottie-specs
* GitHub: https://github.com/lottie/lottie-specs-js

## Publishing the package

```bash
npm login
npm publish --access public
```
