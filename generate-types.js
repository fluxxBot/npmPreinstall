import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";

const ast = await openapiTS(new URL("./openapi.json", import.meta.url));
const contents = astToString(ast);

// (optional) write to file
fs.writeFileSync("./my-schema.ts", contents);