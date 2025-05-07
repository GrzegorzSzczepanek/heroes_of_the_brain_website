<script defer>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import TeamMember from './TeamMember.svelte';
  import Button from './Button.svelte';

  let activeTab = 'Technical';

  const teamsPL = {
    Technical: [
      { name: 'Filip Puszko', role: 'Koordynator Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/filip_puszko.webp' },
      { name: 'Kacper Daniel', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/kacper_daniel.webp' },
      { name: 'Adam Pawłowski', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/adam_pawłowski.webp' },
      { name: 'Grzegorz Szczepanek', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/grzegorz_szczepanek.webp' },
      // { name: 'Adrian Goral', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/adrian_goral.webp' },
      { name: 'Michał Wiśniewski', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/michał_wiśniewski.webp' },
      { name: 'Filip Grzywacz', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/filip_grzywacz.webp' },
      { name: 'Adam Łaput', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/adam_łaput.webp' },
      { name: 'Tomasz Koralewski', role: 'Członek Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/tomasz_koralewski.webp' },
    ],
    Sponsor: [
      { name: 'Dominika Serafin', role: 'Koordynator Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/dominika_serafin.jpg' },
      { name: 'Patrycja Vogel', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/patrycja_vogel.webp' },
      { name: 'Maja Wiśniewska', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/maja_wiśniewska.webp' },
      { name: 'Mateusz Michalski', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/mateusz_michalski.webp' },
      { name: 'Kacper Majtyka', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/kacper_majtyka.webp' },
      { name: 'Hania Holak', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/hania_holak.jpg' },
      { name: 'Paulina Łobodzka', role: 'Członek Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/paulina_lobodzka.jpg' },
    ],
    Organisator: [
      { name: 'Jakub Morawiec', role: 'Koordynator Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/jakub_morawiec.webp' },
      { name: 'Igor Kowalczyk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/igor_kowalczyk.webp' },
      { name: 'Aleksandra Walczybok', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/aleksandra_walczybok.webp' },
      { name: 'Iwo Chwiszczuk', role: 'Członek Sekcji Organizacyjnej', imageUrl: '/images/sekcja_organizacyjna/iwo_chwiszczuk.webp' },
    ],
    Coordinator: [
      { name: 'Paweł Dzikiewicz', role: 'Koordynator Główny', imageUrl: '/images/koordynatorzy/pawel_dzikiewicz.webp' },
      { name: 'Izabela Paniczek', role: 'Wicekoordynator Główny', imageUrl: '/images/koordynatorzy/izabela_paniczek.webp' },
      { name: 'Iuliia Kapustinskaia', role: 'Wicekoordynator Główny', imageUrl: '/images/koordynatorzy/iuliia_kapustinskaia.webp' },
      { name: 'Marta Bołd', role: 'Koordynator Sekcji Promocji', imageUrl: '/images/koordynatorzy/marta_bołd.webp' },
      { name: 'Krzysztof Mola', role: 'Koordynator Sekcji Promocji', imageUrl: '/images/koordynatorzy/krzysztof_mola.webp' },
      { name: 'Jakub Morawiec', role: 'Koordynator Sekcji Organizacyjnej', imageUrl: '/images/koordynatorzy/jakub_morawiec.webp' },
      { name: 'Filip Puszko', role: 'Koordynator Sekcji Technicznej', imageUrl: '/images/sekcja_techniczna/filip_puszko.webp' },
      { name: 'Dominika Serafin', role: 'Koordynator Sekcji Sponsorskiej', imageUrl: '/images/sekcja_sponsorska/dominika_serafin.jpg' },
    ],
    Promotion: [
      { name: 'Marta Bołd', role: 'Koordynator Sekcji Promocji', imageUrl: '/images/koordynatorzy/marta_bołd.webp' },
      { name: 'Krzysztof Mola', role: 'Koordynator Sekcji Promocji', imageUrl: '/images/koordynatorzy/krzysztof_mola.webp' },
      { name: 'Kacper Sroka', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/kacper_sroka.webp' },
      { name: 'Gabrysia Senyszyn', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/gabrysia_senyszyn.webp' },
      { name: 'Weronika Walczuk', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/weronika_walczuk.webp' },
      { name: 'Konrad Bąchór', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/konrad_bachor.webp' },
      { name: 'Oliwia Borkowska', role: 'Członek Sekcji Promocji', imageUrl: '/images/sekcja_promocji/oliwia_borkowska.webp' },
    ],
  };

  const teamsEN = {
    Technical: [
      { name: 'Filip Puszko', role: 'Technical Section Coordinator', imageUrl: '/images/sekcja_techniczna/filip_puszko.webp' },
      { name: 'Kacper Daniel', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/kacper_daniel.webp' },
      { name: 'Adam Pawłowski', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/adam_pawłowski.webp' },
      { name: 'Grzegorz Szczepanek', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/grzegorz_szczepanek.webp' },
      // { name: 'Adrian Góral', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/adrian_goral.webp' },
      { name: 'Michał Wiśniewski', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/michał_wiśniewski.webp' },
      { name: 'Filip Grzywacz', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/filip_grzywacz.webp' },
      { name: 'Adam Łaput', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/adam_łaput.webp' },
      { name: 'Tomasz Koralewski', role: 'Technical Section Member', imageUrl: '/images/sekcja_techniczna/tomasz_koralewski.webp' },
    ],
    Sponsor: [
      { name: 'Dominika Serafin', role: 'Sponsor Section Coordinator', imageUrl: '/images/sekcja_sponsorska/dominika_serafin.jpg' },
      { name: 'Patrycja Vogel', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/patrycja_vogel.webp' },
      { name: 'Maja Wiśniewska', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/maja_wiśniewska.webp' },
      { name: 'Mateusz Michalski', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/mateusz_michalski.webp' },
      { name: 'Kacper Majtyka', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/kacper_majtyka.webp' },
      { name: 'Hania Holak', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/hania_holak.jpg' },
      { name: 'Paulina Łobodzka', role: 'Sponsor Section Member', imageUrl: '/images/sekcja_sponsorska/paulina_lobodzka.jpg' },
    ],
    Organisator: [
      { name: 'Jakub Morawiec', role: 'Organisational Section Coordinator', imageUrl: '/images/sekcja_organizacyjna/jakub_morawiec.webp' },
      { name: 'Igor Kowalczyk', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/igor_kowalczyk.webp' },
      { name: 'Aleksandra Walczybok', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/aleksandra_walczybok.webp' },
      { name: 'Iwo Chwiszczuk', role: 'Organisational Section Member', imageUrl: '/images/sekcja_organizacyjna/iwo_chwiszczuk.webp' },
    ],
    Coordinator: [
      { name: 'Paweł Dzikiewicz', role: 'Main Coordinator', imageUrl: '/images/koordynatorzy/pawel_dzikiewicz.webp' },
      { name: 'Izabela Paniczek', role: 'Vice Main Coordinator', imageUrl: '/images/koordynatorzy/izabela_paniczek.webp' },
      { name: 'Iuliia Kapustinskaia', role: 'Vice Main Coordinator', imageUrl: '/images/koordynatorzy/iuliia_kapustinskaia.webp' },
      { name: 'Marta Bołd', role: 'Promotion Section Coordinator', imageUrl: '/images/koordynatorzy/marta_bołd.webp' },
      { name: 'Krzysztof Mola', role: 'Promotion Section Coordinator', imageUrl: '/images/koordynatorzy/krzysztof_mola.webp' },
      { name: 'Jakub Morawiec', role: 'Organisational Section Coordinator', imageUrl: '/images/koordynatorzy/jakub_morawiec.webp' },
      { name: 'Filip Puszko', role: 'Technical Section Coordinator', imageUrl: '/images/sekcja_techniczna/filip_puszko.webp' },
      { name: 'Dominika Serafin', role: 'Sponsor Section Coordinator', imageUrl: '/images/sekcja_sponsorska/dominika_serafin.jpg' },
    ],
    Promotion: [
      { name: 'Marta Bołd', role: 'Promotion Section Coordinator', imageUrl: '/images/koordynatorzy/marta_bołd.webp' },
      { name: 'Krzysztof Mola', role: 'Promotion Section Coordinator', imageUrl: '/images/koordynatorzy/krzysztof_mola.webp' },
      { name: 'Kacper Sroka', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/kacper_sroka.webp' },
      { name: 'Gabrysia Senyszyn', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/gabrysia_senyszyn.webp' },
      { name: 'Weronika Walczuk', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/weronika_walczuk.webp' },
      { name: 'Konrad Bąchór', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/konrad_bachor.webp' },
      { name: 'Oliwia Borkowska', role: 'Promotion Section Member', imageUrl: '/images/sekcja_promocji/oliwia_borkowska.webp' },
    ],
  };

  const teams = derived(isPolish, $isPolish => $isPolish ? teamsPL : teamsEN);

  let currentTeams;

  teams.subscribe(value => {
    currentTeams = value;
  });

  function setActiveTab(tab) {
    activeTab = tab;
  }

  function handleKeydown(event, index) {
    const tabs = ['Technical', 'Sponsor', 'Organisator', 'Coordinator', 'Promotion'];
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
      document.getElementById(`tab-${tabs[nextIndex]}`).focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
      document.getElementById(`tab-${tabs[prevIndex]}`).focus();
    }
  }
</script>

<section class="max-w-full lg:max-w-3xl mx-auto p-4" id="team">
  <div
    role="tablist"
    aria-label="Team Sections"
    class="flex flex-wrap justify-center mb-6 space-x-2"
  >
    {#each ['Technical', 'Sponsor', 'Organisator', 'Coordinator', 'Promotion'] as tab, index}
      <button
        role="tab"
        id={`tab-${tab}`}
        aria-selected={activeTab === tab}
        aria-controls={`panel-${tab}`}
        class="tab-button"
        on:click={() => setActiveTab(tab)}
        on:keydown={(event) => handleKeydown(event, index)}
        tabindex={activeTab === tab ? '0' : '-1'}
      >
        {#if tab === 'Technical'}
          {$isPolish ? 'Techniczna' : 'Technical'}
        {:else if tab === 'Sponsor'}
          {$isPolish ? 'Sponsorska' : 'Sponsor'}
        {:else if tab === 'Organisator'}
          {$isPolish ? 'Organizatorska' : 'Organisational'}
        {:else if tab === 'Coordinator'}
          {$isPolish ? 'Koordynatorzy' : 'Coordinators'}
        {:else if tab === 'Promotion'}
          {$isPolish ? 'Promocja' : 'Promotion'}
        {/if}
      </button>
    {/each}
  </div>

  {#each Object.keys(currentTeams) as tab}
    {#if activeTab === tab}
      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        tabindex="0"
        class="flex justify-center flex-wrap gap-6"
        in:fade={{ duration: 500 }}
      >
        {#each currentTeams[tab] as member}
          <TeamMember name={member.name} role={member.role} imageUrl={member.imageUrl} />
        {/each}
      </div>
    {/if}
  {/each}
</section>

<style>
  .tab-button {
    color: black;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  .tab-button[aria-selected="true"] {
    background-color: #303d59;
    color: white;
  }

  .tab-button:focus {
    outline: 2px solid #303d59;
    outline-offset: 2px;
  }

  /* Responsive styles */
  @media (max-width: 640px) {
    .tab-button {
      flex: 1 1 100%;
      text-align: center;
    }
  }
</style>
