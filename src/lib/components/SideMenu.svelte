<script>
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  export let navItems;

  const handleItemClick = () => {
    const event = new CustomEvent("closeMenu", {
      detail: {},
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    window.dispatchEvent(event);
  };
</script>

<div
  class="fixed top-0 right-0 w-[300px] h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white shadow-2xl z-[1000] backdrop-blur-md"
  id="side-menu"
  in:fly={{ x: 320, delay: 0, duration: 400, easing: backOut }}
  out:fly={{ x: 320, duration: 300 }}
>
  <!-- Neural network decoration -->
  <div class="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
    <svg class="w-full h-full" viewBox="0 0 500 800">
      <!-- Neural network nodes and connections -->
      <circle cx="50" cy="100" r="3" fill="white" />
      <circle cx="180" cy="150" r="3" fill="white" />
      <circle cx="120" cy="250" r="3" fill="white" />
      <circle cx="220" cy="320" r="3" fill="white" />
      <circle cx="80" cy="400" r="3" fill="white" />
      <circle cx="240" cy="480" r="3" fill="white" />
      <circle cx="160" cy="560" r="3" fill="white" />
      <circle cx="70" cy="640" r="3" fill="white" />
      
      <line x1="50" y1="100" x2="180" y2="150" stroke="white" opacity="0.6" />
      <line x1="180" y1="150" x2="120" y2="250" stroke="white" opacity="0.6" />
      <line x1="120" y1="250" x2="220" y2="320" stroke="white" opacity="0.6" />
      <line x1="220" y1="320" x2="80" y2="400" stroke="white" opacity="0.6" />
      <line x1="80" y1="400" x2="240" y2="480" stroke="white" opacity="0.6" />
      <line x1="240" y1="480" x2="160" y2="560" stroke="white" opacity="0.6" />
      <line x1="160" y1="560" x2="70" y2="640" stroke="white" opacity="0.6" />
    </svg>
  </div>
  
  <!-- Header -->
  <div class="pt-8 px-6 flex justify-between items-center">
    <div class="text-xl font-bold tracking-tight">Menu</div>
    <button
      class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
      aria-label="Close menu"
      on:click={handleItemClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  
  <div class="w-2/3 h-[2px] mx-auto my-4 bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
  
  <!-- Navigation -->
  <nav class="mt-4 px-4">
    {#each navItems as item, i}
      <div in:fade={{ delay: 150 + i * 75, duration: 150 }}>
        <a
          href={item.href}
          on:click={handleItemClick}
          class="group flex items-center px-4 py-3.5 my-2 rounded-xl text-lg font-medium transition-all duration-200 hover:bg-white/10 hover:translate-x-1"
        >
          {#if item.icon}
            <span class="mr-3 text-purple-300 group-hover:text-white transition-colors">
              <svelte:component this={item.icon} />
            </span>
          {:else}
            <span class="mr-3 w-5 h-5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:from-purple-300 group-hover:to-indigo-300"></span>
          {/if}
          <span>{item.name}</span>
        </a>
      </div>
    {/each}
  </nav>
  
  <!-- Footer -->
  <div class="absolute bottom-8 left-0 w-full px-6">
    <div class="py-3 px-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-center text-sm">
      <span class="text-purple-200">Heroes of the Brain</span>
      <div class="mt-1 text-xs text-white/60">©2025</div>
    </div>
  </div>
</div>