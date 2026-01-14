const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "src", "locales");
const teamSection = {
  title: "About us",
  description:
    "We build digital tools that help you hold corporations accountable, track support for Palestinian rights, and make informed choices. We use technology and collective action to change how communities take part in advocacy. Our goal is to make transparency easy for everyone and to strengthen the voices that push for change.",
  member1: { name: "John Doe", description: "Co-founder & Lead Developer" },
  member2: { name: "Jane Smith", description: "Co-founder & Product Designer" },
  member3: { name: "Alex Johnson", description: "Community Manager" },
  meetFullTeam: "Meet the full team",
};

function extractFirstJsonObject(text) {
  const start = text.indexOf("{");
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
    if (depth === 0) {
      return text.slice(start, i + 1);
    }
  }
  return null;
}

const langs = fs
  .readdirSync(root)
  .filter((f) => fs.statSync(path.join(root, f)).isDirectory());
console.log("Found locales:", langs.join(", "));

langs.forEach((lang) => {
  const file = path.join(root, lang, "translation.json");
  if (!fs.existsSync(file)) return;
  console.log("\nProcessing", lang);
  let raw = fs.readFileSync(file, "utf8");
  try {
    const data = JSON.parse(raw);
    // good: ensure team exists and update
    data.team = data.team || teamSection;
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
    console.log("  ✓ JSON valid — team added/kept");
  } catch (err) {
    console.log("  JSON parse failed, attempting robust extraction...");
    const firstObj = extractFirstJsonObject(raw);
    if (!firstObj) {
      console.log("  ✗ Could not find valid JSON object start/end — skipping");
      return;
    }
    try {
      const data = JSON.parse(firstObj);
      data.team = teamSection;
      fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
      console.log("  ✓ Rewrote file with extracted JSON + team");
    } catch (e2) {
      console.log("  ✗ Extraction parse failed:", e2.message);
    }
  }
});

console.log("\nDone.");
