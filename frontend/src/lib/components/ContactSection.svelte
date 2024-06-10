<script>
    import { onMount } from 'svelte';

let map;

onMount(async () => {
    if (typeof window !== 'undefined') {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');
        
        map = L.map('map').setView([51.107883, 17.038538], 13); // Coordinates for Wroclaw

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.107883, 17.038538]).addTo(map)
            .bindPopup('Strefa Kultury Studenckiej<br>Politechnika Wrocławska')
            .openPopup();
    }
});
</script>

<style>
  .contact-container {
      @apply flex flex-col md:flex-row items-center justify-center min-h-screen text-gray-800 p-8 ;
  }

  .contact-info {
      @apply bg-white flex-1 p-8 rounded-lg md:h-auto shadow-lg md:mb-0 md:mr-8 w-full md:w-auto transform hover:scale-105 transition-transform duration-300 ease-in-out;
  }

  .map-container {
      @apply w-full h-96 md:w-2/5 md:h-auto md:aspect-square rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out;
  }

  .contact-title {
      @apply text-3xl font-bold mb-4 text-blue-700;
  }

  .contact-details {
      @apply mb-4 text-lg;
  }

  .contact-item {
      @apply mb-2 text-lg;
  }

  .contact-item strong {
      @apply text-blue-700;
  }
</style>

<section class="contact-container">
  <div class="contact-info">
      <h2 class="contact-title">KONTAKT</h2>
      <p class="contact-details">
          <strong>Strefa Kultury Studenckiej</strong><br>
          Adres:<br>
          Wybrzeże Wyspiańskiego 27<br>
          50-370 Wrocław
      </p>
      <div class="contact-item">
          <strong>Telefon:</strong> +48 123 456 789
      </div>
      <div class="contact-item">
          <strong>Email:</strong> kontakt@example.com
      </div>
      <div class="contact-item">
          <strong>Godziny otwarcia:</strong> Pon - Pt: 9:00 - 17:00
      </div>
  </div>
  <div class="map-container">
      <div id="map" class="w-full h-full rounded-lg"></div>
  </div>
</section>
