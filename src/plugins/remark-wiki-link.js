import { visit } from "unist-util-visit";
import linkMaps from "../links.json";

export function remarkWikiLink() {
	return (tree) => {
		visit(tree, "text", (node, index, parent) => {
			if (!node.value.includes("[[")) return;
			const pieces = node.value.split(/(\[\[[^\]]+\]\])/g).filter(Boolean);
			const children = pieces.map((piece) => {
				const wikiMatch = piece.match(/^\[\[([^\]]+)\]\]$/);
				if (!wikiMatch) return { type: "text", value: piece };
				const label = wikiMatch[1];
				const lookup = label.replace(/[‘’]/g, "'").replace(/[“”]/g, '"').toLowerCase();
				const destination = linkMaps.find(({ ids }) => ids.some((id) => id.toLowerCase() === lookup));
				if (!destination) return { type: "text", value: piece };
				const attributes = {
					href: `/${destination.slug}`,
					title: destination.ids[0],
					description: destination.description ?? "",
				};
				return {
					type: "mdxJsxTextElement",
					name: "InternalTooltipLink",
					attributes: Object.entries(attributes).map(([name, value]) => ({
						type: "mdxJsxAttribute",
						name,
						value,
					})),
					children: [{ type: "text", value: label }],
				};
			});
			parent.children.splice(index, 1, ...children);
		});
	};
}
