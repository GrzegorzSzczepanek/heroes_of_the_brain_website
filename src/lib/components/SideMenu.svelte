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
  class="side-menu"
  id="side-menu"
  in:fly={{ x: 300, delay: 0, duration: 300 }}
  out:fly={{ x: 300, duration: 300 }}
>
  <nav>
    {#each navItems as item}
      <a href={item.href} on:click={handleItemClick}>{item.name}</a>
    {/each}
  </nav>
</div>

<style>
  .side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: rgba(44, 31, 75, 0.9);
    color: white;
    /* padding: 20px; */
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .side-menu nav a {
    display: block;
    padding: 20px;
    font-size: 1.25rem;
    color: white;
    text-align: center;
    width: 100;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    border-bottom: solid 1px white;
    font-weight: bold;
  }

  .side-menu nav a:hover {
    /* text-decoration: underline; */
    background-color: #751fc6 ;
    color: white;
  }
</style>
