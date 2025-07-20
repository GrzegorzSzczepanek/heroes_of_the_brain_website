<script>
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

{#if $page.url.pathname !== '/test'}
  <Header />
{/if}

<main class="flex flex-grow min-w-full">
  <slot />
</main>

<Footer />