<script>
  import Category from "./Category.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";

  let categories = [
      { title: "Artificial Intelligence", prize: "3,000 PLN" },
      { title: "Education", prize: "3,000 PLN" },

  ];
</script>



<section class="flex flex-col items-center justify-center gap-6 py-10 bg-gray-900 text-white" id="categories">

  <UnderlinedHeader title="Kategorie" />
  <section class="flex flex-wrap justify-center gap-6 py-10">
    {#each categories as category}
      <Category {category} />
    {/each}
  </section>
  
</section>
