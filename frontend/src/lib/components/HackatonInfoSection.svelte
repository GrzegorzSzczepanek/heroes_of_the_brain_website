<script>
  import { onMount } from 'svelte';

  onMount(() => {
      const elements = document.querySelectorAll('.fade-in-up');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, { threshold: 0.1 });

      elements.forEach(element => observer.observe(element));
  });
</script>

<style>
  .fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .visible {
      opacity: 1;
      transform: translateY(0);
  }
</style>

<section class="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-16">
  <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 fade-in-up">Heroes of The Brain</h1>
      <h2 class="text-xl md:text-2xl font-semibold mb-6 fade-in-up">Największy Hackaton BCI w Polsce</h2>
      <p class="text-lg md:text-xl mb-6 fade-in-up">
          Dołącz do największego w Polsce hackathonu BCI, gdzie spotykają się najlepsze umysły w dziedzinie interfejsów mózg-komputer. To wydarzenie to wyjątkowa okazja do współpracy, nauki i tworzenia innowacyjnych rozwiązań technologicznych.
      </p>
      <p class="text-lg md:text-xl fade-in-up">
          Odbędzie się w Politechnice Wrocławskiej w dniach 21.10.2024 - 23.10.2024. Przygotuj się na trzy dni pełne wyzwań, networkingowych sesji i inspirujących prelekcji od liderów branży.
      </p>
  </div>
</section>

