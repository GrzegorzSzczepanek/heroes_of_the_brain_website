<script defer>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import ShowMoreTile from './ShowMoreTile.svelte';

  const contentPL = {
    title: "Witamy na stronie Heroes of the Brain!",
    intro: "Nasz unikalny, 24-godzinny maraton programowania, organizowany jest przez Koło Naukowe Neuron oraz Wydziałową Radę Samorządu Studenckiego Wydziału Informatyki i Telekomunikacji! To wyjątkowe wydarzenie, które gromadzi entuzjastów neuroinformatyki i sztucznej inteligencji, tworząc przestrzeń do współpracy, wymiany pomysłów i kreatywnej rywalizacji.",
    sections: [
      {
        heading: "Co to jest BCI?",
        text: `Interfejs mózg-komputer (BCI) to przełomowa technologia, która umożliwia bezpośrednią komunikację między mózgiem a urządzeniami zewnętrznymi, pozwalając na przekształcanie myśli w konkretne działania. Dzięki BCI możliwe staje się sterowanie urządzeniami za pomocą samego umysłu, co ma ogromny potencjał w wielu dziedzinach, takich jak medycyna, rehabilitacja, czy interakcja człowieka z technologią. Ta innowacyjna technologia otwiera nowe możliwości dla osób z niepełnosprawnościami, wspierając ich w codziennym funkcjonowaniu i zwiększając ich niezależność. Ponadto, BCI wprowadza zupełnie nowy wymiar rozrywki i komunikacji, zmieniając sposób, w jaki postrzegamy interakcję z otaczającym nas światem cyfrowym.`
      },
      {
        heading: "Nasza misja",
        text: `Naszą misją jest przybliżanie technologii BCI szerokiemu gronu odbiorców, aby każdy mógł zrozumieć jej potencjał i wpływ na przyszłość. Chcemy zwiększać świadomość na temat korzyści, jakie ta innowacja może przynieść w życiu codziennym oraz w różnych branżach, szczególnie w medycynie, rehabilitacji czy interakcji z technologią. Wierzymy, że poprzez edukację i dostęp do najnowszych rozwiązań BCI, możemy budować zrozumienie tej przełomowej technologii i pokazywać, jak zmienia ona relację między człowiekiem a maszyną. Naszym celem jest stworzenie przestrzeni, w której ludzie mogą odkrywać, jak BCI może wspierać ich w codziennym życiu.`
      }
    ]
  };

  const contentEN = {
    title: "Welcome to the Heroes of the Brain website!",
    intro: "Our unique 24-hour programming marathon organized by the Neuron Science Club and the Faculty Student Council of the Faculty of Computer Science and Telecommunications! This is a special event that brings together enthusiasts of neuroinformatics and artificial intelligence, creating a space for collaboration, idea exchange, and creative competition.",
    sections: [
      {
        heading: "What is BCI?",
        text: `Brain-Computer Interface (BCI) is a revolutionary technology that enables direct communication between the brain and external devices, allowing thoughts to be transformed into specific actions. BCI allows control of devices using the mind alone, with great potential in fields like medicine, rehabilitation, and human-technology interaction.`
      },
      {
        heading: "Our Mission",
        text: `Our mission is to make BCI technology more accessible to a wider audience, helping everyone understand its potential and impact on the future. We aim to raise awareness of the benefits this innovation can bring to daily life and various industries, particularly in medicine, rehabilitation, and technology interaction.`
      }
    ]
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

  content.subscribe(value => {
    currentContent = value;
  });
</script>

<section class="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24" id="HackatonInfo">
  <div class="max-w-5xl mx-auto text-center">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{currentContent.title}</h1>
    <p class="text-base md:text-lg lg:text-xl mb-8">{currentContent.intro}</p>
    
    <div class="flex flex-col md:flex-row justify-around items-start gap-8 md:gap-8 align-top py-5">
      {#each currentContent.sections as section}
        <ShowMoreTile heading={section.heading} text={section.text} />
      {/each}
    </div>
  </div>
</section>