<script>
  import AgendaDay from "./AgendaDay.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define text content for both languages
  const agendaPL = [
    {
      date: "28 września",
      events: [
        { time: "9:00", description: "Rejestracja" },
        {
          time: "10:30",
          description: "Oficjalne otwarcie / Gość specjalny: Paweł Dzikiewicz / Omówienie zasad",
        },
        {
          time: "12:00",
          description: "PUBLIKACJA SZCZEGÓŁÓW ZADAŃ | ROZPOCZĘCIE PRACY!",
        },
        { time: "12:15", description: "Mentoring / Budowanie zespołu" },
      ],
    },
    {
      date: "29 września",
      events: [
        {
          time: "12:00",
          description: "OSTATECZNY TERMIN SKŁADANIA PROJEKTÓW!",
        },
        { time: "12:00", description: "Ocena projektu" },
        { time: "15:00", description: "Ogłoszenie finalistów" },
        { time: "16:00", description: "Sesje pitchingowe finalistów" },
        { time: "17:45", description: "Ogłoszenie zwycięzców" },
      ],
    },
  ];

  const agendaEN = [
    {
      date: "28 September",
      events: [
        { time: "9:00", description: "Registration" },
        {
          time: "10:30",
          description: "Official opening / Special Guest: Paweł Dzikiewicz / Discussion of rules",
        },
        {
          time: "12:00",
          description: "PUBLICATION OF TASK DETAILS | START WORKING!",
        },
        { time: "12:15", description: "Mentoring / Team building" },
      ],
    },
    {
      date: "29 September",
      events: [
        {
          time: "12:00",
          description: "FINAL PROJECT SUBMISSION DEADLINE!",
        },
        { time: "12:00", description: "Project evaluation" },
        { time: "15:00", description: "Announcement of finalists" },
        { time: "16:00", description: "Pitching sessions of finalists" },
        { time: "17:45", description: "Announcement of winners" },
      ],
    },
  ];

  // Derived store to get the current content based on the language
  const agenda = derived(isPolish, $isPolish => $isPolish ? agendaPL : agendaEN);

  let currentAgenda;

  // Subscribe to the derived store to update the local variables
  agenda.subscribe(value => {
    currentAgenda = value;
  });
</script>

<style>
  .parallax {
    background-image: url('$lib/images/bg-photo-2.webp'); /* Replace with your image URL */
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
