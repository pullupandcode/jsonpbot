<script>
  export let name;
  import { run } from "./lib/utils";
  import Header from "./Header.svelte";
  import MainLayout from "./MainLayout.svelte";
  import Footer from "./Footer.svelte";
</script>

<!-- <style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style> -->
<Header user={{ name: 'test' }} />
<MainLayout component={Footer}>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</MainLayout>
