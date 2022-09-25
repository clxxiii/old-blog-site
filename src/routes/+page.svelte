<script>
  import banner from '../assets/static banner.png';
  import '$lib/markdown.css';

  export let data;
  let { page } = data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <img src={banner} alt="" />
  </h1>
  <hr />
  <article class="content">
    {@html page}
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
