<script lang="ts">
  import '../../../app.css';
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { derived } from 'svelte/store';
  import { isPolish } from '../../../stores/languageStore';
  import { spring } from 'svelte/motion';
  
  // Use existing components
  import TeamIntro from '$lib/components/TeamIntro.svelte';
  import OrganizationLandingPage from '$lib/components/OrganizationLandingPage.svelte';
  import TeamSection from '$lib/components/TeamSection.svelte';
  import TeamMember from '$lib/components/TeamMember.svelte'; 
  import UnderlinedHeader from '$lib/components/UnderlinedHeader.svelte';
  
  // For animations
  let scrollY;
  let sections = [];
  let visible = Array(6).fill(false);
  let currentHover = -1;
  let teamSectionRef;
  
  // Content based on language
  const contentPL = {
    pageTitle: 'Organizatorzy – Heroes of The Brain 2025',
    heroTitle: 'Poznaj Nasz Zespół',
    heroSubtitle: 'Ludzie, którzy stoją za Heroes of the Brain 2025',
    teamStatsTitle: 'Nasz zespół w liczbach',
    members: 'Członków zespołu',
    experience: 'Lat doświadczenia',
    editions: 'Edycji hackathonu',
    departments: 'Działów',
    departmentsTitle: 'Struktura organizacyjna',
    teamTitle: 'Członkowie zespołu',
    teamSubtitle: 'Poznaj ludzi, którzy tworzą Heroes of the Brain 2025',
    quote: 'Naszą misją jest stworzenie przestrzeni do innowacji w dziedzinie interfejsów mózg-komputer',
    quoteAuthor: 'Zespół Heroes of the Brain',
    joinTeamTitle: 'Dołącz do naszego zespołu',
    joinTeamDesc: 'Jesteśmy zawsze otwarci na nowych członków zespołu pasjonujących się nowymi technologiami',
    joinTeamButton: 'Skontaktuj się z nami'
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
    joinTeamButton: 'Contact us'
  };
  
  const content = derived(isPolish, ($p) => ($p ? contentPL : contentEN));
  let c; 
  content.subscribe(v => c = v);
  
  // Placeholder team stats
  const teamStats = [
    { value: '35+', label: c.members, icon: 'users' },
    { value: '8+', label: c.experience, icon: 'calendar' },
    { value: '2', label: c.editions, icon: 'trophy' },
    { value: '5', label: c.departments, icon: 'building' }
  ];
  
  // Placeholder departments
  const departments = [
    { 
      name: 'Coordination',
      description: 'Overall event management and coordination', 
      members: 4,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'Marketing',
      description: 'Promotion, social media, and communications', 
      members: 6,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Technical',
      description: 'Technical infrastructure and support', 
      members: 8,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Logistics',
      description: 'Venue, catering, and participant support', 
      members: 5,
      color: 'from-violet-500 to-fuchsia-500'
    },
    { 
      name: 'Mentoring',
      description: 'Guidance and support for participants', 
      members: 12,
      color: 'from-purple-500 to-pink-500'
    }
  ];
  
  // Placeholder team members for demonstration
  const teamMembers = [
  {
    name: 'Iuliia Kapustinskaia',
    role: 'Koordynator Główny',
    bio: 'Główny koordynator projektu z Koła Naukowego Neuron.',
    image: '/images/koordynatorzy/iuliia_kapustinskaia.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Filip Puszko',
    role: 'Koordynator Główny',
    bio: 'Główny koordynator projektu z Koła Naukowego Neuron.',
    image: '/images/sekcja_techniczna/filip_puszko.webp',
    organization: 'KN Neuron'
  },
  {
    name: 'Grzegorz Szczepanek',
    role: 'Koordynator Techniczny',
    bio: 'Odpowiada za techniczną stronę projektu.',
    image: '/images/sekcja_techniczna/grzegorz_szczepanek.webp',
    organization: 'KN Neuron'
  },
  {
    name: 'Milena Mironczuk',
    role: 'Koordynator Organizacyjny',
    bio: 'Zarządza organizacyjnymi aspektami wydarzenia.',
    image: '/images/placeholder-woman.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Maja Wiśniewska',
    role: 'Koordynator Sponsorski',
    bio: 'Odpowiada za relacje ze sponsorami i partnerami.',
    image: '/images/sekcja_sponsorska/maja_wisniewska.JPG',
    organization: 'Brak'
  },
  {
    name: 'Anna Gralewska',
    role: 'Koordynator Promocji',
    bio: 'Zarządza promocją i marketingiem wydarzenia.',
    image: '/images/koordynatorzy/anna-gralewska.jpeg',
    organization: 'Brak'
  },
  {
    name: 'Oliwia Borkowska',
    role: 'Koordynator Promocji',
    bio: 'Odpowiada za promocję wydarzenia.',
    image: '/images/sekcja_promocji/oliwia_borkowska.webp',
    organization: 'KN Neuron'
  },
  {
    name: 'Weronika Kaźmierczak',
    role: 'Koordynator Promocji',
    bio: 'Zarządza strategią promocyjną.',
    image: '/images/placeholder-woman.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Roch Rupar',
    role: 'Koordynator Logistyki',
    bio: 'Odpowiada za logistykę wydarzenia.',
    image: '/images/placeholder-man.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Kacper Daniel',
    role: 'Zespół Techniczny',
    bio: 'Członek zespołu technicznego.',
    image: '/images/sekcja_techniczna/kacper_daniel.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Barbara Dereń',
    role: 'Zespół Logistyki',
    bio: 'Odpowiada za logistykę wydarzenia.',
    image: '/images/placeholder-woman.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Adam Broszkiewicz',
    role: 'Zespół Techniczny',
    bio: 'Specjalista ds. technicznych.',
    image: '/images/sekcja_techniczna/adam_broszkiewicz.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Jakub Kulik',
    role: 'Zespół Promocji',
    bio: 'Członek zespołu promocyjnego.',
    image: '/images/placeholder-man.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Amelia Sroczyńska',
    role: 'Zespół Organizacyjny',
    bio: 'Wspiera organizację wydarzenia.',
    image: '/images/sekcja_organizacyjna/amelia_sroczynska.JPG',
    organization: 'WRSS W4'
  },
  {
    name: 'Wiktor Golimowski',
    role: 'Zespół Organizacyjny',
    bio: 'Członek zespołu organizacyjnego.',
    image: '/images/placeholder-man.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Marcel Sobecki',
    role: 'Zespół Organizacyjny',
    bio: 'Wspiera procesy organizacyjne.',
    image: '/images/placeholder-man.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Konrad Bąchór',
    role: 'Zespół Grafiki',
    bio: 'Odpowiada za materiały graficzne.',
    image: '/images/sekcja_promocji/konrad_bachor.webp',
    organization: 'WRSS W4'
  },
  {
    name: 'Maria Cicirko',
    role: 'Zespół Promocji',
    bio: 'Członek zespołu promocyjnego.',
    image: '/images/placeholder-woman.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Tomasz Koralewski',
    role: 'Zespół Techniczny',
    bio: 'Specjalista techniczny.',
    image: '/images/sekcja_techniczna/tomasz_koralewski.webp',
    organization: 'KN Neuron'
  },
  {
    name: 'Mieszko Połończyk',
    role: 'Zespół Sponsorski',
    bio: 'Odpowiada za relacje sponsorskie.',
    image: '/images/placeholder-man.jpg',
    organization: 'W4 INS'
  },
  {
    name: 'Jakub Kłosowski',
    role: 'Zespół Sponsorski',
    bio: 'Członek zespołu sponsorskiego.',
    image: '/images/placeholder-man.jpg',
    organization: 'W4N INS'
  },
  {
    name: 'Karol Kosmala',
    role: 'Zespół Promocji',
    bio: 'Wspiera działania promocyjne.',
    image: '/images/placeholder-man.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Magdalena Skiba',
    role: 'Zespół Promocji',
    bio: 'Członek zespołu promocyjnego.',
    image: '/images/placeholder-woman.jpg',
    organization: 'TK Games'
  },
  {
    name: 'Jakub Szot',
    role: 'Zespół Sponsorski',
    bio: 'Odpowiada za pozyskiwanie sponsorów.',
    image: '/images/placeholder-man.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Kajetan Mróz',
    role: 'Zespół Logistyki',
    bio: 'Wspiera logistykę wydarzenia.',
    image: '/images/placeholder-man.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Paulina Włosińska',
    role: 'Zespół Logistyki',
    bio: 'Członek zespołu logistycznego.',
    image: '/images/placeholder-woman.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Dominika Jarząbek',
    role: 'Zespół Organizacyjny',
    bio: 'Wspiera organizację wydarzenia.',
    image: '/images/placeholder-woman.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Kacper Kruszelnickie',
    role: 'Zespół Techniczny',
    bio: 'Specjalista techniczny.',
    image: '/images/placeholder-man.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Michał Mendzelewski',
    role: 'Zespół Organizacyjny',
    bio: 'Członek zespołu organizacyjnego.',
    image: '/images/placeholder-man.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Maciej Zych',
    role: 'Zespół Logistyki',
    bio: 'Odpowiada za logistykę.',
    image: '/images/placeholder-man.jpg',
    organization: 'WRSS W4'
  },
  {
    name: 'Zofia Turalska',
    role: 'Zespół Sponsorski',
    bio: 'Członek zespołu sponsorskiego.',
    image: '/images/placeholder-woman.jpg',
    organization: 'Brak'
  },
  {
    name: 'Maksymilian Awdziejczyk',
    role: 'Zespół Techniczny',
    bio: 'Specjalista techniczny.',
    image: '/images/placeholder-man.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Izabela Paniczek',
    role: 'Zespół Promocji',
    bio: 'Członek zespołu promocyjnego.',
    image: '/images/koordynatorzy/izabela_paniczek.webp',
    organization: 'KN Neuron'
  },
  {
    name: 'Dawid Janikowski',
    role: 'Zespół Techniczny',
    bio: 'Specjalista techniczny.',
    image: '/images/placeholder-man.jpg',
    organization: 'KN Neuron'
  },
  {
    name: 'Camille Lisek',
    role: 'Zespół Techniczny',
    bio: 'Członek zespołu technicznego.',
    image: '/images/placeholder-woman.jpg',
    organization: 'KN Neuron'
  }
];
  
  // Intersection observer for scroll animations
  onMount(() => {
    document.title = c.pageTitle;
    
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            visible[index] = true;
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
</script>

<svelte:head>
  <title>{c.pageTitle}</title>
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
    /* width: 100vw; */
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
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .department-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 40px -15px rgba(0, 0, 0, 0.15);
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
  }
  
  .team-card:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 30px 40px -20px rgba(0, 0, 0, 0.2);
  }
  
  .team-image-container {
    position: relative;
    height: 300px;
    overflow: hidden;
  }
  
  .team-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .team-card:hover .team-image {
    transform: scale(1.05);
  }
  
  .team-content {
    padding: 1.5rem;
    border-top: 4px solid var(--purple-primary);
    position: relative;
    background: white;
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
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .departments-grid,
    .team-grid {
      grid-template-columns: 1fr;
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
      <h1 class="hero-title">{c.heroTitle}</h1>
      <p class="hero-subtitle">{c.heroSubtitle}</p>
    </div>
  </section>
  
  <!-- Team Stats Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[0]} bind:this={sections[0]}>
        <div class="section-title">
          <h2>{c.teamStatsTitle}</h2>
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
            {c.quote}
          </p>
          <div class="quote-author">— {c.quoteAuthor}</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Departments Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="section" class:visible={visible[2]} bind:this={sections[2]}>
        <div class="section-title">
          <h2>{c.departmentsTitle}</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="departments-grid">
          {#each departments as dept, i}
            <div 
              class="department-card"
              in:fly={{ y: 30, duration: 800, delay: 200 * i }}
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
                  <span>{dept.members} {c.members.toLowerCase()}</span>
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
          <h2>{c.teamTitle}</h2>
          <p>{c.teamSubtitle}</p>
          <div class="section-divider"></div>
        </div>
        
        <div class="team-grid" bind:this={teamSectionRef}>
          {#each teamMembers as member, i}
            <div 
              class="team-card"
              in:fly={{ y: 30, duration: 800, delay: 200 * i }}
              on:mouseenter={() => currentHover = i}
              on:mouseleave={() => currentHover = -1}
            >
              <div class="team-image-container">
                <img src={member.image} alt={member.name} class="team-image" />
              </div>
              
              <div class="team-content">
                <h3 class="team-name">{member.name}</h3>
                <p class="team-role">{member.role}</p>
                <p class="team-bio">{member.bio}</p>
                
                <!-- Social links could go here -->
                <div class="flex mt-4 space-x-3">
                  {#each ['linkedin', 'twitter', 'github'] as social}
                    <a 
                      href="#" 
                      class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                    >
                      <span class="sr-only">{social}</span>
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm5 17h-2v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991v6.999h-2v-11h2v1.462c.58-.886 1.65-1.462 2.934-1.462 2.099 0 4.066 1.28 4.066 3.916v7.084zm-12-9.75v-2.5h2v2.5h-2z"></path>
                      </svg>
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- Organization Landing Section -->
  <!-- <section class="section py-16 bg-white" class:visible={visible[4]} bind:this={sections[4]}>
    <div class="container mx-auto px-4">
      <OrganizationLandingPage year={2025} />
    </div>
  </section>
   -->
  <!-- Team Section (from the component) -->
  <!-- <section class="section py-16 bg-gray-50" class:visible={visible[5]} bind:this={sections[5]}>
    <div class="container mx-auto px-4">
      <TeamSection year={2025} />
    </div>
  </section>
   -->
  <!-- Join Team CTA -->
  <section class="cta-section py-16">
    <div class="container mx-auto px-4">
      <div 
        class="max-w-3xl mx-auto text-center"
        in:fade={{ duration: 1000, delay: 300 }}
      >
        <h2 class="text-3xl font-bold mb-4">{c.joinTeamTitle}</h2>
        <p class="text-xl text-purple-100 mb-8 opacity-90">{c.joinTeamDesc}</p>
        
        <a href="/contact" class="cta-btn">
          {c.joinTeamButton}
        </a>
      </div>
    </div>
  </section>
</div>