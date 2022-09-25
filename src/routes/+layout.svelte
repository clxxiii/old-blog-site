<script>
  import Header from '$lib/Header.svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import '../app.css';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    });
  }
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    background-color: var(--bg2);
    max-width: 1024px;
    margin: 0px auto;
    box-sizing: border-box;
  }
</style>
