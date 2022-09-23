<script>
  import { page } from '$app/stores';
  import logo from '../assets/blog-icon.svg';
</script>

<header>
  <div class="corner">
    <a href="/">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.url.pathname === '/posts'}>
        <a sveltekit:prefetch href="/posts">Posts</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
  }

  .corner {
    position: absolute;
    margin: 10px;
    top: 0;
    left: 0;
  }

  .corner img {
    width: 100px;
  }
  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Megrim';
    font-weight: bold;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }
  li {
    position: relative;
    height: 100%;
  }
</style>
