<!-- src/lib/Header.svelte -->
<script>
    export let logoSrc = "https://via.placeholder.com/100x50.png?text=Logo";
    export let watLogoSrc = "https://via.placeholder.com/100x50.png?text=WAT+Logo";

    export let navItems = [
      { name: "Zaproszenie", href: "#zaproszenie" },
      { name: "Tematyka konferencji", href: "#tematyka-konferencji" },
      { name: "Agenda", href: "#agenda" },
      { name: "FAQ", href: "#faq" },
      { name: "Kontakt", href: "#kontakt" }
    ];
  </script>
  
  <header class="bg-black text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <div class="flex items-center">
        <img src={logoSrc} alt="Student Cybersym SCS Logo" class="h-12 mr-4" />
        <div class="text-left">
          <div class="text-xl font-bold">STUDENT CYBERSYM</div>
          <div class="text-sm">SCS</div>
        </div>
      </div>
      <div class="flex items-center">
        <img src={watLogoSrc} alt="WAT Logo" class="h-12 mr-8" />
        <nav class="space-x-6">
          {#each navItems as item}
            <a href={item.href} class="hover:underline">{item.name}</a>
          {/each}
        </nav>
      </div>
    </div>
  </header>
  