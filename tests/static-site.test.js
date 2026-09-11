const fs = require("fs");
const path = require("path");
const assert = require("assert");

const requiredFiles = [
  "index.html",
  "admin/dashboard.html",
  "auth/login.html",
  "student/dashboard.html",
  "css/global.css",
  "js/main.js",
];

for (const file of requiredFiles) {
  const filePath = path.join(process.cwd(), file);
  assert.ok(fs.existsSync(filePath), `Required file is missing: ${file}`);
  assert.ok(
    fs.statSync(filePath).size > 0,
    `Required file is empty: ${file}`,
  );
}

const indexHtml = fs.readFileSync("index.html", "utf8");
assert.match(indexHtml, /<html/i, "index.html must contain an HTML document");

console.log(`Static site checks passed for ${requiredFiles.length} required files.`);
