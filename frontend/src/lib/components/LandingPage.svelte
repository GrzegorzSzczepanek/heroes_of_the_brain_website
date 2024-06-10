<script>
  import { onMount } from 'svelte';
  import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import "../../app.css";

  let backgroundImage = '../src/lib/images/brain.png';
  let scrollY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<style>
  .bg-dots {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform 0.1s ease-out;
  }
  .dot-1 {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 20%;
  }
  .dot-2 {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 40%;
  }
  .dot-3 {
    width: 120px;
    height: 120px;
    top: 70%;
    left: 70%;
  }
</style>

<section class="relative flex flex-col items-center justify-center h-screen bg-gradient text-white text-center p-4">
  <div class="absolute inset-0 z-0">
    <div class="bg-dots dot-1" style="transform: translateY({scrollY * 0.1}px);"></div>
    <div class="bg-dots dot-2" style="transform: translateY({scrollY * 0.2}px);"></div>
    <div class="bg-dots dot-3" style="transform: translateY({scrollY * 0.15}px);"></div>
  </div>
  <div class="relative z-10">
    <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Największy Hackaton BCI w Polsce</h1>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Heroes of The Brain</h2>
  </div>
  <div class="relative flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 my-6 z-10">
    <p class="flex items-center text-lg md:text-xl">
      <FontAwesomeIcon icon={faMapMarkerAlt} class="text-purple-400 mr-2" />
      Politechnika Wrocławska
    </p>
    <p class="flex items-center text-lg md:text-xl">
      <FontAwesomeIcon icon={faCalendarAlt} class="text-purple-400 mr-2" />
      21.10.2024 - 23.10.2024
    </p>
  </div>
  <div class="relative z-10 space-x-4">
    <a href="#learn-more" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">Dowiedz się więcej</a>
    <a href="#schedule" class="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition">Zobacz harmonogram</a>
  </div>
  <!-- <div class="relative z-10 mt-8">
    <img src={backgroundImage} alt="Person using BCI technology" class="max-w-full h-auto" />
  </div> -->
</section>
