<script>
  import Post from '$lib/PostCard.svelte';
  import posts from '$lib/articles.json';
</script>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<div class="list">
  <h1>Posts:</h1>
  <hr />
  {#each posts as post}
    <Post {post} />
  {/each}
</div>

<style>
  h1 {
    font-family: 'Montserrat';
    font-size: 3em;
    margin: 0;
  }
</style>
