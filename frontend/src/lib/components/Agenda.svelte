<script>
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
    
  
    .category-header::after {
      content: "";
      display: block;
      width: 100px;
      height: 3px;
      background: #6f00ff;
      margin: 10px auto 0;
    }
  
    .agenda-content {
      background-color: rgba(0, 0, 0, 0.7);
      padding: 20px;
      border-radius: 8px;
      height: 100%;
    }
  </style>
  
  <section class="parallax text-white py-20 px-4">
    <div class="agenda-content text-center md:w-1/1">
      <h1 class="text-3xl font-bold mb-8 relative inline-block">
        AGENDA
        <div class="category-header"></div>
      </h1>
      <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
        {#each agenda as day}
          <div class="bg-gray-800 border-2 border-purple-600 rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 relative">
            <div class="bg-purple-600 text-white px-4 py-2 rounded-t-md font-bold text-lg absolute -top-5 left-1/2 transform -translate-x-1/2">
              {day.date}
            </div>
            <div class="mt-8">
              {#each day.events as event}
                <div class="flex justify-between items-center mb-4 py-2 border-b border-purple-600 last:border-0">
                  <div class="text-white font-semibold">{event.time}</div>
                  <div class="text-purple-500 text-left">{event.description}</div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  