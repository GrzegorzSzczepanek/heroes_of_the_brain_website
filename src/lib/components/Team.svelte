<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import TeamMember from './TeamMember.svelte';
  import Button from './Button.svelte';

  let activeTab = 'Technical';

  const teamsPL = {
  Technical: [
    { name: 'Kacper Daniel', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/KacperDaniel.webp' },
    { name: 'Adam Pawłowski', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/adam_pawłowski.webp' },
    { name: 'Grzegorz Szczepanek', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/grzegorz_szczepanek.webp' },
    { name: 'Adrian Goral', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/AdrianGoral.webp' },
    { name: 'Michał Wiśniewski', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/Michał_Wiśniewski.webp' },
    { name: 'Filip Grzywacz', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/filip_grzywacz.webp' },
    { name: 'Adam Łaput', role: 'Członek Sekcji Technicznej', imageUrl: '/src/lib/images/Sekcja Techniczna/Adam Łaput.webp' },
    { name: "Tomasz Koralewski", role:'Członek Sekcji Technicznej',imageUrl: '/src/lib/images/Sekcja Techniczna/TomaszKoralewski.webp'}
  ],
  Sponsor: [
    { name: 'Patrycja Vogel', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/src/lib/images/Sekcja Sponsorska/Patrycja_Vogel.webp' },
    { name: 'Maja Wiśniewska', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/src/lib/images/Sekcja Sponsorska/Maja Wiśniewska.webp' },
    { name: 'Mateusz Michalski', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/src/lib/images/Sekcja Sponsorska/Mateusz Michalski.webp' },
    { name: 'Kacper Majtyka', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/src/lib/images/Sekcja Sponsorska/Kacper Majtyka.webp' },
  ],
  Organisator: [
    { name: 'Igor Kowalczyk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Igor Kowalczyk.webp' },
    { name: 'Aleksandra Walczyk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Aleksandra_Walczybok.webp' },
    { name: 'Jakub Morawiec', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Jakub Morawiec.webp' },
    { name: 'Iwo Chwiszczuk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Iwo Chwiszczuk.webp' },
  ],
  Coordinator: [
    { name: 'Marta Bołd', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Marta Bołd.webp' },
    { name: 'Jakub Morawiec', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Jakub Morawiec.webp' },
    { name: 'Szymon Matyja', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Szymon Matyja.webp' },
    { name: 'Izabela Paniczek', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Izabela Paniczek.webp' },
    { name: 'Paweł Dzikiewicz', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Paweł Dzikiewicz.webp' },
    { name: 'Iuliia Kapustinskaia', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Iuliia Kapustinskaia.webp' },
    { name: 'Krzysztof Mola', role: 'Koordynator', imageUrl: '/src/lib/images/Koordynatorzy/Krzysztof_Mola.webp' },
  ],
  Promotion: [
    { name: 'Kacper Sroka', role: 'Członek Sekcji Promocji', imageUrl: '/src/lib/images/Sekcja Promocji/Kacper_Sroka.webp' },
    { name: 'Gabrysia Senyszyn', role: 'Członek Sekcji Promocji', imageUrl: '/src/lib/images/Sekcja Promocji/Gabrysia_Senyszyn.webp' },
    { name: 'Weronika Walczuk', role: 'Członek Sekcji Promocji', imageUrl: '/src/lib/images/Sekcja Promocji/Weronika_Walczuk.webp' },
    { name: 'Konrad Bąchór', role: 'Członek Sekcji Promocji', imageUrl: '/src/lib/images/Sekcja Promocji/Konrad_Bąchór.webp' },
  ]
};


const teamsEN = {
  Technical: [
    { name: 'Kacper Daniel', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/KacperDaniel.webp' },
    { name: 'Adam Pawłowski', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/adam_pawłowski.webp' },
    { name: 'Grzegorz Szczepanek', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/grzegorz_szczepanek.webp' },
    { name: 'Adrian Góral', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/AdrianGoral.webp' },
    { name: 'Michał Wiśniewski', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/Michał_Wiśniewski.webp' },
    { name: 'Filip Grzywacz', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/filip_grzywacz.webp' },
    { name: 'Adam Łaput', role: 'Technical Section Member', imageUrl: '/src/lib/images/Sekcja Techniczna/Adam Łaput.webp' },
  ],
  Sponsor: [
    { name: 'Patrycja Vogel', role: 'Sponsor Section Member', imageUrl: '/src/lib/images/Sekcja Sponsorska/Patrycja_Vogel.webp' },
    { name: 'Maja Wiśniewska', role: 'Sponsor Section Member', imageUrl: '/src/lib/images/Sekcja Sponsorska/Maja Wiśniewska.webp' },
    { name: 'Mateusz Michalski', role: 'Sponsor Section Member', imageUrl: '/src/lib/images/Sekcja Sponsorska/Mateusz Michalski.jpeg' },
    { name: 'Kacper Majtyka', role: 'Sponsor Section Member', imageUrl: '/src/lib/images/Sekcja Sponsorska/Kacper Majtyka.webp' },
  ],
  Organisator: [
    { name: 'Igor Kowalczyk', role: 'Organisational Section Member', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Igor Kowalczyk.webp' },
    { name: 'Aleksandra Walczyk', role: 'Organisational Section Member', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Aleksandra_Walczybok.webp' },
    { name: 'Jakub Morawiec', role: 'Organisational Section Member', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Jakub Morawiec.webp' },
    { name: 'Iwo Chwiszczuk', role: 'Organisational Section Member', imageUrl: '/src/lib/images/Sekcja Organizacyjna/Iwo Chwiszczuk.webp' },
  ],
  Coordinator: [
    { name: 'Marta Bołd', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Marta Bołd.webp' },
    { name: 'Jakub Morawiec', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Jakub Morawiec.webp' },
    { name: 'Szymon Matyja', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Szymon Matyja.webp' },
    { name: 'Izabela Paniczek', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Izabela Paniczek.webp' },
    { name: 'Paweł Dzikiewicz', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Paweł Dzikiewicz.webp' },
    { name: 'Iuliia Kapustinskaia', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Iuliia Kapustinskaia.webp' },
    { name: 'Krzysztof Mola', role: 'Coordinator', imageUrl: '/src/lib/images/Koordynatorzy/Krzysztof_Mola.webp' },
  ],
  Promotion: [
    { name: 'Kacper Sroka', role: 'Promotion Section Member', imageUrl: '/src/lib/images/Sekcja Promocji/Kacper_Sroka.webp' },
    { name: 'Gabrysia Senyszyn', role: 'Promotion Section Member', imageUrl: '/src/lib/images/Sekcja Promocji/Gabrysia_Senyszyn.webp' },
    { name: 'Weronika Walczuk', role: 'Promotion Section Member', imageUrl: '/src/lib/images/Sekcja Promocji/Weronika_Walczuk.webp' },
    { name: 'Konrad Bąchór', role: 'Promotion Section Member', imageUrl: '/src/lib/images/Sekcja Promocji/Konrad_Bąchór.webp' },
  ]
};


  const teams = derived(isPolish, $isPolish => $isPolish ? teamsPL : teamsEN);


  let currentTeams;

  teams.subscribe(value => {
    currentTeams = value;
  });

  function setActiveTab(tab) {
    activeTab = tab;
  }
  
</script>

<section class="max-w-full lg:max-w-3xl mx-auto p-4" id="team">
  <div class="flex flex-col items-center mb-6 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
    <div class="w-full max-w-xs">
      <Button
        text={$isPolish ? 'Techniczny' : 'Technical'}
        isActive={activeTab === 'Technical'}
        onClick={() => setActiveTab('Technical')}
      />
    </div>
    <div class="w-full max-w-xs">
      <Button
        text={$isPolish ? 'Sponsorzy' : 'Sponsor'}
        isActive={activeTab === 'Sponsor'}
        onClick={() => setActiveTab('Sponsor')}
      />
    </div>
    <div class="w-full max-w-xs">
      <Button
        text={$isPolish ? 'Organizatorzy' : 'Organisator'}
        isActive={activeTab === 'Organisator'}
        onClick={() => setActiveTab('Organisator')}
      />
    </div>

    <div class="w-full max-w-xs">
      <Button
        text={$isPolish ? 'Koordynatorzy' : 'Coordinators'}
        isActive={activeTab === 'Coordinator'}
        onClick={() => setActiveTab('Coordinator')}
      />
    </div>

    <div class="w-full max-w-xs">
      <Button
        text={$isPolish ? 'Promocja' : 'Promotion'}
        isActive={activeTab === 'Promotion'}
        onClick={() => setActiveTab('Promotion')}
      />
    </div>
  </div>

  {#key activeTab}
    <div class="flex justify-center flex-wrap gap-6" in:fade={{ duration: 500 }}>
      {#each currentTeams[activeTab] as member}
        <TeamMember name={member.name} role={member.role} imageUrl={member.imageUrl} />
      {/each}
    </div>
  {/key}
</section>

<style>
  .active {
    background-color: #303d59;
  }
</style>
