<script>
    let partners = [
    //   { category: "PARTNER", logos: ["https://via.placeholder.com/150"] },
    //   { category: "HOST REGION", logos: ["https://via.placeholder.com/150"] },
    //   { category: "KNOWLEDGE PARTNERS", logos: ["https://via.placeholder.com/150"] },
      { category: "UNIVERSITY PARTNERS", logos: ["https://via.placeholder.com/150"] },
    //   { category: "MEDIA PARTNERS", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
      { category: "Ci fajniejsi sponsorzy", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    //   { category: "NETWORK PARTNER", logos: ["https://via.placeholder.com/150"] }
    ];
  </script>
  
  <style>
    .category-header::after {
      content: "";
      display: block;
      width: 100px;
      height: 3px;
      background: rgb(147 51 234 / var(--tw-bg-opacity));
      margin: 10px auto 0;
    }
  </style>
  
  <section class="text-center text-white bg-gray-900 py-20 px-4">
    <h1 class="text-3xl font-bold mb-8 relative inline-block">
      SPONSORZY
      <div class="category-header"></div>
    </h1>
    {#each partners as partner}
      <div class="mb-12" data-aos="fade-right">
        <h2 class="text-xl font-semibold mb-4">{partner.category}</h2>
        <div class="flex flex-wrap justify-center gap-4">
          {#each partner.logos as logo}
            <div class="w-30 h-30 bg-gray-800 flex items-center justify-center p-4 border border-gray-700 rounded-md overflow-hidden">
              <img src={logo} alt="{partner.category} logo" class="max-w-full max-h-full object-contain" />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </section>
  