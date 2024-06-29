<script>
  import LogoTiles from "./LogoTiles.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define text content for both languages
  const partnersPL = [
    { category: "PARTNER", logos: ["https://via.placeholder.com/150"] },
    // { category: "REGION GOSPODARZ", logos: ["https://via.placeholder.com/150"] },
    // { category: "PARTNERZY WIEDZY", logos: ["https://via.placeholder.com/150"] },
    // { category: "PARTNERZY UNIWERSYTETU", logos: ["https://via.placeholder.com/150"] },
    // { category: "MEDIA PARTNERZY", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    { category: "Ci fajniejsi sponsorzy", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    { category: "PARTNER SIECIOWY", logos: ["https://via.placeholder.com/150"] }
  ];

  const partnersEN = [
    { category: "PARTNER", logos: ["https://via.placeholder.com/150"] },
    // { category: "HOST REGION", logos: ["https://via.placeholder.com/150"] },
    // { category: "KNOWLEDGE PARTNERS", logos: ["https://via.placeholder.com/150"] },
    // { category: "UNIVERSITY PARTNERS", logos: ["https://via.placeholder.com/150"] },
    // { category: "MEDIA PARTNERS", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    { category: "The Cooler Sponsors", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    { category: "NETWORK PARTNER", logos: ["https://via.placeholder.com/150"] }
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
