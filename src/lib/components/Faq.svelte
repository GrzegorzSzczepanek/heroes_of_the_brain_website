<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { slide } from 'svelte/transition';

  const faqsPL = [
  {
    question: "Kto może wziąć udział w wydarzeniu?",
    answer: "W Hackathonie mogą wziąć udział wszyscy entuzjaści neuroinformatyki, zarówno z Polski, jak i z innych krajów. Wydarzenie jest otwarte dla wszystkich, którzy interesują się tą dziedziną, niezależnie od poziomu zaawansowania. Do udziału zapraszamy zarówno osoby, które mają już doświadczenie w neuroinformatyce, jak i tych, którzy dopiero pragną ją odkrywać. Ponadto, mile widziani są pasjonaci informatyki oraz sztucznej inteligencji, gotowi do poszerzania swoich horyzontów i wspólnej pracy nad innowacyjnymi projektami.",
    open: false
  },
  {
    question: "Czy osoby z różnych dziedzin również mogą wziąć udział?",
    answer: "Tak, osoby z różnych dziedzin również mogą wziąć udział w Hackathonie. Projekty mogą być interdyscyplinarne, dlatego zapraszamy zarówno specjalistów z game devu, programistów, pasjonatów sztucznej inteligencji, jak i grafików.",
    open: false
  },
  {
    question: "Czy będę potrzebował własnego sprzętu komputerowego, aby wziąć udział?",
    answer: "Tak.",
    open: false
  },
  {
    question: "Czy uczestnicy otrzymują pomoc podczas wydarzenia?",
    answer: "Tak, podczas wydarzenia planowane jest udzielanie wsparcia przez mentorów.",
    open: false
  },
  {
    question: "Czy przewidywane są nagrody dla zwycięzców?",
    answer: "Tak, przewidziane nagrody za 3. pierwsze miejsca w dwóch kategoriach.",
    open: false
  },
  {
    question: "Czy będzie możliwość noclegu na miejscu?",
    answer: "Tak! Zapewniamy nocleg na miejscu oraz poczęstunek.",
    open: false
  },
  {
    question: "Czy na miejscu będzie dostępny parking?",
    answer: "Tak, na miejscu dostępny jest parking dla uczestników.",
    open: false
  }
];

const faqsEN = [
  {
    question: "Who can participate in the event?",
    answer: "The Hackathon is open to all neuroinformatics enthusiasts from Poland and other countries. The event is open to everyone interested in the field, regardless of their experience level. We invite both individuals who have experience in neuroinformatics and those who are just beginning to explore it. Furthermore, we welcome enthusiasts of computer science and artificial intelligence, ready to expand their horizons and work together on innovative projects.",
    open: false
  },
  {
    question: "Can people from other fields also participate?",
    answer: "Yes, people from different fields can also participate in the Hackathon. The projects can be interdisciplinary, so we welcome game developers, programmers, AI enthusiasts, and graphic designers.",
    open: false
  },
  {
    question: "Will I need my own computer equipment to participate?",
    answer: "Yes.",
    open: false
  },
  {
    question: "Do participants receive help during the event?",
    answer: "Yes, during the event, support from mentors is planned.",
    open: false
  },
  {
    question: "Are there prizes for the winners?",
    answer: "Yes, prizes are provided for the top 3 positions in two categories.",
    open: false
  },
  {
    question: "Will there be accommodation on-site?",
    answer: "Yes! Accommodation and refreshments will be provided on-site.",
    open: false
  },
  {
    question: "Will there be parking available on-site?",
    answer: "Yes, there is parking available for participants on-site.",
    open: false
  }
];

  const faqs = derived(isPolish, $isPolish => $isPolish ? faqsPL : faqsEN);

  let currentFaqs;

  faqs.subscribe(value => {
    currentFaqs = value;
  });

  function toggleFaq(index) {
    currentFaqs = currentFaqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    });
  }
</script>

<style>
  #faq-section {
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  #faq {
    border-radius: 8px;
    border: 1px solid white;
    width: 100%;
    max-width: 800px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 1rem;
  }

  .faq-item {
    margin-bottom: 1rem;
    border-bottom: 1px solid gray;
  }

  .faq-button {
    width: 100%;
    text-align: left;
    font-size: 1rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    color: white;
  }

  .faq-answer {
    padding: 0.5rem;
    color: white;
  }

  @media (min-width: 600px) {
    .faq-button {
      font-size: 1.25rem;
      padding: 1rem;
    }
    .faq-answer {
      font-size: 1.125rem;
      padding: 1rem;
    }
  }
</style>

<section id="faq-section">
  <div id="faq">
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-8 text-white">FAQ</h1>
    {#each currentFaqs as faq, index}
      <div class="faq-item">
        <button class="faq-button" on:click={() => toggleFaq(index)}>
          {faq.question}
          <span class="text-2xl md:text-3xl">
            {#if faq.open}
              <span class="text-purple-500">-</span>
            {:else}
              <span class="text-purple-500">+</span>
            {/if}
          </span>
        </button>
        {#if faq.open}
          <div class="faq-answer" transition:slide>
            {faq.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
