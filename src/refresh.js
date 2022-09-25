import { writeFileSync, readdirSync, readFileSync } from 'node:fs';

let postList = readdirSync('./static/articles');

let posts = [];
for (const path of postList) {
  let article = readFileSync(`./static/articles/${path}`).toString();
  posts.push(getMetadata(article, path));
}

// Sort articles
posts.sort((a, b) => {
  return new Date(b.publishDate) - new Date(a.publishDate);
});

console.log(`Posts: ${posts.map((x) => x.title).join(', ')}`);

writeFileSync('./src/lib/articles.json', JSON.stringify(posts));

/**
 * Reads the beginning of a markdown file and converts the metadata to a JSON obhect
 * @param {string} file The file itself
 * @param {string} name The name of the file
 */
function getMetadata(file, name) {
  let validKeys = ['title', 'publishDate', 'description', 'tags'];

  let lines = file.split('\r\n');
  let reading = true;
  let error = false;
  let metadata = {};

  for (let num = 0; num < lines.length && reading; num++) {
    let line = lines[num];

    if (num == 0 && !line.includes('---')) {
      console.log(`
          Error when reading ${name}

          All articles must start with a line matching "---"
        `);
      reading = false;
      error = true;
      continue;
    }
    // Skip first line
    if (num == 0) {
      continue;
    }

    // Stop reading after end of metadata
    if (num != 0 && line == '---') {
      reading = false;
      continue;
    }

    // Parse data line and store it
    let data = line.match(/(?<key>\S+): (?<value>.+)/);
    if (!data) {
      console.log(`
          Error when reading ${name}

          Line ${num + 1}: Malformed metadata entry "${line}"
        `);
      reading = false;
      error = true;
      continue;
    }

    let key = data?.groups?.key || '';
    let value = data?.groups?.value || '';

    if (!validKeys.includes(key)) {
      console.log(`
          Error when reading ${name}

          Line ${num + 1}: Invalid property "${key}"
        `);
      error = true;
      continue;
    }

    metadata[key] = value;
  }

  metadata.path = name;

  // Get minified title of article
  metadata.minTitle = minifyTitle(metadata.title);
  if (!metadata.href) {
    metadata.href = `./posts/${metadata.minTitle}`;
  }

  // Convert tags to array
  if (metadata.tags) {
    metadata.tags = metadata.tags.split(', ');
  }

  if (!error) {
    return metadata;
  }

  return { error };
}

function minifyTitle(title) {
  return title.toLowerCase().replaceAll(' ', '-');
}
