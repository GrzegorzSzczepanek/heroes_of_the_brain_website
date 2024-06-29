<script lang="ts">
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';

  // Define text content for both languages
  const contentPL = {
      header: 'Kontakt',
      address: 'ul. Wrocławska 27, 50-370 Wrocław, Polska',
      phone: '+48 123 456 789',
      email: 'kontakt@przyklad.pl',
      hours: 'Poniedziałek - Piątek: 9:00 - 17:00'
  };

  const contentEN = {
      header: 'Contact',
      address: '27 Wrocławska St, 50-370 Wrocław, Poland',
      phone: '+48 123 456 789',
      email: 'contact@example.com',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM'
  };

  // Derived store to get the current content based on the language
  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let header, address, phone, email, hours;

  // Subscribe to the derived store to update the local variables
  content.subscribe(value => {
    header = value.header;
    address = value.address;
    phone = value.phone;
    email = value.email;
    hours = value.hours;
  });

  function copyToClipboard(text: string) {
      navigator.clipboard.writeText(text).then(() => {
          alert('Phone number copied to clipboard');
      }).catch(err => {
          console.error('Failed to copy: ', err);
      });
  }
</script>

<div class="bg-white p-8 rounded-lg shadow-lg transition-transform transform md:mr-8 mb-8 md:mb-0">
  <h2 class="text-3xl font-bold mb-4 text-black-800">{header}</h2>
  <p class="text-lg mb-4">
      <strong class="text-blue-600">Adres: </strong>{address}
      <br>
  </p>
  <div class="text-lg mb-4">
      <button class="text-blue-600 cursor-pointer font-bold focus:outline-none" on:click={() => copyToClipboard(phone)}>
          Telefon: {phone}
      </button> 
  </div>
  <div class="text-lg mb-4">
      <strong class="text-blue-600">Email:</strong> {email}
  </div>
  <div class="text-lg">
      <strong class="text-blue-600">Godziny otwarcia:</strong> {hours}
  </div>
</div>
