<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import ShowMoreTile from './ShowMoreTile.svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const contentPL = {
    title: "Witamy na stronie Heroes of the Brain!",
    intro: "Nasz unikalny, 24-godzinny maraton programowania, organizowany jest przez Koło Naukowe Neuron oraz Wydziałową Radę Samorządu Studenckiego Wydziału Informatyki i Telekomunikacji! To wyjątkowe wydarzenie, które gromadzi entuzjastów neuroinformatyki i sztucznej inteligencji, tworząc przestrzeń do współpracy, wymiany pomysłów i kreatywnej rywalizacji.",
    sections: [
      {
        heading: "Co to jest BCI?",
        icon: "brain-wave",
        text: `Interfejs mózg-komputer (BCI) to przełomowa technologia, która umożliwia bezpośrednią komunikację między mózgiem a urządzeniami zewnętrznymi, pozwalając na przekształcanie myśli w konkretne działania. Dzięki BCI możliwe staje się sterowanie urządzeniami za pomocą samego umysłu, co ma ogromny potencjał w wielu dziedzinach, takich jak medycyna, rehabilitacja, czy interakcja człowieka z technologią. Ta innowacyjna technologia otwiera nowe możliwości dla osób z niepełnosprawnościami, wspierając ich w codziennym funkcjonowaniu i zwiększając ich niezależność. Ponadto, BCI wprowadza zupełnie nowy wymiar rozrywki i komunikacji, zmieniając sposób, w jaki postrzegamy interakcję z otaczającym nas światem cyfrowym.`
      },
      {
        heading: "Nasza misja",
        icon: "mission",
        text: `Naszą misją jest przybliżanie technologii BCI szerokiemu gronu odbiorców, aby każdy mógł zrozumieć jej potencjał i wpływ na przyszłość. Chcemy zwiększać świadomość na temat korzyści, jakie ta innowacja może przynieść w życiu codziennym oraz w różnych branżach, szczególnie w medycynie, rehabilitacji czy interakcji z technologią. Wierzymy, że poprzez edukację i dostęp do najnowszych rozwiązań BCI, możemy budować zrozumienie tej przełomowej technologii i pokazywać, jak zmienia ona relację między człowiekiem a maszyną. Naszym celem jest stworzenie przestrzeni, w której ludzie mogą odkrywać, jak BCI może wspierać ich w codziennym życiu.`
      }
    ]
  };

  const contentEN = {
    title: "Welcome to the Heroes of the Brain website!",
    intro: "Our unique 24-hour programming marathon organized by the Neuron Science Club and the Faculty Student Council of the Faculty of Computer Science and Telecommunications! This is a special event that brings together enthusiasts of neuroinformatics and artificial intelligence, creating a space for collaboration, idea exchange, and creative competition.",
    sections: [
      {
        heading: "What is BCI?",
        icon: "brain-wave",
        text: `Brain-Computer Interface (BCI) is a revolutionary technology that enables direct communication between the brain and external devices, allowing thoughts to be transformed into specific actions. BCI allows control of devices using the mind alone, with great potential in fields like medicine, rehabilitation, and human-technology interaction.`
      },
      {
        heading: "Our Mission",
        icon: "mission",
        text: `Our mission is to make BCI technology more accessible to a wider audience, helping everyone understand its potential and impact on the future. We aim to raise awareness of the benefits this innovation can bring to daily life and various industries, particularly in medicine, rehabilitation, and technology interaction.`
      }
    ]
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);
  let currentContent;
  let visible = false;
  
  content.subscribe(value => {
    currentContent = value;
  });
  
  onMount(() => {
    // Set a small timeout to ensure transitions work properly
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<style>
  .info-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: relative;
    overflow: hidden;
  }
  
  .neural-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.07;
    pointer-events: none;
  }
  
  .neuron {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
    opacity: 0.6;
    animation: pulse 15s infinite ease-in-out;
    filter: blur(10px);
  }
  
  @media (min-width: 768px) {
    .neuron {
      width: 200px;
      height: 200px;
    }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.1); opacity: 0.2; }
    100% { transform: scale(1); opacity: 0.4; }
  }
  
  .section-title {
    background: linear-gradient(90deg, #c4b5fd -10%, #8b5cf6 50%, #c4b5fd 110%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 2px 15px rgba(139, 92, 246, 0.3);
  }
  
  .wave-divider {
    width: 100%;
    height: 60px;
    fill: rgba(139, 92, 246, 0.1);
    transform: translateY(1px);
    margin-top: -1px;
  }

  .icon-container {
    background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    box-shadow: 0 10px 25px -5px rgba(109, 40, 217, 0.5);
    position: relative;
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .icon-container {
      width: 64px;
      height: 64px;
    }
  }
  
  .icon-container::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, transparent 60%, rgba(255, 255, 255, 0.2) 100%);
    top: -25%;
    left: -25%;
  }

  .info-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -5px rgba(124, 58, 237, 0.3);
  }

  @media (max-width: 640px) {
    .section-content {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
</style>

<section class="info-section py-16 sm:py-20 md:py-24 px-4 sm:px-6" id="HackatonInfo">
  <!-- Neural background with animated neurons -->
  <div class="neural-bg hidden sm:block">
    <svg width="100%" height="100%" viewBox="0 0 800 600" opacity="0.3">
      <!-- Neural network paths -->
      <path d="M100,100 Q200,50 300,150 T500,200" stroke="white" stroke-width="1" fill="none" opacity="0.5" />
      <path d="M200,300 Q300,250 400,350 T600,400" stroke="white" stroke-width="1" fill="none" opacity="0.5" />
      <path d="M150,450 Q250,400 350,500 T550,550" stroke="white" stroke-width="1" fill="none" opacity="0.5" />
      
      <!-- Neural network nodes -->
      <circle cx="100" cy="100" r="4" fill="#8b5cf6" />
      <circle cx="300" cy="150" r="4" fill="#8b5cf6" />
      <circle cx="500" cy="200" r="4" fill="#8b5cf6" />
      <circle cx="200" cy="300" r="4" fill="#8b5cf6" />
      <circle cx="400" cy="350" r="4" fill="#8b5cf6" />
      <circle cx="600" cy="400" r="4" fill="#8b5cf6" />
      <circle cx="150" cy="450" r="4" fill="#8b5cf6" />
      <circle cx="350" cy="500" r="4" fill="#8b5cf6" />
      <circle cx="550" cy="550" r="4" fill="#8b5cf6" />
    </svg>
  </div>
  
  <!-- Animated neurons - hidden on small mobile devices -->
  <div class="neuron hidden sm:block" style="top: 10%; left: 5%; animation-delay: 0s;"></div>
  <div class="neuron hidden sm:block" style="top: 60%; left: 15%; animation-delay: 4s;"></div>
  <div class="neuron hidden sm:block" style="top: 30%; right: 10%; animation-delay: 2s;"></div>
  <div class="neuron hidden sm:block" style="bottom: 15%; right: 20%; animation-delay: 8s;"></div>
  
  <!-- Content wrapper -->
  <div class="max-w-6xl mx-auto relative z-10 py-4 sm:py-8">
    {#if visible}
      <div class="text-center mb-10 md:mb-16" in:fade={{ duration: 800 }}>
        <h1 class="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
          {currentContent.title}
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-3 sm:px-6">
          {currentContent.intro}
        </p>
        
        <!-- Wave divider -->
        <div class="mt-8 sm:mt-12 mb-6 sm:mb-8">
          <svg class="wave-divider" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      
      <!-- Sections -->
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12 section-content">
        {#each currentContent.sections as section, i}
          <div 
            class="info-card bg-slate-800/40 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-purple-800/30"
            in:fly={{ y: 30, duration: 800, delay: 300 + i * 200 }}
          >
            <div class="icon-container">
              {#if section.icon === "brain-wave"}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-7 sm:h-7 text-white">
                  <path d="M2 12h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2h0"></path>
                  <path d="M18 12h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3"></path>
                  <path d="M11 3a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H5"></path>
                  <path d="M11 3h4a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2"></path>
                  <line x1="9" y1="12" x2="15" y2="12"></line>
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 sm:w-7 sm:h-7 text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              {/if}
            </div>
            
            <h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-purple-200">{section.heading}</h2>
            <div class="prose prose-sm sm:prose prose-invert max-w-none">
              <p class="text-gray-300 text-sm sm:text-base">
                {section.text}
              </p>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>