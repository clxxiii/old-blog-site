import showdown from 'showdown';
const { Converter } = showdown;
import posts from '$lib/articles.json';

export const prerender = false;
export const csr = true;
const converter = new Converter({ tables: true, metadata: true });

/** @type {import("@sveltejs/kit").Load} */
export async function load({ url, params }) {
  let post = posts.find((x) => x.minTitle == params.post);
  let article = await fetch(`${url.origin}/articles/${post.path}`);
  article = await article.text();
  let page = converter.makeHtml(article);

  return { post, page };
}
