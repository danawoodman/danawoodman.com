import type { EndpointOutput, RequestEvent } from "@sveltejs/kit";
import convert from "xml-js";
import { getPosts } from "./_posts";

export async function get({ url }: RequestEvent<any>): Promise<EndpointOutput> {
  const posts = await getPosts();
  const postEntries = posts.map((p) => ({
    loc: url.origin + p.slug,
    lastmod: p.published
      ? new Date(p.published).toISOString().split("T")[0]
      : undefined,
  }));
  const data = {
    _declaration: {
      _attributes: {
        version: "1.0",
        encoding: "UTF-8",
      },
    },
    urlset: {
      _attributes: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" },
      url: postEntries,
    },
  };
  return {
    body: convert.js2xml(data),
    headers: {
      "content-type": "application/xml",
    },
  };

  //   const postEntries = posts.map(
  //     (p) => `
  //     <url>
  //       <loc>${url.origin + p.slug}</loc>
  //       ${
  //         p.published
  //           ? `<lastmod>${
  //               new Date(p.published).toISOString().split("T")[0]
  //             }</lastmod>`
  //           : ""
  //       }
  //     </url>`
  //   );
  //   return {
  //     body: `<?xml version="1.0" encoding="UTF-8"?>
  // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //   ${postEntries}
  // </urlset>`,
  //     headers: {
  //       "content-type": "application/xml",
  //     },
  //   };
}
