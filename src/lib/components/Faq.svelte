<script>
    let faqs = [
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
  
    function toggleFaq(index) {
      faqs = faqs.map((faq, i) => {
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
      background-color: rgba(255, 255, 255, 0.1);
    }
    #faq {
      border-radius: 8px;
      /* padding: 20px; */
      border: 1px solid white;
      width: 70%;
    }
  </style>
  
  <section class="bg-transparent py-32 text-white" id="faq-section">
    <div class="max-w-4xl mx-auto px-6 border-b" id="faq">
      <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">FAQ</h1>
      {#each faqs as faq, index}
        <div class="mb-4 border-b border-gray-300">
          <button class="w-full text-left text-lg md:text-xl font-semibold py-4 flex justify-between items-center focus:outline-none" on:click={() => toggleFaq(index)}>
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
            <div class="py-2 text-white text-base md:text-lg">
              {faq.answer}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </section>
  