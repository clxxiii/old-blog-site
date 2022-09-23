<script>
  export let data;
  import '$lib/tag-colors.css';
  import '$lib/markdown.css';

  let { post, page } = data;
  let { title, publishDate, tags } = post;

  let format = { month: 'short', day: 'numeric', year: 'numeric' };
  let date = new Date(publishDate).toLocaleString('en-us', format);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="header">
  <div class="title">{title}</div>
  <div class="date">{date}</div>
  <div class="tags">
    {#if tags}
      {#each tags as tag}
        <div data-name={tag} class="tag">{tag}</div>
      {/each}
    {/if}
  </div>
</div>
<div class="hr" />
<div class="content">
  {@html page}
</div>

<style>
  .title {
    text-align: center;
    font-size: 5em;
    margin-bottom: 0.5em;
    font-family: 'Montserrat';
    font-weight: extra-bold;
  }
  .header {
    position: relative;
    min-height: 10em;
  }
  .tags {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .date {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .hr {
    background-color: var(--bg3);
    height: 5px;
  }
</style>
