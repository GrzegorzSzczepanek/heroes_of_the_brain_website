<script>
  import { faDiscord, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { isPolish } from '../../stores/languageStore';
  import { derived } from 'svelte/store';
  import PopUp from './PopUp.svelte';

  let socialLinks = [
    { icon: faDiscord, url: "https://discord.com" },
    { icon: faFacebook, url: "https://facebook.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faLinkedin, url: "https://linkedin.com" }
  ];

  const contentPL = {
    terms: "Regulamin",
    privacy: "Polityka prywatności",
    termsContent: "To jest przykładowa treść regulaminu. Wszelkie prawa zastrzeżone. Wykorzystywanie treści bez zgody jest zabronione. Dalsze korzystanie z serwisu oznacza akceptację warunków.",
    privacyContent: "To jest przykładowa treść polityki prywatności. Twoje dane są bezpieczne i przechowywane zgodnie z przepisami. Informacje są wykorzystywane wyłącznie w celu zapewnienia lepszej obsługi.",
    copy: "&copy; {year} Neuronki. Wszelkie prawa zastrzeżone."
  };

  const contentEN = {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    termsContent: "This is a sample terms of service content. All rights reserved. Unauthorized use of content is prohibited. Continued use of the site implies acceptance of the terms.",
    privacyContent: "This is a sample privacy policy content. Your data is safe and stored in accordance with regulations. Information is used solely to provide better service.",
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
          <a href={link.url} target="_blank" rel="noopener noreferrer">
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
