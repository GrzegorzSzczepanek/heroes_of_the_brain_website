<script>
    import UnderlinedHeader from "./UnderlinedHeader.svelte";
    import JoinUsSection from "./JoinUsSection.svelte";
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    // Props needed for section visibility system
    export let visible = [];
    export let sections = [];
    export let sectionIndex = 10; // Default to 10 but can be overridden
    
    // Content localization
    export let c = {}; // Content object with translated text
    
    let isVisible = false;
    
    onMount(() => {
      setTimeout(() => {
        isVisible = true;
      }, 200);
    });
  </script>
  
  <style>
    .register-section {
      position: relative;
      overflow: hidden;
      width: 100%;
      /* padding: 4rem 0 6rem; */
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .content-container {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 1200px;
      padding: 0 1rem;
    }
    
    .neural-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.04;
      pointer-events: none;
    }
    
    .neural-node {
      position: absolute;
      width: 3px;
      height: 3px;
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
    
    .brain-pulse {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
      animation: pulse 15s infinite ease-in-out;
      opacity: 0.3;
      filter: blur(40px);
      z-index: 1;
    }
    
    @keyframes pulse {
      0% { transform: scale(0.8); opacity: 0.2; }
      50% { transform: scale(1.2); opacity: 0.1; }
      100% { transform: scale(0.8); opacity: 0.2; }
    }
    
    /* Horizontal wave decoration */
    .wave-decoration {
      position: absolute;
      width: 100vw;
      height: 120px;
      top: 0;
      left: 0;
      opacity: 0.04;
      z-index: 1;
    }
  
    .wave-bottom {
      top: auto;
      bottom: 0;
      transform: rotate(180deg);
    }
  </style>
  
  <section 
    id="register" 
    class="register-section section" 
    class:visible={visible[sectionIndex]} 
    bind:this={sections[sectionIndex]}
  >
    <!-- Neural background decoration -->
    <div class="neural-bg">
      <!-- Neural nodes -->
      <div class="neural-node" style="top: 15%; left: 10%;"></div>
      <div class="neural-node" style="top: 25%; left: 30%;"></div>
      <div class="neural-node" style="top: 10%; left: 50%;"></div>
      <div class="neural-node" style="top: 30%; left: 70%;"></div>
      <div class="neural-node" style="top: 20%; left: 90%;"></div>
      <div class="neural-node" style="top: 60%; left: 5%;"></div>
      <div class="neural-node" style="top: 70%; left: 25%;"></div>
      <div class="neural-node" style="top: 80%; left: 45%;"></div>
      <div class="neural-node" style="top: 65%; left: 65%;"></div>
      <div class="neural-node" style="top: 75%; left: 85%;"></div>
      
      <!-- Neural connections -->
      <div class="neural-connection" style="top: 15%; left: 10%; width: 250px; transform: rotate(15deg);"></div>
      <div class="neural-connection" style="top: 25%; left: 30%; width: 220px; transform: rotate(-10deg);"></div>
      <div class="neural-connection" style="top: 10%; left: 50%; width: 230px; transform: rotate(20deg);"></div>
      <div class="neural-connection" style="top: 30%; left: 70%; width: 210px; transform: rotate(-15deg);"></div>
      <div class="neural-connection" style="top: 60%; left: 5%; width: 230px; transform: rotate(25deg);"></div>
      <div class="neural-connection" style="top: 70%; left: 25%; width: 220px; transform: rotate(-5deg);"></div>
      <div class="neural-connection" style="top: 80%; left: 45%; width: 200px; transform: rotate(10deg);"></div>
      <div class="neural-connection" style="top: 65%; left: 65%; width: 240px; transform: rotate(-20deg);"></div>
    </div>
    
    <!-- Brain pulse effects -->
    <div class="brain-pulse" style="top: 20%; left: 15%; animation-delay: 0s;"></div>
    <div class="brain-pulse" style="top: 70%; right: 10%; animation-delay: 5s;"></div>
    
    <!-- Wave decorations -->
    <svg class="wave-decoration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
      <path fill="#ffffff" fill-opacity="1" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    
    <svg class="wave-decoration wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
      <path fill="#ffffff" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,80C672,85,768,107,864,112C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    
    <div class="content-container flex flex-col items-center text-center">
      {#if isVisible}
        <div in:fade={{ duration: 600 }}>
          <UnderlinedHeader title={c.registrationTitle} />
        </div>
        
        <div class="w-full " in:fly={{ y: 20, duration: 800, delay: 300 }}>
          <JoinUsSection year={2025} />
        </div>
      {/if}
    </div>
  </section>