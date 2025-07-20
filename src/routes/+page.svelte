<script lang="ts">
    import { onMount } from 'svelte';
    import { isPolish } from '../stores/languageStore';
    import UnderlinedHeader from '$lib/components/UnderlinedHeader.svelte';
    import JoinUsSection from '$lib/components/JoinUsSection.svelte';
    import { fade, fly } from 'svelte/transition';
    import { derived } from 'svelte/store';
    
    let visible = false;
    
    // Translations
    const tPL = {
      siteTitle: "Heroes of the Brain 2025",
      subtitle: "Twórz przyszłość z głową",
      btnPrimary: "Edycja 2025",
      btnSecondary: "Poprzednie Edycje",
      editions: "Edycje Hackathonu",
      ctaSection: "Dołącz do nas!",
      aboutTitle: "O Hackathonie",
      aboutDesc: "Heroes of the Brain to prestiżowy hackathon koncentrujący się na innowacjach w dziedzinie interfejsów mózg-komputer. Dołącz do nas i twórz przełomowe rozwiązania na styku neurobiologii i technologii.",
      highlights: "Najważniejsze informacje",
      date: "29-30 listopada 2025",
      location: "Politechnika Wrocławska",
      prizes: "Nagrody zostaną ogłoszone wkrótce",
      applyNow: "Zgłoś się teraz",
      learnMore: "Dowiedz się więcej",
      partners: "Partnerzy",
      edition2025: "Interfejsy mózg-komputer w najnowszym wydaniu",
      edition2024: "Gdzie wszystko się zaczęło – spojrzenie na naszą pierwszą edycję",
      joinDesc: "Zostań częścią społeczności innowatorów pracujących nad przyszłością interakcji człowiek-komputer",
      newsletter: "Zapisz się do newslettera",
      yourEmail: "Twój email",
      subscribe: "Zapisz się"
    };
    
    const tEN = {
      siteTitle: "Heroes of the Brain 2025",
      subtitle: "Explore the Future of Brain-Computer Interfaces",
      btnPrimary: "2025 Edition",
      btnSecondary: "Previous Editions", 
      editions: "Hackathon Editions",
      ctaSection: "Join Us!",
      aboutTitle: "About the Hackathon",
      aboutDesc: "Heroes of the Brain is a prestigious hackathon focused on innovations in brain-computer interfaces. Join us and create breakthrough solutions at the intersection of neuroscience and technology.",
      highlights: "Key Highlights",
      date: "November 29-30, 2025",
      location: "Wrocław University of Science and Technology",
      prizes: "Prizes TBA",
      applyNow: "Apply Now",
      learnMore: "Learn More",
      partners: "Partners",
      edition2025: "Brain-computer interfaces in their newest edition",
      edition2024: "Where it all began – a look back at our inaugural edition",
      joinDesc: "Become part of the community of innovators working on the future of human-computer interaction",
      newsletter: "Subscribe to our newsletter",
      yourEmail: "Your email",
      subscribe: "Subscribe"
    };
    
    export const t = derived(isPolish, $p => $p ? tPL : tEN);
    let tr;
    t.subscribe(v => tr = v);
    
    onMount(() => {
      visible = true;
    });
    
    const partners = [
      { name: "University Partner", logo: "/images/university-logo.png" },
      { name: "Tech Company", logo: "/images/tech-logo.png" },
      { name: "Research Institute", logo: "/images/research-logo.png" },
      { name: "Innovation Lab", logo: "/images/lab-logo.png" },
    ];
  </script>
  
  <style>
    .hero-bg {
      background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #4338ca 100%);
      position: relative;
      overflow: hidden;
    }
    
    .hero-bg::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/images/hero-2025.webp');
      background-size: cover;
      background-position: center;
      opacity: 0.2;
      z-index: 0;
      mix-blend-mode: luminosity;
    }
    
    .neural-paths {
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0.4;
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 60%, rgba(79, 70, 229, 0.3) 0%, transparent 50%);
    }
    
    .brain-illustration {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url('/images/brain-illustration.svg');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.7;
    }
    
    .gradient-button {
      background: linear-gradient(to right, #8b5cf6, #6366f1);
      transition: all 0.3s ease;
      
    }
    .gradient-button, .hero-bg a {
  position: relative;
  z-index: 10; /* Higher value than any overlay */
}
    
    .gradient-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px -5px rgba(107, 70, 193, 0.5);
    }
    
    .card {
      transition: all 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    .highlight-item {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .brain-dots {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
      background-size: 20px 20px;
      opacity: 0.1;
    }
    
    .pulsing-circle {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      animation: pulse 3s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 0.5; }
      50% { transform: scale(1.2); opacity: 0.2; }
      100% { transform: scale(0.8); opacity: 0.5; }
    }
    
    .section-divider {
      height: 6px;
      background: linear-gradient(to right, #c4b5fd, #818cf8, #c4b5fd);
      margin: 0 auto;
      border-radius: 3px;
    }
  </style>
  
  <main class="min-h-screen w-full bg-white">
    <!-- Hero Section -->
    <section class="hero-bg min-h-screen flex items-center w-full">
      <div class="neural-paths"></div>
      
      <!-- Main content container -->
      <div class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Left side - Text content -->
          <div class="text-white space-y-8">
            {#if visible}
              <div in:fade={{ duration: 800 }}>
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                  {tr.siteTitle}
                </h1>
                <p class="text-xl md:text-2xl text-purple-100 font-light mb-8 max-w-xl">
                  {tr.subtitle}
                </p>
                
                <!-- Highlight cards -->
                <div class="grid grid-cols-1 gap-4 my-8 max-w-xl">
                  <div class="highlight-item rounded-xl p-4 flex items-center space-x-3">
                    <span class="text-2xl">🗓️</span>
                    <span class="font-medium">{tr.date}</span>
                  </div>
                  <div class="highlight-item rounded-xl p-4 flex items-center space-x-3">
                    <span class="text-2xl">📍</span>
                    <span class="font-medium">{tr.location}</span>
                  </div>
                  <div class="highlight-item rounded-xl p-4 flex items-center space-x-3">
                    <span class="text-2xl">🏆</span>
                    <span class="font-medium">{tr.prizes}</span>
                  </div>
                </div>
                
                <!-- Call to action buttons -->
                <div class="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="/2025"
                    class="gradient-button px-8 py-4 text-white font-semibold rounded-full shadow-lg text-center"
                  >
                    {tr.btnPrimary}
                  </a>
                  <a
                    href="/2024"
                    class="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all text-center"
                  >
                    {tr.btnSecondary}
                  </a>
                </div>
              </div>
            {/if}
          </div>
          
          <!-- Right side - Visual element -->
          <div class="hidden lg:block relative h-full">
            <!-- Brain visualization -->
            <div class="relative h-[500px] w-full">
              <!-- Decorative elements -->
              <div class="brain-dots"></div>
              
              <!-- Brain illustration placeholder - replace with actual image -->
              <div class="brain-illustration"></div>
              
              <!-- Animated pulsing circles -->
              {#each Array(5) as _, i}
                <div 
                  class="pulsing-circle"
                  style="
                    top: {20 + i * 15}%; 
                    left: {20 + i * 15}%; 
                    animation-delay: {i * 0.5}s;
                    width: {30 + i * 10}px;
                    height: {30 + i * 10}px;
                  "
                ></div>
              {/each}
              
              <!-- Neural connections -->
              <svg class="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 500 500">
                <line x1="100" y1="100" x2="400" y2="150" stroke="white" stroke-width="1" opacity="0.3" />
                <line x1="150" y1="250" x2="350" y2="200" stroke="white" stroke-width="1" opacity="0.3" />
                <line x1="200" y1="150" x2="300" y2="350" stroke="white" stroke-width="1" opacity="0.3" />
                <line x1="250" y1="100" x2="200" y2="400" stroke="white" stroke-width="1" opacity="0.3" />
                <line x1="300" y1="200" x2="100" y2="300" stroke="white" stroke-width="1" opacity="0.3" />
                <circle cx="100" cy="100" r="5" fill="white" opacity="0.5" />
                <circle cx="150" cy="250" r="5" fill="white" opacity="0.5" />
                <circle cx="200" cy="150" r="5" fill="white" opacity="0.5" />
                <circle cx="250" cy="100" r="5" fill="white" opacity="0.5" />
                <circle cx="300" cy="200" r="5" fill="white" opacity="0.5" />
                <circle cx="400" cy="150" r="5" fill="white" opacity="0.5" />
                <circle cx="350" cy="200" r="5" fill="white" opacity="0.5" />
                <circle cx="300" cy="350" r="5" fill="white" opacity="0.5" />
                <circle cx="200" cy="400" r="5" fill="white" opacity="0.5" />
                <circle cx="100" cy="300" r="5" fill="white" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="animate-bounce flex flex-col items-center">
          <span class="text-white text-sm mb-1">Scroll</span>
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  
    <!-- About & Editions Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div in:fade={{ duration: 800, delay: 300 }}>
          <UnderlinedHeader title={tr.aboutTitle} />
          <p class="text-lg text-gray-700 max-w-3xl mx-auto text-center mt-6 mb-12">
            {tr.aboutDesc}
          </p>
        </div>
        
        <div class="mt-16">
          <UnderlinedHeader title={tr.editions} />
          <div class="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
            {#each [
              { year: 2025, desc: tr.edition2025, image: "/images/editions/2025.jpg", accent: "bg-purple-600", status: "New" },
              { year: 2024, desc: tr.edition2024, image: "/images/editions/2024.jpg", accent: "bg-blue-600", status: "Past" }
            ] as edition, i}
              <div in:fly={{ y: 50, duration: 800, delay: 400 + i * 200 }}>
                <a
                  href={`/${edition.year}`}
                  class="card bg-white rounded-xl shadow-md overflow-hidden block h-full"
                >
                  <div class="relative">
                    <!-- Status badge -->
                    <div class="absolute top-4 right-4 z-10">
                      <span class={`${edition.accent} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                        {edition.status}
                      </span>
                    </div>
                    
                    <div
                      class="h-56 bg-cover bg-center relative"
                      style={`background-image:url('${edition.image}')`}
                    >
                      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div class="absolute bottom-4 left-6 text-white">
                        <h2 class="text-3xl font-bold">{edition.year}</h2>
                      </div>
                    </div>
                  </div>
                  
                  <div class="p-6">
                    <p class="text-gray-700 mb-4">
                      {edition.desc}
                    </p>
                    <div class="flex justify-end">
                      <span class="text-purple-600 font-medium flex items-center hover:translate-x-1 transition-transform">
                        {tr.learnMore}
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </section>
  
    <!-- Partners Section -->
    <!-- <section class="py-12 bg-white">
      <div class="container mx-auto px-6">
        <h3 class="text-center text-xl font-medium text-gray-800 mb-8">{tr.partners}</h3>
        <div class="flex justify-center items-center gap-12 flex-wrap">
          {#each partners as partner}
            <div class="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
              
              
              <div class="w-40 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span class="text-gray-500 text-sm">{partner.name}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section> -->
  
    <!-- Section divider -->
    <div class="section-divider w-1/3 max-w-md"></div>
  
    <!-- Join Us Section -->
    <!-- <section class="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div class="space-y-6">
            <div in:fade={{ duration: 800 }}>
              <h2 class="text-3xl md:text-4xl font-bold">{tr.ctaSection}</h2>
              <p class="text-lg text-purple-100 mt-4">
                {tr.joinDesc}
              </p>
              <div class="pt-6">
                <a 
                  href="/apply"
                  class="inline-block px-8 py-4 gradient-button text-white font-semibold rounded-full shadow-lg"
                >
                  {tr.applyNow}
                </a>
              </div>
            </div>
          </div>
          
     
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <div in:fly={{ x: 50, duration: 800 }}>
              <h3 class="text-2xl font-bold text-white mb-4">{tr.newsletter}</h3>
              <p class="text-purple-100 mb-6">
                Stay updated with all the news about Heroes of the Brain 2025!
              </p>
              <form class="space-y-4">
                <div>
                  <label for="email" class="sr-only">{tr.yourEmail}</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder={tr.yourEmail}
                    class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button 
                  type="submit"
                  class="w-full px-4 py-3 bg-white text-purple-900 font-medium rounded-lg hover:bg-purple-50 transition"
                >
                  {tr.subscribe}
                </button>
              </form>
              
              
              <div class="mt-6 flex justify-center space-x-4">
                {#each ['facebook', 'twitter', 'instagram', 'linkedin'] as social}
                  <a href={`https://${social}.com/heroesofthebrain`} class="text-white hover:text-purple-300">
                    <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">

                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </div>
                  </a>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  
    
  </main>