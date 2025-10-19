<script>
  import { derived } from "svelte/store";
  import Category from "./Category.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from "../../stores/languageStore";

  // Accept categories as props
  export let categoriesPL = [];
  export let categoriesEN = [];

  let categories = derived(isPolish, ($isPolish) =>
    $isPolish ? categoriesPL : categoriesEN
  );

  let currentCategories;

  categories.subscribe((value) => {
    currentCategories = value;
  });
</script>

<section
  class="flex flex-col items-center justify-center gap-6 py-10 bg-gray-900 text-white"
  id="categories"
>
  <UnderlinedHeader title={$isPolish ? "Kategorie" : "Categories"} />

  <section class="flex flex-wrap items-start justify-center gap-6 py-10">
    {#each currentCategories as category}
      <Category {category} />
    {/each}
  </section>
</section>