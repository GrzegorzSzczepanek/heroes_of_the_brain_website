<script>
  import { derived } from "svelte/store";
  import Category from "./Category.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from "../../stores/languageStore";

  let categoriesPL = [
    {
      title: "Neurohackathon – Commerce Challenge",
      description:
        "Kategoria \"Commerce\" skupia się na innowacjach dla handlu i nowych modeli biznesowych, oferując uczestnikom przestrzeń do tworzenia rozwiązań, które można rozwijać i komercjalizować, takich jak technologie do testowania aplikacji, gry sterowane za pomocą interfejsów BCI czy produkty zaprojektowane tak, by podczas użytkowania wywoływać u klientów najlepsze emocje.",
    },
    {
      title: "Neurohackathon – Wellness Challenge",
      description:
        "Kategoria \"Wellness\" koncentruje się na tworzeniu rozwiązań, które dzięki AI i interfejsom mózg–komputer poprawiają zdrowie, komfort i dobrostan człowieka, na przykład poprzez systemy wspomagające rehabilitację po urazach neurologicznych czy aplikacje ułatwiające redukcję stresu i poprawę jakości snu. ",
    },
  ];

  let categoriesEN = [
    {
      title: "Neurohackathon – Commerce Challenge",
      description:
        "The \"Commerce\" category focuses on innovations for trade and new business models, offering participants a space to create solutions that can be developed and commercialized, such as technologies for testing applications, games controlled through BCI interfaces, or products designed to evoke the best emotions in customers during use.",
    },
    {
      title: "Neurohackathon – Wellness Challenge",
      description:
        "The \"Wellness\" category focuses on creating solutions that, through AI and brain–computer interfaces, improve human health, comfort, and well-being, for example through systems supporting rehabilitation after neurological injuries or applications that help reduce stress and improve sleep quality.",
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
