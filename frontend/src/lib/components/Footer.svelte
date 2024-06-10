<script>
    import { faDiscord, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  
    let teamMembers = [
      {
        name: "JOHN DOE",
        role: "Hackathon Manager",
        email: "john.doe@example.com",
      },
      {
        name: "JANE SMITH",
        role: "Hackathon Manager",
        email: "jane.smith@example.com",
      },
      {
        name: "ALICE JOHNSON",
        role: "Media & Community",
        email: "alice.johnson@example.com",
      },
      {
        name: "BOB BROWN",
        role: "Partners",
        email: "bob.brown@example.com",
      },
    ];
  </script>
  
  <footer class="bg-pink-600 text-white">
    <div class="container mx-auto px-6 py-12 flex flex-col">
        <div class="flex flex-wrap align-middle justify-center">
          {#each teamMembers as member}
            <div class="mb-6 py-4 px-6">
              <h3 class="text-lg font-bold text-">{member.name}</h3>
              <p>{member.role}</p>
              <p class="text-sm">{member.email}</p>
            </div>
          {/each}
        </div>
        <div>
          <div class="flex space-x-4 mb-6">
            <a href="#" class="bg-white text-pink-600 p-2 rounded-full">
              <FontAwesomeIcon icon={faDiscord} class="text-pink-600" />
            </a>
            <a href="#" class="bg-white text-pink-600 p-2 rounded-full">
              <FontAwesomeIcon icon={faFacebook} class="text-pink-600" />
            </a>
            <a href="#" class="bg-white text-pink-600 p-2 rounded-full">
              <FontAwesomeIcon icon={faTwitter} class="text-pink-600" />
            </a>
            <a href="#" class="bg-white text-pink-600 p-2 rounded-full">
              <FontAwesomeIcon icon={faLinkedin} class="text-pink-600" />
            </a>
          </div>

      </div>
    </div>
    <div class="bg-gray-800 text-gray-400 py-4 text-center text-sm">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>neuron Sp. z o.o.<br />ul. Ulicowa 9<br />30-418 Wałbrzych</div>
        <div>rejestracja@neuron.org.pl<br />biuro@neuron.org.pl<br />www.neuron.pl</div>
        <div>
          <a href="#" class="hover:underline">REGULAMIN</a><br />
          <a href="#" class="hover:underline">POLITYKA PRYWATNOŚCI</a>
        </div>
      </div>
    </div>
  </footer>
  