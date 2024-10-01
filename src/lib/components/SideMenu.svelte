<script>
  import { fly } from "svelte/transition";
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
  class="fixed top-0 right-0 w-[250px] h-full bg-gradient-to-b from-purple-900/90 to-purple-800/90 text-white shadow-lg transition-transform duration-300 ease-in-out z-[1000]"
  id="side-menu"
  in:fly={{ x: 300, delay: 0, duration: 300 }}
  out:fly={{ x: 300, duration: 300 }}
>
  <button
    class="absolute top-4 right-4 text-white focus:outline-none text-3xl"
    on:click={handleItemClick}
  >
    &times;
  </button>
  <nav class="mt-16">
    {#each navItems as item}
      <a
        href={item.href}
        on:click={handleItemClick}
        class="block px-5 py-3 text-xl text-white text-left font-bold border-b border-white transition-all duration-200 ease-in-out hover:bg-purple-600"
      >
        {item.name}
      </a>
    {/each}
  </nav>
</div>
