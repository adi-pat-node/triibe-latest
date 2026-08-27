import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceExtensions = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const excludedDirectories = new Set([".git", ".next", "node_modules"]);
const violations = [];
const approvedAggregateMetricsUrl = "https://www.grantauthority.org/api/public-metrics";

function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;

    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(absolutePath);
      continue;
    }
    if (!sourceExtensions.has(path.extname(entry.name))) continue;

    const relativePath = path.relative(root, absolutePath);
    const source = fs.readFileSync(absolutePath, "utf8");
    // One aggregate-only, read-only metrics endpoint is allowed. It returns no
    // grant records, funder identities, user data, or application data.
    const sourceWithoutApprovedMetrics = source.split(approvedAggregateMetricsUrl).join("");
    const approvedMetricsFiles = new Set([
      path.join("app", "api", "grants", "metrics", "route.ts"),
      path.join("scripts", "verify-grants-boundary.mjs"),
    ]);
    if (source.includes(approvedAggregateMetricsUrl) && !approvedMetricsFiles.has(relativePath)) {
      violations.push(`${relativePath}: aggregate metrics URL is allowed only in the narrow server proxy`);
    }
    const forbiddenPatterns = [
      {
        label: "GrantAuthority or ZH source import",
        pattern: /(?:from\s*|require\s*\(|import\s*\()\s*["'][^"']*(?:grantauthority|zero[-_]?hallucs|zh[-_]?search|sovereignclient)[^"']*["']/i,
      },
      {
        label: "GrantAuthority embedded runtime",
        pattern: /<(?:iframe|script)\b[^>]*(?:grantauthority|zero[-_]?hallucs|zh[-_]?search)/i,
      },
      {
        label: "GrantAuthority API call",
        pattern: /(?:fetch|axios\.(?:get|post|put|patch|delete))\s*\(\s*["']https?:\/\/[^"']*grantauthority/i,
      },
    ];

    for (const check of forbiddenPatterns) {
      if (check.pattern.test(sourceWithoutApprovedMetrics)) {
        violations.push(`${relativePath}: ${check.label}`);
      }
    }
  }
}

visit(root);

const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const dependencyNames = Object.keys({
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
  ...packageJson.optionalDependencies,
});
for (const dependency of dependencyNames) {
  if (/(?:grantauthority|zero[-_]?hallucs|zh[-_]?search|sovereignclient)/i.test(dependency)) {
    violations.push(`package.json: forbidden dependency ${dependency}`);
  }
}

if (violations.length > 0) {
  console.error("TRIIBE Grants repository boundary failed:\n" + violations.join("\n"));
  process.exit(1);
}

console.log("TRIIBE Grants boundary verified: referral handoff plus aggregate-only metrics; no GrantAuthority or ZH runtime code.");
