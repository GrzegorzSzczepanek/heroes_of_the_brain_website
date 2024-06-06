<script>
  import { onMount } from "svelte";
  import "../../app.css";

  export let logoSrc = "https://via.placeholder.com/100x50.png?text=Logo";
  export let placeholderLogo = "https://via.placeholder.com/100x50.png?text=Neuron+Logo";

  export let navItems = [
    { name: "Zaproszenie", href: "#zaproszenie" },
    { name: "Tematyka Hackatonu", href: "#tematyka-Hackatonu" },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" }
  ];

  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        isScrolled = true;
      } else {
        isScrolled = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<style>
  .bg-semi-transparent {
    background-color: rgba(0, 0, 0, 0.7); /* Adjust the transparency */
  }
</style>

<header class="{isScrolled ? 'bg-semi-transparent' : 'bg-black'} text-white py-4 fixed top-0 left-0 right-0 z-50 transition duration-300">
  <div class="container mx-auto flex justify-between items-center px-4">
    <div class="flex items-center">
      <img src={logoSrc} alt="Student Cybersym SCS Logo" class="h-12 mr-4" />
      <div class="text-left">
        <div class="text-xl font-bold">STUDENT CYBERSYM</div>
        <div class="text-sm">SCS</div>
      </div>
    </div>
    <div class="flex items-center">
      <img src={placeholderLogo} alt="Neuron Logo" class="h-12 mr-8" />
      <nav class="space-x-6">
        {#each navItems as item}
          <a href={item.href} class="hover:underline">{item.name}</a>
        {/each}
      </nav>
    </div>
  </div>
</header>
