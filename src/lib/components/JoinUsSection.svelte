<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const contentPL = {
    imageUrl: "/images/hackaton_title_page.jpg",
    title: "Chcesz wziąć udział?",
    description: `
      Dołącz do nas na nadchodzący hackathon! To doskonała okazja, aby sprawdzić swoje umiejętności, 
      poznać nowych ludzi i pracować nad ekscytującymi projektami BCI. 
      
      Zapisy rozpoczną się wkrótce - śledź nasze media społecznościowe, aby nie przegapić startu rejestracji!
    `,
    buttonText: "Zapisz się",
    buttonSubtext: "Rejestracja zostanie uruchomiona 29 września 2025",
    countdown: {
      days: "Dni",
      hours: "Godz",
      minutes: "Min",
      seconds: "Sek",
      until: "Do rozpoczęcia hackathonu:"
    }
  };

  const contentEN = {
    imageUrl: "/images/hackaton_title_page.jpg",
    title: "Would you like to enter?",
    description: `
      Join us for the upcoming hackathon! It's a great opportunity to test your skills, 
      meet new people, and work on exciting BCI projects.
      
      Registration will open soon - follow our social media to be notified when applications start!
    `,
    buttonText: "Register",
    buttonSubtext: "Registration will open on September 29, 2025",
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Min",
      seconds: "Sec",
      until: "Until hackathon starts:"
    }
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;
  let visible = false;

  // Countdown timer setup
  const hackathonDate = new Date('2025-11-29T09:00:00'); // Update with your actual date
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  function updateCountdown() {
    const now = new Date();
    const difference = hackathonDate - now;
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  content.subscribe(value => {
    currentContent = value;
  });

  onMount(() => {
    visible = true;
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  });
</script>

<style>
  .register-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: relative;
    overflow: hidden;
    border-radius: 20px;
  }
  
  .neural-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.04;
    pointer-events: none;
  }
  
  .neural-node {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50%;
  }
  
  .neural-connection {
    position: absolute;
    height: 1px;
    background-color: white;
    transform-origin: 0 0;
    opacity: 0.5;
  }
  
  .image-container {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  .image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(139, 92, 246, 0.4),
      rgba(30, 41, 59, 0.7)
    );
    z-index: 1;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1);
    transition: transform 1s ease;
  }
  
  .image-container:hover img {
    transform: scale(1.05);
  }
  
  .image-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid rgba(139, 92, 246, 0.3);
    border-radius: 20px;
    z-index: 2;
  }
  
  .content-container {
    position: relative;
    z-index: 1;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(139, 92, 246, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .content-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #8b5cf6, #6366f1, #8b5cf6);
  }
  
  .section-title {
    margin: 0;
    background: linear-gradient(90deg, #c4b5fd, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 700;
  }
  
  .description {
    color: #e2e8f0;
    line-height: 1.7;
    font-size: 1.1rem;
    white-space: pre-line; /* To preserve line breaks in the description */
  }
  
  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    color: white;
    font-weight: 600;
    padding: 0.9rem 2rem;
    border-radius: 9999px;
    text-align: center;
    position: relative;
    overflow: hidden;
    cursor: default; /* Changed from pointer since it's not clickable yet */
    box-shadow: 0 8px 20px rgba(109, 40, 217, 0.3);
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  /* No hover effects since it's not clickable */
  
  .button-subtext {
    font-size: 0.8rem;
    color: #a5b4fc;
    margin-top: 0.75rem;
    text-align: center;
    opacity: 0.8;
  }
  
  /* Notification badge */
  .notification-badge {
    display: inline-block;
    background-color: #ef4444; /* Red */
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    margin-left: 0.5rem;
    animation: pulse-badge 2s infinite;
    vertical-align: middle;
  }
  
  @keyframes pulse-badge {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  .countdown-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
  }
  
  .countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60px;
  }
  
  .countdown-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: #8b5cf6;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 12px;
    padding: 0.5rem;
    min-width: 60px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .countdown-label {
    font-size: 0.8rem;
    color: #a5b4fc;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .countdown-title {
    color: #e2e8f0;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .brain-pulse {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
    animation: pulse 15s infinite ease-in-out;
    opacity: 0.4;
    filter: blur(40px);
    z-index: 0;
  }
  
  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.1; }
    100% { transform: scale(0.8); opacity: 0.3; }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .countdown-container {
      gap: 0.5rem;
    }
    
    .countdown-value {
      font-size: 1.4rem;
      min-width: 50px;
    }
    
    .countdown-label {
      font-size: 0.7rem;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    
    .description {
      font-size: 1rem;
    }
  }

   .pointer {
      cursor: pointer;
    }
</style>

<section class="py-16 px-4" id="zapisy">
  <div class="max-w-6xl mx-auto">
    {#if visible}
      <div 
        class="register-section"
        in:fade={{ duration: 800 }}
      >
        <!-- Neural background -->
        <div class="neural-bg">
          <!-- Neural nodes and connections -->
          <div class="neural-node" style="top: 10%; left: 20%;"></div>
          <div class="neural-node" style="top: 30%; left: 10%;"></div>
          <div class="neural-node" style="top: 25%; left: 40%;"></div>
          <div class="neural-node" style="top: 15%; left: 60%;"></div>
          <div class="neural-node" style="top: 35%; left: 80%;"></div>
          <div class="neural-node" style="top: 50%; left: 15%;"></div>
          <div class="neural-node" style="top: 60%; left: 35%;"></div>
          <div class="neural-node" style="top: 70%; left: 70%;"></div>
          <div class="neural-node" style="top: 85%; left: 25%;"></div>
          <div class="neural-node" style="top: 80%; left: 60%;"></div>
          
          <!-- Neural connections -->
          <div class="neural-connection" style="top: 10%; left: 20%; width: 250px; transform: rotate(20deg);"></div>
          <div class="neural-connection" style="top: 30%; left: 10%; width: 350px; transform: rotate(-10deg);"></div>
          <div class="neural-connection" style="top: 25%; left: 40%; width: 230px; transform: rotate(30deg);"></div>
          <div class="neural-connection" style="top: 15%; left: 60%; width: 260px; transform: rotate(-20deg);"></div>
          <div class="neural-connection" style="top: 50%; left: 15%; width: 250px; transform: rotate(40deg);"></div>
          <div class="neural-connection" style="top: 60%; left: 35%; width: 380px; transform: rotate(-15deg);"></div>
        </div>
        
        <!-- Brain pulse effect -->
        <div class="brain-pulse" style="top: 30%; left: 20%; animation-delay: 0s;"></div>
        <div class="brain-pulse" style="bottom: 20%; right: 10%; animation-delay: 5s;"></div>
        
        <div class="flex flex-col md:flex-row items-stretch p-4 md:p-8">
          <!-- Image side -->
          <div 
            class="md:w-1/2 p-4 md:p-6" 
            in:fly={{ x: -30, duration: 800, delay: 200 }}
          >
            <div class="image-container h-full">
              <img src={currentContent.imageUrl} alt="Hackathon participants" />
            </div>
          </div>
          
          <!-- Content side -->
          <div 
            class="md:w-1/2 p-4 md:p-6"
            in:fly={{ x: 30, duration: 800, delay: 400 }}
          >
            <div class="content-container h-full p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h2 class="section-title text-3xl md:text-4xl mb-6">{currentContent.title}</h2>
                <p class="description mb-6">{currentContent.description}</p>
              </div>
              
              <!-- Countdown timer -->
              <div>
                <div class="countdown-title">{currentContent.countdown.until}</div>
                <div class="countdown-container">
                  <div class="countdown-item">
                    <div class="countdown-value">{timeLeft.days}</div>
                    <div class="countdown-label">{currentContent.countdown.days}</div>
                  </div>
                  <div class="countdown-item">
                    <div class="countdown-value">{timeLeft.hours}</div>
                    <div class="countdown-label">{currentContent.countdown.hours}</div>
                  </div>
                  <div class="countdown-item">
                    <div class="countdown-value">{timeLeft.minutes}</div>
                    <div class="countdown-label">{currentContent.countdown.minutes}</div>
                  </div>
                  <div class="countdown-item">
                    <div class="countdown-value">{timeLeft.seconds}</div>
                    <div class="countdown-label">{currentContent.countdown.seconds}</div>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 text-center">
                <a href="https://eventownik.solvro.pl/neurohackaton-2025" target="_blank" rel="noopener noreferrer">
                  <div class="cta-button pointer">
                      {currentContent.buttonText}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>