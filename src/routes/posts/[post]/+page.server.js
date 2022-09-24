import { getMetadata } from '$lib/getMetadataOfMD';
import showdown from 'showdown';
const { Converter } = showdown;

export const prerender = false;
export const csr = true;
const converter = new Converter({ tables: true, metadata: true });

/** @type {import("@sveltejs/kit").Load} */
export async function load({ params }) {
  let postList = import.meta.glob('/**/*.md', { as: 'raw' });

  let posts = [];
  for (const path in postList) {
    let article = await postList[path]();
    let data = getMetadata(article);
    data.page = article;
    posts.push(data);
  }

  let post = posts.find((x) => x.minTitle == params.post);
  let page = converter.makeHtml(post.page);

  return { post, page };
}
