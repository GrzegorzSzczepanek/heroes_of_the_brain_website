<script>
  import { derived } from "svelte/store";
  export let category;
  import { isPolish } from "../../stores/languageStore";

  let isExpanded = false;

  const showMoreText = derived(isPolish, $isPolish => $isPolish ? "Rozwiń" : "Show more");
  const showLessText = derived(isPolish, $isPolish => $isPolish ? "Zwiń" : "Show less");

  function toggle() {
    isExpanded = !isExpanded;
  }
</script>

<div class="bg-gray-800 border border-purple-600 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 text-white transform transition-transform duration-500 hover:scale-105 px-5 mx-8">
  <div class="px-2 bg-purple-600 text-center text-lg md:text-xl lg:text-2xl font-bold py-2 rounded-t-md">
    {category.title}
  </div>
  <div class="bg-teal-700 text-center text-sm md:text-base lg:text-lg font-bold py-1 rounded-b-md mb-4">
    OPEN TASKS
  </div>
  
  <p class="text-sm md:text-base lg:text-lg text-gray-400">
    {#if isExpanded}
      {category.description}
    {:else}
      {category.description.slice(0, 100)}...
    {/if}
  </p>

  <button class="mt-4 text-purple-400 underline" on:click={toggle}>
    {isExpanded ? $showLessText : $showMoreText}
  </button>
</div>