<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define text content for both languages
  const contentPL = {
    title: "Sztuczna Inteligencja",
    prize: "3,000 PLN",
    description: "Opis zadania po polsku. To jest przykładowy tekst, który można zamienić na rzeczywisty opis zadania."
  };

  const contentEN = {
    title: "Artificial Intelligence",
    prize: "3,000 PLN",
    description: "Task description in English. This is sample text that can be replaced with an actual task description."
  };

  // Derived store to get the current content based on the language
  const category = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentCategory;

  // Subscribe to the derived store to update the local variables
  category.subscribe(value => {
    currentCategory = value;
  });
</script>

<div class="bg-gray-800 border border-purple-600 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 text-white transform transition-transform duration-500 hover:scale-105 px-5 mx-8">
  <div class="bg-purple-600 text-center text-lg md:text-xl lg:text-2xl font-bold py-2 rounded-t-md">{currentCategory.title}</div>
  <div class="bg-teal-700 text-center text-sm md:text-base lg:text-lg font-bold py-1 rounded-b-md mb-4">OPEN TASKS</div>
  <div class="text-center text-sm md:text-base lg:text-lg font-bold mb-2">GUARANTEED PRIZE POOL</div>
  <div class="text-center mb-4">
    <span class="glitch" data-text={currentCategory.prize}>{currentCategory.prize}</span>
  </div>
  <p class="text-sm md:text-base lg:text-lg text-gray-400">{currentCategory.description}</p>
</div>

<style>
  .glitch {
    position: relative;
    display: inline-block;
    color: white;
    font-size: 2rem;
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
