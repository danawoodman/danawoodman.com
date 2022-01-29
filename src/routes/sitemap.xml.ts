import type { EndpointOutput, RequestEvent } from "@sveltejs/kit";
import convert from "xml-js";
import { getPosts } from "./_posts";

function isoDateTime(date?: string): string | undefined {
  if (!date) return undefined;
  return new Date(date).toISOString().split("T")[0];
}

export async function get({ url }: RequestEvent): Promise<EndpointOutput> {
  const posts = await getPosts();
  const postEntries = posts.map((p) => ({
    lastmod: isoDateTime(p?.published),
    loc: url.origin + p.slug,
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
    body: convert.js2xml(data, { spaces: 2, compact: true }),
    headers: { "content-type": "application/xml" },
  };
}
