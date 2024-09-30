<script>
  import AgendaDay from "./AgendaDay.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  
  const agendaPL = [
    {
      date: "Dzień Pierwszy",
      events: [
        { time: "10:00", description: "Start rejestracji" },
        { time: "11:30", description: "Ceremonia Otwarcia" },
        { time: "12:00", description: "Sesja Sponsora Strategicznego - BrainAccess Hyperscanning Session" },
        { time: "13:00", description: "Start całodniowego kodowania" },
      ],
    },
    {
      date: "Dzień Drugi",
      events: [
        { time: "13:00", description: "Koniec kodowania" },
        { time: "13:00", description: "Start prezentacji" },
        { time: "16:00", description: "Ogłoszenie wyników" },
        { time: "16:15", description: "Ceremonia Końcowa" },
      ],
    },
  ];

  const agendaEN = [
    {
      date: "Day One",
      events: [
        { time: "10:00", description: "Start of registration" },
        { time: "11:30", description: "Opening Ceremony" },
        { time: "12:00", description: "Strategic Sponsor Session - BrainAccess Hyperscanning Session" },
        { time: "13:00", description: "Start of all-day coding" },
      ],
    },
    {
      date: "Day Two",
      events: [
        { time: "13:00", description: "End of coding" },
        { time: "13:00", description: "Start of presentations" },
        { time: "16:00", description: "Announcement of results" },
        { time: "16:15", description: "Closing Ceremony" },
      ],
    },
  ];

  const agenda = derived(isPolish, $isPolish => $isPolish ? agendaPL : agendaEN);

  let currentAgenda;

  agenda.subscribe(value => {
    currentAgenda = value;
  });
</script>

<style>
  .parallax {
    background-image: url('/images/bg-photo-2.webp');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .agenda-content {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
  }
</style>

<section id="agenda" class="parallax text-white">
  <div class="agenda-content items-center text-center md:w-1/1 py-20 px-5">
    <UnderlinedHeader title={$isPolish ? "Agenda" : "Agenda"} />

    <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
      {#each currentAgenda as day}
        <AgendaDay {day} />
      {/each}
    </div>
  </div>
</section>
