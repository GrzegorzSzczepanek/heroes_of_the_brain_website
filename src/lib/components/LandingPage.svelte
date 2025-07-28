<script>
  import { faCalendarAlt, faMapMarkerAlt, faTrophy } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import "../../app.css";
  import { isPolish } from '../../stores/languageStore';

  $: location = $isPolish ? 'Politechnika Wrocławska, D-21' : 'Wroclaw University of Technology, D-21';
  $: applyText = $isPolish ? 'Aplikuj' : 'Apply Now';
  $: applyLink = $isPolish ? 'https://forms.gle/KKdoUBMmaA1y22dU6' : 'https://forms.gle/P9evdZbDyXUDETuC7';
  $: learnMoreText = $isPolish ? 'Dowiedz się więcej' : 'Learn More';

  $: prizePool = $isPolish ? 'Łączna pula nagród: 16 000 PLN' : 'Total Prize Pool: 16,000 PLN';
  $: inBothCategories = $isPolish ? 'W obu kategoriach:' : 'Prizes in Both Categories:';

  $: firstPlace = $isPolish ? '1. Miejsce' : '1st Place';
  $: firstPrize = '5,000 PLN';

  $: secondPlace = $isPolish ? '2. Miejsce' : '2nd Place';
  $: secondPrize = '2,000 PLN';

  $: thirdPlace = $isPolish ? '3. Miejsce' : '3rd Place';
  $: thirdPrize = '1,000 PLN';
</script>

<style>

  #landing {
    min-height: 110vh;
    padding: 2rem 1rem;  
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    text-align: center;
  }


  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }


  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
  }

  .info p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }


  .button-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
  } 

  .button-group a:hover {
    background-color: #553c9a;
  }


  .prize-info {
    margin-top: 2rem;
    text-align: center;
  }

  .prize-info h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .prizes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  .prize {
    background-color: rgba(255, 255, 255, 0.15);
    padding: 1rem;
    border-radius: 0.5rem;
    width: 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .prize .place {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .prize .amount {
    font-size: 1rem;
  }


  @media (min-width: 640px) {
    h1 {
      font-size: 3rem;
    }
    .info p {
      font-size: 1.125rem;
    }

    .button-group a {
      padding: 0.75rem 2rem;
    }

    .prize {
      width: 140px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3.5rem;
    }

    .info {
      flex-direction: row;
      gap: 2rem;
    }
    .info p {
      margin: 0;
    }
  }
</style>

<section id="landing">
  <h1>Heroes of The Brain 2024</h1>
  <div class="info">
    <p class="flex items-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} class="text-purple-200 mr-2" />
      {location}
    </p>
    <p class="flex items-center">
      <FontAwesomeIcon icon={faCalendarAlt} class="text-purple-200 mr-2" />
      16.11.2024 - 17.11.2024
    </p>
  </div>
  <div class="button-group">
    <!-- <a href={applyLink} target="_blank" class="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-all shadow-md">{applyText}</a> -->
    <a href="#HackatonInfo" class="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-all shadow-md">{learnMoreText}</a>
  </div>
  
  <div class="prize-info">
    <h3>{prizePool}</h3>
    <p>{inBothCategories}</p>
    <div class="prizes">
      <div class="prize">
        <FontAwesomeIcon icon={faTrophy} class="text-gray-300 text-2xl mb-2" />
        <div class="place">{secondPlace}</div>
        <div class="amount">{secondPrize}</div>
      </div>
      <div class="prize">
        <FontAwesomeIcon icon={faTrophy} class="text-yellow-400 text-2xl mb-2" />
        <div class="place">{firstPlace}</div>
        <div class="amount">{firstPrize}</div>
      </div>
      <div class="prize">
        <FontAwesomeIcon icon={faTrophy} class="text-orange-400 text-2xl mb-2" />
        <div class="place">{thirdPlace}</div>
        <div class="amount">{thirdPrize}</div>
      </div>
    </div>
  </div>
</section>
