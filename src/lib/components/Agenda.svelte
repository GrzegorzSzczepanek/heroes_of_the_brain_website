<script>
  import AgendaDay from "./AgendaDay.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  
  const agendaPL = [
    {
      date: "Sobota, 29.11",
      events: [
        { time: "09:00 - 11:00", description: "Rejestracja uczestników" },
        { time: "11:30 - 12:00", description: "Prelekcja wprowadzająca" },
        { time: "12:00", description: "Start prac nad kodem" },
        { time: "17:00", description: "Catering" },
      ],
    },
    {
      date: "Niedziela, 30.11",
      events: [
        { time: "do 12:00", description: "Zakończenie prac nad kodem" },
        { time: "12:00 - 12:30", description: "Prelekcja" },
        { time: "12:30 - 14:00", description: "Prezentacja projektów – część I" },
        { time: "14:00 - 14:30", description: "Przerwa na kawę" },
        { time: "14:30 - 16:00", description: "Prezentacja projektów – część II" },
        { time: "16:00 - 16:30", description: "Ocena projektów przez Jury" },
        { time: "16:30 - 17:00", description: "Wręczenie nagród i zakończenie imprezy" },
      ],
    },
  ];


  const agendaEN = [
    {
      date: "Saturday, 29.11",
      events: [
        { time: "09:00 - 11:00", description: "Participant registration" },
        { time: "11:30 - 12:00", description: "Introductory presentation" },
        { time: "12:00", description: "Start of coding" },
        { time: "17:00", description: "Catering" },
      ],
    },
    {
      date: "Sunday, 30.11",
      events: [
        { time: "by 12:00", description: "End of coding" },
        { time: "12:00 - 12:30", description: "Presentation/Lecture" },
        { time: "12:30 - 14:00", description: "Project presentations – part I" },
        { time: "14:00 - 14:30", description: "Coffee break" },
        { time: "14:30 - 16:00", description: "Project presentations – part II" },
        { time: "16:00 - 16:30", description: "Project evaluation by the Jury" },
        { time: "16:30 - 17:00", description: "Awards ceremony and end of event" },
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
