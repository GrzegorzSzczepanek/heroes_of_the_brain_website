<script>
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import { slide, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';

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
      answer: "Posiadamy pokój wypoczynku, jednak nie zapewniamy materacy, śpiworów, ani innych przyborów do spania.",
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
      answer: "We have a relaxation room available; however, we do not provide mattresses, sleeping bags or any other sleeping equipment.",
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
  let visible = false;

  faqs.subscribe(value => {
    currentFaqs = value.map(faq => ({...faq, open: faq.open}));
  });

  function toggleFaq(index) {
    currentFaqs = currentFaqs.map((faq, i) => {
      if (i === index) {
        return {...faq, open: !faq.open};
      }
      return faq;
    });
  }
  
  onMount(() => {
    visible = true;
  });
</script>

<style>
  .faq-section {
    background: linear-gradient(to bottom, #0f172a 0%, #1e293b 100%);
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }
  
  .faq-container {
    position: relative;
    z-index: 10;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .faq-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .faq-title {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #c4b5fd -10%, #8b5cf6 50%, #c4b5fd 110%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 2px 15px rgba(139, 92, 246, 0.3);
    margin-bottom: 1rem;
  }
  
  .faq-subtitle {
    font-size: 1.1rem;
    color: #a5b4fc;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .faq-item {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 12px;
    margin-bottom: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .faq-item:hover {
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.3);
  }
  
  .faq-question {
    width: 100%;
    text-align: left;
    padding: 1.25rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    color: #e2e8f0;
    font-size: 1.125rem;
    font-weight: 500;
    transition: all 0.3s;
  }
  
  .faq-question:hover {
    color: #f1f5f9;
  }
  
  .faq-question:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
  }
  
  .indicator {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-left: 15px;
  }
  
  .indicator::before,
  .indicator::after {
    content: '';
    position: absolute;
    background: #a78bfa;
    transition: all 0.3s ease;
  }
  
  .indicator::before {
    width: 12px;
    height: 2px;
    border-radius: 1px;
  }
  
  .indicator::after {
    width: 2px;
    height: 12px;
    border-radius: 1px;
  }
  
  .indicator.open {
    background: rgba(139, 92, 246, 0.2);
    transform: rotate(180deg);
  }
  
  .indicator.open::after {
    opacity: 0;
    transform: rotate(90deg);
  }
  
  .faq-answer {
    padding: 0 1.5rem 1.25rem;
    color: #cbd5e1;
    line-height: 1.7;
  }
  
  .faq-answer p {
    margin-bottom: 1rem;
  }
  
  .faq-answer p:last-child {
    margin-bottom: 0;
  }
  
  /* Neural network decoration */
  .neural-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.04;
    pointer-events: none;
  }
  
  .neural-node {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50%;
  }
  
  .neural-connection {
    position: absolute;
    height: 1px;
    background-color: white;
    transform-origin: 0 0;
    opacity: 0.5;
  }
  
  .brain-pulse {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
    animation: pulse 15s infinite ease-in-out;
    opacity: 0.4;
    filter: blur(40px);
  }
  
  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.1; }
    100% { transform: scale(0.8); opacity: 0.3; }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .faq-title {
      font-size: 2rem;
    }
    
    .faq-subtitle {
      font-size: 1rem;
    }
    
    .faq-question {
      padding: 1rem;
      font-size: 1rem;
    }
    
    .faq-answer {
      padding: 0 1rem 1rem;
    }
  }
</style>

<section id="faq" class="faq-section py-20 px-4">
  <!-- Neural background -->
  <div class="neural-bg">
    <!-- Neural nodes and connections -->
    <div class="neural-node" style="top: 10%; left: 10%;"></div>
    <div class="neural-node" style="top: 30%; left: 20%;"></div>
    <div class="neural-node" style="top: 20%; left: 40%;"></div>
    <div class="neural-node" style="top: 40%; left: 60%;"></div>
    <div class="neural-node" style="top: 15%; left: 80%;"></div>
    <div class="neural-node" style="top: 60%; left: 15%;"></div>
    <div class="neural-node" style="top: 70%; left: 35%;"></div>
    <div class="neural-node" style="top: 80%; left: 70%;"></div>
    <div class="neural-node" style="top: 50%; left: 85%;"></div>
    
    <!-- Neural connections -->
    <div class="neural-connection" style="top: 10%; left: 10%; width: 200px; transform: rotate(20deg);"></div>
    <div class="neural-connection" style="top: 30%; left: 20%; width: 240px; transform: rotate(-10deg);"></div>
    <div class="neural-connection" style="top: 20%; left: 40%; width: 260px; transform: rotate(30deg);"></div>
    <div class="neural-connection" style="top: 40%; left: 60%; width: 220px; transform: rotate(-20deg);"></div>
    <div class="neural-connection" style="top: 60%; left: 15%; width: 250px; transform: rotate(40deg);"></div>
    <div class="neural-connection" style="top: 70%; left: 35%; width: 280px; transform: rotate(-15deg);"></div>
    <div class="neural-connection" style="top: 50%; left: 85%; width: 150px; transform: rotate(180deg);"></div>
  </div>
  
  <!-- Brain pulse effect -->
  <div class="brain-pulse" style="top: 30%; left: 20%; animation-delay: 0s;"></div>
  <div class="brain-pulse" style="top: 60%; right: 10%; animation-delay: 5s;"></div>
  
  <!-- Main content -->
  <div class="faq-container">
    {#if visible}
      <header class="faq-header" in:fade={{ duration: 800 }}>
        <h2 class="faq-title">FAQ</h2>
        <p class="faq-subtitle">
          {$isPolish 
            ? "Najczęściej zadawane pytania dotyczące Hackathonu Heroes of the Brain"
            : "Frequently asked questions about the Heroes of the Brain Hackathon"}
        </p>
      </header>
      
      <div class="faq-list">
        {#each currentFaqs as faq, index (index)}
          <div 
            class="faq-item"
            in:fade={{ duration: 400, delay: 100 + index * 100 }}
          >
            <button 
              class="faq-question" 
              on:click={() => toggleFaq(index)}
              aria-expanded={faq.open}
            >
              <span>{faq.question}</span>
              <span class="indicator" class:open={faq.open}></span>
            </button>
            
            {#if faq.open}
              <div 
                class="faq-answer" 
                transition:slide={{ duration: 300, easing: quintOut }}
              >
                <p>{faq.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>