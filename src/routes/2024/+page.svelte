<script>
	import '../../app.css';
	import { fade } from 'svelte/transition';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import CategorySection from '$lib/components/CategorySection.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import HackatonInfoSection from '$lib/components/HackatonInfoSection.svelte';
	import Agenda from '$lib/components/Agenda.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Faq from '$lib/components/Faq.svelte';
  import UnderlinedHeader from '$lib/components/UnderlinedHeader.svelte';
  import JoinUsSection from '$lib/components/JoinUsSection.svelte';
  import { derived } from 'svelte/store';
  import { isPolish } from '../../stores/languageStore';
	import { onMount } from 'svelte';
   
   onMount(() => {
      document.title = "Heroes of The Brain";
   });

	const contentPL = {
    jury: "Jury",
    ourTeam: "Sekcje naszego zespołu",
    idk: "Weź udział w wydarzeniu"
  };

  const contentEN = {
    jury: "Jury",
    ourTeam: "Our Team",
    idk: "Take part in the event"
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

  content.subscribe(value => {
    currentContent = value;
  });
  </script>

  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Heroes of The Brain BCI Hackaton" />
	<meta name="keywords" content="brain, bci, hackaton, heroes, brainaccess, solet, pwr, politechnika wroclawska heroes of the brain heroesofthebrain politechnika hackaton neurohackaton" />
	<meta name="author" content="Grzegorz Szczepanek" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="index, follow" />
	
  </svelte:head>
  
  
  <div transition:fade={{ duration: 400 }}>
	<LandingPage />
	<HackatonInfoSection />
	<Agenda />
	<CategorySection />
	<Partners />
	<ContactSection />
	<Faq />

    <!-- <div id="zapisy" class="flex flex-col align-middle justify-center text-center pb-16">
		<UnderlinedHeader title={currentContent.idk} />
		<JoinUsSection />
	  </div> -->
  </div>
  