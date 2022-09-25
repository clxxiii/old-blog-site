<script>
  import Post from '$lib/PostCard.svelte';
  import posts from '$lib/articles.json';
</script>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<div class="list">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
