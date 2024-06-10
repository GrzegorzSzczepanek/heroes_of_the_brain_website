<script>
	import '../app.css';
	import Carousel from '$lib/components/Carousel.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import CategorySection from '$lib/components/CategorySection.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import HackatonInfoSection from '$lib/components/HackatonInfoSection.svelte';
	import Agenda from '$lib/components/Agenda.svelte';
	import Partners from '$lib/components/Partners.svelte';

</script>


<LandingPage />
<HackatonInfoSection />
<Agenda />
<CategorySection />
<Partners />
<Carousel />
<ContactSection />