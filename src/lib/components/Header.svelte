<script>
  import { onMount, afterUpdate } from "svelte";
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";
  import Fa from "svelte-fa";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import SideMenu from "./SideMenu.svelte";
  import "../../app.css";
  import { isPolish } from "../../stores/languageStore";

  export let logoSrc = "/images/logo_no_background.png";

  // Navigation items for specific year editions
  let navItemsMainPL = [
    { name: "Tematyka Hackatonu", href: "#HackatonInfo" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#contact" },
    { name: "Zapisy", href: "#zapisy" },
    // Organizers link removed for 2025 as it's not available yet
  ];

  let navItemsMainEN = [
    { name: "Hackathon Topics", href: "#HackatonInfo" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Apply", href: "#zapisy" },
    // Organizers link removed for 2025 as it's not available yet
  ];

  // For 2024 edition, we keep the organizers link
  let navItemsMain2024PL = [
    { name: "Tematyka Hackatonu", href: "#HackatonInfo" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#contact" },
    // { name: "Zapisy", href: "#zapisy" },
    { name: "Organizatorzy", href: "/2024/organisers" },
  ];

  let navItemsMain2024EN = [
    { name: "Hackathon Topics", href: "#HackatonInfo" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    // { name: "Apply", href: "#zapisy" },
    { name: "Organizers", href: "/2024/organisers" },
  ];

  let navItemsOrganizatorzyPL = [
    { name: "O nas", href: "#about-us" },
    { name: "Zespół", href: "#team" },
  ];

  let navItemsOrganizatorzyEN = [
    { name: "About Us", href: "#about-us" },
    { name: "Team", href: "#team" },
  ];

  let navItems = [];
  let isRootRoute = false;
  let currentYear = "";

  // Update navigation items and set the correct organizers link based on the current route
  $: {
    isRootRoute = $page.url.pathname === "/";

    // Check if we're in a year-specific route
    if ($page.url.pathname.startsWith("/2025")) {
      currentYear = "2025";
    } else if ($page.url.pathname.startsWith("/2024")) {
      currentYear = "2024";
    } else {
      currentYear = "";
    }

    // Only show navItems if not on root route
    if (!isRootRoute) {
      // Set the appropriate navigation items based on route and language
      if ($page.url.pathname.includes("/organizatorzy")) {
        navItems = $isPolish
          ? navItemsOrganizatorzyPL
          : navItemsOrganizatorzyEN;
      } else if (currentYear === "2024") {
        // For 2024, use the navigation with organizers
        navItems = $isPolish ? navItemsMain2024PL : navItemsMain2024EN;
      } else {
        // For 2025, use the navigation without organizers
        navItems = $isPolish ? navItemsMainPL : navItemsMainEN;
      }
    } else {
      // Empty navItems when on root route
      navItems = [];
    }
  }

  let isScrolled = false;
  let showMenu = false;
  let activeLink = "";
  let headerElement;
  let headerHeight = 0;

  const toggleMenu = (event) => {
    event.stopPropagation();
    showMenu = !showMenu;
  };

  const closeMenu = () => {
    showMenu = false;
  };

  const setActiveLink = (href) => {
    activeLink = href;
  };

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10; // Use a smaller threshold to detect scrolling sooner

      // Handle active link based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = "#" + section.getAttribute("id");
        }
      });

      if (currentSection) {
        activeLink = currentSection;
      }
    };

    const handleClickOutside = (event) => {
      const menu = document.querySelector(".side-menu");
      const button = document.querySelector(".mobile-menu-button");
      if (
        menu &&
        !menu.contains(event.target) &&
        !button?.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (headerElement) {
      headerHeight = headerElement.offsetHeight;
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("closeMenu", closeMenu);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("closeMenu", closeMenu);
    };
  });

  afterUpdate(() => {
    if (headerElement) {
      headerHeight = headerElement.offsetHeight;
    }
  });
</script>

<header
  class={isScrolled ? "header-backdrop header-scrolled" : "header-transparent"}
  class:header-scrolled={isScrolled}
  bind:this={headerElement}
>
  <!-- Neural network decoration in background -->
  <div class="neural-decoration">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="50" r="3" fill="white" />
      <circle cx="300" cy="30" r="3" fill="white" />
      <circle cx="500" cy="70" r="3" fill="white" />
      <circle cx="700" cy="40" r="3" fill="white" />
      <circle cx="900" cy="60" r="3" fill="white" />
      <circle cx="1100" cy="30" r="3" fill="white" />
      <circle cx="1300" cy="70" r="3" fill="white" />

      <line
        x1="100"
        y1="50"
        x2="300"
        y2="30"
        stroke="white"
        stroke-width="1"
        opacity="0.5"
      />
      <line
        x1="300"
        y1="30"
        x2="500"
        y2="70"
        stroke="white"
        stroke-width="1"
        opacity="0.5"
      />
      <line
        x1="500"
        y1="70"
        x2="700"
        y2="40"
        stroke="white"
        stroke-width="1"
        opacity="0.5"
      />
      <line
        x1="700"
        y1="40"
        x2="900"
        y2="60"
        stroke="white"
        stroke-width="1"
        opacity="0.5"
      />
      <line
        x1="900"
        y1="60"
        x2="1100"
        y2="30"
        stroke="white"
        stroke-width="1"
        opacity="0.5"
      />
      <line
        x1="1100"
        y1="30"
        x2="1300"
        y2="70"
        stroke="white"
        stroke-width="1"
        opacity="0.5"
      />
    </svg>
  </div>

  <div class="container mx-auto header-content">
    <div class="flex justify-between items-center px-4 md:px-8">
      <!-- Logo and organization name -->
      <div class="flex items-center">
        <a href="/" class="flex items-center group">
          <div
            class="relative overflow-hidden rounded-full bg-indigo-900/30 p-1 mr-3"
          >
            <img
              src={logoSrc}
              alt="Heroes of the Brain logo"
              class="h-10 md:h-12 brain-logo-animate group-hover:scale-110"
            />
          </div>
          <div class="text-left">
            <div class="org-name text-xl md:text-2xl">KN Neuron</div>
            <div class="org-subtitle text-xs md:text-sm tracking-wider">
              PWR
            </div>
          </div>
        </a>
      </div>

      <!-- Navigation and language controls -->
      <div class="flex items-center space-x-6">
        <!-- Desktop navigation -->
        <nav class="hidden md:flex items-center space-x-3">
          {#if isRootRoute}
            <!-- Show only edition buttons when on root route -->
            <a href="/2025" class="edition-button edition-primary">
              {$isPolish ? "Edycja 2025" : "2025 Edition"}
            </a>
            <a href="/2024" class="edition-button edition-secondary">
              {$isPolish ? "Edycja 2024" : "2024 Edition"}
            </a>
          {:else}
            <!-- Show regular navigation for specific year routes -->
            {#each navItems as item}
              {#if item.name === "Zapisy" || item.name === "Apply"}
                <a
                  href={item.href}
                  class="cta-button text-white"
                  on:click={() => setActiveLink(item.href)}
                >
                  {item.name}
                </a>
              {:else}
                <a
                  href={item.href}
                  class="nav-link"
                  class:active={activeLink === item.href}
                  on:click={() => setActiveLink(item.href)}
                >
                  {item.name}
                </a>
              {/if}
            {/each}
          {/if}
        </nav>

        <!-- Language toggle -->
        <div class="flex items-center space-x-2">
          <button
            on:click={() => isPolish.set(true)}
            class="lang-button p-1.5"
            class:active={$isPolish}
            aria-label="Polski"
          >
            <img src="/images/icons/pl.svg" alt="Polski" class="h-5 md:h-6" />
          </button>
          <button
            on:click={() => isPolish.set(false)}
            class="lang-button p-1.5"
            class:active={!$isPolish}
            aria-label="English"
          >
            <img src="/images/icons/gb.svg" alt="English" class="h-5 md:h-6" />
          </button>
        </div>

        <!-- Mobile menu toggle (only show on non-root routes) -->
        {#if !isRootRoute}
          <div class="flex md:hidden">
            <button
              class="mobile-menu-button"
              on:click={toggleMenu}
              aria-expanded={showMenu}
              aria-controls="side-menu"
              aria-label="Toggle menu"
            >
              <Fa icon={faBars} size="1.2x" />
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</header>

<!-- Spacer to prevent content from being hidden under the fixed header -->
<div style="height: {headerHeight}px"></div>

<!-- Mobile side menu -->
{#if showMenu && !isRootRoute}
  <div in:fade={{ duration: 200 }}>
    <SideMenu {navItems} />
  </div>
{/if}

<!-- Mobile edition selection (for root route) -->
{#if isRootRoute && showMenu}
  <div
    in:fade={{ duration: 200 }}
    class="side-menu fixed top-0 right-0 h-full w-64 bg-indigo-900/95 backdrop-blur-xl z-50 overflow-y-auto flex flex-col p-6 shadow-xl"
  >
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-xl font-bold text-white">
        {$isPolish ? "Wybierz edycję" : "Select Edition"}
      </h2>
      <button on:click={closeMenu} class="text-gray-300 hover:text-white">
        &times;
      </button>
    </div>

    <div class="flex flex-col space-y-4">
      <a
        href="/2025"
        class="py-3 px-4 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-center"
      >
        {$isPolish ? "Edycja 2025" : "2025 Edition"}
      </a>

      <a
        href="/2024"
        class="py-3 px-4 rounded-md bg-indigo-800/50 border border-indigo-500/30 text-gray-200 font-medium text-center"
      >
        {$isPolish ? "Edycja 2024" : "2024 Edition"}
      </a>
    </div>
  </div>
{/if}

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 50;
    transition:
      background-color 0.3s ease,
      backdrop-filter 0.3s ease,
      box-shadow 0.3s ease;
  }

  .header-backdrop {
    background-color: rgba(30, 27, 75, 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(139, 92, 246, 0.15);
  }

  .header-transparent {
    background-color: rgba(30, 27, 75, 0);
    backdrop-filter: blur(0px);
    box-shadow: none;
    border-bottom: none;
  }

  .brain-logo-animate {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.3));
  }

  .header-scrolled .brain-logo-animate {
    filter: drop-shadow(0 0 5px rgba(139, 92, 246, 0.2));
  }

  .org-name {
    position: relative;
    background: linear-gradient(90deg, #c4b5fd, #8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    font-weight: 700;
  }

  .org-subtitle {
    color: rgba(226, 232, 240, 0.8);
  }

  .nav-link {
    position: relative;
    transition: all 0.2s ease;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    font-weight: 500;
    color: rgba(226, 232, 240, 0.85);
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0.75rem;
    right: 0.75rem;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #c4b5fd);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    border-radius: 2px;
  }

  .nav-link:hover {
    color: white;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    transform: scaleX(1);
  }

  .nav-link.active {
    color: white;
  }

  .cta-button {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    border-radius: 9999px;
    padding: 0.5rem 1.25rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(109, 40, 217, 0.3);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, #9061f9 0%, #7c3aed 100%);
  }

  .cta-button::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -25%;
    width: 150%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(45deg);
    transition: all 0.3s ease;
    opacity: 0;
  }

  .cta-button:hover::after {
    left: 100%;
    opacity: 0.3;
  }

  .lang-button {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.05);
  }

  .lang-button:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .lang-button.active {
    background: rgba(139, 92, 246, 0.15);
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
  }

  .mobile-menu-button {
    border-radius: 8px;
    background: rgba(139, 92, 246, 0.1);
    transition: all 0.2s ease;
    padding: 0.5rem;
    color: #c4b5fd;
  }

  .mobile-menu-button:hover {
    background: rgba(139, 92, 246, 0.2);
  }

  .header-content {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    padding: 1rem 0;
  }

  .header-scrolled .header-content {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .neural-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    pointer-events: none;
    overflow: hidden;
  }

  .edition-button {
    padding: 0.5rem 1.25rem;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: all 0.3s ease;
    margin: 0 0.5rem;
  }

  .edition-primary {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    box-shadow: 0 4px 10px rgba(109, 40, 217, 0.3);
    color: white;
  }

  .edition-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(139, 92, 246, 0.4);
  }

  .edition-secondary {
    background: rgba(139, 92, 246, 0.1);
    color: #c4b5fd;
    border: 1px solid rgba(139, 92, 246, 0.3);
  }

  .edition-secondary:hover {
    background: rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }
</style>
