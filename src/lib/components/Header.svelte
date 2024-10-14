<script>
  import { onMount, onDestroy } from "svelte";
  import { page } from "$app/stores";
  import Fa from 'svelte-fa';
  import { faBars } from '@fortawesome/free-solid-svg-icons';
  import SideMenu from "./SideMenu.svelte";
  import "../../app.css";
  import { isPolish } from '../../stores/languageStore'; 

 
  export let logoSrc = "/images/hackaton_logo.webp";

  let navItemsMainPL = [
    { name: "Tematyka Hackatonu", href: "#HackatonInfo" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#contact" },
    { name: "Zapisy", href: "#zapisy" },
    { name: "Organizatorzy", href: "/organizatorzy" },
  ];

  let navItemsMainEN = [
    { name: "Hackathon Topics", href: "#HackatonInfo" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Enter Hackaton", href: "#zapisy" },
    { name: "Organizers", href: "/organizatorzy" }
  ];

  let navItemsOrganizatorzyPL = [
    { name: "O nas", href: "#about-us" },
    { name: "Zespół", href: "#team" },
    { name: "Współpraca", href: "#collaboration" }
  ];

  let navItemsOrganizatorzyEN = [
    { name: "About Us", href: "#about-us" },
    { name: "Team", href: "#team" },
    { name: "Collaboration", href: "#collaboration" }
  ];

  let navItems = navItemsMainPL;
  $: $isPolish ? navItems = $page.url.pathname === '/organizatorzy' ? navItemsOrganizatorzyPL : navItemsMainPL
              : navItems = $page.url.pathname === '/organizatorzy' ? navItemsOrganizatorzyEN : navItemsMainEN;

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
    background-color: rgba(44, 31, 75, 0.7);
    --tw-backdrop-blur: blur(24px);
    backdrop-filter: var(--tw-backdrop-blur);
  }
</style>

<header class="{isScrolled ? 'bg-black bg-semi-transparent' : 'bg-transparent'} text-white  fixed top-0 left-0 right-0 z-50 transition duration-300 py-2 md:py-6">
  <div class="container mx-auto flex justify-between items-center px-4 md:px-8">
    <div class="flex items-center">
      <a href="/"><img src={logoSrc} alt="hackaton logo" class="h-12 mr-4" /></a>
      <div class="text-left">
        <div class="text-xl font-bold">KN Neuron</div>
        <div class="text-sm">PWR</div>
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <nav class="hidden md:flex items-center space-x-6">
        {#each navItems as item}
          {#if item.name === "Zapisy" || item.name === "Enter Hackaton"}
            <a href={item.href} class="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-all">{item.name}</a>
          {:else}
            <a href={item.href} class="hover:underline transition-all">{item.name}</a>
          {/if}
        {/each}
      </nav>
      
      <button on:click={() => isPolish.set(true)} class="p-2">
        <img src="/images/icons/pl.svg" alt="Polish Translation" class="h-6" />
      </button>
      <button on:click={() => isPolish.set(false)} class="p-2">
        <img src="/images/icons/gb.svg" alt="English Translation" class="h-6" />
      </button>      
      <div class="md:hidden flex items-center">
        <button 
          class="outline-none mobile-menu-button" 
          on:click={toggleMenu} 
          aria-expanded={showMenu} 
          aria-controls="side-menu" 
          aria-label="Toggle menu"
        >
          <Fa icon={faBars} size="1.6x" color="#8f9a9c"/>
        </button>
      </div>
    </div>
  </div>
</header>
<div>
  {#if showMenu}
    <SideMenu {navItems} />
  {/if}
</div>