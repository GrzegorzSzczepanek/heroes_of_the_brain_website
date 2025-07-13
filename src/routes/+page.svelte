<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
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
      if (target && target.href && !target.href.includes('mailto:')) {
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

  /* Override any existing styles */
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

  .footer {
    text-align: center;
    padding: 2rem 0;
    opacity: 0.7;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 3rem;
  }

  .footer p {
    color: rgba(255, 255, 255, 0.7) !important;
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
  }
</style>

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
    <h1>Heroes of the Brain</h1>
    <h2 class="subtitle">2025</h2>
    <p class="subtitle">Odkrywaj przyszłość interakcji mózg-komputer</p>
    
    <div class="coming-soon">Nadchodzi wkrótce!</div>
  </div>

  <div class="info-grid">
    <div class="info-card">
      <div class="info-icon">📅</div>
      <div class="info-title">Data Wydarzenia</div>
      <div class="info-text">18-20 listopada 2025<br/>Politechnika Wrocławska, D-21</div>
    </div>

    <div class="info-card">
      <div class="info-icon">🎯</div>
      <div class="info-title">Cel Hackathonu</div>
      <div class="info-text">Rozwijanie zaawansowanych interfejsów mózg-komputer (BCI) poprzez tworzenie innowacyjnych systemów opartych na sztucznej inteligencji</div>
    </div>

    <div class="info-card">
      <div class="info-icon">🧠</div>
      <div class="info-title">Tematyka</div>
      <div class="info-text">Brain-Computer Interfaces, Neuroinformatyka, AI, Sterowanie myślami, Wirtualne klawiatury, Protezy</div>
    </div>

    <div class="info-card">
      <div class="info-icon">👥</div>
      <div class="info-title">Dla Kogo</div>
      <div class="info-text">Entuzjaści neuroinformatyki, programiści, pasjonaci AI, studenci, profesjonaliści - wszyscy zainteresowani przyszłością BCI</div>
    </div>
  </div>

  <div class="registration-section">
    <h2 class="section-title">Zapisy</h2>
    <div class="registration-info">
      <div class="info-icon">📝</div>
      <p class="registration-text">Zapisy jeszcze nie ruszyły!</p>
      <p class="registration-subtext">Będziemy informować o otwarciu rejestracji na naszych kanałach społecznościowych</p>
    </div>
  </div>

  <div class="countdown-section">
    <h2 class="section-title">Odliczanie do hackathonu</h2>
    <div class="countdown-container">
      <div class="countdown-item">
        <div class="countdown-number" id="days">000</div>
        <div class="countdown-label">Dni</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="hours">00</div>
        <div class="countdown-label">Godzin</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="minutes">00</div>
        <div class="countdown-label">Minut</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-number" id="seconds">00</div>
        <div class="countdown-label">Sekund</div>
      </div>
    </div>
  </div>

  <div class="contact-info">
    <h2 class="contact-title">Organizatorzy</h2>
    
    <div class="organizers">
      <div class="organizer">Koło Naukowe "Neuron"</div>
      <div class="organizer">Samorząd WIT PWR</div>
    </div>
    
    <div class="contact-details">
      <p><strong>Kontakt:</strong> <a href="mailto:heroesofthebrain.help@gmail.com" style="color: #E61D9F !important;">heroesofthebrain.help@gmail.com</a></p>
      <p><strong>Lokalizacja:</strong> Politechnika Wrocławska, Budynek D-21</p>
      <p><strong>Adres:</strong> plac Grunwaldzki 11, 50-378 Wrocław, Polska</p>
    </div>
  </div>

  <div class="footer">
    <p>Obserwuj nas na social mediach, aby być na bieżąco!</p>
  </div>
</div>