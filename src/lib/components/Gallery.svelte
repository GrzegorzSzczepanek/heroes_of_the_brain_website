<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
  
    // Base path and image configuration
    const basePath = "/images/galeria/";
    const imageNames = [
      "Neurohackathon-10.jpg", "Neurohackathon-160.jpg", "Neurohackathon-189.jpg",
      "Neurohackathon-209.jpg", "Neurohackathon-231.jpg", "Neurohackathon-254.jpg",
      "Neurohackathon-78.jpg", "Neurohackathon-105.jpg", "Neurohackathon-167.jpg",
      "Neurohackathon-19.jpg", "Neurohackathon-213.jpg", "Neurohackathon-238.jpg",
      "Neurohackathon-256.jpg", "Neurohackathon-79.jpg", "Neurohackathon-112.jpg",
      "Neurohackathon-168.jpg", "Neurohackathon-190.jpg", "Neurohackathon-214.jpg",
      "Neurohackathon-242.jpg", "Neurohackathon-257.jpg", "Neurohackathon-84.jpg",
      "Neurohackathon-136.jpg", "Neurohackathon-169.jpg", "Neurohackathon-191.jpg",
      "Neurohackathon-216.jpg", "Neurohackathon-243.jpg", "Neurohackathon-258.jpg",
      "Neurohackathon-98.jpg", "Neurohackathon-138.jpg", "Neurohackathon-175.jpg",
      "Neurohackathon-196.jpg", "Neurohackathon-219.jpg", 
      "Neurohackathon-27.jpg", "Neurohackathon-99.jpg", "Neurohackathon-151.jpg",
      "Neurohackathon-183.jpg", "Neurohackathon-202.jpg", "Neurohackathon-222.jpg",
      "Neurohackathon-248.jpg", "Neurohackathon-51.jpg", "Neurohackathon-152.jpg",
      "Neurohackathon-184.jpg", "Neurohackathon-207.jpg", "Neurohackathon-226.jpg",
      "Neurohackathon-251.jpg", "Neurohackathon-57.jpg", "Neurohackathon-153.jpg",
      "Neurohackathon-186.jpg", "Neurohackathon-208.jpg", "Neurohackathon-227.jpg",
      "Neurohackathon-252.jpg", "Neurohackathon-63.jpg"
    ];
  
    // Create full image paths
    const images = imageNames.map(name => basePath + name);
    
    // State variables
    let isLightboxOpen = false;
    let currentImageIndex = 0;
    let featuredImages = [];
    let featuredIndex = 0;
    let isLoaded = false;
    
    // Pagination for gallery (when many images)
    const IMAGES_PER_PAGE = 15;
    let currentPage = 0;
    
    // Calculate total pages
    $: totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);
    
    // Get current page of images
    $: currentPageImages = images.slice(
      currentPage * IMAGES_PER_PAGE,
      (currentPage + 1) * IMAGES_PER_PAGE
    );
  
    // Initialize on component mount
    onMount(() => {
      // Select 5 random images for featured section
      featuredImages = ["/images/galeria/Neurohackathon-10.jpg",
      "/images/galeria/Neurohackathon-209.jpg", "/images/galeria/Neurohackathon-231.jpg", 
      "/images/galeria/Neurohackathon-78.jpg", "/images/galeria/Neurohackathon-167.jpg",]
      isLoaded = true;
      
      // Preload featured images for smoother display
      featuredImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    });
  
    // Helper to get random images from the array
    function getRandomImages(array, count) {
      const shuffled = [...array].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, Math.min(count, array.length));
    }
  
    // Lightbox controls
    function openLightbox(index) {
      currentImageIndex = index;
      isLightboxOpen = true;
      // Prevent scrolling when lightbox is open
      document.body.style.overflow = "hidden";
    }
  
    function closeLightbox() {
      isLightboxOpen = false;
      document.body.style.overflow = "";
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
  
    // Featured carousel controls
    function nextFeatured() {
      featuredIndex = (featuredIndex + 1) % featuredImages.length;
    }
  
    function prevFeatured() {
      featuredIndex = (featuredIndex - 1 + featuredImages.length) % featuredImages.length;
    }
  
    // Pagination controls
    function nextPage() {
      if (currentPage < totalPages - 1) currentPage++;
    }
  
    function prevPage() {
      if (currentPage > 0) currentPage--;
    }
  
    function goToPage(page) {
      currentPage = page;
    }
  
    // Handle keyboard navigation
    function handleKeydown(event) {
      if (isLightboxOpen) {
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowRight") nextImage();
        if (event.key === "ArrowLeft") prevImage();
      }
    }
    
    // Auto-advance featured images every 5 seconds
    let featuredInterval;
    onMount(() => {
      featuredInterval = setInterval(() => {
        if (!document.hidden) {
          nextFeatured();
        }
      }, 5000);
      
      return () => {
        clearInterval(featuredInterval);
      };
    });
  </script>
  
  <svelte:window on:keydown={handleKeydown}/>
  
  <section class="gallery-container mx-auto px-4 max-w-7xl">
    <h2 class="text-3xl font-bold text-purple-900 dark:text-purple-300 mb-6 sm:mb-8">Neurohackathon 2024</h2>
  
    <!-- Featured Images Section with 16:9 Aspect Ratio -->
    <div class="mb-8 sm:mb-12">
      <div class="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg" style="aspect-ratio: 16/9;">
        <!-- Featured image navigation arrows -->
        <button 
          class="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black/30 hover:bg-black/50 rounded-full shadow text-white transition-all z-10 backdrop-blur-sm"
          on:click={prevFeatured}
          aria-label="Previous featured image">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          class="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-black/30 hover:bg-black/50 rounded-full shadow text-white transition-all z-10 backdrop-blur-sm"
          on:click={nextFeatured}
          aria-label="Next featured image">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Featured images -->
        {#if isLoaded && featuredImages.length > 0}
          {#each featuredImages as image, i}
            {#if i === featuredIndex}
              <div 
                class="absolute inset-0 w-full h-full"
                in:fade={{ duration: 800 }}
                out:fade={{ duration: 500 }}
              >
                <img 
                  src={image} 
                  alt="Neurohackathon 2024 featured image" 
                  class="w-full h-full object-cover"
                  on:click={() => openLightbox(images.indexOf(image))}
                />
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5">
                  <span class="text-white font-medium">Neurohackathon 2024</span>
                </div>
              </div>
            {/if}
          {/each}
        {/if}
        
        <!-- Indicator dots -->
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 sm:space-x-3">
          {#each featuredImages as _, i}
            <button
              class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all {i === featuredIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}"
              on:click={() => featuredIndex = i}
              aria-label={`Go to featured image ${i + 1}`}
            ></button>
          {/each}
        </div>
      </div>
    </div>
  
    <!-- Main Gallery Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
      {#each currentPageImages as image, i}
        <div
          class="aspect-square rounded-lg overflow-hidden cursor-pointer relative group shadow hover:shadow-md"
          on:click={() => openLightbox(currentPage * IMAGES_PER_PAGE + i)}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && openLightbox(currentPage * IMAGES_PER_PAGE + i)}
        >
          <img
            src={image}
            alt={`Neurohackathon 2024 gallery image ${currentPage * IMAGES_PER_PAGE + i + 1}`}
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-3">
            <!-- <span class="text-white text-sm sm:text-base font-medium">Image {currentPage * IMAGES_PER_PAGE + i + 1}</span> -->
          </div>
        </div>
      {/each}
    </div>
  
    <!-- Pagination Controls (only show if needed) -->
    {#if totalPages > 1}
      <div class="mt-8 flex justify-center items-center space-x-1 sm:space-x-2">
        <button 
          class="px-3 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          on:click={prevPage}
          disabled={currentPage === 0}
          aria-label="Previous page">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <!-- Page numbers (show up to 5 page links) -->
        {#each Array(totalPages).fill().map((_, i) => i) as page}
          {#if page === 0 || page === totalPages - 1 || (page >= currentPage - 1 && page <= currentPage + 1)}
            <button 
              class="px-3 py-1 rounded-lg {page === currentPage ? 'bg-purple-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}"
              on:click={() => goToPage(page)}>
              {page + 1}
            </button>
          {:else if (page === currentPage - 2 && currentPage > 2) || (page === currentPage + 2 && currentPage < totalPages - 3)}
            <span class="px-1">...</span>
          {/if}
        {/each}
        
        <button 
          class="px-3 py-2 bg-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          on:click={nextPage}
          disabled={currentPage === totalPages - 1}
          aria-label="Next page">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    {/if}
  </section>
  
  <!-- Lightbox Modal -->
  {#if isLightboxOpen}
    <div
      class="fixed inset-0 bg-black/95 z-50 flex justify-center items-center p-4"
      on:click={closeLightbox}
      role="dialog"
      aria-modal="true"
      transition:fade={{ duration: 200 }}
    >
      <button
        class="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-20"
        on:click|stopPropagation={closeLightbox}
        aria-label="Close image view"
      >
        &times;
      </button>
  
      <button
        class="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-10"
        on:click|stopPropagation={prevImage}
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        class="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-10"
        on:click|stopPropagation={nextImage}
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
  
      <div
        class="relative max-w-5xl max-h-full"
        on:click|stopPropagation
      >
        <img
          src={images[currentImageIndex]}
          alt={`Enlarged gallery view of image ${currentImageIndex + 1}`}
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-center">
          <p class="text-lg font-medium">Image {currentImageIndex + 1} of {images.length}</p>
        </div>
      </div>
    </div>
  {/if}
  
  <style>
    /* Smooth hover transitions */
    .group:hover img {
      transform: scale(1.05);
    }
    
    img {
      transition: transform 0.5s ease, opacity 0.3s ease;
    }
    
    /* Smooth scrolling for the page */
    :global(html) {
      scroll-behavior: smooth;
    }
    
    /* Featured image container */
    .gallery-container h2 {
      color: #8b5cf6;
    }
  </style>