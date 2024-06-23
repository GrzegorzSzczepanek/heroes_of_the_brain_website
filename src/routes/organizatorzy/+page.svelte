<script>
	import '../../app.css';
  import OrganizationLandingPage from '$lib/components/OrganizationLandingPage.svelte';
  import TeamSection from '$lib/components/Team.svelte';
  import { fade } from 'svelte/transition';


</script>

<div transition:fade={{ duration: 400 }}>
  <OrganizationLandingPage />
  <!-- <TeamSection /> -->
</div>
