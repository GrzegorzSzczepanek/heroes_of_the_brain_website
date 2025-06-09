<script>
  export let src = '';
  import { onMount } from 'svelte';
  
  let isLoaded = false;
  
  onMount(() => {
    // Small delay to ensure smooth animation
    setTimeout(() => {
      isLoaded = true;
    }, 300);
  });
</script>

<style>
  .map-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 350px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(139, 92, 246, 0.25);
    transition: all 0.3s ease;
  }
  
  .map-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2);
  }
  
  .map-container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 350px;
  }
  
  .map-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 2;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(139, 92, 246, 0.25);
  }
  
  .map-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 30px;
    height: 30px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    animation: pulse 2s infinite ease-in-out;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  .marker-loaded {
    opacity: 1;
  }
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  .map-frame {
    width: 100%;
    height: 100%;
    border: none;
    position: relative;
    z-index: 1;
  }
  
  .map-label {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(30, 41, 59, 0.8);
    color: white;
    padding: 8px 16px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    z-index: 3;
    border: 1px solid rgba(139, 92, 246, 0.3);
  }
  
  .map-label svg {
    margin-right: 6px;
  }
</style>

<div class="map-wrapper">
  <div class="map-container">
    <iframe
      title="Map with the location of the event"
      class="map-frame"
      src={src}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    
    <div class="map-overlay"></div>
    
    <div class="map-label">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Strefa Otwartej Nauki
    </div>
    
    <svg
      class="map-marker"
      class:marker-loaded={isLoaded}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#8b5cf6"
        stroke="white"
        stroke-width="2"
      />
      <circle cx="12" cy="9" r="3" fill="white" />
    </svg>
  </div>
</div>