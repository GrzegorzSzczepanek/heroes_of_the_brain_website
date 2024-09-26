<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from "../../stores/languageStore";
  import { derived } from "svelte/store";

  const contentPL = {
    title: "O nas",
    text: `Jako Koło Naukowe Neuron oraz Samorząd Wydziału Elektroniki, Fotoniki i Mikrosystemów Politechniki Wrocławskiej, połączyliśmy siły, aby zorganizować wyjątkowe wydarzenie, które łączy trzy fascynujące dziedziny: programowanie, interfejsy mózg-komputer (BCI) oraz sztuczną inteligencję. Naszym celem jest stworzenie przestrzeni, w której uczestnicy mogą odkrywać, jak te nowoczesne technologie wzajemnie się przenikają i jakie niesamowite możliwości oferują.
Jesteśmy zgranym zespołem studentów z pasją, którzy z pełnym zaangażowaniem dbają o każdy detal organizacyjny. Dzięki naszej wspólnej energii i chęci dzielenia się wiedzą, wydarzenie to stanie się nie tylko inspirującym doświadczeniem edukacyjnym, ale także doskonałą okazją do praktycznego zastosowania nowych umiejętności.`,
  };

  const contentEN = {
    title: "About Us",
    text: `As the Neuron Science Club and the Student Government of the Faculty of Electronics, Photonics, and Microsystems at Wrocław University of Science and Technology, we have joined forces to organize a unique event that combines three fascinating fields: programming, brain-computer interfaces (BCI), and artificial intelligence. Our goal is to create a space where participants can explore how these modern technologies intersect and the incredible possibilities they offer.

We are a dedicated team of passionate students who ensure every organizational detail is meticulously taken care of. Thanks to our shared energy and eagerness to share knowledge, this event will not only become an inspiring educational experience but also an excellent opportunity to apply new skills in practice.`,
  };

  const content = derived(isPolish, ($isPolish) => ($isPolish ? contentPL : contentEN));

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
