<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  const contentPL = {
    title: "Witamy na BCI Neurohackathonie",
    intro: "Dołącz do nas w niesamowitej podróży do świata technologii Brain-Computer Interface (BCI). Nasz Neurohackathon gromadzi najbłyskotliwsze umysły, aby innowować i tworzyć przełomowe rozwiązania w dziedzinie neurobiologii.",
    sections: [
      {
        heading: "Co to jest BCI?",
        text: "Interfejs mózg-komputer (BCI) to rewolucyjna technologia, która umożliwia bezpośrednią komunikację między mózgiem a urządzeniami zewnętrznymi, przekształcając myśli w działania."
      },
      {
        heading: "Nasza misja",
        text: "Naszą misją jest rozwijanie dziedziny BCI poprzez współpracę innowacyjną, gromadzenie różnych talentów w celu opracowania nowych aplikacji, które poprawiają życie i przesuwają granice technologii."
      },
      {
        heading: "Dołącz do nas",
        text: "Bądź częścią tego ekscytującego wydarzenia, nawiąż kontakty z podobnie myślącymi osobami i pokaż swoje umiejętności. Niezależnie od tego, czy jesteś doświadczonym profesjonalistą, czy pasjonatem, znajdziesz swoje miejsce na naszym Neurohackathonie."
      }
    ]
  };

  const contentEN = {
    title: "Welcome to the BCI Neurohackathon",
    intro: "Join us for an incredible journey into the world of Brain-Computer Interface (BCI) technology. Our Neurohackathon brings together the brightest minds to innovate and create groundbreaking solutions in neuroscience.",
    sections: [
      {
        heading: "What is BCI?",
        text: "Brain-Computer Interface (BCI) is a revolutionary technology that enables direct communication between the brain and external devices, transforming thoughts into actions."
      },
      {
        heading: "Our Mission",
        text: "Our mission is to advance the field of BCI through collaborative innovation, bringing together diverse talents to develop new applications that improve lives and push the boundaries of technology."
      },
      {
        heading: "Join Us",
        text: "Be a part of this exciting event, network with like-minded individuals, and showcase your skills. Whether you are a seasoned professional or a passionate beginner, there's a place for you at our Neurohackathon."
      }
    ]
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

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

<section class="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24" id="HackatonInfo">
  <div class="max-w-5xl mx-auto text-center">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{currentContent.title}</h1>
    <p class="text-base md:text-lg lg:text-xl mb-8">
      {currentContent.intro}
    </p>
    <div class="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12">
      {#each currentContent.sections as section}
        <div class="bg-gray-800 rounded-lg p-6 w-full md:w-1/3 text-left">
          <h2 class="text-xl md:text-2xl font-semibold mb-4">{section.heading}</h2>
          <p class="text-sm md:text-base text-gray-400">
            {section.text}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
