<script>
  export let heading;
  export let text;
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade, fly } from 'svelte/transition';
  import { quintOut, cubicOut } from 'svelte/easing';

  let showSidePanel = false;

  const closeText = derived(isPolish, $isPolish => $isPolish ? "Zamknij" : "Close");
  const readMoreText = derived(isPolish, $isPolish => $isPolish ? "Czytaj więcej" : "Read more");

  function toggleSidePanel() {
    showSidePanel = !showSidePanel;
    
    if (showSidePanel) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when panel is open
    } else {
      document.body.style.overflow = ''; // Restore scrolling when panel is closed
    }
  }
  
  // Click on overlay to close
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      toggleSidePanel();
    }
  }
  
  // Escape key to close
  function handleKeydown(event) {
    if (event.key === 'Escape' && showSidePanel) {
      toggleSidePanel();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<style>
  .info-tile {
      background: rgba(30, 41, 59, 0.6);
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 12px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 100%;
      backdrop-filter: blur(4px);
      position: relative;
      cursor: pointer;
  }
  
  .info-tile:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(109, 40, 217, 0.2);
      border-color: rgba(139, 92, 246, 0.3);
  }
  
  .icon-container {
      background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem auto;
      box-shadow: 0 8px 16px -2px rgba(109, 40, 217, 0.3);
  }
  
  .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(5px);
      z-index: 40;
  }
  
  .side-panel {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      max-width: 500px;
      height: 100vh;
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      z-index: 50;
      box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
      overflow-y: auto;
      display: flex;
      flex-direction: column;
  }
  
  .panel-header {
      background: linear-gradient(90deg, #4c1d95, #6d28d9);
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 1;
  }
  
  .panel-content {
      padding: 1.5rem;
      flex-grow: 1;
  }
  
  .panel-footer {
      padding: 1rem 1.5rem;
      background: rgba(30, 41, 59, 0.6);
      display: flex;
      justify-content: flex-end;
      position: sticky;
      bottom: 0;
  }
  
  .close-button {
      background: rgba(255, 255, 255, 0.15);
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      transition: background 0.2s;
  }
  
  .close-button:hover {
      background: rgba(255, 255, 255, 0.25);
  }
  
  .read-more-btn {
      background: linear-gradient(to right, #6d28d9, #4c1d95);
      color: white;
      border: none;
      border-radius: 6px;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      font-weight: 500;
      margin-top: 1rem;
      transition: all 0.2s;
  }
  
  .read-more-btn:hover {
      box-shadow: 0 4px 12px rgba(109, 40, 217, 0.3);
  }
  
  .read-more-icon {
      width: 18px;
      height: 18px;
      margin-left: 0.5rem;
  }
  
  @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
      100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
  }
  
  .pulse-animation {
      animation: pulse 2s infinite;
  }
  
  .neural-line {
      position: absolute;
      height: 100%;
      width: 3px;
      left: 20px;
      top: 0;
      background: linear-gradient(to bottom, 
          rgba(139, 92, 246, 0.7), 
          rgba(139, 92, 246, 0.1) 60%, 
          rgba(139, 92, 246, 0));
  }
  
  .neural-node {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(139, 92, 246, 0.7);
      left: 16.5px;
      box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
  }
  
  .neural-branch {
      position: absolute;
      height: 2px;
      background: linear-gradient(to right, rgba(139, 92, 246, 0.7), rgba(139, 92, 246, 0));
      left: 20px;
  }
</style>

<!-- Info Tile -->
<div class="info-tile p-6" on:click={toggleSidePanel}>
  <div class="icon-container">
      {#if heading.includes("BCI")}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
      {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
      {/if}
  </div>
  
  <div class="text-center">
      <h2 class="text-xl font-bold mb-3 text-purple-200">{heading}</h2>
      <p class="text-gray-300 mb-4 line-clamp-4">{text.slice(0, 120)}...</p>
      
      <button class="read-more-btn pulse-animation mx-auto">
          <span>{$readMoreText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="read-more-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
      </button>
  </div>
</div>

<!-- Side Panel -->
{#if showSidePanel}
  <!-- Backdrop overlay -->
  <div 
      class="overlay" 
      on:click={handleOverlayClick}
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
  ></div>
  
  <!-- Side panel -->
  <aside 
      class="side-panel" 
      in:fly={{ x: '100%', duration: 300, easing: cubicOut }}
      out:fly={{ x: '100%', duration: 250, easing: cubicOut }}
  >
      <!-- Neural network decoration -->
      <div class="neural-line"></div>
      <div class="neural-node" style="top: 100px;"></div>
      <div class="neural-branch" style="top: 104px; width: 40px;"></div>
      <div class="neural-node" style="top: 200px;"></div>
      <div class="neural-branch" style="top: 204px; width: 60px;"></div>
      <div class="neural-node" style="top: 300px;"></div>
      <div class="neural-branch" style="top: 304px; width: 80px;"></div>
      <div class="neural-node" style="top: 400px;"></div>
      <div class="neural-branch" style="top: 404px; width: 50px;"></div>
      
      <div class="panel-header">
          <div class="flex items-center">
              <div class="mr-4 bg-purple-900 p-2 rounded-full">
                  {#if heading.includes("BCI")}
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                  {:else}
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  {/if}
              </div>
              <h2 class="text-2xl font-bold text-white">{heading}</h2>
          </div>
          
          <button class="close-button" on:click={toggleSidePanel} aria-label="Close panel">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
      </div>
      
      <div class="panel-content">
          <div class="text-gray-200 leading-relaxed space-y-4">
              {#each text.split('\n') as paragraph}
                  <p>{paragraph}</p>
              {/each}
          </div>
      </div>
      
      <div class="panel-footer">
          <button 
              class="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-md font-medium transition-colors" 
              on:click={toggleSidePanel}
          >
              {$closeText}
          </button>
      </div>
  </aside>
{/if}