<script>
    import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';
  </script>
  
  <Header />
  
  
  <main class="pt-16">
    <slot></slot>
  </main>

  <Footer />