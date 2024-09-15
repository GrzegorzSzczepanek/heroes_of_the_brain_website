<script>
  import Category from "./Category.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";

  let categories = [
    {
      title: "Neurohackathon – Social Impact Challenge",
      description:
        "Wyzwanie 'Social Impact' skupia się na wprowadzaniu pozytywnych zmian społecznych poprzez innowacyjne rozwiązania. Uczestnicy będą tworzyć projekty poprawiające codzienne życie w niecodzienny sposób. Ta kategoria promuje nieszablonowe myślenie, kreatywność i działania mające na celu pomoc innym. Neurohackathon to maraton kodowania, burzy mózgów i współpracy, prowadzący do tworzenia innowacyjnych projektów."
    },
    {
      title: "Neurohackathon – Entertainment Challenge",
      description:
        "To wyzwanie Neurohackathonu 'Heroes of the Brain' koncentruje się na obszarze ENTERTAINMENT, czyli nowoczesnej rozrywce. W dzisiejszym świecie pełnym doznań tworzenie nowych form spędzania wolnego czasu jest coraz bardziej wymagające. Uczestnicy będą musieli wykazać się kreatywnością, aby sprostać oczekiwaniom i dostarczyć niezapomnianych przeżyć. Tematyka obejmuje futurystyczne gry, łamigłówki oraz inne formy rozrywki."
    }
  ];
</script>

<section class="flex flex-col items-center justify-center gap-6 py-10 bg-gray-900 text-white" id="categories">
  <UnderlinedHeader title="Kategorie" />

  <section class="flex flex-wrap items-start justify-center gap-6 py-10">
    {#each categories as category}
      <Category {category} />
    {/each}
  </section>
</section>