import showdown from 'showdown';
const { Converter } = showdown;
const converter = new Converter({ tables: true, metadata: true });

export const prerender = true;

export async function load({ url }) {
  let first = await fetch(`${url.origin}/articles/first.md`);
  first = await first.text();

  return { page: converter.makeHtml(first) };
}
