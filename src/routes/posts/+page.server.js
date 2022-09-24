import { getMetadata } from '$lib/getMetadataOfMD';

/** @type {import("@sveltejs/kit").Load} */
export async function load({ url }) {
  let page = parseInt(url.searchParams.get('page') || '1');

  let postList = import.meta.glob('./articles/*.md', { as: 'raw' });
  console.log(postList);

  let posts = [];
  for (const path in postList) {
    let article = await postList[path]();
    posts.push(getMetadata(article));
  }

  // Sort articles
  posts.sort((a, b) => {
    return new Date(b.publishDate) - new Date(a.publishDate);
  });
  // Group articles
  let groups = [];
  let groupSize = 10;
  for (let i = 0; i < posts.length; i += groupSize) {
    groups.push(posts.slice(i, i + groupSize));
  }

  return { posts: groups[page - 1] };
}
