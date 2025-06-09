<script>
  import { derived } from "svelte/store";
  import { fade, slide } from "svelte/transition";
  export let category;
  import { isPolish } from "../../stores/languageStore";

  let isExpanded = false;
  let isHovered = false;

  const showMoreText = derived(isPolish, $isPolish => $isPolish ? "Rozwiń" : "Show more");
  const showLessText = derived(isPolish, $isPolish => $isPolish ? "Zwiń" : "Show less");

  function toggle(e) {
    e.stopPropagation();
    isExpanded = !isExpanded;
  }
  
  function setHover(value) {
    isHovered = value;
  }
</script>

<style>
  .category-card {
    background: linear-gradient(180deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    /* border: 1px solid; */
    /* border-image: linear-gradient(to bottom, rgba(139, 92, 246, 0.7), rgba(67, 56, 202, 0.3)) 1; */
    border-radius: 1rem;
  }
  
  .category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(124, 58, 237, 0.25);
  }
  
  .card-header {
    position: relative;
    padding: 1.25rem 1rem;
    background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
    overflow: hidden;
  }
  
  .card-header::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
  
  .status-badge {
    position: relative;
    background: linear-gradient(90deg, #0d9488 0%, #14b8a6 100%);
    box-shadow: 0 4px 12px rgba(13, 148, 136, 0.3);
    transform: translateY(-6px);
    z-index: 2;
  }
  
  .content-area {
    padding: 1.5rem;
    position: relative;
  }
  
  .category-description {
    line-height: 1.7;
    color: rgba(229, 231, 235, 0.85);
    position: relative;
  }
  
  .neural-decoration {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    opacity: 0.05;
    pointer-events: none;
  }
  
  .toggle-button {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    margin-left: -0.75rem;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    color: #a78bfa;
    font-weight: 500;
  }
  
  .toggle-button:hover {
    background-color: rgba(167, 139, 250, 0.1);
    color: #c4b5fd;
  }
  
  .toggle-icon {
    margin-left: 0.375rem;
    transition: transform 0.3s ease;
  }
  
  .rotate {
    transform: rotate(180deg);
  }
  
  .glowing-border {
    position: absolute;
    inset: 0;
    border-radius: 1rem;
    padding: 1px;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0) 50%, rgba(139, 92, 246, 0.3) 100%);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .show-glow {
    opacity: 1;
  }
</style>

<div 
  class="category-card w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-8"
  on:mouseenter={() => setHover(true)}
  on:mouseleave={() => setHover(false)}
>
  <!-- Glowing border effect when hovered -->
  <div class="glowing-border" class:show-glow={isHovered}></div>
  
  <!-- Neural network decoration -->
  <svg class="neural-decoration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="4" fill="white" />
    <circle cx="80" cy="40" r="4" fill="white" />
    <circle cx="140" cy="20" r="4" fill="white" />
    <circle cx="50" cy="80" r="4" fill="white" />
    <circle cx="110" cy="90" r="4" fill="white" />
    <circle cx="170" cy="70" r="4" fill="white" />
    <circle cx="30" cy="130" r="4" fill="white" />
    <circle cx="90" cy="150" r="4" fill="white" />
    <circle cx="150" cy="120" r="4" fill="white" />
    
    <line x1="20" y1="20" x2="80" y2="40" stroke="white" stroke-width="1" />
    <line x1="80" y1="40" x2="140" y2="20" stroke="white" stroke-width="1" />
    <line x1="20" y1="20" x2="50" y2="80" stroke="white" stroke-width="1" />
    <line x1="80" y1="40" x2="50" y2="80" stroke="white" stroke-width="1" />
    <line x1="80" y1="40" x2="110" y2="90" stroke="white" stroke-width="1" />
    <line x1="140" y1="20" x2="110" y2="90" stroke="white" stroke-width="1" />
    <line x1="140" y1="20" x2="170" y2="70" stroke="white" stroke-width="1" />
    <line x1="50" y1="80" x2="30" y2="130" stroke="white" stroke-width="1" />
    <line x1="110" y1="90" x2="90" y2="150" stroke="white" stroke-width="1" />
    <line x1="110" y1="90" x2="150" y2="120" stroke="white" stroke-width="1" />
    <line x1="170" y1="70" x2="150" y2="120" stroke="white" stroke-width="1" />
  </svg>
  
  <!-- Category header -->
  <div class="card-header">
    <h3 class="text-xl md:text-2xl font-bold text-white text-center">
      {category.title}
    </h3>
  </div>
  
  <!-- Status badge -->
  <div class="mx-auto status-badge w-2/3 text-center text-sm md:text-base font-bold py-1.5 px-4 rounded-full shadow text-white">
    OPEN TASKS
  </div>
  
  <!-- Content area -->
  <div class="content-area">
    <!-- Description with expand/collapse -->
    <div class="category-description">
      {#if isExpanded}
        <p in:fade={{ duration: 300 }}>
          {category.description}
        </p>
      {:else}
        <p>
          {category.description.slice(0, 100)}...
        </p>
      {/if}
    </div>
    
    <!-- Toggle button with icon -->
    <button 
      class="toggle-button mt-3"
      on:click={toggle}
      aria-expanded={isExpanded}
    >
      <span>{isExpanded ? $showLessText : $showMoreText}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4 toggle-icon" 
        class:rotate={isExpanded}
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>