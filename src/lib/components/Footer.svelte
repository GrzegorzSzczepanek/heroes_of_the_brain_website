<script>
  import { faDiscord, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import PopUp from './PopUp.svelte';

  let socialLinks = [
    { icon: faFacebook, url: "https://www.facebook.com/heroesofthebrain", name: "Facebook link" },
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
        <li>Hackathon "Heroes of the Brain" (dalej "Hackathon" lub "Wydarzenie") jest organizowany przez Wydziałową Radę Samorządu Studenckiego Wydziału Informatyki i Telekomunikacji (WRSS WIT) oraz Koło Naukowe "Neuron" (KN Neuron) Politechniki Wrocławskiej.</li>
        <li>Celem Hackathonu jest rozwijanie zaawansowanych interfejsów mózg-komputer (BCI) poprzez tworzenie innowacyjnych systemów opartych na modelach sztucznej inteligencji, skierowanych na praktyczne zastosowania w obszarze neuroinformatyki.</li>
        <li>Niniejszy regulamin dostępny jest na stronie internetowej Wydarzenia https://www.heroesofthebrain.pwr.edu.pl/.</li>
        <li>Oficjalnym serwisem internetowym do rejestracji Uczestników Wydarzenia jest Eventownik Solvro dostępny na https://eventownik.solvro.pl/</li>
      </ol>
      <h3>§2. Definicje</h3>
      <ol>
        <li>"Wydarzenie" - Hackaton "Heroes of the Brain" edycja 2025</li>
        <li>"Organizatorzy" - czyli Wydziałowa Rada Samorządu Studenckiego Wydziału Informatyki i Telekomunikacji oraz Koło Naukowe "Neuron".</li>
        <li>"Mentor" - osoba wspomagająca uczestników w trakcie Wydarzenia.</li>
        <li>"Juror" - osoba oceniająca zadanie wykonane przez uczestników.</li>
        <li>"Wolontariusz" - osoba wspomagająca przebieg Wydarzenia.</li>
      </ol>
      <h3>§3. Miejsce i Czas Wydarzenia</h3>
      <ol>
        <li>Wydarzenie odbędzie się od godziny 9:00 dnia 29 listopada 2025 roku do godziny 21:00 dnia 30 listopada 2025 roku.</li>
        <li>Miejscem wydarzenia jest budynek Politechniki Wrocławskiej D-21 na Placu Grunwaldzkim 11, 50-378 we Wrocławiu.</li>
      </ol>
      <h3>§4. Zasady Uczestnictwa</h3>
      <ol>
        <li>Wydarzenie jest otwarte dla wszystkich osób pełnoletnich, szczególnie dla osób zainteresowanych nowymi technologiami, chętnych do nauki nowych rzeczy oraz pasjonatów neuroinformatyki (dalej "Uczestnicy").</li>
        <li>Uczestnicy rejestrują się poprzez formularz dostępny na stronie internetowej Wydarzenia https://eventownik.solvro.pl/neurohackaton-2025. Udział w Wydarzeniu jest bezpłatny. Uczestnicy zgłaszają się na Wydarzenie w formie zespołów.</li>
        <li>Każdy zespół może składać się z minimum 3 osób, a maksymalnie z 5 osób.
          <ul>
            <li>Uczestnicy mogą zgłosić się indywidualnie, w parach lub w pełnym zespole.</li>
            <li>Organizatorzy zastrzegają sobie prawo do przydzielenia indywidualnych Uczestników lub par do innych zespołów, które nie osiągnęły maksymalnego limitu Uczestników.</li>
          </ul>
        </li>
        <li>Wydarzenie jest otwarte zarówno dla Uczestników krajowych, jak i zagranicznych. Uczestnikom zagranicznym, biorącym udział stacjonarnie, zapewnione będzie wsparcie, które obejmuje podanie informacji dotyczących możliwych miejsc zakwaterowania we Wrocławiu, transportu oraz pomoc językową. Wszystkie materiały i komunikaty związane z Wydarzeniem będą dostępne w języku angielskim oraz polskim, aby zagwarantować pełną dostępność dla każdego.</li>
        <li>Rejestracja jest otwarta od 29 września 2025.</li>
        <li>Organizatorzy nie ponoszą kosztów związanych z potencjalnym uszkodzeniem lub kradzieżą prywatnego sprzętu Uczestników. Uczestnicy mogą pracować na swoich komputerach, ponosząc pełną odpowiedzialność za ich dobrostan.</li>
        <li>Uczestnicy są zobowiązani do pokrycia kosztów wszelkich szkód wyrządzonych w mieniu Organizatorów, w szczególności w udostępnionym sprzęcie oraz wyposażeniu wykorzystywanym podczas Wydarzenia.</li>
        <li>Wydarzenie ma charakter zamknięty i nie stanowi imprezy masowej w rozumieniu ustawy z dnia 23 marca 2009 roku o bezpieczeństwie imprez masowych.</li>
      </ol>
      <h3>§5. Tematyka i Zadania Wydarzenia</h3>
      <ol>
        <li>Tematyka Wydarzenia obejmuje tworzenie rozwiązań z użyciem interfejsów mózg-komputer (BCI) związanych z jedną z określonych przez Organizatorów kategorii: Wellness oraz Commerce.</li>
        <li>Uczestnicy będą mieli dostęp do urządzeń EEG i innych niezbędnych narzędzi na miejscu. Dla kategorii wellness będzie udostępnione urządzenie 8 kanałowe, a dla commerce 4 kanałowe.</li>
      </ol>
      <h3>§6. Wsparcie Techniczne i Mentorzy</h3>
      <ol>
        <li>Mentorzy będą ogólnodostępni i gotowi do pomocy wszystkim zespołom podczas Wydarzenia.</li>
        <li>Wolontariusze będą dostępni na miejscu Wydarzenia, aby udzielać wsparcia technicznego.</li>
      </ol>
      <h3>§7. Wolontariusze</h3>
      <ol>
        <li>Aby zostać wolontariuszem na Wydarzeniu należy skontaktować się z Organizatorami na e-mail kn.neuron@pwr.edu.pl</li>
        <li>Wolontariuszem może zostać każda osoba pełnoletnia, kto zgłosi chęć udziału.</li>
      </ol>
      <h3>§8. Kryteria Oceny i Sędziowie</h3>
      <ol>
        <li>Projekty będą oceniane przez grupę jurorów składającą się z przedstawicieli sponsorów Wydarzenia oraz przedstawicieli Politechniki Wrocławskiej. Z prac jurorów zostanie sporządzony protokół podpisany przez wszystkich członków grupy jurorów.</li>
        <li>Projekty będą oceniane w kilku kryteriach, takich jak innowacyjność, użyteczność, jakość implementacji oraz prezentacja końcowa, według ustalonej skali ocen.</li>
        <li>Maksymalna ilość punktów do zdobycia za projekt wynosi 25. Każdy zespół za implementację ma szansę zdobyć od 1 do 10 punktów. W każdym pozostałym kryterium dana grupa ma szansę zdobyć od 1 do maksymalnie 5 punktów.</li>
        <li>W przypadku remisu punktowego pomiędzy co najmniej dwoma zespołami, decyzja o zespole zwycięskim zostanie podjęta poprzez jury.</li>
        <li>Wyniki zostaną podane do wiadomości podczas ceremonii wręczenia nagród oraz za pomocą wiadomości e-mail do Uczestników.</li>
      </ol>
      <h3>§9. Nagrody</h3>
      <ol>
        <li>Przewidziane są nagrody finansowe oraz rzeczowe.</li>
        <li>Nagrody będą przyznawane za zajęcie 1., 2. i 3. miejsca w każdej kategorii oraz mogą zostać przyznane dodatkowe wyróżnienia w zależności od wyników w poszczególnych kategoriach oceny.</li>
        <li>Aby odebrać nagrodę, Uczestnicy zobowiązani są do wypełnienia dokumentów niezbędnych do ewidencji podatkowej.
          <ul>
            <li>Dokumenty te zostaną wysłane do laureatów w ciągu 2 tygodni od ogłoszenia werdyktu jury.</li>
            <li>Laureaci muszą odesłać wypełnione dokumenty w ciągu tygodnia od ich otrzymania. W przypadku niedopełnienia tego obowiązku, nagroda nie zostanie przyznana.</li>
          </ul>
        </li>
        <li>Nagrody pieniężne zostaną wypłacone w terminie do 2 miesięcy od daty dostarczenia wymaganych dokumentów.</li>
      </ol>
      <h3>§10. Prawa Autorskie i Własność Intelektualna</h3>
      <ol>
        <li>Uczestnicy zachowują pełne prawa autorskie do swoich projektów.</li>
        <li>Organizatorzy zastrzegają sobie prawo do prezentowania i promowania projektów stworzonych podczas Hackathonu.</li>
        <li>Uczestnicy mają możliwość udostępnienia swoich projektów na licencji open-source, jeśli wyrażą taką wolę.</li>
        <li>Prezentacje przedstawione w trakcie Wydarzenia mogą zostać udostępnione do zapoznania się sponsorom Wydarzenia.</li>
      </ol>
      <h3>§11. Przetwarzanie Danych Osobowych</h3>
      <ol>
        <li>Polityka prywatności, określająca zasady przetwarzania danych osobowych uczestników wydarzenia, stanowi osobny dokument i jest dostępna w oddzielnym pliku o nazwie "Hackaton Heroes of the Brain Polityka Prywatności" na stronie internetowej https://heroesofthebrain.pwr.edu.pl/.</li>
        <li>W formularzu rejestracyjnym Uczestnicy akceptują udostępnianie ich wizerunku obejmującą publikację zdjęć, nagrań wideo lub innych form wizualnych w mediach społecznościowych, materiałach promocyjnych oraz na stronie internetowej Organizatorów, sponsorów oraz patronów medialnych Wydarzenia.</li>
        <li>Wizerunek uczestników zostanie wykorzystany jedynie w celach promocji i dokumentacji Wydarzenia.</li>
      </ol>
      <h3>§12. Odwołania</h3>
      <ol>
        <li>Uczestnicy mają prawo do składania odwołań dotyczących wyników Wydarzenia w ciągu 24 godzin od ogłoszenia wyników na adres mailowy określony w ust.3.</li>
        <li>Odwołania będą rozpatrywane przez zespół Organizatorów w terminie do 14 dni roboczych.</li>
        <li>Odwołania winny zostać wysłane na e-mail hotb@gmail.com.</li>
      </ol>
      <h3>§13. Prawo do Interpretacji</h3>
      <ol>
        <li>Organizatorzy zastrzegają sobie prawo do ostatecznej interpretacji niniejszego regulaminu. Wszelkie kwestie sporne oraz nieujęte w regulaminie będą rozstrzygane przez Organizatorów.</li>
        <li>W sprawach nieuregulowanych regulaminem zastosowanie mają przepisy obowiązującego prawa, w tym kodeksu cywilnego. Niniejszy regulamin wchodzi w życie z chwilą opublikowania na stronie internetowej Wydarzenia https://www.heroesofthebrain.pwr.edu.pl/</li>
        <li>Niniejszy regulamin został sporządzony w dwóch wersjach językowych: w j. polskim oraz w j. angielskim. W przypadku rozbieżności lub interpretacji obowiązująca jest wersja w j. polskim.</li>
      </ol>
    `,
    privacyContent: "To jest przykładowa treść polityki prywatności. Twoje dane są bezpieczne i przechowywane zgodnie z przepisami.",
    copy: "&copy; {year} Neuronki. Wszelkie prawa zastrzeżone."
  };

  const contentEN = {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    termsContent: `
      <h2>Hackathon Regulations "Heroes of the Brain"</h2>
      <h3>§1. Organizers and Purpose of the Event</h3>
      <ol>
        <li>The Hackathon "Heroes of the Brain" (hereinafter referred to as the "Hackathon" or "Event") is organized by the Faculty Student Council of the Faculty of Information and Communication Technology (WRSS WIT) and the Scientific Circle "Neuron" (KN Neuron) of Wrocław University of Science and Technology.</li>
        <li>The purpose of the Hackathon is to advance brain-computer interface (BCI) technologies through the creation of innovative systems based on artificial intelligence models, focused on practical applications in the field of neuroinformatics.</li>
        <li>These regulations are available on the Event's official website: https://www.heroesofthebrain.pwr.edu.pl/</li>
        <li>The official online registration service for Event Participants is Eventownik Solvro, available at https://eventownik.solvro.pl/</li>
      </ol>
      <h3>§2. Definitions</h3>
      <ol>
        <li>"Event" – Hackathon "Heroes of the Brain", 2025 edition</li>
        <li>"Organizers" – the Faculty Student Council of the Faculty of Computer Science and Telecommunications and the Student Research Group "Neuron"</li>
        <li>"Mentor" – a person supporting participants during the event</li>
        <li>"Juror" – a person evaluating tasks completed by participants</li>
        <li>"Volunteer" – a person supporting the smooth running of the event</li>
      </ol>
      <h3>§3. Venue and Schedule</h3>
      <ol>
        <li>The Event will take place from 9:00 a.m. on November 29, 2025, to 9:00 p.m. on November 30, 2025.</li>
        <li>The venue of the Event is the D-21 building of Wrocław University of Science and Technology, Plac Grunwaldzki 11, 50-378 Wrocław, Poland.</li>
      </ol>
      <h3>§4. Participation Rules</h3>
      <ol>
        <li>The event is open to adults, especially to individuals interested in new technologies, eager to learn, and passionate about neuroinformatics.</li>
        <li>Participants must register via the form available on the event website https://www.heroesofthebrain.pwr.edu.pl/. Participation in the event is free of charge.</li>
        <li>Participants apply in teams. Each team may consist of a minimum of 3 and a maximum of 5 people.
          <ul>
            <li>Participants may register individually, in pairs, or as full teams.</li>
            <li>The organizers reserve the right to assign individual participants or pairs to other teams that have not reached the maximum number of members.</li>
          </ul>
        </li>
        <li>The event is open to both domestic and international participants. On-site international participants will be provided with support including accommodation information, transport details, and language assistance. All materials and communications related to the event will be available in both English and Polish to ensure full accessibility for everyone.</li>
        <li>Registration opens on September 29, 2025.</li>
        <li>The organizers are not responsible for potential damage to or theft of participants' personal equipment. Participants may work on their own computers, taking full responsibility for their condition.</li>
        <li>Participants are required to cover the costs of any damage caused to the organizers' property, in particular the equipment and facilities made available during the event.</li>
        <li>The Event is a closed event and does not constitute a mass event within the meaning of the Act of March 23, 2009 on the safety of mass events.</li>
      </ol>
      <h3>§5. Event Themes and Tasks</h3>
      <ol>
        <li>The event will focus on developing solutions using brain–computer interfaces (BCI) related to one of the topics prepared by the organizers: Wellness and Commerce.</li>
        <li>Participants will have access to EEG devices and other necessary tools on-site. For the wellness category, an 8-channel EEG device will be available, and for the commerce category, a 4-channel device.</li>
      </ol>
      <h3>§6. Technical Support and Mentors</h3>
      <ol>
        <li>Mentors will be available and ready to assist all teams throughout the event.</li>
        <li>Volunteers will be present at the venue to provide technical support.</li>
      </ol>
      <h3>§7. Volunteers</h3>
      <ol>
        <li>To become a volunteer at the Event, candidates should contact the Organizers via email at kn.neuron@pwr.edu.pl</li>
        <li>Any adult individual who expresses willingness to participate may become a volunteer.</li>
      </ol>
      <h3>§8. Evaluation Criteria and Jury</h3>
      <ol>
        <li>Projects will be evaluated by a group of jurors consisting of event sponsors and representatives of Wrocław University of Science and Technology. A protocol of the jury's work will be prepared and signed by all members of the jury.</li>
        <li>Projects will be assessed in several criteria such as innovation, usability, quality of implementation, and final presentation, according to a predetermined scoring scale.</li>
        <li>The maximum score for a project is 25 points. Each team has a chance to earn between 1 and 10 points for its implementation. In each of the remaining criteria, a given group has a chance to earn between 1 and a maximum of 5 points.</li>
        <li>In the case of a tie between two or more teams, the winning team will be determined by the jury.</li>
        <li>The results will be announced during the award ceremony and communicated via e-mail to participants.</li>
      </ol>
      <h3>§9. Awards</h3>
      <ol>
        <li>Both cash and material prizes are planned.</li>
        <li>Prizes will be awarded for 1st, 2nd, and 3rd place in each category. Additional distinctions may be granted depending on performance in specific evaluation categories.</li>
        <li>To receive a prize, Participants must complete the documents required for tax registration.
          <ul>
            <li>These documents will be sent to the winners within 2 weeks after the jury's verdict is announced.</li>
            <li>Winners must return the completed documents within 1 week of receiving them. Failure to do so will result in forfeiture of the prize.</li>
          </ul>
        </li>
        <li>Cash prizes will be transferred within 2 months from the date the required documents are submitted.</li>
      </ol>
      <h3>§10. Copyright and Intellectual Property</h3>
      <ol>
        <li>Participants retain full copyright to their projects.</li>
        <li>The organizers reserve the right to present and promote projects created during the hackathon.</li>
        <li>Participants may choose to release their projects under an open-source license if they wish.</li>
        <li>Presentations presented during the event may be made available to event sponsors for review.</li>
      </ol>
      <h3>§11. Personal Data Processing</h3>
      <ol>
        <li>The Privacy Policy, defining the rules for the processing of personal data of Event participants, is contained in a separate document titled "Hackathon Heroes of the Brain Privacy Policy", available on the Event's website: https://heroesofthebrain.pwr.edu.pl/</li>
        <li>In the registration form, Participants consent to the use of their image, including the publication of photos, video recordings, or other visual materials in social media, promotional materials, and on the websites of the Organizers, sponsors, and media partners of the Event.</li>
        <li>Participants' images will be used solely for promotional and documentation purposes related to the Event.</li>
      </ol>
      <h3>§12. Appeals</h3>
      <ol>
        <li>Participants have the right to submit appeals regarding the Event results within 24 hours of the announcement of the results to the email address specified in paragraph 3.</li>
        <li>Appeals will be reviewed by the Organizers within 14 working days.</li>
        <li>Appeals should be sent to hotb@gmail.com</li>
      </ol>
      <h3>§13. Right to Interpretation</h3>
      <ol>
        <li>The Organizers reserve the right to final interpretation of these regulations. All disputes or issues not covered by these regulations will be resolved by the Organizers.</li>
        <li>In matters not regulated herein, the provisions of applicable Polish law, including the Civil Code, shall apply. These regulations enter into force upon publication on the Event's website https://www.heroesofthebrain.pwr.edu.pl/</li>
        <li>These regulations are drawn up in two language versions: Polish and English. In case of discrepancies or interpretation doubts, the Polish version shall prevail.</li>
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
      <!-- <button on:click={togglePrivacy} class="hover:underline mx-2">{currentContent.privacy}</button> -->
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
