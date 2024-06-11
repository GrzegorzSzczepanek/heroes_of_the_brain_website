<script>
  import { onMount, onDestroy } from "svelte";
  import Fa from 'svelte-fa';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import SideMenu from "./SideMenu.svelte";
  import "../../app.css";

  export let logoSrc = "https://knneuron.pwr.edu.pl/_next/image?url=http%3A%2F%2F127.0.0.1%3A1337%2Fuploads%2Fkn_neuron_logo_c3c1075271.png&w=640&q=75";
  export let navItems = [
    { name: "Zaproszenie", href: "#zaproszenie" },
    { name: "Tematyka Hackatonu", href: "#tematyka-Hackatonu" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" }
  ];

  let isScrolled = false;
  let showMenu = false;

  const toggleMenu = (event) => {
    event.stopPropagation();
    showMenu = !showMenu;
  };

  const closeMenu = () => {
    showMenu = false;
  };

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 0;
    };

    const handleClickOutside = (event) => {
      const menu = document.querySelector(".side-menu");
      const button = document.querySelector(".mobile-menu-button");
      if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("closeMenu", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("closeMenu", closeMenu);
    };
  });
</script>

<style>
  .bg-semi-transparent {
    background-color: rgba(44, 31, 75, 0.7); /* Adjust the transparency */
    --tw-backdrop-blur: blur(24px);
    backdrop-filter: var(--tw-backdrop-blur);
  }
</style>

<header class="{isScrolled ?  'bg-black bg-semi-transparent' : 'bg-transparent' } text-white py-4 fixed top-0 left-0 right-0 z-50 transition duration-300">
  <div class="container mx-auto flex justify-between items-center px-4 md:px-8">
    <div class="flex items-center">
      <img src={logoSrc} alt="Student Cybersym SCS Logo" class="h-12 mr-4" />
      <div class="text-left">
        <div class="text-xl font-bold">KN Neuron</div>
        <div class="text-sm">PWR</div>
      </div>
    </div>
    <div class="hidden md:flex items-center space-x-6">
      <nav class="space-x-6">
        {#each navItems as item}
          <a href={item.href} class="hover:underline">{item.name}</a>
        {/each}
      </nav>
    </div>
    <div class="md:hidden flex items-center">
      <button class="outline-none mobile-menu-button" on:click={toggleMenu}>
        <Fa icon={faBars} size="1.6x" color="#8f9a9c"/>
      </button>
    </div>
  </div>

</header>
{#if showMenu}
<SideMenu {navItems} />
{/if}
