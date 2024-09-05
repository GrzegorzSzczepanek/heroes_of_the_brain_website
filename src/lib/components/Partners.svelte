<script>
  import LogoTiles from "./LogoTiles.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define text content for both languages
  const partnersPL = [
    // { category: "PARTNER", logos: ["/images/logos/brainaccess1.jpg"] },
    { category: "SPONSORZY STRATEGICZNI", logos: ["/images/logos/brainaccess2.png"] },
    
    { category: "POZOSTALI SPONSORZY", logos: ["/images/logos/solet3.png"] }
  ];
  let slides = [
    "/images/logos/brainaccess1.jpg",
    "/images/logos/brainaccess3.png",
    "/images/logos/solet3.png",

    "/images/logos/brainaccess1.jpg",
    "/images/logos/brainaccess3.png",
    "/images/logos/solet3.png",

    "/images/logos/brainaccess1.jpg",
    "/images/logos/brainaccess3.png",
    "/images/logos/solet3.png",
  ];
  const partnersEN = [
    // { category: "PARTNER", logos: ["/images/logos/brainaccess1.jpg"] },
    { category: "STRATEGIC SPONSORS", logos: ["/images/logos/brainaccess2.png"] },
    { category: "OTHER SPONSORS", logos: ["/images/logos/solet3.png"] }
  ];

  // Derived store to get the current content based on the language
  const partners = derived(isPolish, $isPolish => $isPolish ? partnersPL : partnersEN);

  let currentPartners;

  // Subscribe to the derived store to update the local variables
  partners.subscribe(value => {
    currentPartners = value;
  });
</script>

<section class="text-center text-white bg-gray-900 py-20 px-4">
  <UnderlinedHeader title={$isPolish ? "Sponsorzy" : "Sponsors"} />
  {#each currentPartners as partner}
    <div class="mb-12" data-aos="fade-right">
      <h2 class="text-xl font-semibold mb-4">{partner.category}</h2>
      <div class="flex flex-wrap justify-center gap-4">
        {#each partner.logos as logo}
          <LogoTiles {logo} {partner} />
        {/each}
      </div>
    </div>
  {/each}
</section>
