const FRONTMATTER = /^---\s*\n[\s\S]*?\n---\s*/;
const SOURCE_LINE = /^(?:import|export)\b|^\s*<[^>]+>|^\s*#{1,6}\s/;

function plainText(markdown: string): string {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/[*_~`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shorten(text: string, limit: number): string {
  if (text.length <= limit) return text;
  const slice = text.slice(0, limit);
  const finalSpace = slice.lastIndexOf(" ");
  return finalSpace >= Math.floor(limit * 0.8) ? slice.slice(0, finalSpace) : slice;
}

export function extractPreview(content: string, maxLength = 90): string {
  if (!content.trim()) return "";
  const body = content.replace(FRONTMATTER, "");
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((block) => block.split("\n").filter((line) => !SOURCE_LINE.test(line.trim())).join(" "))
    .map(plainText)
    .filter(Boolean);
  return shorten(paragraphs[0] ?? "", maxLength);
}
