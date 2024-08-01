import { allSnippets } from 'contentlayer/generated';

const URL = 'https://vishnuu.com';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${URL}</loc>
       <loc>${`${URL}/projects`}</loc>
       <loc>${`${URL}/now`}</loc>
       <loc>${`${URL}/snippets`}</loc>
     </url>
     ${allSnippets
       .map((snippet) => {
         return `
       <url>
           <loc>${`${URL}/snippets/${snippet.slug}`}</loc>
       </url>
     `;
       })
       .join('')}
       
    
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: any }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
