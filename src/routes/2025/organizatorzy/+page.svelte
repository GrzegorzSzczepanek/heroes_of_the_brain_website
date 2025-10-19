<script lang="ts">
  import '../../../app.css';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { derived } from 'svelte/store';
  import { isPolish } from '../../../stores/languageStore';
  import { writable } from 'svelte/store';
  
  // For animations
  let scrollY;
  let sections = [];
  let visible = Array(6).fill(false);
  let currentHover = -1;
  let teamSectionRef;
  
  // For filtering
  let selectedCategory = writable('all');
  
  // Content based on language
  const contentPL = {
    pageTitle: 'Organizatorzy – Heroes of The Brain 2025',
    heroTitle: 'Poznaj Nasz Zespół',
    heroSubtitle: 'Ludzie, którzy stoją za Heroes of the Brain 2025',
    teamStatsTitle: 'Nasz zespół w liczbach',
    members: 'Członków zespołu',
    experience: 'Lat doświadczenia',
    editions: 'Edycje hackathonu',
    departments: 'Sekcji',
    departmentsTitle: 'Struktura organizacyjna',
    teamTitle: 'Członkowie zespołu',
    teamSubtitle: 'Poznaj ludzi, którzy tworzą Heroes of the Brain 2025',
    quote: 'Naszą misją jest stworzenie przestrzeni do innowacji w dziedzinie interfejsów mózg-komputer',
    quoteAuthor: 'Zespół Heroes of the Brain',
    joinTeamTitle: 'Dołącz do naszego zespołu',
    joinTeamDesc: 'Jesteśmy zawsze otwarci na nowych członków zespołu pasjonujących się nowymi technologiami',
    joinTeamButton: 'Skontaktuj się z nami',
    allCategories: 'Wszyscy',
    coordination: 'Koordynacja',
    technical: 'Sekcja Techniczna',
    organization: 'Sekcja Organizacyjna',
    promotion: 'Sekcja Promocji',
    sponsorship: 'Sekcja Współprac Zewnętrznych',
    logistics: 'Sekcja Logistyki',
    graphic: 'Grafika',
    noResults: 'Nie znaleziono członków zespołu w tej kategorii',
    mainCoordinator: 'Koordynator Główny'
  };
  
  const contentEN = {
    pageTitle: 'Organizers – Heroes of The Brain 2025',
    heroTitle: 'Meet Our Team',
    heroSubtitle: 'The people behind Heroes of the Brain 2025',
    teamStatsTitle: 'Our team in numbers',
    members: 'Team members',
    experience: 'Years experience',
    editions: 'Hackathon editions',
    departments: 'Departments',
    departmentsTitle: 'Organizational structure',
    teamTitle: 'Team members',
    teamSubtitle: 'Meet the people who make Heroes of the Brain 2025 happen',
    quote: 'Our mission is to create space for innovation in the field of brain-computer interfaces',
    quoteAuthor: 'Heroes of the Brain Team',
    joinTeamTitle: 'Join our team',
    joinTeamDesc: 'We are always open to new team members passionate about new technologies',
    joinTeamButton: 'Contact us',
    allCategories: 'All',
    coordination: 'Coordination',
    technical: 'Technical Team',
    organization: 'Organizational Team',
    promotion: 'Promotion Team',
    sponsorship: 'External Partnerships Team',
    logistics: 'Logistics Team',
    graphic: 'Graphics',
    noResults: 'No team members found in this category',
    mainCoordinator: 'Main Coordinator'
  };
  
  const content = derived(isPolish, ($p) => ($p ? contentPL : contentEN));
  let c; 
  content.subscribe(v => c = v);
  
  // Department categories for filtering
  const categories = [
    { id: 'all', name: () => c?.allCategories || contentEN.allCategories },
    { id: 'coordination', name: () => c?.coordination || contentEN.coordination },
    { id: 'technical', name: () => c?.technical || contentEN.technical },
    { id: 'organization', name: () => c?.organization || contentEN.organization },
    { id: 'promotion', name: () => c?.promotion || contentEN.promotion },
    { id: 'sponsorship', name: () => c?.sponsorship || contentEN.sponsorship },
    { id: 'logistics', name: () => c?.logistics || contentEN.logistics },
    { id: 'graphic', name: () => c?.graphic || contentEN.graphic }
  ];
  
  // Team members data with correct image paths and roles
  const teamMembers = [
    {
      name: 'Filip Puszko',
      role: 'Koordynator Główny',
      bio: '',
      image: '/images/sekcja_techniczna/filip_puszko.webp',
      organization: 'KN Neuron',
      category: 'coordination',
      isMainCoordinator: true
    },
    {
      name: 'Iuliia Kapustinskaia',
      role: 'Koordynator Główny',
      bio: '',
      image: '/images/Iuliia_Kapustinskaia.jpg',
      organization: 'KN Neuron',
      category: 'coordination',
      isMainCoordinator: true,
      specialImageAdjustment: true // Flag for special image handling
    },
    {
      name: 'Grzegorz Szczepanek',
      role: 'Koordynator Główny',
      bio: '',
      image: '/images/sekcja_techniczna/grzegorz_szczepanek.webp',
      organization: 'KN Neuron',
      category: 'coordination',
      isMainCoordinator: true
    },
    {
      name: 'Milena Mironczuk',
      role: 'Koordynator Sekcji Organizacyjnej',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'KN Neuron',
      category: 'organization',
      isCoordinator: true
    },
    {
      name: 'Maja Wiśniewska',
      role: 'Koordynator Sponsorski',
      bio: '',
      image: '/images/maja_wisniewska.jpg',
      organization: 'Brak',
      category: 'sponsorship',
      isCoordinator: true
    },
    {
      name: 'Anna Gralewska',
      role: 'Koordynator Promocji',
      bio: '',
      image: '/images/AnnaGrelewska.jpeg',
      organization: 'Brak',
      category: 'promotion',
      isCoordinator: true
    },
    {
      name: 'Oliwia Borkowska',
      role: 'Koordynator Promocji',
      bio: '',
      image: '/images/Oliwia Borkowska.jpg',
      organization: 'KN Neuron',
      category: 'promotion',
      isCoordinator: true
    },
    {
      name: 'Weronika Kaźmierczak',
      role: 'Koordynator Grafiki',
      bio: '',
      image: '/images/weronika_kazmierczak.jpg',
      organization: 'KN Neuron',
      category: 'graphic',
      isCoordinator: true
    },
    {
      name: 'Natalia Malinowska',
      role: 'Koordynator Grafiki',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'KN Neuron',
      category: 'graphic',
      isCoordinator: true
    },
    {
      name: 'Roch Rupar',
      role: 'Koordynator Logistyki',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'WRSS W4',
      category: 'logistics',
      isCoordinator: true
    },
    {
      name: 'Kacper Daniel',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/kacper_daniel.jpg',
      organization: 'KN Neuron',
      category: 'technical'
    },
    {
      name: 'Barbara Dereń',
      role: 'Zespół Logistyki',
      bio: '',
      image: '/images/barbara_deren.jpg',
      organization: 'KN Neuron',
      category: 'logistics'
    },
    {
      name: 'Adam Broszkiewicz',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/adam_broszkiewicz.jpg',
      organization: 'KN Neuron',
      category: 'technical'
    },
    {
      name: 'Jakub Kulik',
      role: 'Zespół Promocji',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'WRSS W4',
      category: 'promotion'
    },
    {
      name: 'Amelia Sroczyńska',
      role: 'Zespół Organizacyjny',
      bio: '',
      image: '/images/amelia_sroczynska.jpg',
      organization: 'WRSS W4',
      category: 'organization'
    },
    {
      name: 'Wiktor Golimowski',
      role: 'Zespół Organizacyjny',
      bio: '',
      image: '/images/WiktorGolimowski.jpg',
      organization: 'KN Neuron',
      category: 'organization'
    },
    {
      name: 'Marcel Sobecki',
      role: 'Zespół Organizacyjny',
      bio: '',
      image: '/images/marcel_sobecki.jpg',
      organization: 'KN Neuron',
      category: 'organization'
    },
    {
      name: 'Konrad Bąchór',
      role: 'Zespół Grafiki',
      bio: '',
      image: '/images/konrad_bachor.jpg',
      organization: 'WRSS W4',
      category: 'graphic'
    },
    {
      name: 'Maria Cicirko',
      role: 'Zespół Promocji',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'KN Neuron',
      category: 'promotion'
    },
    {
      name: 'Tomasz Koralewski',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/sekcja_techniczna/tomasz_koralewski.webp',
      organization: 'KN Neuron',
      category: 'technical'
    },
    {
      name: 'Mieszko Połończyk',
      role: 'Zespół Sponsorski',
      bio: '',
      image: '/images/Mieszko Połonczyk.jpg',
      organization: 'W4 INS',
      category: 'sponsorship'
    },
    {
      name: 'Jakub Kłosowski',
      role: 'Zespół Sponsorski',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'W4N INS',
      category: 'sponsorship'
    },
    {
      name: 'Karol Kosmala',
      role: 'Zespół Promocji',
      bio: '',
      image: '/images/karol_kosmala.jpg',
      organization: 'WRSS W4',
      category: 'promotion'
    },
    {
      name: 'Magdalena Skiba',
      role: 'Zespół Promocji',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'TK Games',
      category: 'promotion'
    },
    {
      name: 'Kamil Kula',
      role: 'Zespół Grafiki',
      bio: '',
      image: '/images/kamil_kula.jpg',
      organization: 'WRSS W4',
      category: 'graphic'
    },
    {
      name: 'Kajetan Mróz',
      role: 'Zespół Logistyki',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'WRSS W4',
      category: 'logistics'
    },
    {
      name: 'Paulina Włosińska',
      role: 'Zespół Logistyki',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'WRSS W4',
      category: 'logistics'
    },
    {
      name: 'Dominika Jarząbek',
      role: 'Zespół Organizacyjny',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'WRSS W4',
      category: 'organization'
    },
    {
      name: 'Kacper Kruszelnicki',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'KN Neuron',
      category: 'technical'
    },
    {
      name: 'Michał Mendzelewski',
      role: 'Zespół Organizacyjny',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'KN Neuron',
      category: 'organization'
    },
    {
      name: 'Maciej Zych',
      role: 'Zespół Logistyki',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'WRSS W4',
      category: 'logistics'
    },
    {
      name: 'Zofia Turalska',
      role: 'Zespół Sponsorski',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'Brak',
      category: 'sponsorship'
    },
    {
      name: 'Maksymilian Awdziejczyk',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'KN Neuron',
      category: 'technical'
    },
    {
      name: 'Izabela Paniczek',
      role: 'Zespół Promocji',
      bio: '',
      image: '/images/koordynatorzy/izabela_paniczek.webp',
      organization: 'KN Neuron',
      category: 'promotion'
    },
    {
      name: 'Dawid Janikowski',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/placeholder-man.jpg',
      organization: 'KN Neuron',
      category: 'technical'
    },
    {
      name: 'Camille Lisek',
      role: 'Zespół Techniczny',
      bio: '',
      image: '/images/placeholder-woman.jpg',
      organization: 'KN Neuron',
      category: 'technical'
    }
  ];

  // Function to count members by category
  function countMembersByCategory(category) {
    return teamMembers.filter(member => member.category === category).length;
  }

  // Total number of team members
  const totalMembers = teamMembers.length;
  
  // Department data with translation support and dynamic counting
  const departmentsData = {
    EN: [
      { 
        name: 'Coordination',
        description: 'Overall event management and coordination', 
        color: 'from-purple-500 to-indigo-500',
        category: 'coordination'
      },
      { 
        name: 'Promotion',
        description: 'Marketing, social media, and communications', 
        color: 'from-blue-500 to-cyan-500',
        category: 'promotion'
      },
      { 
        name: 'Technical',
        description: 'Technical infrastructure and support', 
        color: 'from-indigo-500 to-purple-500',
        category: 'technical'
      },
      { 
        name: 'Logistics',
        description: 'Venue, catering, and participant support', 
        color: 'from-violet-500 to-fuchsia-500',
        category: 'logistics'
      },
      { 
        name: 'Sponsorship',
        description: 'External partners and sponsorships', 
        color: 'from-purple-500 to-pink-500',
        category: 'sponsorship'
      },
      {
        name: 'Organization',
        description: 'Event planning and execution',
        color: 'from-green-500 to-teal-500',
        category: 'organization'
      },
      {
        name: 'Graphics',
        description: 'Visual design and materials',
        color: 'from-rose-500 to-pink-500',
        category: 'graphic'
      }
    ],
    PL: [
      { 
        name: 'Koordynacja',
        description: 'Ogólne zarządzanie i koordynacja wydarzenia', 
        color: 'from-purple-500 to-indigo-500',
        category: 'coordination'
      },
      { 
        name: 'Promocja',
        description: 'Marketing, media społecznościowe i komunikacja', 
        color: 'from-blue-500 to-cyan-500',
        category: 'promotion'
      },
      { 
        name: 'Sekcja Techniczna',
        description: 'Infrastruktura techniczna i wsparcie', 
        color: 'from-indigo-500 to-purple-500',
        category: 'technical'
      },
      { 
        name: 'Logistyka',
        description: 'Miejsce, catering i wsparcie uczestników', 
        color: 'from-violet-500 to-fuchsia-500',
        category: 'logistics'
      },
      { 
        name: 'Sponsoring',
        description: 'Partnerzy zewnętrzni i sponsorzy', 
        color: 'from-purple-500 to-pink-500',
        category: 'sponsorship'
      },
      {
        name: 'Organizacja',
        description: 'Planowanie i realizacja wydarzenia',
        color: 'from-green-500 to-teal-500',
        category: 'organization'
      },
      {
        name: 'Grafika',
        description: 'Projekty wizualne i materiały',
        color: 'from-rose-500 to-pink-500',
        category: 'graphic'
      }
    ]
  };

  // Add dynamic count to departments
  $: {
    departmentsData.EN.forEach(dept => {
      dept.members = countMembersByCategory(dept.category);
    });
    departmentsData.PL.forEach(dept => {
      dept.members = countMembersByCategory(dept.category);
    });
  }
  
  // Use a derived store to get the correct departments based on language
  $: departments = $isPolish ? departmentsData.PL : departmentsData.EN;
  
  // Placeholder team stats
  let teamStats = [];
  $: {
    // Count unique departments that have at least one member
    const uniqueDepartments = new Set(teamMembers.map(m => m.category));
    const departmentCount = uniqueDepartments.size;
    
    teamStats = [
      { value: totalMembers.toString() + '+', label: c?.members || contentEN.members, icon: 'users' },
      { value: '2+', label: c?.experience || contentEN.experience, icon: 'calendar' },
      { value: '2', label: c?.editions || contentEN.editions, icon: 'trophy' },
      { value: departmentCount.toString(), label: c?.departments || contentEN.departments, icon: 'building' }
    ];
  }

  // Translate roles based on language
  $: {
    teamMembers.forEach(member => {
      if (member.isMainCoordinator) {
        member.translatedRole = $isPolish ? contentPL.mainCoordinator : contentEN.mainCoordinator;
      }
    });
  }
  
  // Filter team members by category
  let filteredTeamMembers = teamMembers;
  let coordinators = [];
  let regularMembers = [];
  
  $: {
    if ($selectedCategory === 'all') {
      filteredTeamMembers = teamMembers;
    } else {
      filteredTeamMembers = teamMembers.filter(member => member.category === $selectedCategory);
    }
    
    // Separate main coordinators and regular members for better layout
    coordinators = filteredTeamMembers.filter(m => m.isMainCoordinator);
    regularMembers = filteredTeamMembers.filter(m => !m.isMainCoordinator);
  }
  
  // Intersection observer for scroll animations
  onMount(() => {
    document.title = c?.pageTitle || contentEN.pageTitle;
    
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index >= 0) {
              visible[index] = true;
            }
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px',
        threshold: 0.1
      });
      
      sections.forEach(section => {
        if (section) observer.observe(section);
      });
      
      return () => {
        sections.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }
  });
  
  function selectCategory(categoryId) {
    selectedCategory.set(categoryId);
  }
</script>

<svelte:head>
  <title>{c?.pageTitle || contentEN.pageTitle}</title>
  <meta name="description" content="Meet the organizing team behind Heroes of The Brain 2025." />
  <meta name="keywords" content="organizers, team, heroes of the brain 2025, bci hackathon" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window bind:scrollY />

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
    --purple-primary: #8b5cf6;
    --purple-dark: #6d28d9;
    --indigo-primary: #6366f1;
  }
  
  /* Section animations */
  .section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .section.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Hero section */
  .hero-section {
    background: linear-gradient(135deg, #1e1b4b, #4c1d95);
    color: white;
    padding: 6rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  
  .hero-bg-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #fff, #c4b5fd);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .neural-connections {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .neural-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
  }
  
  .neural-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transform-origin: left center;
  }
  
  /* Stats section */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .stat-card {
    background-color: white;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    text-align: center;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
  }
  
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .stat-card:hover::before {
    opacity: 1;
  }
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  .stat-icon {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 auto 1rem;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1));
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--purple-primary);
    font-size: 1.8rem;
  }
  
  .stat-label {
    color: #4b5563;
    font-size: 1rem;
    font-weight: 500;
  }
  
  /* Quote section */
  .quote-section {
    background: linear-gradient(to right, rgba(91, 33, 182, 0.9), rgba(67, 56, 202, 0.9));
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .quote-bg {
    position: absolute;
    inset: 0;
    background-image: url('/images/neural-network.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    mix-blend-mode: overlay;
  }
  
  .quote-content {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  
  .quote-text {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 300;
    line-height: 1.5;
    position: relative;
    font-style: italic;
    padding: 0 2rem;
  }
  
  .quote-text::before,
  .quote-text::after {
    content: '"';
    position: absolute;
    font-family: Georgia, serif;
    font-size: 5rem;
    line-height: 0;
    opacity: 0.3;
  }
  
  .quote-text::before {
    top: 0.5rem;
    left: 0;
  }
  
  .quote-text::after {
    bottom: -1rem;
    right: 0;
    transform: rotate(180deg);
  }
  
  .quote-author {
    margin-top: 2rem;
    font-weight: 500;
    opacity: 0.8;
    font-size: 1.1rem;
  }
  
  /* Departments section */
  .departments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .department-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .department-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1);
  }
  
  .department-header {
    padding: 1.5rem;
    color: white;
    font-weight: 600;
  }
  
  .department-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }
  
  .department-description {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex: 1;
  }
  
  .department-members {
    display: flex;
    align-items: center;
    color: #6b7280;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .department-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
  }
  
  /* Team members section */
  .team-section {
    background-color: #f9fafb;
    position: relative;
  }
  
  .team-bg {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 20% 35%, rgba(139, 92, 246, 0.08) 0%, transparent 70%),
                      radial-gradient(circle at 80% 65%, rgba(99, 102, 241, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .team-filter {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .filter-btn {
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid #e5e7eb;
    background-color: white;
    color: #4b5563;
  }
  
  .filter-btn:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
  
  .filter-btn.active {
    background-color: #8b5cf6;
    border-color: #8b5cf6;
    color: white;
  }
  
  .coordinators-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 3rem auto;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .team-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    perspective: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .team-card:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 30px 40px -20px rgba(0, 0, 0, 0.2);
  }
  
  .team-card.featured {
    border: 2px solid #8b5cf6;
  }
  
  .team-image-container {
    position: relative;
    width: 100%;
    padding-top: 100%; /* Creates a square aspect ratio */
    overflow: hidden;
  }
  
  .team-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 25%; /* Position focus point higher to show faces better */
    transition: transform 0.5s ease;
  }
  
  /* Special adjustment for Iuliia's photo to prevent head cutoff */
  .team-image.iuliia-image {
    object-position: center 15%; /* Move focus point higher for Iuliia's photo */
  }
  
  .team-card:hover .team-image {
    transform: scale(1.05);
  }
  
  .team-content {
    padding: 1.5rem;
    border-top: 4px solid var(--purple-primary);
    position: relative;
    background: white;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .featured .team-content {
    border-top-width: 6px;
  }
  
  .team-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }
  
  .team-role {
    color: var(--purple-primary);
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .team-bio {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .team-organization {
    display: inline-block;
    background-color: #f3f4f6;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    margin-top: 0.5rem;
    color: #4b5563;
  }
  
  /* Join CTA section */
  .cta-section {
    background: linear-gradient(135deg, #1e1b4b, #4c1d95);
    color: white;
    position: relative;
    overflow: hidden;
  }
  
  .cta-btn {
    display: inline-block;
    background: white;
    color: #4c1d95;
    font-weight: 600;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }
  
  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  }
  
  /* Common elements */
  .section-title {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  
  .section-title h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }
  
  .section-title p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    color: #6b7280;
  }
  
  .section-divider {
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--purple-primary), var(--indigo-primary));
    margin: 1rem auto 2rem;
    border-radius: 2px;
  }

  .section-subtitle {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: #4c1d95;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .departments-grid,
    .team-grid,
    .coordinators-grid {
      grid-template-columns: 1fr;
    }
    
    .team-filter {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 1rem;
      margin-left: -1rem;
      margin-right: -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      justify-content: flex-start;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>

<div transition:fade={{ duration: 400 }} class="min-w-full">
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-bg-pattern"></div>
    
    <div class="neural-connections">
      {#each Array(12) as _, i}
        <div 
          class="neural-dot"
          style="
            top: {10 + Math.random() * 80}%; 
            left: {10 + Math.random() * 80}%;
            opacity: {0.3 + Math.random() * 0.7};
          "
        ></div>
      {/each}
      
      {#each Array(10) as _, i}
        <div 
          class="neural-line"
          style="
            top: {20 + Math.random() * 60}%; 
            left: {Math.random() * 40}%;
            width: {100 + Math.random() * 200}px;
            transform: rotate({-30 + Math.random() * 60}deg);
            opacity: {0.1 + Math.random() * 0.3};
          "
        ></div>
      {/each}
    </div>
    
    <div class="container mx-auto relative z-10">
      <h1 class="hero-title">{c?.heroTitle || contentEN.heroTitle}</h1>
      <p class="hero-subtitle">{c?.heroSubtitle || contentEN.heroSubtitle}</p>
    </div>
  </section>
  
  <!-- Team Stats Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[0]} bind:this={sections[0]}>
        <div class="section-title">
          <h2>{c?.teamStatsTitle || contentEN.teamStatsTitle}</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="stats-grid">
          {#each teamStats as stat, i}
            <div 
              class="stat-card"
              in:fly={{ y: 30, duration: 800, delay: 200 * i }}
            >
              <div class="stat-icon">
                {#if stat.icon === 'users'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                {:else if stat.icon === 'calendar'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                {:else if stat.icon === 'trophy'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                {:else if stat.icon === 'building'}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                {/if}
              </div>
              <div class="stat-value">{stat.value}</div>
              <div class="stat-label">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- Quote Section -->
  <section class="quote-section py-20">
    <div class="quote-bg"></div>
    
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[1]} bind:this={sections[1]}>
        <div class="quote-content">
          <p class="quote-text">
            {c?.quote || contentEN.quote}
          </p>
          <div class="quote-author">— {c?.quoteAuthor || contentEN.quoteAuthor}</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Departments Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[2]} bind:this={sections[2]}>
        <div class="section-title">
          <h2>{c?.departmentsTitle || contentEN.departmentsTitle}</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="departments-grid">
          {#each departments as dept, i}
            <div 
              class="department-card"
              in:fly={{ y: 30, duration: 800, delay: 200 * i }}
              on:click={() => selectCategory(dept.category)}
              on:keypress={(e) => e.key === 'Enter' && selectCategory(dept.category)}
              role="button"
              tabindex="0"
              style="cursor: pointer;"
            >
              <div class="department-header bg-gradient-to-r {dept.color}">
                <h3 class="text-xl font-semibold">{dept.name}</h3>
              </div>
              
              <div class="department-content">
                <p class="department-description">{dept.description}</p>
                
                <div class="department-members">
                  <svg class="department-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span>{dept.members} team member{dept.members !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- Team Members Section -->
  <section class="team-section py-16">
    <div class="team-bg"></div>
    
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[3]} bind:this={sections[3]}>
        <div class="section-title">
          <h2>{c?.teamTitle || contentEN.teamTitle}</h2>
          <p>{c?.teamSubtitle || contentEN.teamSubtitle}</p>
          <div class="section-divider"></div>
        </div>
        
        <!-- Filter buttons -->
        <div class="team-filter">
          {#each categories as category}
            <button 
              class="filter-btn {$selectedCategory === category.id ? 'active' : ''}" 
              on:click={() => selectCategory(category.id)}
            >
              {category.name()}
            </button>
          {/each}
        </div>
        
        {#if coordinators.length > 0}
          <!-- Main coordinators section with separate grid -->
          <div class="section-subtitle">
            {c?.coordination || contentEN.coordination}
          </div>
          
          <div class="coordinators-grid" bind:this={teamSectionRef}>
            {#each coordinators as member, i (member.name)}
              <div 
                class="team-card featured"
                in:fly={{ y: 30, duration: 800, delay: Math.min(100 * i, 600) }}
              >
                <div class="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    class="team-image {member.specialImageAdjustment ? 'iuliia-image' : ''}" 
                    style={member.name === 'Iuliia Kapustinskaia' ? 'object-position: center 10%;' : ''}
                  />
                </div>
                
                <div class="team-content">
                  <h3 class="team-name">{member.name}</h3>
                  <p class="team-role">{$isPolish ? contentPL.mainCoordinator : contentEN.mainCoordinator}</p>
                  
                  {#if member.organization && member.organization !== "Brak"}
                    <div class="team-organization">{member.organization}</div>
                  {/if}
                  
                  {#if member.bio}
                    <p class="team-bio mt-3">{member.bio}</p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        {/if}
        
        {#if regularMembers.length > 0}
          <!-- Regular team members -->
          {#if coordinators.length > 0}
            <div class="section-subtitle mt-8">
              {$selectedCategory === 'all' ? 
                ($isPolish ? contentPL.allCategories : contentEN.allCategories) + ' ' + 
                ($isPolish ? contentPL.members.toLowerCase() : contentEN.members.toLowerCase()) :
                categories.find(c => c.id === $selectedCategory)?.name() || ''}
            </div>
          {/if}
          
          <div class="team-grid">
            {#each regularMembers as member, i (member.name)}
              <div 
                class="team-card"
                in:fly={{ y: 30, duration: 800, delay: Math.min(100 * i, 600) }}
              >
                <div class="team-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    class="team-image {member.specialImageAdjustment ? 'iuliia-image' : ''}" 
                    style={member.name === 'Iuliia Kapustinskaia' ? 'object-position: center 10%;' : ''}
                  />
                </div>
                
                <div class="team-content">
                  <h3 class="team-name">{member.name}</h3>
                  <p class="team-role">{member.role}</p>
                  
                  {#if member.organization && member.organization !== "Brak"}
                    <div class="team-organization">{member.organization}</div>
                  {/if}
                  
                  {#if member.bio}
                    <p class="team-bio mt-3">{member.bio}</p>
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        {/if}
        
        {#if filteredTeamMembers.length === 0}
          <div class="col-span-full text-center py-8 text-gray-500">
            {c?.noResults || contentEN.noResults}
          </div>
        {/if}
      </div>
    </div>
  </section>
  
  <!-- Join Team CTA -->
  <section class="cta-section py-16">
    <div class="container mx-auto px-4">
      <div 
        class="max-w-3xl mx-auto text-center"
        in:fade={{ duration: 1000, delay: 300 }}
      >
        <h2 class="text-3xl font-bold mb-4">{c?.joinTeamTitle || contentEN.joinTeamTitle}</h2>
        <p class="text-xl text-purple-100 mb-8 opacity-90">{c?.joinTeamDesc || contentEN.joinTeamDesc}</p>
        
        <a href="/contact" class="cta-btn">
          {c?.joinTeamButton || contentEN.joinTeamButton}
        </a>
      </div>
    </div>
  </section>
</div>