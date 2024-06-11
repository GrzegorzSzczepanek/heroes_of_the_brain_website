<script>
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';
  import { onMount } from 'svelte';

    let map;

    onMount(async () => {
        if (typeof window !== 'undefined') {
        const L = await import('leaflet');
        // await import('leaflet/dist/leaflet.css');

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

<style lang="de">
  @import 'leaflet/dist/leaflet.css';
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #333;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    .contact-container {
      flex-direction: row;
    }
  }

  .contact-info {
    background-color: white;
    flex: 1;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    width: 100%;
    transition: transform 0.3s ease-in-out;
  }

  .contact-info:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .contact-info {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }

  .map-container {
    width: 100%;
    height: 24rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }

  .map-container:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .map-container {
      width: 40%;
      aspect-ratio: 1;
    }
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
