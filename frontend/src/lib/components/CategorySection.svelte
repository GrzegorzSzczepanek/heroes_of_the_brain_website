<script>
  let categories = [
      { title: "Artificial Intelligence", prize: "3,000 PLN" },
      { title: "Education", prize: "3,000 PLN" },
      { title: "Gamedev", prize: "3,000 PLN" },
      { title: "Wellness & Activities", prize: "3,000 PLN" }
  ];
</script>

<style>
  .glitch {
      position: relative;
      display: inline-block;
      color: white;
      font-size: 3rem;
      font-weight: bold;
  }
  .glitch::before, .glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
  }
  .glitch::before {
      left: 2px;
      text-shadow: -2px 0 red;
      animation: glitch 1s infinite;
  }
  .glitch::after {
      left: -2px;
      text-shadow: -2px 0 blue;
      animation: glitch 1s infinite reverse;
  }
  @keyframes glitch {
      0% { clip: rect(24px, 9999px, 44px, 0); }
      20% { clip: rect(94px, 9999px, 34px, 0); }
      40% { clip: rect(64px, 9999px, 54px, 0); }
      60% { clip: rect(84px, 9999px, 14px, 0); }
      80% { clip: rect(34px, 9999px, 64px, 0); }
      100% { clip: rect(24px, 9999px, 44px, 0); }
  }
</style>

<section class="flex flex-wrap justify-center gap-6">
  {#each categories as category}
      <div class="bg-gray-900 border border-pink-500 rounded-lg w-80 p-6 text-white">
          <div class="bg-pink-500 text-center text-lg font-bold py-2 rounded-t-md">{category.title}</div>
          <div class="bg-teal-700 text-center text-sm font-bold py-1 rounded-b-md mb-4">OPEN TASKS</div>
          <div class="text-center text-sm font-bold mb-2">GUARANTEED PRIZE POOL</div>
          <div class="text-center mb-4">
              <span class="glitch" data-text="{category.prize}">{category.prize}</span>
          </div>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
      </div>
  {/each}
</section>



<!-- 
<div class="category">
  <div class="category-header">{category.name}</div>
  <ul class="prize-list">
    <li class="prize-item">
      <FontAwesomeIcon icon={faTrophy} class="icon icon-first" />
      <span class="prize-text">
        <span class="prize-position">1st:</span> {category.first}
      </span>
    </li>
    <li class="prize-item">
      <FontAwesomeIcon icon={faMedal} class="icon icon-second" />
      <span class="prize-text">
        <span class="prize-position">2nd:</span> {category.second}
      </span>
    </li>
    <li class="prize-item">
      <FontAwesomeIcon icon={faMedal} class="icon icon-third" />
      <span class="prize-text">
        <span class="prize-position">3rd:</span> {category.third}
      </span>
    </li>
  </ul>
</div> -->