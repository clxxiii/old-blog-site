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
    justify-content: flex-end;
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
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Fredoka One';
    font-size: 1.5em;
    font-weight: bold;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  ul a {
    color: var(--text-color);
    text-decoration: none;
  }

  ul li {
    margin-left: 70px;
    text-align: center;
    width: 100px;
  }

  ul li:hover::after {
    left: -5%;
    width: 110%;
  }

  ul li:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 5px;
    border-radius: 5px;
    background-color: var(--light-text-color);
    height: 5px;
    transition: 0.4s;
  }
  li {
    position: relative;
    height: 100%;
  }
</style>
