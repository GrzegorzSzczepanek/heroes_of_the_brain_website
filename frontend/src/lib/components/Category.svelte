<script>
    export let name;
    export let description;
    export let prizes;
  </script>
  
  <style>
    .fade-in-left {
      opacity: 0;
      transform: translateX(-50px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in-left.show {
      opacity: 1;
      transform: translateX(0);
    }
    .card {
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    }
    .category-header {
      background: linear-gradient(to right, #333, #444);
      color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
  
  <div class="category-header text-center mb-8 fade-in-left">
    <h2 class="text-3xl font-bold">{name}</h2>
    <p class="text-xl">{description}</p>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-left">
    {#each prizes as prize}
      <div class="card bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-bold mb-4">{prize.position}</h3>
        <p class="text-xl">{prize.amount} zł</p>
        <p class="mt-2">{prize.title}</p>
      </div>
    {/each}
  </div>
  