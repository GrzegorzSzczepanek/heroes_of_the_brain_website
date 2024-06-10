<script>
    import { onMount } from 'svelte';
  
    let fadeIn = false;
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fadeIn = true;
            observer.unobserve(entry.target);
          }
        });
      });
  
      observer.observe(document.querySelector('#hackathon-info'));
    });
  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<style>
    .bg-dots {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      transition: transform 0.1s ease-out;
    }
    .dot-1 {
      width: 100px;
      height: 100px;
      top: 10%;
      left: 20%;
    }
    .dot-2 {
      width: 150px;
      height: 150px;
      top: 50%;
      left: 40%;
    }
    .dot-3 {
      width: 120px;
      height: 120px;
      top: 70%;
      left: 70%;
    }
    .fade-in-left {
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 1s ease-out, transform 1s ease-out;
    }
    .fade-in-left.show {
      opacity: 1;
      transform: translateX(0);
    }
  </style>
  
  <section id="hackathon-info" class="flex flex-col items-center justify-center min-h-screen  text-white text-center p-8">
    <div class={`fade-in-left ${fadeIn ? 'show' : ''} max-w-4xl`}>
      <div class="absolute inset-0 z-0">
        <div class="bg-dots dot-1" style="transform: translateY({scrollY * 0.1}px);"></div>
        <div class="bg-dots dot-2" style="transform: translateY({scrollY * 0.2}px);"></div>
        <div class="bg-dots dot-3" style="transform: translateY({scrollY * 0.15}px);"></div>
      </div>
      <h2 class="text-4xl font-bold mb-4">Heroes of The Brain</h2>
      <h3 class="text-2xl mb-6">Największy Hackaton BCI w Polsce</h3>
      <p class="text-lg mb-6">
        Dołącz do największego w Polsce hackathonu BCI, gdzie spotykają się najlepsze umysły w dziedzinie interfejsów mózg-komputer. To wydarzenie to wyjątkowa okazja do współpracy, nauki i tworzenia innowacyjnych rozwiązań technologicznych.
      </p>
      <p class="text-lg mb-6">
        Odbędzie się w Politechnice Wrocławskiej w dniach 21.10.2024 - 23.10.2024. Przygotuj się na trzy dni pełne wyzwań, networkingowych sesji i inspirujących prelekcji od liderów branży.
      </p>
      <div class="space-y-4">
        <div class="bg-white text-black p-4 rounded-lg shadow-lg">
          <h4 class="text-xl font-bold mb-2">Agenda</h4>
          <p class="text-lg">Poznaj szczegółowy plan wydarzenia i zaplanuj swoje uczestnictwo.</p>
        </div>
        <div class="bg-white text-black p-4 rounded-lg shadow-lg">
          <h4 class="text-xl font-bold mb-2">Prelegenci</h4>
          <p class="text-lg">Spotkaj się z ekspertami z branży, którzy podzielą się swoją wiedzą i doświadczeniem.</p>
        </div>
        <div class="bg-white text-black p-4 rounded-lg shadow-lg">
          <h4 class="text-xl font-bold mb-2">Projekty</h4>
          <p class="text-lg">Zobacz niesamowite projekty tworzone przez uczestników w czasie hackathonu.</p>
        </div>
      </div>
    </div>
  </section>
  