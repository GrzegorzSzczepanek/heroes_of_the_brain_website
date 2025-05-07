<script lang="ts">
    import { onMount } from 'svelte';
    
    export let targetDate: string;
    
    let countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    let countdownInterval;
    
    onMount(() => {
      const target = new Date(targetDate);
      
      const updateCountdown = () => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();
        
        if (difference > 0) {
          countdown = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        } else {
          countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          clearInterval(countdownInterval);
        }
      };
      
      updateCountdown();
      countdownInterval = setInterval(updateCountdown, 1000);
      
      return () => {
        clearInterval(countdownInterval);
      };
    });
  </script>
  
  <style>
    .countdown-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }
    
    .countdown-item {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .countdown-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    }
    
    .countdown-value {
      background: linear-gradient(135deg, #8b5cf6, #6366f1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
    
    .countdown-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(to right, #8b5cf6, #6366f1);
    }
  </style>
  
  <div class="max-w-4xl mx-auto">
    <h3 class="text-2xl font-bold text-gray-800 text-center mb-8">
      Countdown to Heroes of the Brain 2025
    </h3>
    
    <div class="countdown-container">
      <div class="countdown-item">
        <div class="countdown-value text-5xl">{countdown.days}</div>
        <div class="text-gray-500 mt-2">days</div>
      </div>
      
      <div class="countdown-item">
        <div class="countdown-value text-5xl">{countdown.hours}</div>
        <div class="text-gray-500 mt-2">hours</div>
      </div>
      
      <div class="countdown-item">
        <div class="countdown-value text-5xl">{countdown.minutes}</div>
        <div class="text-gray-500 mt-2">minutes</div>
      </div>
      
      <div class="countdown-item">
        <div class="countdown-value text-5xl">{countdown.seconds}</div>
        <div class="text-gray-500 mt-2">seconds</div>
      </div>
    </div>
  </div>