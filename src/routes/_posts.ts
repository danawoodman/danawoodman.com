export async function getPosts(): Promise<Post[]> {
  const postFiles = import.meta.glob("./*.{md,svx,svelte.md}");

  const postPromises = [];
  for (const [path, resolver] of Object.entries(postFiles)) {
    const slug = path.replace(".svx", "").replace("./", "/"); //slugFromPath(path);
    const promise = resolver().then((post) => ({ slug, ...post.metadata }));

    postPromises.push(promise);
  }
  return Promise.all(postPromises);
}

// const limit = Number(url.searchParams.get('limit') ?? Infinity);

// if (Number.isNaN(limit)) {
// 	return {
// 		status: 400
// 	};
// }
// return {
// 	body: publishedPosts.slice(0, limit)
// };
// const posts = await fetch('/posts.json').then((res) => res.json());
// return {
// 	props: {
// 		posts
// 	}
// };
