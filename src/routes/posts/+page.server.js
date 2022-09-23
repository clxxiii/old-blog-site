import { readdirSync, readFileSync } from 'node:fs';
import { getMetadata } from '$lib/getMetadataOfMD';

export const prerender = true;

/** @type {import("@sveltejs/kit").Load} */
export async function load({ url }) {
  let page = parseInt(url.searchParams.get('page') || '1');

  let postList = readdirSync('./static/articles').filter((x) => x.endsWith('.md'));
  let posts = [];

  for (const postName of postList) {
    let page = readFileSync(`./static/articles/${postName}`).toString();
    posts.push(getMetadata(page, postName));
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
