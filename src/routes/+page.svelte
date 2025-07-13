<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { writable } from 'svelte/store';
  
  // Language store
  const isPolish = writable(true);
  
  // Translations
  const translations = {
    pl: {
      title: "Heroes of the Brain",
      subtitle: "2025",
      description: "Odkrywaj przyszłość interakcji mózg-komputer",
      comingSoon: "Nadchodzi wkrótce!",
      eventDate: "Data Wydarzenia",
      eventDateText: "18-20 listopada 2025\nPolitechnika Wrocławska, D-21",
      goal: "Cel Hackathonu",
      goalText: "Rozwijanie zaawansowanych interfejsów mózg-komputer (BCI) poprzez tworzenie innowacyjnych systemów opartych na sztucznej inteligencji",
      topic: "Tematyka",
      topicText: "Brain-Computer Interfaces, Neuroinformatyka, AI, Sterowanie myślami, Wirtualne klawiatury, Protezy",
      audience: "Dla Kogo",
      audienceText: "Entuzjaści neuroinformatyki, programiści, pasjonaci AI, studenci, profesjonaliści - wszyscy zainteresowani przyszłością BCI",
      registration: "Zapisy",
      registrationText: "Zapisy jeszcze nie ruszyły!",
      registrationSubtext: "Będziemy informować o otwarciu rejestracji na naszych kanałach społecznościowych",
      countdown: "Odliczanie do hackathonu",
      days: "Dni",
      hours: "Godzin",
      minutes: "Minut",
      seconds: "Sekund",
      organizers: "Organizatorzy",
      contact: "Kontakt:",
      location: "Lokalizacja:",
      address: "Adres:"
    },
    en: {
      title: "Heroes of the Brain",
      subtitle: "2025",
      description: "Discover the future of brain-computer interaction",
      comingSoon: "Coming Soon!",
      eventDate: "Event Date",
      eventDateText: "November 18-20, 2025\nWrocław University of Technology, D-21",
      goal: "Hackathon Goal",
      goalText: "Developing advanced brain-computer interfaces (BCI) by creating innovative systems based on artificial intelligence models",
      topic: "Topics",
      topicText: "Brain-Computer Interfaces, Neuroinformatics, AI, Mind control, Virtual keyboards, Prosthetics",
      audience: "For Whom",
      audienceText: "Neuroinformatics enthusiasts, programmers, AI enthusiasts, students, professionals - everyone interested in the future of BCI",
      registration: "Registration",
      registrationText: "Registration hasn't started yet!",
      registrationSubtext: "We will inform about registration opening on our social media channels",
      countdown: "Countdown to hackathon",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      organizers: "Organizers",
      contact: "Contact:",
      location: "Location:",
      address: "Address:"
    }
  };

  let currentLang = 'pl';
  $: t = translations[currentLang];

  function toggleLanguage() {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    isPolish.set(currentLang === 'pl');
  }
  
  // Block navigation and routing
  onMount(() => {
    if (!browser) return;
    
    // Countdown functionality
    const targetDate = new Date('2025-11-18T09:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
      }
    };
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Prevent default navigation
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href) {
        // Allow social media links, email links, and external links
        if (target.href.includes('mailto:') || 
            target.href.includes('facebook.com') || 
            target.href.includes('instagram.com') || 
            target.href.includes('linkedin.com') ||
            target.target === '_blank') {
          return; // Allow these links to work normally
        }
        e.preventDefault();
        e.stopPropagation();
      }
    };
    
    // Block browser navigation
    const handlePopState = (e) => {
      e.preventDefault();
      window.history.pushState(null, '', window.location.pathname);
    };
    
    document.addEventListener('click', handleClick, true);
    window.addEventListener('popstate', handlePopState);
    
    // Push initial state to prevent back navigation
    window.history.pushState(null, '', window.location.pathname);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('popstate', handlePopState);
      clearInterval(countdownInterval);
    };
  });
</script>

<svelte:head>
  <title>Heroes of the Brain 2025 - Wkrótce</title>
  <meta name="description" content="Hackathon Heroes of the Brain 2025 - 18-20 listopada, Politechnika Wrocławska. Odkrywaj przyszłość interfejsów mózg-komputer!" />
</svelte:head>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #36454F 0%, #52378B 100%) !important;
    color: white;
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  :global(*) {
    color: white !important;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    position: relative;
    z-index: 10;
  }

  .hero-section {
    text-align: center;
    padding: 4rem 0;
  }

  .logo {
    width: 120px;
    height: 120px;
    margin: 0 auto 2rem;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #52378B !important;
    font-weight: bold;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #E61D9F, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    opacity: 0.9;
    color: white !important;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 3rem 0;
  }

  .info-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-5px);
  }

  .info-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .info-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #E61D9F !important;
  }

  .info-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9) !important;
    white-space: pre-line;
  }

  .registration-section {
    background: rgba(255, 193, 7, 0.2);
    border: 2px solid #ffc107;
    border-radius: 20px;
    padding: 3rem;
    margin: 3rem 0;
    text-align: center;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: white !important;
  }

  .registration-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .registration-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffc107 !important;
    margin: 1rem 0;
  }

  .registration-subtext {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9) !important;
    margin-bottom: 0;
  }

  .countdown-section {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 3rem;
    margin: 3rem 0;
    text-align: center;
  }

  .countdown-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .countdown-item {
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid #E61D9F;
    border-radius: 15px;
    padding: 1.5rem;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .countdown-number {
    font-size: 3rem;
    font-weight: bold;
    color: #E61D9F !important;
    font-family: 'Courier New', monospace;
  }

  .countdown-label {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: white !important;
    text-transform: uppercase;
    font-weight: bold;
  }

  .coming-soon {
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    color: white !important;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    margin: 2rem 0;
    animation: pulse 2s infinite;
    cursor: default;
    border: none;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  .contact-info {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    margin: 3rem 0;
    text-align: center;
  }

  .contact-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: white !important;
  }

  .organizers {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .organizer {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 1rem 2rem;
    font-weight: bold;
    color: white !important;
  }

  .contact-details {
    margin-top: 2rem;
  }

  .contact-details p {
    margin: 0.5rem 0;
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .language-switcher {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 100;
    display: flex;
    gap: 0.5rem;
  }

  .lang-btn {
    width: 50px;
    height: 35px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
  }

  .lang-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  .lang-btn.active {
    background: #E61D9F;
    border-color: #E61D9F;
  }

  .neural-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
  }

  .neural-node {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    .subtitle {
      font-size: 1.2rem;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
    
    .container {
      padding: 1rem;
    }

    .countdown-container {
      gap: 1rem;
    }

    .countdown-item {
      min-width: 100px;
      padding: 1rem;
    }

    .countdown-number {
      font-size: 2rem;
    }

    .language-switcher {
      top: 1rem;
      right: 1rem;
    }

    .lang-btn {
      width: 45px;
      height: 32px;
      font-size: 0.9rem;
    }
  }
</style>

<!-- Language Switcher -->
<div class="language-switcher">
  <button 
    class="lang-btn {currentLang === 'pl' ? 'active' : ''}" 
    on:click={() => currentLang = 'pl'}
  >
    PL
  </button>
  <button 
    class="lang-btn {currentLang === 'en' ? 'active' : ''}" 
    on:click={() => currentLang = 'en'}
  >
    EN
  </button>
</div>

<!-- Neural network background animation -->
<div class="neural-bg">
  {#each Array(20) as _, i}
    <div 
      class="neural-node" 
      style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation-delay: {Math.random() * 6}s;"
    ></div>
  {/each}
</div>

<div class="container">
  <div class="hero-section">
    <div class="logo">🧠</div>
    <h1>{t.title}</h1>
    <h2 class="subtitle">{t.subtitle}</h2>
    <p class="subtitle">{t.description}</p>
    
    <div class="coming-soon">{t.comingSoon}</div>
  </div>

  <div class="info-grid">
    <div class="info-card">
      <div class="info-icon">📅</div>
      <div class="info-title">{t.eventDate}</div>
      <div class="info-text">{t.eventDateText}</div>
    </div>

    <div class="info-card">
      <div class="info-icon">🎯</div>
      <div class="info-title">{t.goal}</div>
      <div class="info-text">{t.goalText}</div>
    </div>

    <div class="info-card">
      <div class="info-icon">🧠</div>
      <div class="info-title">{t.topic}</div>
      <div class="info-text">{t.topicText}</div>
    </div>

    <div class="info-card">
      <div class="info-icon">👥</div>
      <div class="info-title">{t.audience}</div>
      <div class="info-text">{t.audienceText}</div>
    </div>
  </div>

  <div class="registration-section">
    <h2 class="section-title">{t.registration}</h2>
    <div class="registration-info">
      <div class="info-icon">📝</div>
      <p class="registration-text">{t.registrationText}</p>
      <p class="registration-subtext">{t.registrationSubtext}</p>
    </div>
  </div>

  <div class="countdown-section">
    <h2 class="section-title">{t.countdown}</h2>
    <div class="countdown-container">
      <div class="countdown-item">
        <div class="countdown-number" id="days">000</div>
        <div class="countdown-label">{t.days}</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="hours">00</div>
        <div class="countdown-label">{t.hours}</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="minutes">00</div>
        <div class="countdown-label">{t.minutes}</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="seconds">00</div>
        <div class="countdown-label">{t.seconds}</div>
      </div>
    </div>
  </div>

  <div class="contact-info">
    <h2 class="contact-title">{t.organizers}</h2>
    
    <div class="organizers">
      <div class="organizer">Koło Naukowe "Neuron"</div>
      <div class="organizer">Samorząd WIT PWR</div>
    </div>
    
    <div class="contact-details">
      <p><strong>{t.contact}</strong> <a href="mailto:heroesofthebrain.help@gmail.com" style="color: #E61D9F !important;">heroesofthebrain.help@gmail.com</a></p>
      <p><strong>{t.location}</strong> {currentLang === 'pl' ? 'Politechnika Wrocławska, Budynek D-21' : 'Wrocław University of Technology, Building D-21'}</p>
      <p><strong>{t.address}</strong> {currentLang === 'pl' ? 'plac Grunwaldzki 11, 50-378 Wrocław, Polska' : 'Grunwaldzki Square 11, 50-378 Wrocław, Poland'}</p>
    </div>
  </div>


</div>