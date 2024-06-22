<script>
  import TeamSection from '$lib/components/TeamSection.svelte';
  import { fade } from 'svelte/transition';


</script>

<div transition:fade={{ duration: 400 }} class="p-4  min-h-screen text-white">
  <TeamSection />
</div>
