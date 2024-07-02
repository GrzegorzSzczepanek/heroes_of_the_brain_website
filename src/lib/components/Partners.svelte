<script>
  import LogoTiles from "./LogoTiles.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define text content for both languages
  const partnersPL = [
    { category: "PARTNER", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "REGION GOSPODARZ", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "PARTNERZY WIEDZY", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "PARTNERZY UNIWERSYTETU", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "MEDIA PARTNERZY", logos: ["https://picsum.photos/200?random=17", "https://picsum.photos/200?random=17"] },
    { category: "Ci fajniejsi sponsorzy", logos: ["https://picsum.photos/200?random=16", "https://picsum.photos/200?random=1657", "https://picsum.photos/200?random=147", "https://picsum.photos/200?random=171"] },
    { category: "PARTNER SIECIOWY", logos: ["https://picsum.photos/200?random=137"] }
  ];

  const partnersEN = [
    { category: "PARTNER", logos: ["https://picsum.photos/200?random=1237"] },
    // { category: "HOST REGION", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "KNOWLEDGE PARTNERS", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "UNIVERSITY PARTNERS", logos: ["https://picsum.photos/200?random=17"] },
    // { category: "MEDIA PARTNERS", logos: ["https://picsum.photos/200?random=17", "https://picsum.photos/200?random=17"] },
    { category: "The Cooler Sponsors", logos: ["https://picsum.photos/200?random=1347", "https://picsum.photos/200?random=147", "https://picsum.photos/200?random=147", "https://picsum.photos/200?random=1427"] },
    { category: "NETWORK PARTNER", logos: ["https://picsum.photos/200?random=1547"] }
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
