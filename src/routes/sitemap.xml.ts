import type { EndpointOutput, RequestEvent } from '@sveltejs/kit'
import { getPosts } from './writing/_posts'

// Reference: https://sitemaps.org/protocol.html#location

function isoDateTime(date?: string): string | undefined {
	if (!date) return undefined
	return new Date(date).toISOString().split('T')[0]
}

export async function get({ url }: RequestEvent): Promise<EndpointOutput> {
	const posts = await getPosts()
	const postEntries = posts.map((p) => ({
		lastmod: isoDateTime(p?.published),
		loc: url.origin + p.slug,
	}))

	const links = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${postEntries
			.map((p) => {
				return `<url>
        <loc>${p.loc}</loc>
        <lastmod>${p.lastmod}</lastmod>
      </url>`
			})
			.join('')}
  </urlset>`

	const header = '<?xml version="1.0" encoding="UTF-8"?>'
	const body = header + links
	return {
		body,
		headers: { 'content-type': 'application/xml' },
	}
}
