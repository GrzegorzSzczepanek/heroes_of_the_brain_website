<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

 
  const contentPL = {
    imageUrl: "https://picsum.photos/600/400",
    title: "Chcesz do nas dołączyć?",
    description: `
      Dołącz do nas na nadchodzący hackathon! To doskonała okazja, aby sprawdzić swoje umiejętności, 
      poznać nowych ludzi i pracować nad ekscytującymi projektami BCI. Niezależnie od tego, czy jesteś 
      doświadczonym programistą, czy dopiero zaczynasz swoją przygodę z kodowaniem interfejsów mózg-komputer, znajdziesz tu 
      coś dla siebie. Kliknij poniżej, aby dowiedzieć się więcej i zarejestrować się!
    `,
    buttonText: "Zgłoś się!"
  };

  const contentEN = {
    imageUrl: "https://picsum.photos/600/400",
    title: "Would you like to join us?",
    description: `
      Join us for the upcoming hackathon! It's a great opportunity to test your skills, 
      meet new people, and work on exciting BCI projects. Whether you're an experienced developer 
      or just starting your journey with brain-computer interface coding, you'll find something for you. 
      Click below to learn more and register!
    `,
    buttonText: "Register now!"
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
