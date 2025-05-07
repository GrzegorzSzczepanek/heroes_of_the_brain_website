<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let ctaPrimary: string;
    export let ctaSecondary: string;
    export let ctaPrimaryUrl: string = '#';
    export let ctaSecondaryUrl: string = '#';
    export let backgroundPattern: string = 'default';
    
    // Different background patterns
    const patterns = {
      default: 'bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-900',
      'brain-network': 'bg-gradient-to-br from-gray-900 via-purple-950 to-indigo-900'
    };
    
    const bgClass = patterns[backgroundPattern] || patterns.default;
  </script>
  
  <style>
    .hero-section {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    
    .hero-bg-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.15;
      pointer-events: none;
    }
    
    .brain-network-pattern {
      background-image: url('/images/brain-network-pattern.svg');
      background-size: cover;
      background-position: center;
    }
    
    .neural-dots {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
      background-size: 30px 30px;
      opacity: 0.1;
    }
    
    .gradient-button {
      background: linear-gradient(to right, #8b5cf6, #6366f1);
      transition: all 0.3s ease;
    }
    
    .gradient-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px -5px rgba(107, 70, 193, 0.5);
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    .brain-icon {
      animation: float 6s ease-in-out infinite;
    }
    
    .scroll-arrow {
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
  </style>
  
  <section class="hero-section {bgClass}">
    <!-- Background elements -->
    <div class="hero-bg-pattern brain-network-pattern"></div>
    <div class="neural-dots"></div>
    
    <!-- Main content -->
    <div class="container mx-auto px-6 z-10 relative">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p class="text-xl md:text-2xl text-purple-100 mb-8 max-w-lg">
            {subtitle}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaPrimaryUrl}
              class="gradient-button px-8 py-4 text-white font-semibold rounded-full shadow-lg text-center"
            >
              {ctaPrimary}
            </a>
            <a
              href={ctaSecondaryUrl}
              class="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all text-center"
            >
              {ctaSecondary}
            </a>
          </div>
        </div>
        
        <div class="w-full lg:w-1/2 flex justify-center">
          <div class="brain-icon max-w-md">
            <!-- Placeholder for brain illustration - replace with your actual image -->
            <img 
              src="/images/brain-illustration.svg" 
              alt="Brain Illustration" 
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="scroll-arrow flex flex-col items-center">
        <span class="text-white text-sm mb-1">Scroll</span>
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>