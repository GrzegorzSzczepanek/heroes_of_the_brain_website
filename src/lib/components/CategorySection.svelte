<script>
  import Category from "./Category.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";

  let categories = [
      { title: "Artificial Intelligence", prize: "3,000 PLN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet porttitor. Aenean eget pellentesque augue, in facilisis est. Aliquam erat volutpat. Curabitur faucibus lacinia quam, id fermentum sem maximus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean fringilla eros urna, non porttitor mauris pulvinar a. Aliquam placerat id velit non tempor. Quisque lacinia felis in blandit consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet porttitor. Aenean eget pellentesque augue, in facilisis est. Aliquam erat volutpat. Curabitur faucibus lacinia quam, id fermentum sem maximus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean fringilla eros urna, non porttitor mauris pulvinar a. Aliquam placerat id velit non tempor. Quisque lacinia felis in blandit consequat." },
      { title: "Education", prize: "3,000 PLN", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum imperdiet porttitor. Aenean eget pellentesque augue, in facilisis est. Aliquam erat volutpat. Curabitur faucibus lacinia quam, id fermentum sem maximus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean fringilla eros urna, non porttitor mauris pulvinar a. Aliquam placerat id velit non tempor. Quisque lacinia felis in blandit consequat." },

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
