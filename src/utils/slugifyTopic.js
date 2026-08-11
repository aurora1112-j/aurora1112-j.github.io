export function slugifyTopic(topic) {
	return String(topic)
		.normalize("NFKD")
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9_-]/g, "")
		.replace(/-+/g, "-");
}

export function deslugifyTopic(slug) {
	return String(slug).split("-").filter(Boolean).join(" ");
}
