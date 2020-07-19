<script>
  export let component;
</script>

<main class="content flex">
  <section class="w-70 ma2">
    <slot />
  </section>
  <section>
    <svelte:component this={component} />
  </section>
</main>
