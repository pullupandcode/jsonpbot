<script lang="typescript">
  import { UserTest } from "../types";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import MainLayout from "../MainLayout.svelte";
  export let user: UserTest;
</script>

<Header user={{ name: 'test' }} />
<MainLayout>
  <h1>Dashboard</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</MainLayout>
<Footer />
