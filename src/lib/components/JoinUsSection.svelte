<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

 
  const contentPL = {
    imageUrl: "https://picsum.photos/600/400",
    title: "Chcesz wziąć udział?",
    description: `
      Dołącz do nas na nadchodzący hackathon! To doskonała okazja, aby sprawdzić swoje umiejętności, 
      poznać nowych ludzi i pracować nad ekscytującymi projektami BCI.
    `,
    buttonText: "Zgłoś się!",
    url: "https://forms.gle/KKdoUBMmaA1y22dU6"
  };

  const contentEN = {
    imageUrl: "https://picsum.photos/600/400",
    title: "Would you like to enter?",
    description: `
      Join us for the upcoming hackathon! It's a great opportunity to test your skills, 
      meet new people, and work on exciting BCI projects. 
    `,
    buttonText: "Register now!",
    url: "https://forms.gle/P9evdZbDyXUDETuC7"
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
    <a href={currentContent.url} class="inline-block bg-purple-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-700 transition duration-300">
      {currentContent.buttonText}
    </a>
  </div>
</section>
