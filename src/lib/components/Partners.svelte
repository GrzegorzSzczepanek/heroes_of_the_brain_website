<script>
  import LogoTiles from "./LogoTiles.svelte";
import UnderlinedHeader from "./UnderlinedHeader.svelte";

    let partners = [
    //   { category: "PARTNER", logos: ["https://via.placeholder.com/150"] },
    //   { category: "HOST REGION", logos: ["https://via.placeholder.com/150"] },
    //   { category: "KNOWLEDGE PARTNERS", logos: ["https://via.placeholder.com/150"] },
      { category: "UNIVERSITY PARTNERS", logos: ["https://via.placeholder.com/150"] },
    //   { category: "MEDIA PARTNERS", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
      { category: "Ci fajniejsi sponsorzy", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    //   { category: "NETWORK PARTNER", logos: ["https://via.placeholder.com/150"] }
    ];
  </script>
  

  
  <section class="text-center text-white bg-gray-900 py-20 px-4">
    <UnderlinedHeader title="Sponsorzy" />
    {#each partners as partner}
      <div class="mb-12" data-aos="fade-right">
        <h2 class="text-xl font-semibold mb-4">{partner.category}</h2>
        <div class="flex flex-wrap justify-center gap-4">
          {#each partner.logos as logo}
            <LogoTiles logo={logo} {partner} />
          {/each}
        </div>
      </div>
    {/each}
  </section>
  