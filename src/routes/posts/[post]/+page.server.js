import { readdirSync, readFileSync } from 'node:fs';
import { getMetadata } from '$lib/getMetadataOfMD';
import showdown from 'showdown';
const { Converter } = showdown;

export const prerender = false;
export const csr = true;
const converter = new Converter({ tables: true, metadata: true });

/** @type {import("@sveltejs/kit").Load} */
export async function load({ params }) {
  let postList = readdirSync('./static/articles').filter((x) => x.endsWith('.md'));
  let posts = [];

  for (const postName of postList) {
    let page = readFileSync(`./static/articles/${postName}`).toString();
    let data = getMetadata(page, postName);
    posts.push(data);
  }
  let post = posts.find((x) => x.minTitle == params.post);
  let contentMD = readFileSync(`./static/articles/${post.path}`).toString();
  let content = converter.makeHtml(contentMD);

  return { post, content };
}
