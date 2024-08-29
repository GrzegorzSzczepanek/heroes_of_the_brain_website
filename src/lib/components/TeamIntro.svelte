<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from "../../stores/languageStore";
  import { derived } from "svelte/store";

  const contentPL = {
    title: "O nas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis ipsum quae odit quidem sunt! Cupiditate, sapiente. Amet nihil, recusandae eaque cumque praesentium debitis illo corrupti sit fugiat quos, vel impedit. Nasz zespół składa się z pasjonatów technologii, którzy dążą do tworzenia innowacyjnych rozwiązań. Dołącz do nas i odkryj nowe możliwości z nami.",
  };

  const contentEN = {
    title: "About Us",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis ipsum quae odit quidem sunt! Cupiditate, sapiente. Amet nihil, recusandae eaque cumque praesentium debitis illo corrupti sit fugiat quos, vel impedit. Our team consists of technology enthusiasts who strive to create innovative solutions. Join us and discover new possibilities with us.",
  };

  const content = derived(isPolish, ($isPolish) =>
    $isPolish ? contentPL : contentEN
  );

  let currentContent;

  content.subscribe((value) => {
    currentContent = value;
  });
</script>

<section class="parallax text-white">
  <div class="agenda-content py-20 px-5" id="about-us">
    <div class="py-8"></div>
    <UnderlinedHeader title={currentContent.title} />

    <div id="text">
      {currentContent.text}
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap"></div>
  </div>
</section>

<style>
  .parallax {
    background-image: url("/images/kolo.webp");
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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #text {
    font-size: 1.25rem;
    line-height: 1.75rem;
    max-width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    #text {
      font-size: 1.5rem;
      line-height: 2rem;
      max-width: 80%;
    }
  }

  @media (min-width: 1024px) {
    #text {
      font-size: 1.75rem;
      line-height: 2.25rem;
      max-width: 70%;
    }
  }
</style>
