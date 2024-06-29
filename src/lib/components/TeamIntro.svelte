<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define content for both languages
  const contentPL = {
    title: "O nas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis ipsum quae odit quidem sunt! Cupiditate, sapiente. Amet nihil, recusandae eaque cumque praesentium debitis illo corrupti sit fugiat quos, vel impedit. Nasz zespół składa się z pasjonatów technologii, którzy dążą do tworzenia innowacyjnych rozwiązań. Dołącz do nas i odkryj nowe możliwości z nami."
  };

  const contentEN = {
    title: "About Us",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis ipsum quae odit quidem sunt! Cupiditate, sapiente. Amet nihil, recusandae eaque cumque praesentium debitis illo corrupti sit fugiat quos, vel impedit. Our team consists of technology enthusiasts who strive to create innovative solutions. Join us and discover new possibilities with us."
  };

  // Derived store to get the current content based on the language
  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

  // Subscribe to the derived store to update the local variables
  content.subscribe(value => {
    currentContent = value;
  });
</script>

<style>
  .parallax {
    background-image: url('$lib/images/kolo.webp');
    height: 600px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
  
  .agenda-content {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
  }

  #text {
    font-size: 1.5rem;
    line-height: 2rem;
    width: 500px;
  }
</style>

<section class="parallax text-white">
  <div class="agenda-content flex flex-col justify-center items-center text-center md:w-1/1 py-20 px-5" id="about-us">
    <div class="py-12">
      <UnderlinedHeader title={currentContent.title} />
    </div>
    <div id="text">
      {currentContent.text}
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
    </div>
  </div>
</section>
