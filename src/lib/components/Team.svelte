<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import TeamMember from './TeamMember.svelte';
  import UnderlinedHeader from './UnderlinedHeader.svelte';
  import Button from './Button.svelte';

  let activeTab = 'Technical';

  // Define content for both languages
  const teamsPL = {
    Technical: [
      { name: 'Andrzej Andrzej', role: 'Lider Wydziału Mechanicznego', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Andrzej Andrzej', role: 'Zastępca Lidera Wydziału Mechanicznego', imageUrl: 'https://picsum.photos/200?random=2' },
      { name: 'Anna Kowalska', role: 'Inżynier Mechaniczny', imageUrl: 'https://picsum.photos/200?random=3' },
      { name: 'Piotr Nowak', role: 'Projektant Mechaniczny', imageUrl: 'https://picsum.photos/200?random=4' },
      { name: 'Marta Wiśniewska', role: 'Inżynier Sponsorów', imageUrl: 'https://picsum.photos/200?random=5' },
      { name: 'Kamil Lewandowski', role: 'Deweloper Sponsorów', imageUrl: 'https://picsum.photos/200?random=6' },
      { name: 'Alicja Dąbrowska', role: 'Inżynier Elektryk', imageUrl: 'https://picsum.photos/200?random=7' },
      { name: 'Tomasz Kaczmarek', role: 'Technik Elektryk', imageUrl: 'https://picsum.photos/200?random=8' }
    ],
    Sponsor: [
      { name: 'Paweł Dzikiweicz', role: 'Lider Wydziału Sponsorów', imageUrl: 'https://picsum.photos/200?random=9' },
      { name: 'Andrzej Andrzej', role: 'Zastępca Lidera Wydziału Sponsorów', imageUrl: 'https://picsum.photos/200?random=10' },
      { name: 'John Smith', role: 'Inżynier Sponsorów', imageUrl: 'https://picsum.photos/200?random=11' },
      { name: 'Emily Johnson', role: 'Projektant Sponsorów', imageUrl: 'https://picsum.photos/200?random=12' },
      { name: 'Michael Davis', role: 'Inżynier Sponsorów', imageUrl: 'https://picsum.photos/200?random=13' },
      { name: 'Jessica Brown', role: 'Deweloper Sponsorów', imageUrl: 'https://picsum.photos/200?random=14' },
      { name: 'David Wilson', role: 'Inżynier Sponsorów', imageUrl: 'https://picsum.photos/200?random=15' },
      { name: 'Jennifer Taylor', role: 'Technik Sponsorów', imageUrl: 'https://picsum.photos/200?random=16' }
    ],
    Organisator: [
      { name: 'Robert Johnson', role: 'Lider Wydziału Organizacyjnego', imageUrl: 'https://picsum.photos/200?random=17' },
      { name: 'Sarah Thompson', role: 'Zastępca Lidera Wydziału Organizacyjnego', imageUrl: 'https://picsum.photos/200?random=18' },
      { name: 'Daniel Miller', role: 'Planista Wydarzeń', imageUrl: 'https://picsum.photos/200?random=19' },
      { name: 'Emily Wilson', role: 'Koordynator Logistyki', imageUrl: 'https://picsum.photos/200?random=20' },
      { name: 'Matthew Davis', role: 'Specjalista ds. Marketingu', imageUrl: 'https://picsum.photos/200?random=21' },
      { name: 'Olivia Brown', role: 'Menadżer ds. Public Relations', imageUrl: 'https://picsum.photos/200?random=22' },
      { name: 'William Taylor', role: 'Koordynator Wolontariuszy', imageUrl: 'https://picsum.photos/200?random=23' },
      { name: 'Sophia Anderson', role: 'Menadżer ds. Sponsoringu', imageUrl: 'https://picsum.photos/200?random=24' }
    ]
  };

  const teamsEN = {
    Technical: [
      { name: 'Andrzej Andrzej', role: 'Mechanical Department Leader', imageUrl: 'https://picsum.photos/200?random=1' },
      { name: 'Andrzej Andrzej', role: 'Mechanical Department Vice-Leader', imageUrl: 'https://picsum.photos/200?random=2' },
      { name: 'Anna Kowalska', role: 'Mechanical Engineer', imageUrl: 'https://picsum.photos/200?random=3' },
      { name: 'Piotr Nowak', role: 'Mechanical Designer', imageUrl: 'https://picsum.photos/200?random=4' },
      { name: 'Marta Wiśniewska', role: 'Sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=5' },
      { name: 'Kamil Lewandowski', role: 'Sponsor Developer', imageUrl: 'https://picsum.photos/200?random=6' },
      { name: 'Alicja Dąbrowska', role: 'Electrical Engineer', imageUrl: 'https://picsum.photos/200?random=7' },
      { name: 'Tomasz Kaczmarek', role: 'Electrical Technician', imageUrl: 'https://picsum.photos/200?random=8' }
    ],
    Sponsor: [
      { name: 'Paweł Dzikiweicz', role: 'Sponsor Department Leader', imageUrl: 'https://picsum.photos/200?random=9' },
      { name: 'Andrzej Andrzej', role: 'Sponsor Department Vice-Leader', imageUrl: 'https://picsum.photos/200?random=10' },
      { name: 'John Smith', role: 'Sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=11' },
      { name: 'Emily Johnson', role: 'Sponsor Designer', imageUrl: 'https://picsum.photos/200?random=12' },
      { name: 'Michael Davis', role: 'Sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=13' },
      { name: 'Jessica Brown', role: 'Sponsor Developer', imageUrl: 'https://picsum.photos/200?random=14' },
      { name: 'David Wilson', role: 'Sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=15' },
      { name: 'Jennifer Taylor', role: 'Sponsor Technician', imageUrl: 'https://picsum.photos/200?random=16' }
    ],
    Organisator: [
      { name: 'Robert Johnson', role: 'Organisator Department Leader', imageUrl: 'https://picsum.photos/200?random=17' },
      { name: 'Sarah Thompson', role: 'Organisator Department Vice-Leader', imageUrl: 'https://picsum.photos/200?random=18' },
      { name: 'Daniel Miller', role: 'Event Planner', imageUrl: 'https://picsum.photos/200?random=19' },
      { name: 'Emily Wilson', role: 'Logistics Coordinator', imageUrl: 'https://picsum.photos/200?random=20' },
      { name: 'Matthew Davis', role: 'Marketing Specialist', imageUrl: 'https://picsum.photos/200?random=21' },
      { name: 'Olivia Brown', role: 'Public Relations Manager', imageUrl: 'https://picsum.photos/200?random=22' },
      { name: 'William Taylor', role: 'Volunteer Coordinator', imageUrl: 'https://picsum.photos/200?random=23' },
      { name: 'Sophia Anderson', role: 'Sponsorship Manager', imageUrl: 'https://picsum.photos/200?random=24' }
    ]
  };

  // Derived store to get the current content based on the language
  const teams = derived(isPolish, $isPolish => $isPolish ? teamsPL : teamsEN);


  let currentTeams;

  // Subscribe to the derived store to update the local variables
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
    background-color: #303d59; /* Active background color */
  }
</style>
