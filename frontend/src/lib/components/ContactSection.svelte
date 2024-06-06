<script>
    import { onMount } from "svelte";
    import "leaflet/dist/leaflet.css";
    import "../../app.css";
  
    let map;
  
    onMount(async () => {
      const L = await import("leaflet");
  
      map = L.map('map').setView([51.109, 17.059], 16);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  
      L.marker([51.109, 17.059]).addTo(map)
        .bindPopup('Strefa Kultury Studenckiej<br>Politechnika Wrocławska')
        .openPopup();
    });
  </script>
  
  <style>
    #map {
      height: 100%;
      border-radius: 0.5rem;
    }
    section {
        min-height: 100vh;
    }
  </style>
  
  <section class="flex flex-col md:flex-row bg-blue-900 text-white py-8 md:py-16 px-4 md:px-8">
    <div class="flex-1 flex flex-col justify-center items-center p-4 md:p-8">
      <h2 class="text-4xl font-bold mb-4">KONTAKT</h2>
      <div id="map" class="w-full h-64 md:h-full shadow-lg"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center p-4 md:p-8">
      <div class="bg-white text-black p-6 rounded-lg shadow-lg max-w-md">
        <h3 class="text-2xl font-bold mb-2">Strefa Kultury Studenckiej</h3>
        <p class="text-lg mb-1">Adres:</p>
        <p class="text-md mb-4">Wybrzeże Wyspiańskiego 27<br>50-370 Wrocław</p>
      </div>
      <div class="mt-8">
        <img src="https://via.placeholder.com/150" alt="Politechnika Wrocławska Logo" class="h-32">
      </div>
    </div>
  </section>
  