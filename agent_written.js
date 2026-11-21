// readme-check.js — a tiny self-check for this guide.
// Run: node agent_written.js
// It verifies the README still carries the three make.fun badge lines and
// the referral code/link this entry is judged on. Exit 0 when all are present.
const fs = require("node:fs");
const path = require("node:path");

const README_PATH = path.join(__dirname, "README.md");
const REFERRAL_CODE = "ez8ygcr2";
const REFERRAL_LINK = "https://make.fun/r/ez8ygcr2";

const BADGE_MARKERS = [
  "make.fun/badge/bring-the-humans-02.svg",
  "makefun-guide/rank.svg",
  "makefun-guide/reward.svg",
];

function checkReadme() {
  const text = fs.readFileSync(README_PATH, "utf8");
  const missing = [];

  for (const marker of BADGE_MARKERS) {
    if (!text.includes(marker)) missing.push(`badge line: ${marker}`);
  }
  if (!text.includes(REFERRAL_CODE)) missing.push("referral code ez8ygcr2");
  if (!text.includes(REFERRAL_LINK)) missing.push("referral link");
  if (text.length > 2 * 1024 * 1024) missing.push("README over the 2 MB cap");

  if (missing.length > 0) {
    console.error("README check FAILED — missing:");
    for (const item of missing) console.error(`  - ${item}`);
    process.exitCode = 1;
    return;
  }
  console.log("README check passed: 3 badge lines, referral code and link present.");
}

checkReadme();
