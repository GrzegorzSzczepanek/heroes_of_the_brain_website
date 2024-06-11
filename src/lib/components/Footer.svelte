<script>
  import { faDiscord, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

  let socialLinks = [
    { icon: faDiscord, url: "https://discord.com" },
    { icon: faFacebook, url: "https://facebook.com" },
    { icon: faInstagram, url: "https://instagram.com" },
    { icon: faLinkedin, url: "https://linkedin.com" }
  ];
</script>

<style>
  .footer {
    background-color: #1a202c;
    color: #cbd5e0;
  }
  .footer a {
    color: #cbd5e0;
    transition: color 0.3s ease;
  }
  .footer a:hover {
    color: #63b3ed;
  }
  .social-icons a {
    margin: 0 10px;
    font-size: 1.5rem;
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
      <a href="#" class="hover:underline mx-2">Terms of Service</a>
      <a href="#" class="hover:underline mx-2">Privacy Policy</a>
    </div>
    <div>
      <p>&copy; {new Date().getFullYear()} Neuronki. All rights reserved.</p>
    </div>
  </div>
</footer>
