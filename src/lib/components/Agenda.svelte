<script>
  import AgendaDay from "./AgendaDay.svelte";
import UnderlinedHeader from "./UnderlinedHeader.svelte";

    let agenda = [
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
  </script>
  
  <style>
    .parallax {
      background-image: url('$lib/images/bg-photo-2.webp'); /* Replace with your image URL */
      /* min-height: 500px; */
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
  
  <section class="parallax text-white">
    <div class="agenda-content items-center text-center md:w-1/1 py-20 px-5">
      <UnderlinedHeader title="Agenda" />

      <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
        {#each agenda as day}
          <AgendaDay {day} />
        {/each}
      </div>
    </div>
  </section>
  