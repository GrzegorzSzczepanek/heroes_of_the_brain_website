<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import TeamMember from './TeamMember.svelte';
  import Button from './Button.svelte';

  let activeTab = 'Technical';

  const teamsPL = {
    Technical: [
      { name: 'Kacper Daniel', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Adam Pawłowski', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Grzegorz Szczepanek', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Adrian Goral', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Michał Wiśniewski', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Filip Grzywacz', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Adam Łaput', role: 'Członek Sekcji Technicznej', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Sponsor: [
      { name: 'Patrycja Vogel', role: 'Członek Sekcji Sponsorskiej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Maja Wiśniewska', role: 'Członek Sekcji Sponsorskiej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Mateusz Michalski', role: 'Członek Sekcji Sponsorskiej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Kacper Majtyka', role: 'Członek Sekcji Sponsorskiej', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Organisator: [
      { name: 'Igor Kowalczyk', role: 'Członek Sekcji Organizacyjnej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Aleksandra Walczyk', role: 'Członek Sekcji Organizacyjnej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Jakub Morawiec', role: 'Członek Sekcji Organizacyjnej', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Iwo Chwiszczuk', role: 'Członek Sekcji Organizacyjnej', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Coordinator: [
      { name: 'Marta Bołd', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Jakub Morawiec', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Szymon Matyja', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Izabela Paniczek', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Paweł Dzikiewicz', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Iuliia Kapustinskaia', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Krzysztof Mola', role: 'Koordynator', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Promotion: [
      { name: 'Kacper Sroka', role: 'Członek Sekcji Promocji', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Gabrysia Senyszyn', role: 'Członek Sekcji Promocji', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Weronika Walczuk', role: 'Członek Sekcji Promocji', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Konrad Bąchór', role: 'Członek Sekcji Promocji', imageUrl: 'https://picsum.photos/200?random=1' },
    ]
  };

  const teamsEN = {
    Technical: [
      { name: 'Kacper Daniel', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Adam Pawłowski', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Grzegorz Szczepanek', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Adrian Góral', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Michał Wiśniewski', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Filip Grzywacz', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Adam Łaput', role: 'Technical Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Sponsor: [
      { name: 'Patrycja Vogel', role: 'Sponsor Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Maja Wiśniewska', role: 'Sponsor Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Mateusz Michalski', role: 'Sponsor Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Kacper Majtyka', role: 'Sponsor Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Organisator: [
      { name: 'Igor Kowalczyk', role: 'Organisational Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Aleksandra Walczyk', role: 'Organisational Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Jakub Morawiec', role: 'Organisational Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Iwo Chwiszczuk', role: 'Organisational Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Coordinator: [
      { name: 'Marta Bołd', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Jakub Morawiec', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Szymon Matyja', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Izabela Paniczek', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Paweł Dzikiewicz', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Iuliia Kapustinskaia', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Krzysztof Mola', role: 'Coordinator', imageUrl: 'https://picsum.photos/200?random=1' },
    ],
    Promotion: [
      { name: 'Kacper Sroka', role: 'Promotion Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Gabrysia Senyszyn', role: 'Promotion Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Weronika Walczuk', role: 'Promotion Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Konrad Bąchór', role: 'Promotion Section Member', imageUrl: 'https://picsum.photos/200?random=1' },
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
