<script>
  import AgendaDay from "./AgendaDay.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
  import { isPolish } from "../../stores/languageStore";
  import { derived } from "svelte/store";

  const agendaPL = [
    {
      date: "Dzień Pierwszy (29.11)",
      events: [
        { time: "09:00-11:00", description: "Rejestracja uczestników" },
        { time: "11:00-11:30", description: "Oficjalne rozpoczęcie" },
        { time: "11:30-12:00", description: "Prelekcja wprowadzająca" },
        { time: "12:00", description: "Rozpoczęcie pracy" },
        { time: "17:30", description: "Catering" },
      ],
    },
    {
      date: "Dzień Drugi (30.11)",
      events: [
        { time: "12:00", description: "Zakończenie prac" },
        {
          time: "12:00-15:30",
          description: "Prezentacja zespołów | Dodatkowe prelekcje",
        },
        { time: "13:30-13:45", description: "Przerwa na kawę" },
        { time: "15:30-16:00", description: "Ocena przez jury" },
        {
          time: "16:00-17:00",
          description: "Wręczenie nagród i zakończenie imprezy",
        },
      ],
    },
  ];

  const agendaEN = [
    {
      date: "Day One (29.11)",
      events: [
        { time: "09:00-11:00", description: "Participant registration" },
        { time: "11:00-11:30", description: "Official opening" },
        { time: "11:30-12:00", description: "Introductory lecture" },
        { time: "12:00", description: "Start of work" },
        { time: "17:30", description: "Catering" },
      ],
    },
    {
      date: "Day Two (30.11)",
      events: [
        { time: "12:00", description: "End of work" },
        {
          time: "12:00-15:30",
          description: "Team presentations | Additional lectures",
        },
        { time: "13:30-13:45", description: "Coffee break" },
        { time: "15:30-16:00", description: "Jury evaluation" },
        {
          time: "16:00-17:00",
          description: "Award ceremony and end of the event",
        },
      ],
    },
  ];

  const agenda = derived(isPolish, ($isPolish) =>
    $isPolish ? agendaPL : agendaEN
  );

  let currentAgenda;

  agenda.subscribe((value) => {
    currentAgenda = value;
  });
</script>

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

<style>
  .parallax {
    background-image: url("/images/bg-photo-2.webp");
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
