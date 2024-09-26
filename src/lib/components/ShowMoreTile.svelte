<script>
    export let heading;
    export let text;
    import { isPolish } from '../../stores/languageStore';
    import { derived } from 'svelte/store';
  
    let isExpanded = false;
  
    const showMoreText = derived(isPolish, $isPolish => $isPolish ? "Rozwiń" : "Show more");
    const showLessText = derived(isPolish, $isPolish => $isPolish ? "Zwiń" : "Show less");
  
    function toggle() {
      isExpanded = !isExpanded;
    }
  </script>
  
  <div class="flex flex-col justify-start bg-gray-800 rounded-lg p-6 w-full md:w-1/3 text-left h-full">
    <h2 class="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
    <p class="text-sm md:text-base text-gray-400">
      {#if isExpanded}
        {text}
      {:else}
        {text.slice(0, 200)}...
      {/if}
    </p>
    <button class="mt-4 text-purple-400 underline self-start" on:click={toggle}>
      {isExpanded ? $showLessText : $showMoreText}
    </button>
  </div>
  
  <style>
    button {
      cursor: pointer;
    }
  </style>
  