<script>
  import LogoTiles from "./LogoTiles.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  const partnersPL = [
    { category: "SPONSORZY STRATEGICZNI", logos: ["/images/coig.svg", "/images/brainaccess.png"]},
    { category: "POZOSTALI SPONSORZY", logos: ["/images/stosowana.png", "/images/adescom.png", "/images/solet.png"]},
    { category: "PARTNERZY MEDIALNI", logos: ["/images/radioluz.png", "/images/wit.svg"] },
    { category: "PATRONAT HONOROWY REKTORA", logos: ["/images/logo_pwr.png"] }
  ];

  const partnersEN = [
    { category: "STRATEGIC SPONSORS",  logos: ["/images/coig.svg", "/images/brainaccess.png"]},
    { category: "OTHER SPONSORS", logos: ["/images/stosowana.png", "/images/adescom.png", "/images/solet.png"] },
    { category: "MEDIA PARTNERS", logos: ["/images/radioluz.png", "/images/wit.svg"] },
    { category: "HONORARY PATRONAGE OF THE RECTOR", logos: ["/images/pwr_logo.svg"] }
  ];


  const partners = derived(isPolish, $isPolish => $isPolish ? partnersPL : partnersEN);

  let currentPartners;

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
          <a href={partner.link} target="_blank">
            <LogoTiles {logo} {partner} />
          </a>
        {/each}
      </div>
    </div>
  {/each}
</section>

