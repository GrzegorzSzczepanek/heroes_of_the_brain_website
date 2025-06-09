<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { derived } from 'svelte/store';
  import { isPolish } from '../../stores/languageStore';
  
  // Existing components
  import LandingPage from '$lib/components/LandingPage.svelte';
  import HackatonInfoSection from '$lib/components/HackatonInfoSection.svelte';
  import RegisterSection from '$lib/components/RegisterSection.svelte';
  import Agenda from '$lib/components/Agenda.svelte';
  import CategorySection from '$lib/components/CategorySection.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import UnderlinedHeader from '$lib/components/UnderlinedHeader.svelte';
  import JoinUsSection from '$lib/components/JoinUsSection.svelte';
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  
  // For animations and scroll effects
  let scrollY;
  let sections = [];
  let visible = Array(10).fill(false);
  let currentTypewriterIndex = 0;
  let typewriterText = '';
  let typewriterInterval;
  
  // Content based on language
  const contentPL = {
    pageTitle: 'Heroes of the Brain 2025',
    countdownTitle: 'Do hackathonu pozostało',
    countdownDays: 'dni',
    countdownHours: 'godzin',
    countdownMinutes: 'minut',
    countdownSeconds: 'sekund',
    aboutEvent: 'O wydarzeniu',
    aboutDescription: 'Heroes of the Brain to prestiżowy hackathon koncentrujący się na innowacjach w dziedzinie interfejsów mózg-komputer. Dołącz do nas i twórz przełomowe rozwiązania na styku neurobiologii i technologii.',
    juryTitle: 'Jury & Mentorzy',
    jurySubtitle: 'Poznaj ekspertów, którzy będą wspierać uczestników i oceniać projekty',
    keyHighlights: 'Najważniejsze informacje',
    keyInfo: [
      { title: 'Gdzie', content: 'Politechnika Wrocławska', icon: 'location' },
      { title: 'Kiedy', content: '18-20 listopada 2025', icon: 'calendar' },
      { title: 'Nagrody', content: 'Pula nagród TBA', icon: 'trophy' }
    ],
    quoteTitle: 'Odkryj potencjał mózgu',
    quote: 'Interfejsy mózg-komputer to przyszłość interakcji człowieka z technologią. Dołącz do nas, aby tworzyć innowacje, które zmienią świat.',
    registrationTitle: 'Dołącz do nas!',
    registrationButton: 'Zgłoś się teraz',
    scrollText: 'Przewiń w dół',
    typewriterTexts: [
      'Brain-Computer Interface Hackathon',
      'Innowacje w neurotechnologii',
      'Projektuj przyszłość interakcji człowiek-komputer'
    ]
  };
  
  const contentEN = {
    pageTitle: 'Heroes of the Brain 2025',
    countdownTitle: 'Time until the hackathon',
    countdownDays: 'days',
    countdownHours: 'hours',
    countdownMinutes: 'minutes',
    countdownSeconds: 'seconds',
    aboutEvent: 'About the Event',
    aboutDescription: 'Heroes of the Brain is a prestigious hackathon focused on innovations in brain-computer interfaces. Join us and create breakthrough solutions at the intersection of neuroscience and technology.',
    juryTitle: 'Jury & Mentors',
    jurySubtitle: 'Meet the experts who will support participants and evaluate projects',
    keyHighlights: 'Key highlights',
    keyInfo: [
      { title: 'Where', content: 'Wrocław University of Science and Technology', icon: 'location' },
      { title: 'When', content: 'November 18-20, 2025', icon: 'calendar' },
      { title: 'Prizes', content: 'Prizes TBA', icon: 'trophy' }
    ],
    quoteTitle: 'Discover the brain potential',
    quote: 'Brain-computer interfaces are the future of human-technology interaction. Join us to create innovations that will change the world.',
    registrationTitle: 'Join Us!',
    registrationButton: 'Apply Now',
    scrollText: 'Scroll down',
    typewriterTexts: [
      'Brain-Computer Interface Hackathon',
      'Innovations in neurotechnology',
      'Design the future of human-computer interaction'
    ]
  };
  
  const content = derived(isPolish, ($p) => ($p ? contentPL : contentEN));
  let c; 
  content.subscribe(v => c = v);
  
  // Placeholder for jury members
  const juryMembers = [
    {
      name: 'Prof. Anna Kowalska',
      role: 'Head Jury',
      image: '/images/placeholder-woman.jpg',
      bio: 'Professor of Neuroscience at University of Technology'
    },
    {
      name: 'Dr. Jan Nowak',
      role: 'BCI Expert',
      image: '/images/placeholder-man.jpg',
      bio: 'Leading researcher in brain-computer interfaces'
    },
    {
      name: 'Maria Wiśniewska',
      role: 'Industry Partner',
      image: '/images/placeholder-woman.jpg',
      bio: 'Director of Innovation at NeuroTech Inc.'
    },
    {
      name: 'Tomasz Adamski',
      role: 'Mentor',
      image: '/images/placeholder-man.jpg',
      bio: 'Serial entrepreneur in medtech industry'
    }
  ];
  
  // Typewriter effect
  function updateTypewriterText() {
    const texts = c.typewriterTexts;
    currentTypewriterIndex = (currentTypewriterIndex + 1) % texts.length;
    typewriterText = texts[currentTypewriterIndex];
  }
  
  // Scroll parallax effect
  function parallax(node, speed) {
    return {
      update(newSpeed) {
        speed = newSpeed;
        const y = -scrollY * speed;
        node.style.transform = `translateY(${y}px)`;
      }
    };
  }
  
  // Intersection observer for scroll animations
  onMount(() => {
    document.title = c.pageTitle;
    
    // Start typewriter
    updateTypewriterText();
    typewriterInterval = setInterval(updateTypewriterText, 4000);
    
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            visible[index] = true;
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px',
        threshold: 0.15
      });
      
      sections.forEach(section => {
        if (section) observer.observe(section);
      });
      
      return () => {
        clearInterval(typewriterInterval);
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }
  });
</script>

<svelte:head>
  <title>{c.pageTitle}</title>
  <meta name="description" content="Heroes of The Brain 2025 – Brain‑Computer Interface hackathon edition." />
  <meta name="keywords" content="brain, BCI, hackathon, 2025, heroes of the brain" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window bind:scrollY />

<style>
  /* Global styles */
  :global(body) {
    font-family: 'Inter', sans-serif;
    --purple-primary: #8b5cf6;
    --purple-dark: #6d28d9;
    --indigo-primary: #6366f1;
    --dark-bg: #111827;
    scroll-behavior: smooth;
  }
  
  /* Section animations */
  .section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Hero section */
  .hero-wrapper {
    position: relative;
    background-color: var(--dark-bg);
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, white, #c4b5fd);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
  
  .hero-year {
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 900;
    margin: 0;
    line-height: 1;
    background: linear-gradient(135deg, var(--purple-primary), var(--indigo-primary));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
  }
  
  .hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin: 1.5rem 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    color: rgba(255, 255, 255, 0.8);
    min-height: 3rem;
  }
  
  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, var(--purple-primary), var(--indigo-primary));
    color: white;
    border: none;
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 20px -5px rgba(99, 102, 241, 0.4);
  }
  
  .btn-secondary {
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-2px);
  }
  
  /* Scroll icon */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    animation: bounce 2s infinite;
  }
  
  .scroll-icon {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0.5rem auto 0;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  /* Key info section */
  .key-info-section {
    background-color: #f9fafb;
    position: relative;
    overflow: hidden;
  }
  
  .key-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .key-info-card {
    background: white;
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease;
    border-bottom: 4px solid transparent;
  }
  
  .key-info-card:hover {
    transform: translateY(-5px);
    border-color: var(--purple-primary);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .info-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--purple-primary);
  }
  
  .info-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }
  
  .info-content {
    color: #4b5563;
    font-size: 1rem;
  }
  
  /* Section styling */
  .section-title {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  
  .section-title h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }
  
  .section-title p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    color: #6b7280;
  }
  
  .section-divider {
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--purple-primary), var(--indigo-primary));
    margin: 1rem auto 2rem;
    border-radius: 2px;
  }
  
  /* Jury section */
  .jury-section {
    background-color: #f3f4f6;
    position: relative;
    overflow: hidden;

  }
  
  .jury-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .jury-card {
    background: white;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .jury-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .jury-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-bottom: 4px solid var(--purple-primary);
  }
  
  .jury-content {
    padding: 1.5rem;
  }
  
  .jury-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }
  
  .jury-role {
    font-size: 1rem;
    color: var(--purple-primary);
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .jury-bio {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  /* Quote section */
  .quote-section {
    background-color: var(--dark-bg);
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .quote-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/neural-network.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
  }
  
  .quote-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .quote-text {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    line-height: 1.6;
    font-weight: 300;
    font-style: italic;
    position: relative;
    padding: 0 2rem;
  }
  
  .quote-text::before,
  .quote-text::after {
    content: '"';
    position: absolute;
    font-family: Georgia, serif;
    font-size: 4rem;
    line-height: 0;
    color: var(--purple-primary);
    opacity: 0.5;
  }
  
  .quote-text::before {
    top: 0.5rem;
    left: 0;
  }
  
  .quote-text::after {
    bottom: -0.5rem;
    right: 0;
  }
  
  /* Brain pattern bg */
  .brain-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-size: 400px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path d="M100,21c-43.8,0-79,35.2-79,79s35.2,79,79,79s79-35.2,79-79S143.8,21,100,21z M100,167.8c-37.4,0-67.8-30.4-67.8-67.8S62.6,32.2,100,32.2s67.8,30.4,67.8,67.8S137.4,167.8,100,167.8z"/><path d="M100,42c-32,0-58,26-58,58s26,58,58,58s58-26,58-58S132,42,100,42z M100,146c-25.4,0-46-20.6-46-46s20.6-46,46-46s46,20.6,46,46S125.4,146,100,146z"/><path d="M100,62c-21,0-38,17-38,38s17,38,38,38s38-17,38-38S121,62,100,62z M100,126c-14.4,0-26-11.6-26-26s11.6-26,26-26s26,11.6,26,26S114.4,126,100,126z"/><path d="M100,82c-9.9,0-18,8.1-18,18s8.1,18,18,18s18-8.1,18-18S109.9,82,100,82z M100,106c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S103.3,106,100,106z"/></svg>');
    pointer-events: none;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .hero-buttons {
      flex-direction: column;
      gap: 0.75rem;
    }
    
    .btn {
      width: 100%;
    }
    
    .quote-text {
      padding: 0 1rem;
    }
    
    .quote-text::before,
    .quote-text::after {
      font-size: 3rem;
    }
  }
  
  /* Custom animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .fade-in {
    animation: fadeIn 1s ease forwards;
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  .slide-up {
    animation: slideUp 0.8s ease forwards;
  }
  
  /* Neural connections animation */
  .neural-connections {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .neural-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(139, 92, 246, 0.7);
    box-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
  }
  
  .neural-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent);
    transform-origin: left center;
  }
  
  /* Countdown styles */
  .countdown-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .countdown-item {
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
  }
  
  .countdown-value {
    font-size: 3rem;
    font-weight: 700;
    color: var(--purple-primary);
    margin: 1rem 0 0.5rem;
  }
  
  .countdown-label {
    color: #6b7280;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .countdown-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, var(--purple-primary), var(--indigo-primary));
  }
</style>

<div transition:fade={{ duration: 400 }}>
  <!-- Hero Section -->
  <div class="hero-wrapper">
    <div class="hero-overlay"></div>
    
    <div class="neural-connections">
      {#each Array(10) as _, i}
        <div 
          class="neural-dot"
          style="
            top: {10 + Math.random() * 80}%; 
            left: {10 + Math.random() * 80}%;
            opacity: {0.3 + Math.random() * 0.7};
          "
        ></div>
      {/each}
      
      {#each Array(8) as _, i}
        <div 
          class="neural-line"
          style="
            top: {20 + Math.random() * 60}%; 
            left: {Math.random() * 40}%;
            width: {100 + Math.random() * 200}px;
            transform: rotate({-30 + Math.random() * 60}deg);
            opacity: {0.1 + Math.random() * 0.2};
          "
        ></div>
      {/each}
    </div>
    
    <div class="hero-content">
      <h1 class="hero-title fade-in">Heroes of the Brain</h1>
      <h2 class="hero-year slide-up">2025</h2>
      <p class="hero-subtitle">
        {typewriterText}
      </p>
      
      <div class="hero-buttons">
        <a href="#register" class="btn btn-primary">
          {c.registrationButton}
        </a>
        <a href="#about" class="btn btn-secondary">
          {c.aboutEvent}
        </a>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span>{c.scrollText}</span>
      <svg class="scroll-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </div>
  </div>
  
  <!-- Countdown Section -->
  <section class="py-16 bg-white" id="countdown">
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[0]} bind:this={sections[0]}>
        <div class="section-title">
          <h2>{c.countdownTitle}</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="countdown-container">
          <div class="countdown-item">
            <div class="countdown-value">195</div>
            <div class="countdown-label">{c.countdownDays}</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">12</div>
            <div class="countdown-label">{c.countdownHours}</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">45</div>
            <div class="countdown-label">{c.countdownMinutes}</div>
          </div>
          <div class="countdown-item">
            <div class="countdown-value">22</div>
            <div class="countdown-label">{c.countdownSeconds}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Key Info Section -->
  <section class="key-info-section py-16" id="key-info">
    <div class="brain-pattern"></div>
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[1]} bind:this={sections[1]}>
        <div class="section-title">
          <h2>{c.keyHighlights}</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="key-info-grid">
          {#each c.keyInfo as info, i}
            <div 
              class="key-info-card"
              in:fly={{ y: 30, duration: 800, delay: 200 * i }}
            >
              <div class="info-icon">
                {#if info.icon === 'location'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                {:else if info.icon === 'calendar'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                {:else if info.icon === 'trophy'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                  </svg>
                {/if}
              </div>
              <h3 class="info-title">{info.title}</h3>
              <p class="info-content">{info.content}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- About section -->
  <section id="about" class="section" class:visible={visible[2]} bind:this={sections[2]}>
    <HackatonInfoSection year={2025} />
  </section>
  
  <!-- Quote Section -->
  <section class="quote-section py-20">
    <div class="quote-bg"></div>
    
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[3]} bind:this={sections[3]}>
        <div class="quote-content">
          <h2 class="text-3xl font-bold mb-6 text-white">{c.quoteTitle}</h2>
          <div class="section-divider"></div>
          <p class="quote-text">
            {c.quote}
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Agenda section -->
  <section id="agenda" class="section" class:visible={visible[4]} bind:this={sections[4]}>
    <Agenda year={2025} />
  </section>
  
  <!-- Jury & Mentors Section -->
  <section class="jury-section py-16" id="jury">
    <div class="brain-pattern"></div>
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[5]} bind:this={sections[5]}>
        <div class="section-title">
          <h2>{c.juryTitle}</h2>
          <p>{c.jurySubtitle}</p>
          <div class="section-divider"></div>
        </div>
        
        <div class="jury-grid max-w-6xl mx-auto">
          {#each juryMembers as member, i}
            <div 
              class="jury-card"
              in:fly={{ y: 30, duration: 800, delay: 200 * i }}
            >
              <img src={member.image} alt={member.name} class="jury-image" />
              <div class="jury-content">
                <h3 class="jury-name">{member.name}</h3>
                <p class="jury-role">{member.role}</p>
                <p class="jury-bio">{member.bio}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- Categories section -->
  <section class="section" class:visible={visible[6]} bind:this={sections[6]}>
    <CategorySection year={2025} />
  </section>
  
  <!-- Partners section -->
  <section class="section" class:visible={visible[7]} bind:this={sections[7]}>
    <Partners year={2025} />
  </section>
  
  <!-- FAQ section -->
  <section class="section" class:visible={visible[8]} bind:this={sections[8]}>
    <Faq year={2025} />
  </section>
  
  <!-- Contact section -->
  <section class="section" class:visible={visible[9]} bind:this={sections[9]}>
    <ContactSection />
  </section>

  <!-- Registration CTA -->
  <div id="register" class="flex flex-col items-center text-center  section" class:visible={visible[10]} bind:this={sections[10]}>
    <!-- <UnderlinedHeader title={c.registrationTitle} />
    <JoinUsSection year={2025} /> -->
    <RegisterSection 
  visible={visible}
  sections={sections}
  sectionIndex={10}
  c={c}
/>

    
  </div>
</div>