<script>
  import { derived } from "svelte/store";
  import Category from "./Category.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from "../../stores/languageStore";

  let categoriesPL = [
    {
      title: "Neurohackathon – Commerce Challenge",
      description:
        "Wyzwanie 'Social Impact' skupia się na wprowadzaniu pozytywnych zmian społecznych poprzez innowacyjne rozwiązania. Uczestnicy będą tworzyć projekty poprawiające codzienne życie w niecodzienny sposób. Ta kategoria promuje nieszablonowe myślenie, kreatywność i działania mające na celu pomoc innym. Neurohackathon to maraton kodowania, burzy mózgów i współpracy, prowadzący do tworzenia innowacyjnych projektów.",
    },
    {
      title: "Neurohackathon – Wellness Challenge",
      description:
        "To wyzwanie Neurohackathonu 'Heroes of the Brain' koncentruje się na obszarze ENTERTAINMENT, czyli nowoczesnej rozrywce. W dzisiejszym świecie pełnym doznań tworzenie nowych form spędzania wolnego czasu jest coraz bardziej wymagające. Uczestnicy będą musieli wykazać się kreatywnością, aby sprostać oczekiwaniom i dostarczyć niezapomnianych przeżyć. Tematyka obejmuje futurystyczne gry, łamigłówki oraz inne formy rozrywki.",
    },
  ];

  let categoriesEN = [
    {
      title: "Neurohackathon – Commerce Challenge",
      description:
        "The 'Social Impact' challenge focuses on making positive social changes through innovative solutions. Participants will create projects that improve everyday life in an extraordinary way. This category promotes unconventional thinking, creativity, and actions aimed at helping others. Neurohackathon is a coding marathon, brainstorming, and collaboration leading to the creation of innovative projects.",
    },
    {
      title: "Neurohackathon – Wellness Challenge",
      description:
        "The 'Heroes of the Brain' Neurohackathon's challenge focuses on the ENTERTAINMENT area, modern entertainment. In today's world full of experiences, creating new forms of spending free time is becoming increasingly demanding. Participants will have to show creativity to meet expectations and provide unforgettable experiences. The topics include futuristic games, puzzles, and other forms of entertainment.",
    },
  ];

  let categories = derived(isPolish, ($isPolish) =>
    $isPolish ? categoriesPL : categoriesEN
  );

  let currentCategories;

  categories.subscribe((value) => {
    currentCategories = value;
  });
</script>

<section
  class="flex flex-col items-center justify-center gap-6 py-10 bg-gray-900 text-white"
  id="categories"
>
  <UnderlinedHeader title="Kategorie" />

  <section class="flex flex-wrap items-start justify-center gap-6 py-10">
    {#each currentCategories as category}
      <Category {category} />
    {/each}
  </section>
</section>
