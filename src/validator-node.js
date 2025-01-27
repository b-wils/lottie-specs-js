const {LottieValidator, schema_file_name, get_schema_url} = require("../src/validator.js");

/**
 * \returns File path to the schema
 * \pre Running on node
 */
function get_schema_path(version=null)
{
    const path = require("path");
    return path.resolve(__dirname, "data", schema_file_name(version));
}

// Node module exports
if ( typeof module !== "undefined" )
{
    module.exports = {LottieValidator, get_schema_url, get_schema_path};
}
