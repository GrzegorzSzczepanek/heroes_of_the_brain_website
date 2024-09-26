<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import TeamMember from './TeamMember.svelte';
  import Button from './Button.svelte';

  let activeTab = 'Technical';

  const teamsPL = {
  Technical: [
    { name: 'Kacper Daniel', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/kacper_daniel.webp' },
    { name: 'Adam Pawłowski', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/adam_pawłowski.webp' },
    { name: 'Grzegorz Szczepanek', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/grzegorz_szczepanek.webp' },
    { name: 'Adrian Goral', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/adrian_goral.webp' },
    { name: 'Michał Wiśniewski', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/michał_wiśniewski.webp' },
    { name: 'Filip Grzywacz', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/filip_grzywacz.webp' },
    { name: 'Adam Łaput', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/adam_łaput.webp' },
    { name: "Tomasz Koralewski", role:'Członek Sekcji Technicznej',imageUrl: '/images/sekcja_techniczna/tomasz_koralewski.webp'},
    { name: 'Filip Puszko', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/filip_puszko.webp' },
  ],
  Sponsor: [
    { name: 'Patrycja Vogel', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/patrycja_vogel.webp' },
    { name: 'Maja Wiśniewska', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/maja_wiśniewska.webp' },
    { name: 'Mateusz Michalski', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/mateusz_michalski.webp' },
    { name: 'Kacper Majtyka', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/kacper_majtyka.webp' },
  ],
  Organisator: [
    { name: 'Igor Kowalczyk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/igor_kowalczyk.webp' },
    { name: 'Aleksandra Walczybok', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/aleksandra_walczybok.webp' },
    { name: 'Jakub Morawiec', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/jakub_morawiec.webp' },
    { name: 'Iwo Chwiszczuk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/iwo_chwiszczuk.webp' },
  ],
  Coordinator: [
    { name: 'Marta Bołd', role: 'Koordynator', imageUrl: '/images/koordynatorzy/marta_bołd.webp' },
    { name: 'Jakub Morawiec', role: 'Koordynator', imageUrl: '/images/koordynatorzy/jakub_morawiec.webp' },
    { name: 'Szymon Matyja', role: 'Koordynator', imageUrl: '/images/koordynatorzy/szymon_matyja.webp' },
    { name: 'Izabela Paniczek', role: 'Koordynator', imageUrl: '/images/koordynatorzy/izabela_paniczek.webp' },
    { name: 'Paweł Dzikiewicz', role: 'Koordynator', imageUrl: '/images/koordynatorzy/pawel_dzikiewicz.webp' },
    { name: 'Iuliia Kapustinskaia', role: 'Koordynator', imageUrl: '/images/koordynatorzy/iuliia_kapustinskaia.webp' },
    { name: 'Krzysztof Mola', role: 'Koordynator', imageUrl: '/images/koordynatorzy/krzysztof_mola.webp' },
  ],
  Promotion: [
    { name: 'Kacper Sroka', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/kacper_sroka.webp' },
    { name: 'Gabrysia Senyszyn', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/gabrysia_senyszyn.webp' },
    { name: 'Weronika Walczuk', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/weronika_walczuk.webp' },
    { name: 'Konrad Bąchór', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/konrad_bąchór.webp' },
  ]
};

const teamsEN = {
  Technical: [
    { name: 'Kacper Daniel', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/kacper_daniel.webp' },
    { name: 'Adam Pawłowski', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/adam_pawłowski.webp' },
    { name: 'Grzegorz Szczepanek', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/grzegorz_szczepanek.webp' },
    { name: 'Adrian Góral', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/adrian_goral.webp' },
    { name: 'Michał Wiśniewski', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/michał_wiśniewski.webp' },
    { name: 'Filip Grzywacz', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/filip_grzywacz.webp' },
    { name: 'Adam Łaput', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/adam_łaput.webp' },
  ],
  Sponsor: [
    { name: 'Patrycja Vogel', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/patrycja_vogel.webp' },
    { name: 'Maja Wiśniewska', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/maja_wiśniewska.webp' },
    { name: 'Mateusz Michalski', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/mateusz_michalski.webp' },
    { name: 'Kacper Majtyka', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/kacper_majtyka.webp' },
  ],
  Organisator: [
    { name: 'Igor Kowalczyk', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/igor_kowalczyk.webp' },
    { name: 'Aleksandra Walczyk', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/aleksandra_walczybok.webp' },
    { name: 'Jakub Morawiec', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/jakub_morawiec.webp' },
    { name: 'Iwo Chwiszczuk', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/iwo_chwiszczuk.webp' },
  ],
  Coordinator: [
    { name: 'Marta Bołd', role: 'Coordinator', imageUrl: '/images/koordynatorzy/marta_bołd.webp' },
    { name: 'Jakub Morawiec', role: 'Coordinator', imageUrl: '/images/koordynatorzy/jakub_morawiec.webp' },
    { name: 'Szymon Matyja', role: 'Coordinator', imageUrl: '/images/koordynatorzy/szymon_matyja.webp' },
    { name: 'Izabela Paniczek', role: 'Coordinator', imageUrl: '/images/koordynatorzy/izabela_paniczek.webp' },
    { name: 'Paweł Dzikiewicz', role: 'Coordinator', imageUrl: '/images/koordynatorzy/paweł_dzikiewicz.webp' },
    { name: 'Iuliia Kapustinskaia', role: 'Coordinator', imageUrl: '/images/koordynatorzy/iuliia_kapustinskaia.webp' },
    { name: 'Krzysztof Mola', role: 'Coordinator', imageUrl: '/images/koordynatorzy/krzysztof_mola.webp' },
  ],
  Promotion: [
    { name: 'Kacper Sroka', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/kacper_sroka.webp' },
    { name: 'Gabrysia Senyszyn', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/gabrysia_senyszyn.webp' },
    { name: 'Weronika Walczuk', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/weronika_walczuk.webp' },
    { name: 'Konrad Bąchór', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/konrad_bąchór.webp' },
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
