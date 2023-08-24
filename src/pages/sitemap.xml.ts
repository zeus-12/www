import { allSnippets } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allSnippets.map((snippet) => ({
    url: `https://vishnuu.me/snippets/${snippet.slug}`,
    lastModified: snippet.date,
  }));

  const routes = ['', '/blog', '/projects', '/now'].map((route) => ({
    url: `https://vishnuu.me${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
