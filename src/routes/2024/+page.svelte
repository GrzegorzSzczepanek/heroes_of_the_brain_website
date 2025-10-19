<script>
  import '../../app.css';
  import { fade } from 'svelte/transition';
  import ContactSection from '$lib/components/ContactSection.svelte';
  import CategorySection from '$lib/components/CategorySection.svelte';
  import LandingPage from '$lib/components/LandingPage.svelte';
  import HackatonInfoSection from '$lib/components/HackatonInfoSection.svelte';
  import Agenda from '$lib/components/Agenda.svelte';
  import Partners from '$lib/components/Partners.svelte';
  import Faq from '$lib/components/Faq.svelte';
  import UnderlinedHeader from '$lib/components/UnderlinedHeader.svelte';
  import JoinUsSection from '$lib/components/JoinUsSection.svelte';
  import { derived } from 'svelte/store';
  import { isPolish } from '../../stores/languageStore';
  import { onMount } from 'svelte';
   
  onMount(() => {
    document.title = "Heroes of The Brain";
  });

  const contentPL = {
    jury: "Jury",
    ourTeam: "Sekcje naszego zespołu",
    idk: "Weź udział w wydarzeniu"
  };

  const contentEN = {
    jury: "Jury",
    ourTeam: "Our Team",
    idk: "Take part in the event"
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

  content.subscribe(value => {
    currentContent = value;
  });

  // Categories for 2025 edition
  const categoriesPL2024 = [
    
    {
      title: "Neurohackathon – Social Impact Challenge",
      description:
        "Wyzwanie \"Social Impact\" skupia się na wprowadzaniu pozytywnych zmian społecznych poprzez innowacyjne rozwiązania. Uczestnicy będą tworzyć projekty poprawiające codzienne życie w niecodzienny sposób. Ta kategoria promuje nieszablonowe myślenie, kreatywność i działania mające na celu pomoc innym. Neurohackathon to maraton kodowania, burzy mózgów i współpracy, prowadzący do tworzenia innowacyjnych projektów.",
    },
    {
      title: "Neurohackathon – Entertainment Challenge",
      description:
        "To wyzwanie Neurohackathonu \"Heroes of the Brain\" koncentruje się na obszarze ENTERTAINMENT, czyli nowoczesnej rozrywce. W dzisiejszym świecie pełnym doznań tworzenie nowych form spędzania wolnego czasu jest coraz bardziej wymagające. Uczestnicy będą musieli wykazać się kreatywnością, aby sprostać oczekiwaniom i dostarczyć niezapomnianych przeżyć. Tematyka obejmuje futurystyczne gry, łamigłówki oraz inne formy rozrywki.",
    },
  ];

  const categoriesEN2024 = [
    
    {
      title: "Neurohackathon – Social Impact Challenge",
      description:
        "The \"Social Impact\" challenge focuses on introducing positive social changes through innovative solutions. Participants will create projects that improve everyday life in extraordinary ways. This category promotes out-of-the-box thinking, creativity, and actions aimed at helping others. Neurohackathon is a marathon of coding, brainstorming, and collaboration, leading to the creation of innovative projects.",
    },
    {
      title: "Neurohackathon – Entertainment Challenge",
      description:
        "This Neurohackathon \"Heroes of the Brain\" challenge focuses on the ENTERTAINMENT area, which is modern entertainment. In today's world full of experiences, creating new forms of leisure is becoming increasingly demanding. Participants will need to demonstrate creativity to meet expectations and deliver unforgettable experiences. Topics include futuristic games, puzzles, and other forms of entertainment.",
    },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Heroes of The Brain BCI Hackaton" />
  <meta name="keywords" content="brain, bci, hackaton, heroes, brainaccess, solet, pwr, politechnika wroclawska heroes of the brain heroesofthebrain politechnika hackaton neurohackaton" />
  <meta name="author" content="Grzegorz Szczepanek" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div transition:fade={{ duration: 400 }}>
  <LandingPage />
  <HackatonInfoSection />
  <Agenda />
  <CategorySection categoriesPL={categoriesPL2024} categoriesEN={categoriesEN2024} />
  <Partners />
  <ContactSection />
  <Faq />

  <!-- <div id="zapisy" class="flex flex-col align-middle justify-center text-center pb-16">
    <UnderlinedHeader title={currentContent.idk} />
    <JoinUsSection />
  </div> -->
</div>