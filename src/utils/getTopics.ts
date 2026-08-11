import { getCollection } from "astro:content";
import { slugifyTopic } from "./slugifyTopic";

/**
 * Fetch all content entries that can carry topics, excluding drafts where applicable.
 */
async function fetchAllContent() {
  const [concepts, projects, photography, now, smidgeons] =
    await Promise.all([
      getCollection("concepts", ({ data }) => !data.draft),
      getCollection("projects", ({ data }) => !data.draft),
      getCollection("photography", ({ data }) => !data.draft),
      getCollection("now"),
      getCollection("smidgeons", ({ data }) => !data.draft),
    ]);

  return [...concepts, ...projects, ...photography, ...now, ...smidgeons];
}

/**
 * Return every unique topic across all content collections, with both the
 * original display name and its URL slug.
 */
export async function getAllTopics() {
  const allContent = await fetchAllContent();

  const topics = new Set<string>();
  allContent.forEach((post) => {
    if (post.data.topics) {
      post.data.topics.forEach((topic) => topics.add(topic));
    }
  });

  return Array.from(topics).map((topic) => ({
    name: topic,
    slug: slugifyTopic(topic),
  }));
}

/**
 * Return all content entries that are tagged with the given topic slug.
 * Slugified versions of each entry's topics are compared so the match is
 * insensitive to spacing and capitalisation differences.
 */
export async function getPostsForTopic(topicSlug: string) {
  const allContent = await fetchAllContent();

  return allContent.filter((post) => {
    if (!post.data.topics) return false;
    return post.data.topics.some((t) => slugifyTopic(t) === topicSlug);
  });
}
