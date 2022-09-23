<script>
  import Post from '$lib/PostCard.svelte';
  export let data;

  let { posts } = data;
</script>

<svelte:head>
  <title>Posts</title>
</svelte:head>

<div class="list">
  {#each posts as post}
    <Post {post} />
  {/each}
</div>
