<script>
    import TeamSection from './Team.svelte';
    let activeSection = 'Marketing';
    
    const sections = {
      'Mechanika': [],
      'Elektronika': [],
      'Software': [],
      'Science': [],
      'Marketing': [
        { name: 'Maksymilian Piwowar', role: 'Marketing Department Leader', image: '/path/to/image1.jpg' },
        { name: 'Amelia Krysa', role: 'Marketing Department Vice-Leader', image: '/path/to/image2.jpg' },
        { name: 'Armin Ernst', role: 'Member', image: '/path/to/image3.jpg' },
        { name: 'Karolina Ossuch', role: 'Member', image: '/path/to/image4.jpg' },
        { name: 'Krzysztof Miler', role: 'Member', image: '/path/to/image5.jpg' },
        { name: 'Lena Pielech', role: 'Member', image: '/path/to/image6.jpg' },
        { name: 'Marta Szewczyk', role: 'Member', image: '/path/to/image7.jpg' },
        { name: 'Natalia Wilczyńska', role: 'Member', image: '/path/to/image8.jpg' }
      ]
    };
    
    function setActiveSection(section) {
      activeSection = section;
    }
  </script>
  
  <div class="tabs flex justify-center space-x-4 mb-8">
    {#each Object.keys(sections) as section}
      <button on:click={() => setActiveSection(section)} 
              class:class="{ active: activeSection === section }">
        {section}
      </button>
    {/each}
  </div>
  
  <TeamSection section={activeSection} members={sections[activeSection]} />
  
  <style>
    .tabs button {
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .tabs button.active {
      background-color: #f0f0f0;
      border-color: #ccc;
    }
  </style>
  