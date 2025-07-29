<script>
  import "../../../app.css";
  import OrganizationLandingPage from "$lib/components/OrganizationLandingPage.svelte";
  import TeamIntro from "$lib/components/TeamIntro.svelte";
  import TeamSection from "$lib/components/Team.svelte";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Organisers</title>
  <meta name="description" content="Heroes of The Brain BCI Hackaton" />
  <meta
    name="keywords"
    content="brain, bci, hackaton, heroes, brainaccess, solet, pwr, politechnika wroclawska"
  />
  <meta name="author" content="Grzegorz Szczepanek" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div transition:fade={{ duration: 400 }}>
  <TeamIntro />
  <OrganizationLandingPage />
</div>
