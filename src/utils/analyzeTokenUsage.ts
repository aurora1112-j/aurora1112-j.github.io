import fs from "node:fs";
import path from "node:path";

export interface TokenUsage {
  token: string;
  count: number;
}

const SOURCE_EXTENSIONS = new Set([".astro", ".mdx", ".tsx", ".ts", ".css", ".jsx", ".js"]);

function sourceFiles(root: string): string[] {
  const pending = [root];
  const result: string[] = [];

  while (pending.length) {
    const directory = pending.pop();
    if (!directory) continue;
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) pending.push(target);
      else if (entry.isFile() && SOURCE_EXTENSIONS.has(path.extname(entry.name))) result.push(target);
    }
  }

  return result;
}

export function analyzeTokenUsage(tokenNames: string[]): Map<string, number> {
  const totals = new Map(tokenNames.map((name) => [name, 0]));
  for (const filename of sourceFiles(path.join(process.cwd(), "src"))) {
    const source = fs.readFileSync(filename, "utf8");
    for (const token of tokenNames) {
      const needle = `var(${token})`;
      let cursor = 0;
      while ((cursor = source.indexOf(needle, cursor)) !== -1) {
        totals.set(token, (totals.get(token) ?? 0) + 1);
        cursor += needle.length;
      }
    }
  }
  return totals;
}

export function sortByUsage<T extends { name: string }>(
  tokens: T[],
  usage: Map<string, number>,
): T[] {
  return tokens.toSorted((left, right) => (usage.get(right.name) ?? 0) - (usage.get(left.name) ?? 0));
}

export function getUnusedTokens(usage: Map<string, number>): string[] {
  return [...usage].filter(([, count]) => count === 0).map(([token]) => token);
}
