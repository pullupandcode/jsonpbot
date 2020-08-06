<script>
  import { run } from "../../lib/utils";
  import Header from "../../components/Header.svelte";
  import MainLayout from "../../MainLayout.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<Header user={{ name: 'test' }} />
<MainLayout component={Footer}>
  <h1>Login</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</MainLayout>
<Footer />
