<script lang="ts">
    import { isPolish } from '../../stores/languageStore';
    import { derived } from 'svelte/store';
  
    // Define text content for both languages
    const contentPL = {
        header: 'Skontaktuj się z nami',
        address: 'plac Grunwaldzki 11, 50-378 Wrocław, Polska',
        email: 'heroesofthebrain.help@gmail.com',
        hours: 'Poniedziałek - Piątek: 9:00 - 17:00',
        addressLabel: 'Adres',
        emailLabel: 'Email',
        hoursLabel: 'Godziny otwarcia'
    };
  
    const contentEN = {
        header: 'Get in Touch',
        address: '11 Grunwaldzki Square, 50-378 Wrocław, Poland',
        email: 'heroesofthebrain.help@gmail.com',
        hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
        addressLabel: 'Address',
        emailLabel: 'Email',
        hoursLabel: 'Opening Hours'
    };
  
    // Derived store to get the current content based on the language
    const content = derived(isPolish, $isPolish => $isPolish ? contentPL : contentEN);
  
    let currentContent;
  
    // Subscribe to the derived store to update the local variables
    content.subscribe(value => {
      currentContent = value;
    });
</script>

<style>
    .info-card {
        background: rgba(30, 41, 59, 0.5);
        border: 1px solid rgba(139, 92, 246, 0.25);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        position: relative;
    }
    
    .info-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(139, 92, 246, 0.2);
    }
    
    .card-header {
        padding: 1.5rem 1.5rem 0.75rem;
        position: relative;
    }
    
    .card-header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 1.5rem;
        right: 1.5rem;
        height: 1px;
        background: linear-gradient(to right, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.3));
    }
    
    .card-content {
        padding: 1.5rem;
    }
    
    .info-item {
        display: flex;
        margin-bottom: 1.5rem;
        position: relative;
    }
    
    .info-item:last-child {
        margin-bottom: 0;
    }
    
    .icon-container {
        background: rgba(139, 92, 246, 0.15);
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        flex-shrink: 0;
        transition: all 0.3s ease;
    }
    
    .info-item:hover .icon-container {
        background: rgba(139, 92, 246, 0.25);
        transform: scale(1.05);
    }
    
    .info-text {
        flex: 1;
    }
    
    .info-label {
        font-weight: 600;
        color: #a78bfa;
        margin-bottom: 0.25rem;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
    }
    
    .info-content {
        color: #e2e8f0;
        line-height: 1.5;
    }
    
    @media (max-width: 768px) {
        .icon-container {
            width: 40px;
            height: 40px;
        }
    }
    
    .neural-decoration {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 150px;
        opacity: 0.05;
        pointer-events: none;
    }
</style>

<div class="info-card">
    <!-- Neural decoration -->
    <svg class="neural-decoration" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="3" fill="white" />
        <circle cx="75" cy="20" r="3" fill="white" />
        <circle cx="125" cy="30" r="3" fill="white" />
        <circle cx="30" cy="75" r="3" fill="white" />
        <circle cx="80" cy="85" r="3" fill="white" />
        <circle cx="120" cy="70" r="3" fill="white" />
        <circle cx="40" cy="120" r="3" fill="white" />
        <circle cx="90" cy="130" r="3" fill="white" />
        
        <line x1="25" y1="25" x2="75" y2="20" stroke="white" stroke-width="1" />
        <line x1="75" y1="20" x2="125" y2="30" stroke="white" stroke-width="1" />
        <line x1="25" y1="25" x2="30" y2="75" stroke="white" stroke-width="1" />
        <line x1="75" y1="20" x2="80" y2="85" stroke="white" stroke-width="1" />
        <line x1="125" y1="30" x2="120" y2="70" stroke="white" stroke-width="1" />
        <line x1="30" y1="75" x2="40" y2="120" stroke="white" stroke-width="1" />
        <line x1="80" y1="85" x2="90" y2="130" stroke="white" stroke-width="1" />
    </svg>

    <div class="card-header">
        <h3 class="text-2xl font-bold text-white">{currentContent.header}</h3>
    </div>
    
    <div class="card-content">
        <div class="info-item">
            <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <div class="info-text">
                <div class="info-label">{currentContent.addressLabel}</div>
                <div class="info-content">{currentContent.address}</div>
            </div>
        </div>
        
        <div class="info-item">
            <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="info-text">
                <div class="info-label">{currentContent.emailLabel}</div>
                <div class="info-content">
                    <a href="mailto:{currentContent.email}" class="text-purple-300 hover:text-purple-200 transition-colors">
                        {currentContent.email}
                    </a>
                </div>
            </div>
        </div>
        
        <div class="info-item">
            <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div class="info-text">
                <div class="info-label">{currentContent.hoursLabel}</div>
                <div class="info-content">{currentContent.hours}</div>
            </div>
        </div>
    </div>
</div>