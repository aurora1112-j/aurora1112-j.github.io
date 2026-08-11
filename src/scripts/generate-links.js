import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";
// Import the extractBaseSlug function locally since we can't import TS from JS
const extractBaseSlug = (filePath) => {
  // Handle folder-based versioning: "ai-dark-forest/ai-dark-forest-v1" -> "ai-dark-forest"
  const pathParts = filePath.split('/');
  if (pathParts.length > 1) {
    // It's in a folder, use the folder name as the base slug
    return pathParts[0];
  }
  // Fallback: remove version suffix from filename for backwards compatibility
  return filePath.replace(/-v\d+$/, '');
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_PATH = path.join(__dirname, "../content");

// Function to extract text between double brackets
const bracketsExtractor = (content) => {
  if (!content) return null;
  const matches = content.match(/\[\[(.*?)\]\]/g);
  if (!matches) return null;
  return matches.map((match) => match.slice(2, -2));
};

// Get all content files from a directory, including those in subdirectories
const getFilesFromDir = (dir) => {
  try {
    const items = fs.readdirSync(dir);
    const files = [];
    
    items.forEach((item) => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // It's a directory, look for .mdx files inside it
        const subFiles = fs.readdirSync(fullPath)
          .filter((file) => file.endsWith(".mdx"))
          .map((file) => `${item}/${file}`); // Preserve folder structure in the path
        files.push(...subFiles);
      } else if (item.endsWith(".mdx")) {
        // It's a direct .mdx file
        files.push(item);
      }
    });
    
    return files;
  } catch (e) {
    console.warn(`No directory found for ${dir}`);
    return [];
  }
};

// Get data for backlinks
const getDataForBacklinks = (fileNames, filePath) => {
  const allPosts = fileNames
    .map((fileName) => {
      const file = fs.readFileSync(path.join(filePath, fileName), "utf8");
      const { content, data } = matter(file);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { title, titleEn, aliases, growthStage, description, descriptionEn, draft, version: frontmatterVersion } = data;

      // Skip draft posts
      if (draft === true) {
        return null;
      }

      // Extract version from frontmatter first, then fall back to filename pattern
      let version = frontmatterVersion;
      if (!version) {
        const versionMatch = fileName.match(/-v(\d+)\.mdx$/);
        version = versionMatch ? parseInt(versionMatch[1], 10) : 1;
      }

      return {
        content,
        slug,
        title,
        titleEn,
        aliases,
        growthStage,
        description,
        descriptionEn,
        version,
        id: fileName,
      };
    })
    .filter(Boolean); // Remove null entries (drafts)

  // Group by base slug and return only latest versions for link mapping
  const groups = new Map();
  
  allPosts.forEach(post => {
    const baseSlug = extractBaseSlug(post.slug);
    if (!groups.has(baseSlug)) {
      groups.set(baseSlug, []);
    }
    groups.get(baseSlug).push(post);
  });

  // Return only the latest version of each post for link generation
  const latestVersions = [];
  for (const [baseSlug, versions] of groups) {
    const latestVersion = versions.reduce((latest, current) => {
      return current.version > latest.version ? current : latest;
    });
    
    // Update slug to be the canonical (base) slug
    latestVersions.push({
      ...latestVersion,
      slug: baseSlug,
    });
  }

  return latestVersions;
};

const getAllPostData = () => {
  // Get all content files
  const collectionNames = ["concepts", "projects", "photography"];
  return collectionNames.flatMap((collectionName) => {
    const collectionPath = path.join(CONTENT_PATH, collectionName);
    return getDataForBacklinks(getFilesFromDir(collectionPath), collectionPath);
  });
};

// Main execution
(function () {
  // Get content and frontmatter for each post
  const totalPostData = getAllPostData();

  // Create initial objects with identifiers and empty link arrays
  const posts = totalPostData.map(
    ({ title, titleEn, aliases, slug, growthStage, description, descriptionEn }) => ({
      ids: [title, ...(aliases ? aliases : [])],
	  titleEn,
      slug,
      growthStage,
      description,
	  descriptionEn,
      outboundLinks: [],
      inboundLinks: [],
    }),
  );

  // Get all outbound links
  totalPostData.forEach((postData, index) => {
    const { content } = postData;
    const bracketContents = bracketsExtractor(content);

    bracketContents?.forEach((alias) => {
      // Find matching post by title or alias
      const match = posts.find((p) => {
        const normalisedAlias = alias
          .replace(/\n/g, "")
          .replace(/\s+/g, " ")
          .trim();
        return p.ids.some(
          (id) => id.toLowerCase() === normalisedAlias.toLowerCase(),
        );
      });

      if (match) {
        // Add to outbound links
        posts[index].outboundLinks.push({
          matchedId: alias,
          title: match.ids[0],
          titleEn: match.titleEn,
          slug: match.slug,
          growthStage: match.growthStage,
          description: match.description,
          descriptionEn: match.descriptionEn,
        });
      }
    });
  });

  // Get inbound links
  for (const outerPost of posts) {
    const outerPostTitle = outerPost.ids[0];

    for (const innerPost of posts) {
      const innerPostTitle = innerPost.ids[0];

      if (
        innerPost.outboundLinks.some((link) => link.title === outerPostTitle)
      ) {
        outerPost.inboundLinks.push({
          title: innerPostTitle,
          titleEn: innerPost.titleEn,
          slug: innerPost.slug,
          growthStage: innerPost.growthStage,
          description: innerPost.description,
          descriptionEn: innerPost.descriptionEn,
        });
      }
    }
  }

  // Write to links.json
  fs.writeFileSync(
    path.join(__dirname, "../links.json"),
    JSON.stringify(posts, null, 2),
  );
  console.log("✨ Generated links.json");
})();
