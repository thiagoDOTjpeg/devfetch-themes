import Ajv from "ajv";
import fs from "fs";
import path from "path";

const ajv = new Ajv({ allErrors: true });
const schema = JSON.parse(fs.readFileSync(path.join(__dirname, "../schema.json"), "utf8"));
const validate = ajv.compile(schema);

const themesDir = path.join(__dirname, "../themes");
const files = fs.readdirSync(themesDir).filter((f) => f.endsWith(".json"));

let failed = false;

for (const file of files) {
  const filePath = path.join(themesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const valid = validate(data);

  if (valid) {
    console.log(`✓ ${file}`);
  } else {
    console.error(`✗ ${file}`);
    for (const err of validate.errors!) {
      console.error(`  ${err.dataPath || "root"}: ${err.message}`);
    }
    failed = true;
  }
}

if (failed) {
  console.error("\nValidation failed.");
  process.exit(1);
} else {
  console.log("\nAll themes valid.");
}
