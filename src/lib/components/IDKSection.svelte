<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";

    export let imageUrl = "https://picsum.photos/600/400"; // Placeholder image URL
    export let title = "Would you like to join us?";
    export let description = `
      We are bringing dreams of technological conquest to life! Join our dynamic
      team creating innovative world-class robots and become part of the successes
      at the Rover Challenge competitions.
      
      If passion and technology is your language, click below and head into
      undiscovered spaces with us!
    `;
  </script>
  <section class="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md" id="collaboration">
    
    <div class="md:w-1/2 p-4">
      <img src={imageUrl} alt="Team Photo" class="w-full h-auto rounded-lg shadow-lg" />
    </div>
    <div class="md:w-1/2 p-4 flex flex-col justify-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <p class="text-lg text-gray-700 mb-6">{description}</p>
      <a href="#join" class="inline-block bg-purple-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-700 transition duration-300">
        Join us!
      </a>
    </div>
  </section>
  