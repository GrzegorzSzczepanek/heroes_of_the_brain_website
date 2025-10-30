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
      Regulamin Hackathonu "Heroes of the Brain"
§1. Organizatorzy i Cel Wydarzenia
1. Hackathon "Heroes of the Brain" (dalej “Hackathon” lub “Wydarzenie”jest
organizowany przez Wydziałową Radę Samorządu Studenckiego Wydziału
Informatyki i Telekomunikacji (WRSS WIT) oraz Koło Naukowe "Neuron" (KN
Neuron) Politechniki Wrocławskiej.
2. Celem Hackathonu jest rozwijanie zaawansowanych interfejsów mózg-komputer
(BCI) poprzez tworzenie innowacyjnych systemów opartych na modelach sztucznej
inteligencji, skierowanych na praktyczne zastosowania w obszarze neuroinformatyki.
3. Niniejszy regulamin dostępny jest na stronie internetowej Wydarzenia
https://www.heroesofthebrain.pwr.edu.pl/.
4. Oficjalnym serwisem internetowym do rejestracji Uczestników Wydarzenia jest
Eventownik Solvro dostępny na https://eventownik.solvro.pl/
§2. Definicje
1. “Wydarzenie” - Hackaton “Heroes of the Brain” edycja 2025
2. “Organizatorzy” - czyli Wydziałowa Rada Samorządu Studenckiego Wydziału
Informatyki i Telekomunikacji oraz Koło Naukowe “Neuron”.
3. “Mentor” - osoba wspomagająca uczestników w trakcie Wydarzenia.
4. “Juror” - osoba oceniająca zadanie wykonane przez uczestników.
5. “Wolontariusz” - osoba wspomagająca przebieg Wydarzenia.
§3. Miejsce i Czas Wydarzenia
1. Wydarzenie odbędzie się od godziny 9:00 dnia 29 listopada 2025 roku do godziny
21:00 dnia 30 listopada 2025 roku.
2. Miejscem wydarzenia jest budynek Politechniki Wrocławskiej D-21 na Placu
Grunwaldzkim 11, 50-378 we Wrocławiu.
§4. Zasady Uczestnictwa
1. Wydarzenie jest otwarte dla wszystkich osób pełnoletnich będących, szczególnie dla
osób zainteresowanych nowymi technologiami, chętnych do nauki nowych rzeczy
oraz pasjonatów neuroinformatyki (dalej “Uczestnicy”).
2. Warunkiem uczestnictwa jest ucześniejsze zarejestrowanie uczestnika poprzez
aplikacje internetową “Eventownik”. Każdy zgłaszający się potencjalny uczestnik
musi mieć ukończone 18 lat.
3. Uczestnicy rejestrują się poprzez formularz dostępny na stronie internetowej
Wydarzenia https://eventownik.solvro.pl/neurohackaton-2025 Udział w Wydarzeniu
jest bezpłatny. Uczestnicy zgłaszają się na Wydarzenie w formie zespołów.
4. Każdy zespół może składać się z minimum 3 osób, a maksymalnie z 5 osób.
○ Uczestnicy mogą zgłosić się indywidualnie, w parach lub w pełnym zespole.
○ Organizatorzy zastrzegają sobie prawo do przydzielenia indywidualnych
Uczestników lub par do innych zespołów, które nie osiągnęły maksymalnego
limitu Uczestników.
5. Wydarzenie jest otwarte zarówno dla Uczestników krajowych, jak i zagranicznych.
Uczestnikom zagranicznym, biorącym udział stacjonarnie, zapewnione będzie
wsparcie, które obejmuje podanie informacji dotyczących możliwych miejsc
zakwaterowania we Wrocławiu, transportu oraz pomoc językową. Wszystkie
materiały i komunikaty związane z Wydarzeniem będą dostępne w języku angielskim
oraz polskim, aby zagwarantować pełną dostępność dla każdego.
6. Rejestracja jest otwarta od 29 września 2025.
7. Organizatorzy nie ponoszą kosztów związanych z potencjalnym uszkodzeniem lub
kradzieżą prywatnego sprzętu Uczestników. Uczestnicy mogą pracować na swoich
komputerach, ponosząc pełną odpowiedzialność za ich dobrostan.
8. Uczestnicy są zobowiązani do pokrycia kosztów wszelkich szkód wyrządzonych w
mieniu Organizatorów, w szczególności w udostępnionym sprzęcie oraz
wyposażeniu wykorzystywanym podczas Wydarzenia.
9. Wydarzenie ma charakter zamknięty i nie stanowi imprezy masowej w rozumieniu
ustawy z dnia 23 marca 2009 roku o bezpieczeństwie imprez masowych.
§5. Tematyka i Zadania Wydarzenia
1. Tematyka Wydarzenia obejmuje tworzenie rozwiązań z użyciem interfejsów
mózg-komputer (BCI) związanych z jedną z określonych przez Organizatorów
kategorii. Wellness oraz Commerce
2. Uczestnicy będą mieli dostęp do urządzeń EEG i innych niezbędnych narzędzi na
miejscu. Dla kategorii wellness będzie udostępnione urządzenie 8 kanałowe a dla
commerce 4 kanałowe
§6. Wsparcie Techniczne i Mentorzy
1. Mentorzy będą ogólnodostępni i gotowi do pomocy wszystkim zespołom podczas
Wydarzenia.
2. Wolontariusze będą dostępni na miejscu Wydarzenia, aby udzielać wsparcia
technicznego.
§7. Wolontariusze
1. Aby zostać wolontariuszem na Wydarzeniu należy skontaktować się z
Organizatorami na e-mail kn.neuron@pwr.edu.pl
2. Wolontariuszem może zostać każda osoba pełnoletnia, kto zgłosi chęć udziału.
§8. Kryteria Oceny i Sędziowie
1. Projekty będą oceniane przez grupę jurorów składającą się z przedstawicieli
sponsorów Wydarzenia oraz przedstawicieli Politechniki Wrocławskiej. Z prac jurorów
zostanie sporządzony protokół podpisany przez wszystkich członków grupy jurorów.
2. Projekty będą oceniane w kilku kryteriach, takich jak innowacyjność, użyteczność,
jakość implementacji oraz prezentacja końcowa, według ustalonej skali ocen .
3. Maksymalna ilość punktów do zdobycia za projekt wynosi 25. Każda zespół za
implementacje ma szansę zdobyć od 1 do 10 punktów. W każdym kryterium
pozostałym kryterium dana grupa ma szansę zdobyć od 1 do maksymalnie 5
punktów.
4. W przypadku remisu punktowego pomiędzy co najmniej dwoma zespołami, decyzja o
zespole zwycięskim zostanie podjęta poprzez jury,
5. Wyniki zostaną podane do wiadomości podczas ceremonii wręczenia nagród oraz za
pomocą wiadomości e-mail do Uczestników.
§9. Nagrody
1. Przewidziane są nagrody finansowe oraz rzeczowe.
2. Nagrody będą przyznawane za zajęcie 1., 2. i 3. miejsca w każdej kategorii oraz
mogą zostać przyznane dodatkowe wyróżnienia w zależności od wyników w
poszczególnych kategoriach oceny.
3. Aby odebrać nagrodę, Uczestnicy zobowiązani są do wypełnienia dokumentów
niezbędnych do ewidencji podatkowej.
○ Dokumenty te zostaną wysłane do laureatów w ciągu 2 tygodni od ogłoszenia
werdyktu jury..
○ Laureaci muszą odesłać wypełnione dokumenty w ciągu tygodnia od ich
otrzymania. W przypadku niedopełnienia tego obowiązku, nagroda nie
zostanie przyznana.
○ Nagrody pieniężne zostaną wypłacone w w terminie do 2 miesięcy od daty
dostarczenia wymaganych dokumentów
§10. Prawa Autorskie i Własność Intelektualna
1. Uczestnicy zachowują pełne prawa autorskie do swoich projektów.
2. Organizatorzy zastrzegają sobie prawo do prezentowania i promowania projektów
stworzonych podczas Hackathonu.
3. Uczestnicy mają możliwość udostępnienia swoich projektów na licencji open-source,
jeśli wyrażą taką wolę.
4. Prezentacje przedstawione w trakcie Wydarzenia mogą zostać udostępnione do
zapoznania się sponsorom Wydarzenia.
§11. Przetwarzanie Danych Osobowych
1. Polityka prywatności, określająca zasady przetwarzania danych osobowych
uczestników wydarzenia, stanowi osobny dokument i jest dostępna w oddzielnym
pliku o nazwie “Hackaton Heroes of the Brain Polityka Prywatności” na stronie
internetowej https://heroesofthebrain.pwr.edu.pl/.
2. Dane osobowe uczestników będą pobierane zgodnie z polityką prywatności
Wydarzenia, również te dane będą przekazywane firmą za zgodą uczestnika na
podstawie umowy sponsorskiej z daną firmą.
3. Zgoda na przetwarzanie danych osobowych w ramach umowy sponsorskiej jest
dobrowolna, natomiast podanie danych osobowych w formularzu zgłoszeniowym jest
warunkiem koniecznym do wzięcia udziału w Wydarzeniu.
4. W formularzu rejestracyjnym Uczestnicy akceptują udostępnianie ich wizerunku
obejmującą publikację zdjęć, nagrań wideo lub innych form wizualnych w mediach
społecznościowych, materiałach promocyjnych oraz na stronie internetowej
Organizatorów, sponsorów oraz patronów medialnych Wydarzenia.
5. Wizerunek uczestników zostanie wykorzystany jedynie w celach promocji i
dokumentacji Wydarzenia
§12. Odwołania
1. Uczestnicy mają prawo do składania odwołań dotyczących wyników Wydarzenia w
ciągu 24 godzin od ogłoszenia wyników na adres mailowy określony w ust.3.
2. Odwołania będą rozpatrywane przez zespół Organizatorów w terminie do 14 dni
roboczych.
3. Odwołania winny zostać wysłane na e-mail hotb@gmail.com.
§13. Prawo do Interpretacji
1. Organizatorzy zastrzegają sobie prawo do ostatecznej interpretacji niniejszego
regulaminu. Wszelkie kwestie sporne oraz nieujęte w regulaminie będą rozstrzygane
przez Organizatorów.
2. W sprawach nieuregulowanych regulaminem zastosowanie mają przepisy
obowiązującego prawa, w tym kodeksu cywilnego. Niniejszy regulamin wchodzi w
życie z chwilą opublikowania na stronie internetowej Wydarzenia
https://www.heroesofthebrain.pwr.edu.pl/
3. Niniejszy regulamin został sporządzony w dwóch wersjach językowych: w j.
polskim oraz w j. angielskim. W przypadku rozbieżności lub interpretacji
obowiązująca jest wersja w j. polskim.
.
    `,
    privacyContent: `
      Polityka Prywatności wydarzenia
Heroes of the Brain
Zgodnie z art. 13 ust. 1 i ust. 2 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
(ogólne rozporządzenie o ochronie danych, dalej „RODO”), informujemy, iż:
1. Administratorem Pani/Pana danych osobowych w związku z Wydarzeniem pn. "Heroes of the
Brain" (dalej „Administratorem”) jest Politechnika Wrocławska z siedzibą przy ul. Wybrzeże
Stanisława Wyspiańskiego 27, 50-370 Wrocław.
2. W sprawach związanych z przetwarzaniem danych osobowych można kontaktować się z
Administratorem Ochrony Danych pod adresem e-mail: eventownik@pwr.edu.pl lub
bezpośrednio z organizatorem Wydarzenia "Heroes of the Brain"pod adresem
272731@student.pwr.edu.pl
3. Dane osobowe będą przetwarzane wyłącznie w celu realizacji Wydarzenia, w szczególności
do weryfikacji uczestnictwa, kontaktu oraz dokumentacji. W przypadku wyrażenia zgody w
formularzu zgłoszeniowym, dane osobowe mogą zostać przekazane sponsorom wydarzenia w
celach rekrutacyjnych. Przekazanie danych sponsorom następuje wyłącznie na podstawie
dobrowolnej zgody udzielonej podczas rejestracji, zgodnie z art. 6 ust. 1 lit. a RODO.
Uczestnik ma prawo do cofnięcia zgody w dowolnym momencie a nie będzie to miało
znaczenia dla legalności działań Administratora danych dokonanych do chwili
wycofania zgody
4. Dane będą przetwarzane do 29.11.2026 r.
5. Dane będą przetwarzane w sposób zautomatyzowany, za pomocą aplikacji Eventownik.
6. Przetwarzane będą Pani/Pana poniższe dane:
1. Imię i Nazwisko
2. Adres email
3. Informacje o kraju oraz mieście zamieszkania
4. Dane dotyczące urządzenia tj. adres IP, dane sesji, identyfikator
użytkownika
5. Informacje na temat uczelni, kierunku i roku studiów uczestnika
6. Informacje o doświadczeniu zawodowym
7. Informacje o poziomie danych umiejętności uczestnika.
7. Pani/Pana danych osobowe mogą być przekazywane:
1. uprawnionym podmiotom na podstawie obowiązujących przepisów (np. sądowi lub
Policji);
2. wolontariuszom świadczącym usługi w imieniu Administratora w niezbędnym do
tego celu zakresie;
3. a w przypadku wyrażenia zgody przez uczestnika również, sponsorom wydarzenia w
zakresie umożliwiającym przeprowadzenie procesu rekrutacji
8. Posiada Pani/Pan prawo żądania:
1. dostępu do swoich danych osobowych;
2. kopii przetwarzanych danych osobowych;
3. przeniesienia danych osobowych przetwarzanych w sposób zautomatyzowany;
4. sprostowania swoich danych osobowych;
5. usunięcia swoich danych osobowych;
6. ograniczenia przetwarzania swoich danych osobowych;
7. cofnięcia zgody na przetwarzanie danych osobowych (jeżeli podstawą przetwarzania
byłaby taka zgoda
8. wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych z przyczyn
związanych z szczególną Pani/Pana sytuacją zgodnie z art. 21 RODO.
9. Niezależnie od powyższego, przysługuje Pani/Panu uprawnienie do wniesienia skargi do
organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych Osobowych, gdy uznają Państwo, iż
przetwarzanie Państwa danych osobowych narusza przepisy RODO.
10. Podanie przez Pana/Panią danych osobowych jest niezbędne do wzięcia udziału w
Wydarzeniu.
    `,
    copy: "&copy; {year} Neuronki. Wszelkie prawa zastrzeżone."
  };

  const contentEN = {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    termsContent: `
      Hackathon Regulations "Heroes of the Brain"
§1. Organizers and Purpose of the Event
1. The Hackathon “Heroes of the Brain” (hereinafter referred to as the “Hackathon” or
“Event”) is organized by the Faculty Student Council of the Faculty of Information and
Communication Technology (WRSS WIT) and the Scientific Circle “Neuron” (KN
Neuron) of Wrocław University of Science and Technology.
2. The purpose of the Hackathon is to advance brain-computer interface (BCI)
technologies through the creation of innovative systems based on artificial
intelligence models, focused on practical applications in the field of neuroinformatics.
3. These regulations are available on the Event’s official website:
https://www.heroesofthebrain.pwr.edu.pl/
4. The official online registration service for Event Participants is Eventownik Solvro,
available at https://eventownik.solvro.pl/
.
§2. Definitions
1. “Event” – Hackathon "Heroes of the Brain", 2025 edition
2. “Organizers” – the Faculty Student Council of the Faculty of Computer Science and
Telecommunications and the Student Research Group “Neuron”
3. “Mentor” – a person supporting participants during the event
4. “Juror” – a person evaluating tasks completed by participants
5. “Volunteer” – a person supporting the smooth running of the event
§3. Venue and Schedule
1. The Event will take place from 9:00 a.m. on November 29, 2025, to 9:00 p.m. on
November 30, 2025.
2. The venue of the Event is the D-21 building of Wrocław University of Science and
Technology, Plac Grunwaldzki 11, 50-378 Wrocław, Poland.
§4. Participation Rules
1. The event is open to adults, especially to individuals interested in new technologies,
eager to learn, and passionate about neuroinformatics.
2. A condition for participation is prior registration of the participant through the online
application “Eventownik.” Each prospective participant must be at least 18 years old.
3. Participants must register via the form available on the event website
https://www.heroesofthebrain.pwr.edu.pl/
4. Participation in the event is free of charge.
5. Participants apply in teams. Each team may consist of a minimum of 3 and a
maximum of 5 people.
a. Participants may register individually, in pairs, or as full teams. The organizers
reserve the right to assign individual participants or pairs to other teams that
have not reached the maximum number of members.
b. The event is open to both domestic and international participants. On-site
international participants will be provided with support including
accommodation information, transport details, and language assistance. All
materials and communications related to the event will be available in both
English and Polish to ensure full accessibility for everyone.
6. Registration opens on September 29, 2025.
7. The organizers are not responsible for potential damage to or theft of participants’
personal equipment. Participants may work on their own computers, taking full
responsibility for their condition.
8. Participants are required to cover the costs of any damage caused to the organizers’
property, in particular the equipment and facilities made available during the event.
§5. Event Themes and Tasks
1. The event will focus on developing solutions using brain–computer interfaces (BCI)
related to one of the topics prepared by the organizers.Wellness and Commerce
2. Participants will have access to EEG devices and other necessary tools on-site.
3. For the wellness category, an 8-channel EEG device will be available, and for the
commerce category, a 4-channel device.
§6. Technical Support and Mentors
1. Mentors will be available and ready to assist all teams throughout the event.
2. Volunteers will be present at the venue to provide technical support.
§7. Volunteers
1. To become a volunteer at the Event, candidates should contact the Organizers via
email at kn.neuron@pwr.edu.pl
2. Any adult individual who expresses willingness to participate may become a
volunteer.
§8. Evaluation Criteria and Jury
1. Projects will be evaluated by a group of jurors consisting of event sponsors and
representatives of Wrocław University of Science and Technology. A protocol of the
jury’s work will be prepared and signed by all members of the jury.
2. Projects will be assessed in several criterias such as innovation, usability, quality of
implementation, and final presentation, according to a predetermined scoring scale.
3. The maximum score for a project is 25points, Each team has a chance to earn
between 1 and 10 points for its implementation. In each of the remaining criteria, a
given group has a chance to earn between 1 and a maximum of 5 points
4. In the case of a tie between two or more teams, the winning team will be determined
by the jury.
5. The results will be announced during the award ceremony and communicated via
e-mail to participants.
§9. Awards
1. Both cash and material prizes are planned.
2. Prizes will be awarded for 1st, 2nd, and 3rd place in each category. Additional
distinctions may be granted depending on performance in specific evaluation
categories.
3. To receive a prize, Participants must complete the documents required for tax
registration.
a. These documents will be sent to the winners within 2 weeks after the jury’s
verdict is announced.
b. Winners must return the completed documents within 1 week of receiving
them. Failure to do so will result in forfeiture of the prize.
c. Cash prizes will be transferred within 2 months from the date the required
documents are submitted.
§10. Copyright and Intellectual Property
1. Participants retain full copyright to their projects.
2. The organizers reserve the right to present and promote projects created during the
hackathon.
3. Participants may choose to release their projects under an open-source license if
they wish.
4. Presentations presented during the event may be made available to event sponsors
for review.
§11. Personal Data Processing
1. The Privacy Policy, defining the rules for the processing of personal data of Event
participants, is contained in a separate document titled “Hackathon Heroes of the
Brain Privacy Policy”, available on the Event’s website:
https://heroesofthebrain.pwr.edu.pl/
2. The personal data of participants will be collected in accordance with the Event’s
privacy policy. Such data may also be shared with companies, with the participant’s
consent, based on a sponsorship agreement with the respective company.
3. Consent to the processing of personal data under the sponsorship agreement is
voluntary; however, providing personal data in the registration form is a necessary
condition for participating in the Event.
4. In the registration form, Participants consent to the use of their image, including the
publication of photos, video recordings, or other visual materials in social media,
promotional materials, and on the websites of the Organizers, sponsors, and media
partners of the Event.
5. Participants’ images will be used solely for promotional and documentation purposes
related to the Event.
§12. Appeals
1. Participants have the right to submit appeals regarding the Event results within 24
hours of the announcement of the results to the email address specified in paragraph
3.
2. Appeals will be reviewed by the Organizers within 14 working days.
3. Appeals should be sent to hotb@gmail.com
§13. Right to Interpretation
1. The Organizers reserve the right to final interpretation of these regulations.All
disputes or issues not covered by these regulations will be resolved by the
Organizers.
2. In matters not regulated herein, the provisions of applicable Polish law, including the
Civil Code, shall apply. These regulations enter into force upon publication on the
Event’s website https://www.heroesofthebrain.pwr.edu.pl/.
3. These regulations are drawn up in two language versions: Polish and English. In
case of discrepancies or interpretation doubts, the Polish version shall prevail.

    `,
    privacyContent: `
    Privacy Policy
      In accordance with Article 13, paragraph 1 and paragraph 2 of Regulation (EU) 2016/679 of the
European Parliament and of the Council of 27 April 2016 on the protection of natural persons with
regard to the processing of personal data and on the free movement of such data, and repealing
Directive 95/46/EC (General Data Protection Regulation, hereinafter "GDPR"), we inform that:
1. The controller of your personal data in connection with the Event entitled "Heroes of the
Brain" (hereinafter "Controller") is Wrocław University of Science and Technology with its
registered office at ul. Wybrzeże Stanisława Wyspiańskiego 27, 50-370 Wrocław.
2. For matters related to personal data processing, you can contact the Data Protection
Administrator at the email address: eventownik@pwr.edu.pl or directly with the organizer of
the "Heroes of the Brain" Event at 272731@student.pwr.edu.pl
3. Personal data will be processed solely for the purpose of implementing the Event, in
particular for verification of participation, contact, and documentation. In case of consent
expressed in the registration form, personal data may be transferred to event sponsors for
recruitment purposes. Transfer of data to sponsors occurs solely based on voluntary consent
given during registration, in accordance with Article 6, paragraph 1, letter a of GDPR. The
participant has the right to withdraw consent at any time, and this will not affect the
lawfulness of the Controller's actions taken before the withdrawal of consent.
4. Data will be processed until 29.11.2026.
5. The data will be processed automatically using the Eventownik application.
6. The following data will be processed:
1. Name and Surname
2. Email address
3. Information about country and city of residence
4. Device data, i.e., IP address, session data, user identifier
5. Information about the participant's university, field of study, and year of study
6. Information about professional experience
7. Information about the participant's skill level.
6. Your personal data may be transferred to:
1. authorized entities based on applicable regulations (e.g., to court or Police);
2. volunteers providing services on behalf of the Controller to the extent necessary for
this purpose;
3. and in case of consent expressed by the participant also, to event sponsors to the
extent enabling the conduct of the recruitment process
7. You have the right to request:
1. access to your personal data;
2. a copy of processed personal data;
3. transfer of personal data processed in an automated manner;
4. rectification of your personal data;
5. deletion of your personal data;
6. restriction of processing of your personal data;
7. withdrawal of consent to personal data processing (if such consent was the basis for
processing);
8. objection to processing of your personal data for reasons related to your particular situation in
accordance with Article 21 of GDPR.
8. Regardless of the above, you have the right to file a complaint with the supervisory authority,
i.e., the President of the Personal Data Protection Office, when you consider that the processing of
your personal data violates GDPR provisions.
9. Providing your personal data is necessary to participate in the Event.

    `,
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
