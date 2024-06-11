import { c as create_ssr_component, e as each, b as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { faDiscord, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { F as FontAwesomeIcon } from "../../chunks/app.js";
const css$1 = {
  code: ".footer.svelte-kt2q5d.svelte-kt2q5d{background-color:#1a202c;color:#cbd5e0}.footer.svelte-kt2q5d a.svelte-kt2q5d{color:#cbd5e0;transition:color 0.3s ease}.footer.svelte-kt2q5d a.svelte-kt2q5d:hover{color:#63b3ed}.social-icons.svelte-kt2q5d a.svelte-kt2q5d{margin:0 10px;font-size:1.5rem}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\n  import { faDiscord, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';\\n  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';\\n\\n  let socialLinks = [\\n    { icon: faDiscord, url: \\"https://discord.com\\" },\\n    { icon: faFacebook, url: \\"https://facebook.com\\" },\\n    { icon: faInstagram, url: \\"https://instagram.com\\" },\\n    { icon: faLinkedin, url: \\"https://linkedin.com\\" }\\n  ];\\n<\/script>\\n\\n<style>\\n  .footer {\\n    background-color: #1a202c;\\n    color: #cbd5e0;\\n  }\\n  .footer a {\\n    color: #cbd5e0;\\n    transition: color 0.3s ease;\\n  }\\n  .footer a:hover {\\n    color: #63b3ed;\\n  }\\n  .social-icons a {\\n    margin: 0 10px;\\n    font-size: 1.5rem;\\n  }\\n</style>\\n\\n<footer class=\\"footer py-6\\">\\n  <div class=\\"container mx-auto px-6 text-center\\">\\n    <div class=\\"mb-4\\">\\n      <div class=\\"social-icons\\">\\n        {#each socialLinks as link}\\n          <a href={link.url} target=\\"_blank\\" rel=\\"noopener noreferrer\\">\\n            <FontAwesomeIcon icon={link.icon} />\\n          </a>\\n        {/each}\\n      </div>\\n    </div>\\n    <div class=\\"mb-4\\">\\n      <a href=\\"#\\" class=\\"hover:underline mx-2\\">Terms of Service</a>\\n      <a href=\\"#\\" class=\\"hover:underline mx-2\\">Privacy Policy</a>\\n    </div>\\n    <div>\\n      <p>&copy; {new Date().getFullYear()} Neuronki. All rights reserved.</p>\\n    </div>\\n  </div>\\n</footer>\\n"],"names":[],"mappings":"AAaE,mCAAQ,CACN,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACT,CACA,qBAAO,CAAC,eAAE,CACR,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,IACzB,CACA,qBAAO,CAAC,eAAC,MAAO,CACd,KAAK,CAAE,OACT,CACA,2BAAa,CAAC,eAAE,CACd,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,SAAS,CAAE,MACb"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socialLinks = [
    {
      icon: faDiscord,
      url: "https://discord.com"
    },
    {
      icon: faFacebook,
      url: "https://facebook.com"
    },
    {
      icon: faInstagram,
      url: "https://instagram.com"
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com"
    }
  ];
  $$result.css.add(css$1);
  return `<footer class="footer py-6 svelte-kt2q5d"><div class="container mx-auto px-6 text-center"><div class="mb-4"><div class="social-icons svelte-kt2q5d">${each(socialLinks, (link) => {
    return `<a${add_attribute("href", link.url, 0)} target="_blank" rel="noopener noreferrer" class="svelte-kt2q5d">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render($$result, { icon: link.icon }, {}, {})} </a>`;
  })}</div></div> <div class="mb-4" data-svelte-h="svelte-1gl3ze0"><a href="#" class="hover:underline mx-2 svelte-kt2q5d">Terms of Service</a> <a href="#" class="hover:underline mx-2 svelte-kt2q5d">Privacy Policy</a></div> <div><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Neuronki. All rights reserved.</p></div></div></footer>`;
});
const css = {
  code: ".bg-semi-transparent.svelte-12qdsgk{background-color:rgba(44, 31, 75, 0.7);--tw-backdrop-blur:blur(24px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n  import \\"../../app.css\\";\\n\\n  export let logoSrc = \\"https://knneuron.pwr.edu.pl/_next/image?url=http%3A%2F%2F127.0.0.1%3A1337%2Fuploads%2Fkn_neuron_logo_c3c1075271.png&w=640&q=75\\";\\n  export let placeholderLogo = \\"https://lh3.googleusercontent.com/proxy/2dC-3icCb85ezKNQFuBuz6xxGBzY-t19aVBxFnZDfSVhvXaNVfWsayGiZAxmCj_lmw_JQsN1Y778Es6bnrWqITMLtcFAOtmHTxoVsPQ4pHjhywVCyf_lLqd7ezylycnstSqWJav2QOmleAWyEcG-sopd13_6k0lXBQ\\";\\n\\n  export let navItems = [\\n    { name: \\"Zaproszenie\\", href: \\"#zaproszenie\\" },\\n    { name: \\"Tematyka Hackatonu\\", href: \\"#tematyka-Hackatonu\\" },\\n    { name: \\"Agenda\\", href: \\"#agenda\\" },\\n    { name: \\"FAQ\\", href: \\"#faq\\" },\\n    { name: \\"Kontakt\\", href: \\"#kontakt\\" }\\n  ];\\n\\n  let isScrolled = false;\\n\\n  onMount(() => {\\n    const handleScroll = () => {\\n      if (window.scrollY > 0) {\\n        isScrolled = true;\\n      } else {\\n        isScrolled = false;\\n      }\\n    };\\n\\n    window.addEventListener(\\"scroll\\", handleScroll);\\n\\n    return () => {\\n      window.removeEventListener(\\"scroll\\", handleScroll);\\n    };\\n  });\\n<\/script>\\n\\n<style>\\n  .bg-semi-transparent {\\n    background-color: rgba(44, 31, 75, 0.7); /* Adjust the transparency */\\n    --tw-backdrop-blur: blur(24px);\\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n  }\\n</style>\\n\\n<header class=\\"{isScrolled ?  'bg-black bg-semi-transparent' : 'bg-transparent' } text-white py-4 fixed top-0 left-0 right-0 z-50 transition duration-300\\">\\n  <div class=\\"container mx-auto flex justify-between items-center px-4\\">\\n    <div class=\\"flex items-center\\">\\n      <img src={logoSrc} alt=\\"Student Cybersym SCS Logo\\" class=\\"h-12 mr-4\\" />\\n      <div class=\\"text-left\\">\\n        <div class=\\"text-xl font-bold\\">KN Neuron</div>\\n        <div class=\\"text-sm\\">PWR</div>\\n      </div>\\n    </div>\\n    <div class=\\"flex items-center\\">\\n      <!-- <img src={placeholderLogo} alt=\\"Neuron Logo\\" class=\\"h-12 mr-8\\" /> -->\\n      <nav class=\\"space-x-6\\">\\n        {#each navItems as item}\\n          <a href={item.href} class=\\"hover:underline\\">{item.name}</a>\\n        {/each}\\n      </nav>\\n    </div>\\n  </div>\\n</header>\\n"],"names":[],"mappings":"AAmCE,mCAAqB,CACnB,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CAAC,CACvC,kBAAkB,CAAE,UAAU,CAC9B,uBAAuB,CAAE,IAAI,kBAAkB,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,IAAI,sBAAsB,CAAC,CAAC,IAAI,uBAAuB,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,IAAI,oBAAoB,CAAC,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,sBAAsB,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAC/Q,eAAe,CAAE,IAAI,kBAAkB,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,IAAI,sBAAsB,CAAC,CAAC,IAAI,uBAAuB,CAAC,CAAC,IAAI,wBAAwB,CAAC,CAAC,IAAI,oBAAoB,CAAC,CAAC,IAAI,qBAAqB,CAAC,CAAC,IAAI,sBAAsB,CAAC,CAAC,IAAI,mBAAmB,CACxQ"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logoSrc = "https://knneuron.pwr.edu.pl/_next/image?url=http%3A%2F%2F127.0.0.1%3A1337%2Fuploads%2Fkn_neuron_logo_c3c1075271.png&w=640&q=75" } = $$props;
  let { placeholderLogo = "https://lh3.googleusercontent.com/proxy/2dC-3icCb85ezKNQFuBuz6xxGBzY-t19aVBxFnZDfSVhvXaNVfWsayGiZAxmCj_lmw_JQsN1Y778Es6bnrWqITMLtcFAOtmHTxoVsPQ4pHjhywVCyf_lLqd7ezylycnstSqWJav2QOmleAWyEcG-sopd13_6k0lXBQ" } = $$props;
  let { navItems = [
    {
      name: "Zaproszenie",
      href: "#zaproszenie"
    },
    {
      name: "Tematyka Hackatonu",
      href: "#tematyka-Hackatonu"
    },
    { name: "Agenda", href: "#agenda" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" }
  ] } = $$props;
  if ($$props.logoSrc === void 0 && $$bindings.logoSrc && logoSrc !== void 0)
    $$bindings.logoSrc(logoSrc);
  if ($$props.placeholderLogo === void 0 && $$bindings.placeholderLogo && placeholderLogo !== void 0)
    $$bindings.placeholderLogo(placeholderLogo);
  if ($$props.navItems === void 0 && $$bindings.navItems && navItems !== void 0)
    $$bindings.navItems(navItems);
  $$result.css.add(css);
  return `<header class="${escape(
    "bg-transparent",
    true
  ) + " text-white py-4 fixed top-0 left-0 right-0 z-50 transition duration-300 svelte-12qdsgk"}"><div class="container mx-auto flex justify-between items-center px-4"><div class="flex items-center"><img${add_attribute("src", logoSrc, 0)} alt="Student Cybersym SCS Logo" class="h-12 mr-4"> <div class="text-left" data-svelte-h="svelte-u9xe2u"><div class="text-xl font-bold">KN Neuron</div> <div class="text-sm">PWR</div></div></div> <div class="flex items-center"> <nav class="space-x-6">${each(navItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="hover:underline">${escape(item.name)}</a>`;
  })}</nav></div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="pt-16">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
