<script>
  import InfoSection from "./InfoSection.svelte";
  import Map from "./Map.svelte";
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<style>
  .contact-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
  
  .contact-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
  }
  
  .content-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  }
  
  @media (min-width: 768px) {
    .content-wrapper {
      flex-direction: row;
      align-items: stretch;
    }
    
    .info-wrapper {
      flex: 1;
    }
    
    .map-wrapper {
      flex: 1;
    }
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #c4b5fd -10%, #8b5cf6 50%, #c4b5fd 110%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 2px 15px rgba(139, 92, 246, 0.3);
    margin-bottom: 1rem;
  }
  
  .glow-effect {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 100px;
    background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
    filter: blur(20px);
    z-index: -1;
  }
</style>

<section class="contact-section" id="contact">
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
    <div class="neural-connection" style="top: 70%; left: 70%; width: 200px; transform: rotate(180deg);"></div>
    <div class="neural-connection" style="top: 85%; left: 25%; width: 320px; transform: rotate(10deg);"></div>
  </div>
  
  <div class="contact-container">
    {#if visible}
      <header class="section-header" in:fade={{ duration: 800 }}>
        <div class="glow-effect"></div>
        <h2 class="section-title">Contact</h2>
      </header>
      
      <div class="content-wrapper">
        <div class="info-wrapper" in:fly={{ y: 30, duration: 800, delay: 200 }}>
          <InfoSection />
        </div>
        
        <div class="map-wrapper" in:fly={{ y: 30, duration: 800, delay: 400 }}>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.9404734219456!2d17.055038176582062!3d51.10955843968897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d537a65c53%3A0xd3d8d644c240d69c!2sStrefa%20Otwartej%20Nauki!5e0!3m2!1spl!2spl!4v1731587787894!5m2!1spl!2spl" />
        </div>
      </div>
    {/if}
  </div>
</section>