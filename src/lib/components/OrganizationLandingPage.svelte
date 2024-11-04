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
      {#if $isPolish}
        <TeamMember name="Mgr inż. Katarzyna Białas" role=" Asystent Opiekuna KN “Neuron”." imageUrl="/images/katarzyna_białas.jpg" />
        <TeamMember name="Prof. Adrianna Kozierkiewicz" role="Zastępca Kierownika Katedry Informatyki Stosowanej" imageUrl="/images/adrianna_kozierkiewicz.png" />
        <TeamMember name="Dr Mariusz Dzieciątko" role="COIG S.A." imageUrl="/images/mariusz2.webp" />
        <TeamMember name="Dr inż. Osvaldas Putkis" role="Kierownik Działu Inżynierii w Neurotechnologii" imageUrl="/images/osvaldas_putkis.png" />

      {:else}
        <TeamMember name="MSc Eng. Katarzyna Białas" role="Assistant supervisor of KN Neuron." imageUrl="/images/katarzyna_białas.jpg" />
        <TeamMember name="Prof Adrianna Kozierkiewicz" role="Deputy of Department of Applied Informatics" imageUrl="/images/adrianna_kozierkiewicz.png" />
        <TeamMember name="Dr Mariusz Dzieciątko" role="COIG S.A." imageUrl="/images/mariusz2.webp" />
        <TeamMember name="Dr. Eng. Osvaldas Putkis" role="Head of Engineering at Neurotechnology" imageUrl="/images/osvaldas_putkis.png" />
      {/if}
    </div>
    
  </div>
  <div class="container mx-auto mt-10">
    <header class="text-center ">
      <UnderlinedHeader title={currentContent.ourTeam} />
    </header>
    
    <Team />
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
</style>
