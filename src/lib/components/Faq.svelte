<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { slide } from 'svelte/transition';

  // Define FAQ content for both languages
  const faqsPL = [
    {
      question: "Kto może wziąć udział w wydarzeniu?",
      answer: "W wydarzeniu mogą wziąć udział tylko i wyłącznie osoby mające aktywny status studenta.",
      open: true
    },
    {
      question: "Czy osoby z innych dziedzin również mogą wziąć udział?",
      answer: "Oczywiście, że mogą. Wydarzenie jest otwarte dla osób z różnych dziedzin.",
      open: false
    },
    {
      question: "Czy będę potrzebował własnego sprzętu komputerowego, aby wziąć udział?",
      answer: "Tak, uczestnicy powinni przynieść własny sprzęt komputerowy.",
      open: false
    },
    {
      question: "Czy uczestnicy otrzymują pomoc podczas wydarzenia?",
      answer: "Tak, na miejscu będą dostępni mentorzy i organizatorzy, którzy chętnie pomogą.",
      open: false
    },
    {
      question: "Czy przewidywane są nagrody dla zwycięzców?",
      answer: "Tak, dla najlepszych drużyn przewidziane są atrakcyjne nagrody.",
      open: false
    },
    {
      question: "Czy będzie możliwość noclegu na miejscu?",
      answer: "Tak, na podłodze.",
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
      answer: "Only individuals with active student status can participate in the event.",
      open: true
    },
    {
      question: "Can people from other fields also participate?",
      answer: "Of course, they can. The event is open to people from various fields.",
      open: false
    },
    {
      question: "Will I need my own computer equipment to participate?",
      answer: "Yes, participants should bring their own computer equipment.",
      open: false
    },
    {
      question: "Do participants receive help during the event?",
      answer: "Yes, mentors and organizers will be available on-site to assist.",
      open: false
    },
    {
      question: "Are there prizes for the winners?",
      answer: "Yes, attractive prizes are provided for the best teams.",
      open: false
    },
    {
      question: "Will there be accommodation on-site?",
      answer: "Yes, on the floor.",
      open: false
    },
    {
      question: "Will there be parking available on-site?",
      answer: "Yes, there is parking available for participants on-site.",
      open: false
    }
  ];

  // Derived store to get the current content based on the language
  const faqs = derived(isPolish, $isPolish => $isPolish ? faqsPL : faqsEN);

  let currentFaqs;

  // Subscribe to the derived store to update the local variables
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
    min-height: 80vh;
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
