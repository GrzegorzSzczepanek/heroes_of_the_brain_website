<script>
  import { onMount } from "svelte";
  import "../../app.css";

  export let logoSrc = "https://knneuron.pwr.edu.pl/_next/image?url=http%3A%2F%2F127.0.0.1%3A1337%2Fuploads%2Fkn_neuron_logo_c3c1075271.png&w=640&q=75";
  export let placeholderLogo = "https://lh3.googleusercontent.com/proxy/2dC-3icCb85ezKNQFuBuz6xxGBzY-t19aVBxFnZDfSVhvXaNVfWsayGiZAxmCj_lmw_JQsN1Y778Es6bnrWqITMLtcFAOtmHTxoVsPQ4pHjhywVCyf_lLqd7ezylycnstSqWJav2QOmleAWyEcG-sopd13_6k0lXBQ";

  export let navItems = [
    { name: "Zaproszenie", href: "#zaproszenie" },
    { name: "Tematyka Hackatonu", href: "#tematyka-Hackatonu" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" }
  ];

  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        isScrolled = true;
      } else {
        isScrolled = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<style>
  .bg-semi-transparent {
    background-color: rgba(44, 31, 75, 0.7); /* Adjust the transparency */
    --tw-backdrop-blur: blur(24px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  }
</style>

<header class="{isScrolled ?  'bg-black bg-semi-transparent' : 'bg-transparent' } text-white py-4 fixed top-0 left-0 right-0 z-50 transition duration-300">
  <div class="container mx-auto flex justify-between items-center px-4">
    <div class="flex items-center">
      <img src={logoSrc} alt="Student Cybersym SCS Logo" class="h-12 mr-4" />
      <div class="text-left">
        <div class="text-xl font-bold">KN Neuron</div>
        <div class="text-sm">PWR</div>
      </div>
    </div>
    <div class="flex items-center">
      <!-- <img src={placeholderLogo} alt="Neuron Logo" class="h-12 mr-8" /> -->
      <nav class="space-x-6">
        {#each navItems as item}
          <a href={item.href} class="hover:underline">{item.name}</a>
        {/each}
      </nav>
    </div>
  </div>
</header>
