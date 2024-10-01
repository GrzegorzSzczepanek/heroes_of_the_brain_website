<script>
  import { faDiscord, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import PopUp from './PopUp.svelte';

  let socialLinks = [
    { icon: faFacebook, url: "https://www.facebook.com/heroesofthebrain", name: "Facebook link" },
    { icon: faDiscord, url: "https://discord.gg/brainheroes", name: "Discord link" },
    { icon: faInstagram, url: "https://www.instagram.com/knneuron_/", name: "Instagram link" },
    { icon: faLinkedin, url: "https://www.linkedin.com/company/kn-neuron/", name: "LinkedIn link" }
  ];

  const contentPL = {
    terms: "Regulamin",
    privacy: "Polityka prywatności",
    termsContent: `
      <h2>Regulamin Hackathonu "Heroes of the Brain"</h2>
      <h3>§1. Organizatorzy i Cel Wydarzenia</h3>
      <ol>
        <li>Hackathon "Heroes of the Brain" jest organizowany przez Wydziałową Radę Samorządu Studenckiego Wydziału Informatyki i Telekomunikacji (WRSS WIT) oraz Koło Naukowe "Neuron" (KN Neuron).</li>
        <li>Celem hackathonu jest rozwijanie zaawansowanych interfejsów mózg-komputer (BCI) poprzez tworzenie innowacyjnych systemów opartych na modelach sztucznej inteligencji, skierowanych na praktyczne zastosowania w obszarze neuroinformatyki.</li>
      </ol>
      <h3>§2. Miejsce i Czas Wydarzenia</h3>
      <ol>
        <li>Wydarzenie odbędzie się od godziny 9:00 dnia 16 listopada 2024 roku do godziny 21:00 dnia 17 listopada 2024 roku.</li>
        <li>Miejscem wydarzenia jest pierwsze piętro budynku D-21 na Politechnice Wrocławskiej.</li>
      </ol>
      <h3>§3. Zasady Uczestnictwa</h3>
      <ol>
        <li>Hackathon jest otwarty dla osób pełnoletnich, niezależnie od ich statusu studenta, szczególnie dla osób zainteresowanych nowymi technologiami, chętnych do nauki nowych rzeczy oraz pasjonatów neuroinformatyki.</li>
        <li>Uczestnicy muszą zarejestrować się poprzez formularz dostępny na stronie wydarzenia. Udział w hackathonie jest bezpłatny.</li>
        <li>Każdy zespół może składać się z minimum 3 osób, a maksymalnie z 5 osób.
          <ul>
            <li>Uczestnicy mogą zgłosić się indywidualnie, w parach lub w pełnym zespole.</li>
            <li>Organizatorzy zastrzegają sobie prawo do przydzielenia indywidualnych uczestników lub par do innych zespołów, które nie osiągnęły maksymalnego limitu uczestników.</li>
          </ul>
        </li>
        <li>Rejestracja jest otwarta do godziny 00:00 dnia 16 listopada 2024 roku lub do wyczerpania limitu miejsc.</li>
      </ol>
      <h3>§4. Tematyka i Zadania Hackathonu</h3>
      <ol>
        <li>Tematyka hackathonu obejmuje tworzenie rozwiązań z użyciem interfejsów mózg-komputer (BCI) związanych z jednym z tematów przygotowanych przez organizatorów, takich jak sterowanie urządzeniami za pomocą myśli, wirtualna klawiatura czy precyzyjne sterowanie protezami.</li>
        <li>Uczestnicy będą mieli dostęp do urządzeń EEG i innych niezbędnych narzędzi na miejscu.</li>
      </ol>
      <h3>§5. Wsparcie Techniczne i Mentorzy</h3>
      <ol>
        <li>Mentorzy będą ogólnodostępni i gotowi do pomocy wszystkim zespołom podczas hackathonu.</li>
        <li>Wolontariusze będą dostępni na miejscu, aby udzielać wsparcia technicznego.</li>
      </ol>
      <h3>§6. Kryteria Oceny i Sędziowie</h3>
      <ol>
        <li>Projekty będą oceniane przez grupę jurorów składającą się ze sponsorów oraz przedstawicieli Politechniki Wrocławskiej.</li>
        <li>Projekty będą oceniane w kilku kategoriach, takich jak innowacyjność, użyteczność, jakość implementacji oraz prezentacja końcowa, według ustalonej skali ocen.</li>
        <li>W przypadku remisu punktowego, decyzja zostanie podjęta przez losowo wybranych wolontariuszy, których głos zadecyduje o ostatecznym wyniku.</li>
      </ol>
      <h3>§7. Nagrody</h3>
      <ol>
        <li>Planowane są nagrody finansowe oraz rzeczowe. Szczegóły dotyczące nagród zostaną ogłoszone przed rozpoczęciem wydarzenia.</li>
        <li>Nagrody będą przyznawane za 1., 2. i 3. miejsce oraz mogą zostać przyznane dodatkowe wyróżnienia w zależności od wyników w poszczególnych kategoriach oceny.</li>
        <li>Aby odebrać nagrodę, uczestnicy zobowiązani są do wypełnienia dokumentów niezbędnych do ewidencji podatkowej.
          <ul>
            <li>Dokumenty te zostaną wysłane do zwycięzców w ciągu 2 tygodni od ogłoszenia werdyktu sędziów.</li>
            <li>Zwycięzcy muszą odesłać wypełnione dokumenty w ciągu tygodnia od ich otrzymania. W przypadku niedopełnienia tego obowiązku, nagroda przepada.</li>
          </ul>
        </li>
      </ol>
      <h3>§8. Prawa Autorskie i Własność Intelektualna</h3>
      <ol>
        <li>Uczestnicy zachowują pełne prawa autorskie do swoich projektów.</li>
        <li>Organizatorzy zastrzegają sobie prawo do prezentowania i promowania projektów stworzonych podczas hackathonu.</li>
        <li>Uczestnicy mają możliwość udostępnienia swoich projektów na licencji open-source, jeśli wyrażą taką wolę.</li>
      </ol>
      <h3>§9. Przetwarzanie Danych Osobowych</h3>
      <ol>
        <li>Podczas rejestracji będą zbierane dane osobowe uczestników niezbędne do organizacji wydarzenia oraz kontaktu po hackathonie.</li>
        <li>Uczestnicy będą zobowiązani do akceptacji klauzul dotyczących przetwarzania danych osobowych zgodnie z RODO.</li>
      </ol>
      <h3>§10. Reklamacje i Odwołania</h3>
      <ol>
        <li>Uczestnicy mają prawo do składania reklamacji dotyczących wyników hackathonu w ciągu 24 godzin od ogłoszenia wyników.</li>
        <li>Reklamacje będą rozpatrywane przez zespół organizatorów w terminie do 14 dni roboczych.</li>
      </ol>
      <h3>§11. Formalności i Sponsoring</h3>
      <ol>
        <li>Regulamin oraz kwestie formalne będą skonsultowane z odpowiednimi działami Politechniki Wrocławskiej.</li>
        <li>Umowy sponsorskie zostały zawarte i będą przestrzegane zgodnie z wymaganiami sponsorów. Zasady promowania marek sponsorów zostaną uwzględnione podczas hackathonu.</li>
      </ol>
    `,
    privacyContent: "To jest przykładowa treść polityki prywatności. Twoje dane są bezpieczne i przechowywane zgodnie z przepisami.",
    copy: "&copy; {year} Neuronki. Wszelkie prawa zastrzeżone."
  };

  const contentEN = {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    termsContent: `
      <h2>Rules of the "Heroes of the Brain" Hackathon</h2>
      <h3>§1. Organizers and Purpose of the Event</h3>
      <ol>
        <li>The "Heroes of the Brain" Hackathon is organized by the Faculty Student Council of the Faculty of Computer Science and Telecommunications (WRSS WIT) and the "Neuron" Scientific Club (KN Neuron).</li>
        <li>The aim of the hackathon is to develop advanced brain-computer interfaces (BCI) by creating innovative systems based on artificial intelligence models, focused on practical applications in the field of neuroinformatics.</li>
      </ol>
      <h3>§2. Event Location and Time</h3>
      <ol>
        <li>The event will take place from 9:00 AM on November 16, 2024, to 9:00 PM on November 17, 2024.</li>
        <li>The venue is the first floor of building D-21 at the Wrocław University of Science and Technology.</li>
      </ol>
      <h3>§3. Participation Rules</h3>
      <ol>
        <li>The hackathon is open to adults, regardless of student status, especially for people interested in new technologies, eager to learn, and passionate about neuroinformatics.</li>
        <li>Participants must register through the form available on the event website. Participation in the hackathon is free.</li>
        <li>Each team can consist of a minimum of 3 and a maximum of 5 people.
          <ul>
            <li>Participants can sign up individually, in pairs, or as a full team.</li>
            <li>The organizers reserve the right to assign individual participants or pairs to other teams that have not reached the maximum number of participants.</li>
          </ul>
        </li>
        <li>Registration is open until 00:00 on November 16, 2024, or until the participant limit is reached.</li>
      </ol>
      <h3>§4. Hackathon Themes and Tasks</h3>
      <ol>
        <li>The theme of the hackathon includes creating solutions using brain-computer interfaces (BCI) related to one of the topics prepared by the organizers, such as controlling devices with thoughts, virtual keyboards, or precise control of prostheses.</li>
        <li>Participants will have access to EEG devices and other necessary tools on-site.</li>
      </ol>
      <h3>§5. Technical Support and Mentors</h3>
      <ol>
        <li>Mentors will be available and ready to assist all teams during the hackathon.</li>
        <li>Volunteers will be present to provide technical support.</li>
      </ol>
      <h3>§6. Evaluation Criteria and Judges</h3>
      <ol>
        <li>Projects will be evaluated by a panel of judges consisting of sponsors and representatives from the Wrocław University of Science and Technology.</li>
        <li>Projects will be judged based on categories such as innovation, usefulness, implementation quality, and the final presentation, according to a set grading scale.</li>
        <li>In the event of a tie, the final decision will be made by randomly selected volunteers whose vote will determine the outcome.</li>
      </ol>
      <h3>§7. Prizes</h3>
      <ol>
        <li>Financial and material prizes are planned. Details regarding prizes will be announced before the event begins.</li>
        <li>Prizes will be awarded for 1st, 2nd, and 3rd places, with additional distinctions possible depending on performance in various evaluation categories.</li>
        <li>To claim the prize, participants must complete documents required for tax purposes.
          <ul>
            <li>These documents will be sent to the winners within 2 weeks of the jury's verdict.</li>
            <li>Winners must return the completed documents within a week of receiving them. Failure to comply will result in the forfeiture of the prize.</li>
          </ul>
        </li>
      </ol>
      <h3>§8. Copyright and Intellectual Property</h3>
      <ol>
        <li>Participants retain full copyright to their projects.</li>
        <li>The organizers reserve the right to present and promote projects created during the hackathon.</li>
        <li>Participants may choose to release their projects under an open-source license if they wish.</li>
      </ol>
      <h3>§9. Data Processing</h3>
      <ol>
        <li>During registration, participants' personal data necessary for event organization and post-hackathon contact will be collected.</li>
        <li>Participants will be required to accept clauses related to personal data processing in accordance with GDPR.</li>
      </ol>
      <h3>§10. Complaints and Appeals</h3>
      <ol>
        <li>Participants have the right to file complaints regarding the hackathon results within 24 hours of the announcement of the results.</li>
        <li>Complaints will be reviewed by the organizers within 14 business days.</li>
      </ol>
      <h3>§11. Formalities and Sponsorship</h3>
      <ol>
        <li>The regulations and formal issues will be consulted with the appropriate departments of the Wrocław University of Science and Technology.</li>
        <li>Sponsorship agreements have been concluded and will be followed according to the sponsors' requirements. The rules for promoting sponsors' brands will be adhered to during the hackathon.</li>
      </ol>
    `,
    privacyContent: "This is a sample privacy policy content. Your data is safe and stored in accordance with regulations.",
    copy: "&copy; {year} Neuronki. All rights reserved."
  };

  const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);

  let currentContent;

  content.subscribe(value => {
    currentContent = value;
  });

  $: currentContent.copy = currentContent.copy.replace("{year}", new Date().getFullYear());

  let showTerms = false;
  let showPrivacy = false;

  function toggleTerms() {
    showTerms = !showTerms;
  }

  function togglePrivacy() {
    showPrivacy = !showPrivacy;
  }
</script>

<style>
  .footer {
    background-color: #1a202c;
    color: #cbd5e0;
  }
  .footer a, .footer button {
    color: #cbd5e0;
    transition: color 0.3s ease;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }
  .footer a:hover, .footer button:hover {
    color: #63b3ed;
  }
  .social-icons a {
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
  }
</style>

<footer class="footer py-6">
  <div class="container mx-auto px-6 text-center">
    <div class="mb-4">
      <div class="social-icons">
        {#each socialLinks as link}
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <FontAwesomeIcon icon={link.icon} />
          </a>
        {/each}
      </div>
    </div>
    <div class="mb-4">
      <button on:click={toggleTerms} class="hover:underline mx-2">{currentContent.terms}</button>
      <button on:click={togglePrivacy} class="hover:underline mx-2">{currentContent.privacy}</button>
    </div>
    <div>
      <p>{@html currentContent.copy}</p>
    </div>
  </div>

  {#if showTerms}
    <PopUp title={currentContent.terms} content={currentContent.termsContent} onClose={toggleTerms} />
  {/if}

  {#if showPrivacy}
    <PopUp title={currentContent.privacy} content={currentContent.privacyContent} onClose={togglePrivacy} />
  {/if}
</footer>
