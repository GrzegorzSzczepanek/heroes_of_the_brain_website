<script>
  import { fade } from 'svelte/transition';
  import TeamMember from './TeamMember.svelte';

  let activeTab = 'Technical';
  let teams = {
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
      { name: 'John Smith', role: 'sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=11' },
      { name: 'Emily Johnson', role: 'sponsor Designer', imageUrl: 'https://picsum.photos/200?random=12' },
      { name: 'Michael Davis', role: 'Sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=13' },
      { name: 'Jessica Brown', role: 'Sponsor Developer', imageUrl: 'https://picsum.photos/200?random=14' },
      { name: 'David Wilson', role: 'sponsor Engineer', imageUrl: 'https://picsum.photos/200?random=15' },
      { name: 'Jennifer Taylor', role: 'sponsor Technician', imageUrl: 'https://picsum.photos/200?random=16' }
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

  function setActiveTab(tab) {
    activeTab = tab;
  }
</script>

<div class="flex justify-center mb-6 space-x-4" id="container">
  <button class:active={activeTab === 'Technical'} class="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" on:click={() => setActiveTab('Technical')}>
    Technical
  </button>
  <button class:active={activeTab === 'Sponsor'} class="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" on:click={() => setActiveTab('Sponsor')}>
    Sponsor
  </button>
  <button class:active={activeTab === 'Organisator'} class="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" on:click={() => setActiveTab('Organisator')}>
    Organisator
  </button>
</div>

{#key activeTab}
  <div class="flex justify-center flex-wrap gap-6" in:fade={{ duration: 500 }} >
    {#each teams[activeTab] as member}
      <TeamMember name={member.name} role={member.role} imageUrl={member.imageUrl} />
    {/each}
  </div>
{/key}

<style>
  #container {
    color: black;
    padding-top: 80px;
  }
  button {
    cursor: pointer;
  }
  .active {
    background-color: #303d59; /* Active background color */
  }
</style>
