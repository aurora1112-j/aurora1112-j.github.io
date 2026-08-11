import fs from "node:fs";
import path from "node:path";

type TokenCategory = "color" | "spacing" | "font-size" | "font-family" | "leading" | "shadow" | "radius";

export interface DesignToken {
  name: string;
  value: string;
  category: TokenCategory;
  subcategory?: string;
}

function classify(name: string, value: string): DesignToken | undefined {
  if (name.startsWith("--color-")) {
    const subcategory = name.includes("gray")
      ? "gray"
      : name.includes("cream") || name === "--color-black"
        ? "base"
        : "brand";
    return { name, value, category: "color", subcategory };
  }
  if (/^--space-\d+$/.test(name)) return { name, value, category: "spacing", subcategory: "numeric" };
  if (/^--space-(?:3xs|2xs|xs|s|m|l|xl|2xl|3xl|4xl)(?:-|$)/.test(name)) {
    const pair = /^--space-[^-]+-[^-]+$/.test(name);
    return { name, value, category: "spacing", subcategory: pair ? "fluid-pair" : "t-shirt" };
  }
  if (name.startsWith("--font-size-")) return { name, value, category: "font-size" };
  if (name.startsWith("--font-")) return { name, value, category: "font-family" };
  if (name.startsWith("--leading-")) return { name, value, category: "leading" };
  if (name.startsWith("--box-shadow-")) return { name, value, category: "shadow" };
  if (name.startsWith("--border-radius-")) return { name, value, category: "radius" };
}

export function parseDesignTokens(): DesignToken[] {
  const stylesheet = fs.readFileSync(path.join(process.cwd(), "src/global.css"), "utf8");
  return [...stylesheet.matchAll(/(--[a-z0-9-]+):\s*([^;]+);/g)]
    .filter(([, name]) => !/^--(?:fc|f|fluid)-/.test(name))
    .map(([, name, rawValue]) => classify(name, rawValue.trim()))
    .filter((token): token is DesignToken => Boolean(token));
}

export function getTokensByCategory(tokens: DesignToken[]) {
  const of = (category: TokenCategory) => tokens.filter((token) => token.category === category);
  return {
    colors: of("color"),
    spacing: of("spacing"),
    fontSizes: of("font-size"),
    fontFamilies: of("font-family"),
    leading: of("leading"),
    shadows: of("shadow"),
    radii: of("radius"),
  };
}
