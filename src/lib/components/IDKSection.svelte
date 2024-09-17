<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

 
  const contentPL = {
    imageUrl: "https://picsum.photos/600/400",
    title: "Chcesz do nas dołączyć?",
    description: `
      Realizujemy marzenia o technologicznym podboju! Dołącz do naszego dynamicznego
      zespołu tworzącego innowacyjne roboty światowej klasy i stań się częścią sukcesów
      na zawodach Rover Challenge.
      
      Jeśli pasja i technologia to Twój język, kliknij poniżej i wyrusz z nami w
      nieodkryte przestrzenie!
    `,
    buttonText: "Dołącz do nas!"
  };

  const contentEN = {
    imageUrl: "https://picsum.photos/600/400",
    title: "Would you like to join us?",
    description: `
      We are bringing dreams of technological conquest to life! Join our dynamic
      team creating innovative world-class robots and become part of the successes
      at the Rover Challenge competitions.
      
      If passion and technology is your language, click below and head into
      undiscovered spaces with us!
    `,
    buttonText: "Join us!"
  };

 
  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

 
  content.subscribe(value => {
    currentContent = value;
  });
</script>

<section class="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md" id="collaboration">
  <div class="md:w-1/2 p-4">
    <img src={currentContent.imageUrl} alt="Team Photo" class="w-full h-auto rounded-lg shadow-lg" />
  </div>
  <div class="md:w-1/2 p-4 flex flex-col justify-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-4">{currentContent.title}</h2>
    <p class="text-lg text-gray-700 mb-6">{currentContent.description}</p>
    <a href="#join" class="inline-block bg-purple-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-700 transition duration-300">
      {currentContent.buttonText}
    </a>
  </div>
</section>
