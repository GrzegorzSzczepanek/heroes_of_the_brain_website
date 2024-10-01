<script>
  import Team from "./Team.svelte";
  import TeamMember from "./TeamMember.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import JoinUsSection from "./JoinUsSection.svelte";

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
</script>

<main class="bg-gray-900 text-white p-8">
  <div class="container mx-auto">
    <header class="text-center">
      <UnderlinedHeader title={currentContent.jury} />
    </header>
    <div class="flex flex-col items-center md:flex-row gap-5 justify-center">
      <TeamMember name="dr Mariusz Dzieciątko" role="COIG S.A." imageUrl="/images/mariusz2.webp" />
    </div>
    
  </div>
  <div class="container mx-auto mt-10">
    <header class="text-center ">
      <UnderlinedHeader title={currentContent.ourTeam} />
    </header>
    
    <Team />
    <div id="idk" class="flex flex-col align-middle justify-center text-center">
      <UnderlinedHeader title={currentContent.idk} />
      <JoinUsSection />
    </div>
  </div>
</main>

<style>
  main {
    padding-top: 50px;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
  }
  header {
    margin-top: 20px;
  }
  #idk {
    color: black;
    margin-top: 60px;
  }
</style>
