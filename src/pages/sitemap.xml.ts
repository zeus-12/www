import { allContents } from "contentlayer/generated";

const URL = "https://vishnuu.com";

function generateSiteMap() {
  const today = new Date().toISOString().split("T")[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
       <lastmod>${today}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${URL}/projects</loc>
       <lastmod>${today}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${URL}/posts</loc>
       <lastmod>${today}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     ${allContents
       .map((post) => {
         const lastmod = new Date(post.date).toISOString().split("T")[0];
         return `
     <url>
       <loc>${URL}/posts/${post.slug}</loc>
       <lastmod>${lastmod}</lastmod>
       <changefreq>yearly</changefreq>
       <priority>0.6</priority>
     </url>`;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
