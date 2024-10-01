<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Carousel from '$lib/components/Carousel.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import CategorySection from '$lib/components/CategorySection.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import HackatonInfoSection from '$lib/components/HackatonInfoSection.svelte';
	import Agenda from '$lib/components/Agenda.svelte';
	import Partners from '$lib/components/Partners.svelte';
	import Faq from '$lib/components/Faq.svelte';
  </script>

  <svelte:head>
	<title>Home</title>
	<meta name="description" content="Heroes of The Brain BCI Hackaton" />
	<meta name="keywords" content="brain, bci, hackaton, heroes, brainaccess, solet, pwr, politechnika wroclawska" />
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
	<!-- <Carousel /> -->
	<ContactSection />
	<Faq />
  </div>
  