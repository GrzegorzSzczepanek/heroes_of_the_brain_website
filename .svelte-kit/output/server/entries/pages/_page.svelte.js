import { c as create_ssr_component, e as each, d as add_attribute, b as escape, v as validate_component } from "../../chunks/ssr.js";
import { F as FontAwesomeIcon } from "../../chunks/app.js";
import "leaflet";
import { faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
const css$6 = {
  code: '@keyframes svelte-vadtm9-scroll{0%{transform:translateX(0)}100%{transform:translateX(calc(-250px * 7))}}.slider.svelte-vadtm9{background:white;box-shadow:0 10px 20px -5px rgba(0, 0, 0, .125);height:100px;margin:auto;overflow:hidden;position:relative;width:100%}.slider.svelte-vadtm9::before,.slider.svelte-vadtm9::after{content:"";height:100px;position:absolute;width:200px;z-index:2;background:linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)}.slider.svelte-vadtm9::after{right:0;top:0;transform:rotateZ(180deg)}.slider.svelte-vadtm9::before{left:0;top:0}.slide-track.svelte-vadtm9{animation:svelte-vadtm9-scroll 40s linear infinite;display:flex;width:calc(250px * 14)}.slide-track.svelte-vadtm9:hover{animation-play-state:paused}.slide.svelte-vadtm9{height:100px;width:250px;margin-left:20px;transition:0.3 ease-in-out}.slide.svelte-vadtm9:hover{cursor:pointer;background-color:rgb(37, 41, 250)}',
  map: '{"version":3,"file":"Carousel.svelte","sources":["Carousel.svelte"],"sourcesContent":["<script>\\n  let slides = [\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png\\",\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png\\",\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png\\",\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png\\",\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png\\",\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png\\",\\n    \\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png\\"\\n  ];\\n<\/script>\\n\\n<div class=\\"slider\\">\\n  <div class=\\"slide-track\\">\\n    {#each slides as slide}\\n      <div class=\\"slide\\">\\n        <a href=\\"#main_info\\"><img src={slide} height=\\"100\\" width=\\"250\\" alt=\\"\\" /></a>\\n\\n      </div>\\n    {/each}\\n    <!-- duplicate the slides to create the infinite effect -->\\n    {#each slides as slide}\\n      <div class=\\"slide\\">\\n        <a href=\\"#main_info\\"><img src={slide} height=\\"100\\" width=\\"250\\" alt=\\"\\" /></a>\\n      </div>\\n    {/each}\\n  </div>\\n</div>\\n\\n<style>\\n  @keyframes scroll {\\n    0% { transform: translateX(0); }\\n    100% { transform: translateX(calc(-250px * 7)); }\\n  }\\n\\n  .slider {\\n    background: white;\\n    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);\\n    height: 100px;\\n    margin: auto;\\n    overflow: hidden;\\n    position: relative;\\n    width: 100%;\\n    /* transform: ; */\\n  }\\n\\n  .slider::before,\\n  .slider::after {\\n    content: \\"\\";\\n    height: 100px;\\n    position: absolute;\\n    width: 200px;\\n    z-index: 2;\\n    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);\\n  }\\n\\n  .slider::after {\\n    right: 0;\\n    top: 0;\\n    transform: rotateZ(180deg);\\n  }\\n\\n  .slider::before {\\n    left: 0;\\n    top: 0;\\n  }\\n\\n  .slide-track {\\n    animation: scroll 40s linear infinite;\\n    display: flex;\\n    width: calc(250px * 14);\\n  }\\n  .slide-track:hover {\\n\\n    animation-play-state: paused;\\n  }\\n\\n  .slide {\\n    height: 100px;\\n    width: 250px;\\n    margin-left: 20px;\\n    transition: 0.3 ease-in-out;\\n  }\\n  .slide:hover {\\n\\n    cursor: pointer;\\n    /* height: 130px;\\n    width: 260px; */\\n    background-color: rgb(37, 41, 250);\\n  }\\n  \\n</style>\\n\\n\\n"],"names":[],"mappings":"AA8BE,WAAW,oBAAO,CAChB,EAAG,CAAE,SAAS,CAAE,WAAW,CAAC,CAAG,CAC/B,IAAK,CAAE,SAAS,CAAE,WAAW,KAAK,MAAM,CAAC,CAAC,CAAC,CAAC,CAAC,CAAG,CAClD,CAEA,qBAAQ,CACN,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAChD,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAET,CAEA,qBAAO,QAAQ,CACf,qBAAO,OAAQ,CACb,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAC9F,CAEA,qBAAO,OAAQ,CACb,KAAK,CAAE,CAAC,CACR,GAAG,CAAE,CAAC,CACN,SAAS,CAAE,QAAQ,MAAM,CAC3B,CAEA,qBAAO,QAAS,CACd,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CACP,CAEA,0BAAa,CACX,SAAS,CAAE,oBAAM,CAAC,GAAG,CAAC,MAAM,CAAC,QAAQ,CACrC,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,EAAE,CACxB,CACA,0BAAY,MAAO,CAEjB,oBAAoB,CAAE,MACxB,CAEA,oBAAO,CACL,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CAAC,WAClB,CACA,oBAAM,MAAO,CAEX,MAAM,CAAE,OAAO,CAGf,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,GAAG,CACnC"}'
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slides = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
  ];
  $$result.css.add(css$6);
  return `<div class="slider svelte-vadtm9"><div class="slide-track svelte-vadtm9">${each(slides, (slide) => {
    return `<div class="slide svelte-vadtm9"><a href="#main_info"><img${add_attribute("src", slide, 0)} height="100" width="250" alt=""></a> </div>`;
  })}  ${each(slides, (slide) => {
    return `<div class="slide svelte-vadtm9"><a href="#main_info"><img${add_attribute("src", slide, 0)} height="100" width="250" alt=""></a> </div>`;
  })}</div> </div>`;
});
const css$5 = {
  code: "@import 'leaflet/dist/leaflet.css';.contact-container.svelte-18eynr4.svelte-18eynr4{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;color:#333;padding:2rem}@media(min-width: 768px){.contact-container.svelte-18eynr4.svelte-18eynr4{flex-direction:row}}.contact-info.svelte-18eynr4.svelte-18eynr4{background-color:white;flex:1;padding:2rem;border-radius:0.5rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);width:100%;transition:transform 0.3s ease-in-out}.contact-info.svelte-18eynr4.svelte-18eynr4:hover{transform:scale(1.05)}@media(min-width: 768px){.contact-info.svelte-18eynr4.svelte-18eynr4{margin-bottom:0;margin-right:2rem}}.map-container.svelte-18eynr4.svelte-18eynr4{width:100%;height:24rem;border-radius:0.5rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);transform:scale(1);transition:transform 0.3s ease-in-out}.map-container.svelte-18eynr4.svelte-18eynr4:hover{transform:scale(1.05)}@media(min-width: 768px){.map-container.svelte-18eynr4.svelte-18eynr4{width:40%;aspect-ratio:1}}.contact-title.svelte-18eynr4.svelte-18eynr4{@apply text-3xl font-bold mb-4 text-blue-700;}.contact-details.svelte-18eynr4.svelte-18eynr4{@apply mb-4 text-lg;}.contact-item.svelte-18eynr4.svelte-18eynr4{@apply mb-2 text-lg;}.contact-item.svelte-18eynr4 strong.svelte-18eynr4{@apply text-blue-700;}",
  map: `{"version":3,"file":"ContactSection.svelte","sources":["ContactSection.svelte"],"sourcesContent":["<script>\\n  import 'leaflet/dist/leaflet.css';\\n  import L from 'leaflet';\\n  import { onMount } from 'svelte';\\n\\n    let map;\\n\\n    onMount(async () => {\\n        if (typeof window !== 'undefined') {\\n        const L = await import('leaflet');\\n        // await import('leaflet/dist/leaflet.css');\\n\\n        map = L.map('map').setView([51.107883, 17.038538], 13); // Coordinates for Wroclaw\\n\\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\\n            attribution: '&copy; <a href=\\"https://www.openstreetmap.org/copyright\\">OpenStreetMap</a> contributors'\\n        }).addTo(map);\\n\\n        L.marker([51.107883, 17.038538]).addTo(map)\\n            .bindPopup('Strefa Kultury Studenckiej<br>Politechnika Wrocławska') \\n            .openPopup();\\n        }\\n    });\\n<\/script>\\n\\n<style lang=\\"de\\">\\n  @import 'leaflet/dist/leaflet.css';\\n  .contact-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    min-height: 100vh;\\n    color: #333;\\n    padding: 2rem;\\n  }\\n\\n  @media (min-width: 768px) {\\n    .contact-container {\\n      flex-direction: row;\\n    }\\n  }\\n\\n  .contact-info {\\n    background-color: white;\\n    flex: 1;\\n    padding: 2rem;\\n    border-radius: 0.5rem;\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n    width: 100%;\\n    transition: transform 0.3s ease-in-out;\\n  }\\n\\n  .contact-info:hover {\\n    transform: scale(1.05);\\n  }\\n\\n  @media (min-width: 768px) {\\n    .contact-info {\\n      margin-bottom: 0;\\n      margin-right: 2rem;\\n    }\\n  }\\n\\n  .map-container {\\n    width: 100%;\\n    height: 24rem;\\n    border-radius: 0.5rem;\\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\\n    transform: scale(1);\\n    transition: transform 0.3s ease-in-out;\\n  }\\n\\n  .map-container:hover {\\n    transform: scale(1.05);\\n  }\\n\\n  @media (min-width: 768px) {\\n    .map-container {\\n      width: 40%;\\n      aspect-ratio: 1;\\n    }\\n  }\\n  .contact-title {\\n      @apply text-3xl font-bold mb-4 text-blue-700;\\n  }\\n\\n  .contact-details {\\n      @apply mb-4 text-lg;\\n  }\\n\\n  .contact-item {\\n      @apply mb-2 text-lg;\\n  }\\n\\n  .contact-item strong {\\n      @apply text-blue-700;\\n  }\\n</style>\\n\\n<section class=\\"contact-container\\">\\n  <div class=\\"contact-info\\">\\n      <h2 class=\\"contact-title\\">KONTAKT</h2>\\n      <p class=\\"contact-details\\">\\n          <strong>Strefa Kultury Studenckiej</strong><br>\\n          Adres:<br>\\n          Wybrzeże Wyspiańskiego 27<br>\\n          50-370 Wrocław\\n      </p>\\n      <div class=\\"contact-item\\">\\n          <strong>Telefon:</strong> +48 123 456 789\\n      </div>\\n      <div class=\\"contact-item\\">\\n          <strong>Email:</strong> kontakt@example.com\\n      </div>\\n      <div class=\\"contact-item\\">\\n          <strong>Godziny otwarcia:</strong> Pon - Pt: 9:00 - 17:00\\n      </div>\\n  </div>\\n  <div class=\\"map-container\\">\\n      <div id=\\"map\\" class=\\"w-full h-full rounded-lg\\"></div>\\n  </div>\\n</section>\\n"],"names":[],"mappings":"AA0BE,QAAQ,0BAA0B,CAClC,gDAAmB,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IACX,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,gDAAmB,CACjB,cAAc,CAAE,GAClB,CACF,CAEA,2CAAc,CACZ,gBAAgB,CAAE,KAAK,CACvB,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACnF,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,WAC7B,CAEA,2CAAa,MAAO,CAClB,SAAS,CAAE,MAAM,IAAI,CACvB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,2CAAc,CACZ,aAAa,CAAE,CAAC,CAChB,YAAY,CAAE,IAChB,CACF,CAEA,4CAAe,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACnF,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,WAC7B,CAEA,4CAAc,MAAO,CACnB,SAAS,CAAE,MAAM,IAAI,CACvB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,4CAAe,CACb,KAAK,CAAE,GAAG,CACV,YAAY,CAAE,CAChB,CACF,CACA,4CAAe,CACX,OAAO,QAAQ,CAAC,SAAS,CAAC,IAAI,CAAC,aAAa,CAChD,CAEA,8CAAiB,CACb,OAAO,IAAI,CAAC,OAAO,CACvB,CAEA,2CAAc,CACV,OAAO,IAAI,CAAC,OAAO,CACvB,CAEA,4BAAa,CAAC,qBAAO,CACjB,OAAO,aAAa,CACxB"}`
};
const ContactSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="contact-container svelte-18eynr4" data-svelte-h="svelte-1mmjnxu"><div class="contact-info svelte-18eynr4"><h2 class="contact-title svelte-18eynr4">KONTAKT</h2> <p class="contact-details svelte-18eynr4"><strong>Strefa Kultury Studenckiej</strong><br>
          Adres:<br>
          Wybrzeże Wyspiańskiego 27<br>
          50-370 Wrocław</p> <div class="contact-item svelte-18eynr4"><strong class="svelte-18eynr4">Telefon:</strong> +48 123 456 789</div> <div class="contact-item svelte-18eynr4"><strong class="svelte-18eynr4">Email:</strong> kontakt@example.com</div> <div class="contact-item svelte-18eynr4"><strong class="svelte-18eynr4">Godziny otwarcia:</strong> Pon - Pt: 9:00 - 17:00</div></div> <div class="map-container svelte-18eynr4"><div id="map" class="w-full h-full rounded-lg"></div></div></section>`;
});
const css$4 = {
  code: ".glitch.svelte-1ue1ci9{position:relative;display:inline-block;color:white;font-size:2rem;font-weight:bold}.glitch.svelte-1ue1ci9::before,.glitch.svelte-1ue1ci9::after{content:attr(data-text);position:absolute;top:0;left:0;width:100%;height:100%;background:inherit}.glitch.svelte-1ue1ci9::before{left:2px;text-shadow:-2px 0 red;animation:svelte-1ue1ci9-glitch 1s infinite}.glitch.svelte-1ue1ci9::after{left:-2px;text-shadow:-2px 0 blue;animation:svelte-1ue1ci9-glitch 1s infinite reverse}@keyframes svelte-1ue1ci9-glitch{0%{clip:rect(24px, 9999px, 44px, 0)}20%{clip:rect(94px, 9999px, 34px, 0)}40%{clip:rect(64px, 9999px, 54px, 0)}60%{clip:rect(84px, 9999px, 14px, 0)}80%{clip:rect(34px, 9999px, 64px, 0)}100%{clip:rect(24px, 9999px, 44px, 0)}}",
  map: '{"version":3,"file":"CategorySection.svelte","sources":["CategorySection.svelte"],"sourcesContent":["<script>\\n  let categories = [\\n      { title: \\"Artificial Intelligence\\", prize: \\"3,000 PLN\\" },\\n      { title: \\"Education\\", prize: \\"3,000 PLN\\" },\\n      { title: \\"Gamedev\\", prize: \\"3,000 PLN\\" },\\n      { title: \\"Wellness & Activities\\", prize: \\"3,000 PLN\\" }\\n  ];\\n<\/script>\\n\\n<style>\\n  .glitch {\\n    position: relative;\\n    display: inline-block;\\n    color: white;\\n    font-size: 2rem;\\n    font-weight: bold;\\n  }\\n  .glitch::before, .glitch::after {\\n    content: attr(data-text);\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background: inherit;\\n  }\\n  .glitch::before {\\n    left: 2px;\\n    text-shadow: -2px 0 red;\\n    animation: glitch 1s infinite;\\n  }\\n  .glitch::after {\\n    left: -2px;\\n    text-shadow: -2px 0 blue;\\n    animation: glitch 1s infinite reverse;\\n  }\\n  @keyframes glitch {\\n    0% { clip: rect(24px, 9999px, 44px, 0); }\\n    20% { clip: rect(94px, 9999px, 34px, 0); }\\n    40% { clip: rect(64px, 9999px, 54px, 0); }\\n    60% { clip: rect(84px, 9999px, 14px, 0); }\\n    80% { clip: rect(34px, 9999px, 64px, 0); }\\n    100% { clip: rect(24px, 9999px, 44px, 0); }\\n  }\\n</style>\\n\\n<section class=\\"flex flex-wrap justify-center gap-6 py-10 bg-gray-900\\">\\n  {#each categories as category}\\n    <div class=\\"bg-gray-800 border border-purple-600 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 text-white transform transition-transform duration-500 hover:scale-105\\">\\n      <div class=\\"bg-purple-600 text-center text-lg md:text-xl lg:text-2xl font-bold py-2 rounded-t-md\\">{category.title}</div>\\n      <div class=\\"bg-teal-700 text-center text-sm md:text-base lg:text-lg font-bold py-1 rounded-b-md mb-4\\">OPEN TASKS</div>\\n      <div class=\\"text-center text-sm md:text-base lg:text-lg font-bold mb-2\\">GUARANTEED PRIZE POOL</div>\\n      <div class=\\"text-center mb-4\\">\\n        <span class=\\"glitch\\" data-text={category.prize}>{category.prize}</span>\\n      </div>\\n      <p class=\\"text-sm md:text-base lg:text-lg text-gray-400\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>\\n    </div>\\n  {/each}\\n</section>\\n"],"names":[],"mappings":"AAUE,sBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACA,sBAAO,QAAQ,CAAE,sBAAO,OAAQ,CAC9B,OAAO,CAAE,KAAK,SAAS,CAAC,CACxB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OACd,CACA,sBAAO,QAAS,CACd,IAAI,CAAE,GAAG,CACT,WAAW,CAAE,IAAI,CAAC,CAAC,CAAC,GAAG,CACvB,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,QACvB,CACA,sBAAO,OAAQ,CACb,IAAI,CAAE,IAAI,CACV,WAAW,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CACxB,SAAS,CAAE,qBAAM,CAAC,EAAE,CAAC,QAAQ,CAAC,OAChC,CACA,WAAW,qBAAO,CAChB,EAAG,CAAE,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAG,CACxC,GAAI,CAAE,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAG,CACzC,GAAI,CAAE,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAG,CACzC,GAAI,CAAE,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAG,CACzC,GAAI,CAAE,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAG,CACzC,IAAK,CAAE,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAG,CAC5C"}'
};
const CategorySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categories = [
    {
      title: "Artificial Intelligence",
      prize: "3,000 PLN"
    },
    { title: "Education", prize: "3,000 PLN" },
    { title: "Gamedev", prize: "3,000 PLN" },
    {
      title: "Wellness & Activities",
      prize: "3,000 PLN"
    }
  ];
  $$result.css.add(css$4);
  return `<section class="flex flex-wrap justify-center gap-6 py-10 bg-gray-900">${each(categories, (category) => {
    return `<div class="bg-gray-800 border border-purple-600 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 text-white transform transition-transform duration-500 hover:scale-105"><div class="bg-purple-600 text-center text-lg md:text-xl lg:text-2xl font-bold py-2 rounded-t-md">${escape(category.title)}</div> <div class="bg-teal-700 text-center text-sm md:text-base lg:text-lg font-bold py-1 rounded-b-md mb-4" data-svelte-h="svelte-m1fo78">OPEN TASKS</div> <div class="text-center text-sm md:text-base lg:text-lg font-bold mb-2" data-svelte-h="svelte-12m2ed7">GUARANTEED PRIZE POOL</div> <div class="text-center mb-4"><span class="glitch svelte-1ue1ci9"${add_attribute("data-text", category.prize, 0)}>${escape(category.prize)}</span></div> <p class="text-sm md:text-base lg:text-lg text-gray-400" data-svelte-h="svelte-d1ljst">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p> </div>`;
  })}</section>`;
});
const css$3 = {
  code: ".bg-dots.svelte-1pdmgij{position:absolute;border-radius:50%;background-color:rgba(255, 255, 255, 0.1);transition:transform 0.1s ease-out}.dot-1.svelte-1pdmgij{width:100px;height:100px;top:10%;left:20%}.dot-2.svelte-1pdmgij{width:150px;height:150px;top:50%;left:40%;opacity:0.3}.dot-3.svelte-1pdmgij{width:120px;height:120px;top:70%;left:70%}",
  map: `{"version":3,"file":"LandingPage.svelte","sources":["LandingPage.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';\\n  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';\\n  import \\"../../app.css\\";\\n\\n  let backgroundImage = '../src/lib/images/brain.png';\\n  let scrollY = 0;\\n\\n  onMount(() => {\\n    const handleScroll = () => {\\n      scrollY = window.scrollY;\\n    };\\n    window.addEventListener('scroll', handleScroll);\\n    return () => {\\n      window.removeEventListener('scroll', handleScroll);\\n    };\\n  });\\n\\n  let textVar = 'Heroes of The Brain';\\n  let introText = textVar.split('').map(char => \`<span class=\\"intro-text\\">\${char}</span>\`).join('');\\n<\/script>\\n\\n<style>\\n  .bg-dots {\\n    position: absolute;\\n    border-radius: 50%;\\n    background-color: rgba(255, 255, 255, 0.1);\\n    transition: transform 0.1s ease-out;\\n  }\\n  .intro-text {\\n    transition: 0.3s ease-in-out;\\n  }\\n  .intro-text:hover {\\n    color: #fbbf24;\\n  }\\n  .dot-1 {\\n    width: 100px;\\n    height: 100px;\\n    top: 10%;\\n    left: 20%;\\n    /* opacity: 0.3;\\n    background: url(\\"https://knneuron.pwr.edu.pl/_next/image?url=http%3A%2F%2F127.0.0.1%3A1337%2Fuploads%2Fkn_neuron_logo_c3c1075271.png&w=640&q=75\\");\\n    background-size: cover; */\\n  }\\n  .dot-2 {\\n    width: 150px;\\n    height: 150px;\\n    top: 50%;\\n    left: 40%;\\n    /* background: url(\\"https://i0.wp.com/www.iskierkawroc.pl/wp-content/uploads/2019/04/logo-PWr-kolor-pion-bez-tla.png?fit=378%2C550&ssl=1&w=640\\"); */\\n    /* background-size: cover; */\\n    opacity: 0.3;\\n    /* filter: saturate(150%) brightness(90%); */\\n  }\\n  .dot-3 {\\n    width: 120px;\\n    height: 120px;\\n    top: 70%;\\n    left: 70%;\\n  }\\n</style>\\n\\n<section class=\\"relative flex flex-col items-center justify-center h-screen bg-gradient text-white text-center p-4\\">\\n  <div class=\\"absolute inset-0 z-0\\">\\n    <div class=\\"bg-dots dot-1\\" style=\\"transform: translateY({scrollY * 0.1}px);\\"></div>\\n    <div class=\\"bg-dots dot-2\\" style=\\"transform: translateY({scrollY * 0.2}px);\\"></div>\\n    <div class=\\"bg-dots dot-3\\" style=\\"transform: translateY({scrollY * 0.15}px);\\"></div>\\n  </div>\\n  <div class=\\"relative z-10\\">\\n    <h2 class=\\"text-2xl md:text-3xl lg:text-3xl mb-4\\">Największy Hackaton BCI w Polsce</h2>\\n    <h1 class=\\"text-3xl md:text-4xl lg:text-6xl font-bold mb-4 intro-text-container\\" id=\\"intro-text\\">\\n      {@html introText}\\n    </h1>\\n  </div>\\n  <div class=\\"relative flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 my-6 z-10\\">\\n    <p class=\\"flex items-center text-lg md:text-xl\\">\\n      <FontAwesomeIcon icon={faMapMarkerAlt} class=\\"text-purple-400 mr-2\\" />\\n      Politechnika Wrocławska\\n    </p>\\n    <p class=\\"flex items-center text-lg md:text-xl\\">\\n      <FontAwesomeIcon icon={faCalendarAlt} class=\\"text-purple-400 mr-2\\" />\\n      21.10.2024 - 23.10.2024\\n    </p>\\n  </div>\\n  <div class=\\"relative z-10 space-x-4\\">\\n    <a href=\\"#learn-more\\" class=\\"bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition\\">Dowiedz się więcej</a>\\n    <a href=\\"#schedule\\" class=\\"bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition\\">Zobacz harmonogram</a>\\n  </div>\\n</section>\\n"],"names":[],"mappings":"AAwBE,uBAAS,CACP,QAAQ,CAAE,QAAQ,CAClB,aAAa,CAAE,GAAG,CAClB,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAC1C,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,QAC7B,CAOA,qBAAO,CACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAIR,CACA,qBAAO,CACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CAGT,OAAO,CAAE,GAEX,CACA,qBAAO,CACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GACR"}`
};
let textVar = "Heroes of The Brain";
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrollY = 0;
  let introText = textVar.split("").map((char) => `<span class="intro-text">${char}</span>`).join("");
  $$result.css.add(css$3);
  return `<section class="relative flex flex-col items-center justify-center h-screen bg-gradient text-white text-center p-4"><div class="absolute inset-0 z-0"><div class="bg-dots dot-1 svelte-1pdmgij" style="${"transform: translateY(" + escape(scrollY * 0.1, true) + "px);"}"></div> <div class="bg-dots dot-2 svelte-1pdmgij" style="${"transform: translateY(" + escape(scrollY * 0.2, true) + "px);"}"></div> <div class="bg-dots dot-3 svelte-1pdmgij" style="${"transform: translateY(" + escape(scrollY * 0.15, true) + "px);"}"></div></div> <div class="relative z-10"><h2 class="text-2xl md:text-3xl lg:text-3xl mb-4" data-svelte-h="svelte-1m6bu5m">Największy Hackaton BCI w Polsce</h2> <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 intro-text-container" id="intro-text"><!-- HTML_TAG_START -->${introText}<!-- HTML_TAG_END --></h1></div> <div class="relative flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 my-6 z-10"><p class="flex items-center text-lg md:text-xl">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      icon: faMapMarkerAlt,
      class: "text-purple-400 mr-2"
    },
    {},
    {}
  )}
      Politechnika Wrocławska</p> <p class="flex items-center text-lg md:text-xl">${validate_component(FontAwesomeIcon, "FontAwesomeIcon").$$render(
    $$result,
    {
      icon: faCalendarAlt,
      class: "text-purple-400 mr-2"
    },
    {},
    {}
  )}
      21.10.2024 - 23.10.2024</p></div> <div class="relative z-10 space-x-4" data-svelte-h="svelte-aa6zi0"><a href="#learn-more" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">Dowiedz się więcej</a> <a href="#schedule" class="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition">Zobacz harmonogram</a></div></section>`;
});
const HackatonInfoSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24" data-svelte-h="svelte-y63zxv"><div class="max-w-5xl mx-auto text-center"><h1 class="text-4xl md:text-5xl font-bold mb-6">Welcome to the BCI Neurohackathon</h1> <p class="text-lg md:text-xl mb-8">Join us for an incredible journey into the world of Brain-Computer Interface (BCI) technology. Our Neurohackathon brings together the brightest minds to innovate and create groundbreaking solutions in neuroscience.</p> <div class="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12"><div class="bg-gray-800 rounded-lg p-6 w-full md:w-1/3 text-left"><h2 class="text-2xl font-semibold mb-4">What is BCI?</h2> <p class="text-sm md:text-base text-gray-400">Brain-Computer Interface (BCI) is a revolutionary technology that enables direct communication between the brain and external devices, transforming thoughts into actions.</p></div> <div class="bg-gray-800 rounded-lg p-6 w-full md:w-1/3 text-left"><h2 class="text-2xl font-semibold mb-4">Our Mission</h2> <p class="text-sm md:text-base text-gray-400">Our mission is to advance the field of BCI through collaborative innovation, bringing together diverse talents to develop new applications that improve lives and push the boundaries of technology.</p></div> <div class="bg-gray-800 rounded-lg p-6 w-full md:w-1/3 text-left"><h2 class="text-2xl font-semibold mb-4">Join Us</h2> <p class="text-sm md:text-base text-gray-400">Be a part of this exciting event, network with like-minded individuals, and showcase your skills. Whether you are a seasoned professional or a passionate beginner, there&#39;s a place for you at our Neurohackathon.</p></div></div></div></section>`;
});
const css$2 = {
  code: `.parallax.svelte-1ivd1pg{background-image:url('$lib/images/bg-photo-2.webp');background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover}.category-header.svelte-1ivd1pg::after{content:"";display:block;width:100px;height:3px;background:#6f00ff;margin:10px auto 0}.agenda-content.svelte-1ivd1pg{background-color:rgba(0, 0, 0, 0.7);padding:20px;border-radius:8px;height:100%}`,
  map: `{"version":3,"file":"Agenda.svelte","sources":["Agenda.svelte"],"sourcesContent":["<script>\\n    let agenda = [\\n      {\\n        date: \\"28 września\\",\\n        events: [\\n          { time: \\"9:00\\", description: \\"Rejestracja\\" },\\n          {\\n            time: \\"10:30\\",\\n            description: \\"Oficjalne otwarcie / Gość specjalny: Paweł Dzikiewicz / Omówienie zasad\\",\\n          },\\n          {\\n            time: \\"12:00\\",\\n            description: \\"PUBLIKACJA SZCZEGÓŁÓW ZADAŃ | ROZPOCZĘCIE PRACY!\\",\\n          },\\n          { time: \\"12:15\\", description: \\"Mentoring / Budowanie zespołu\\" },\\n        ],\\n      },\\n      {\\n        date: \\"29 września\\",\\n        events: [\\n          {\\n            time: \\"12:00\\",\\n            description: \\"OSTATECZNY TERMIN SKŁADANIA PROJEKTÓW!\\",\\n          },\\n          { time: \\"12:00\\", description: \\"Ocena projektu\\" },\\n          { time: \\"15:00\\", description: \\"Ogłoszenie finalistów\\" },\\n          { time: \\"16:00\\", description: \\"Sesje pitchingowe finalistów\\" },\\n          { time: \\"17:45\\", description: \\"Ogłoszenie zwycięzców\\" },\\n        ],\\n      },\\n    ];\\n  <\/script>\\n  \\n  <style>\\n    .parallax {\\n      background-image: url('$lib/images/bg-photo-2.webp'); /* Replace with your image URL */\\n      /* min-height: 500px; */\\n      background-attachment: fixed;\\n      background-position: center;\\n      background-repeat: no-repeat;\\n      background-size: cover;\\n    }\\n    \\n  \\n    .category-header::after {\\n      content: \\"\\";\\n      display: block;\\n      width: 100px;\\n      height: 3px;\\n      background: #6f00ff;\\n      margin: 10px auto 0;\\n    }\\n  \\n    .agenda-content {\\n      background-color: rgba(0, 0, 0, 0.7);\\n      padding: 20px;\\n      border-radius: 8px;\\n      height: 100%;\\n    }\\n  </style>\\n  \\n  <section class=\\"parallax text-white py-20 px-4\\">\\n    <div class=\\"agenda-content text-center md:w-1/1\\">\\n      <h1 class=\\"text-3xl font-bold mb-8 relative inline-block\\">\\n        AGENDA\\n        <div class=\\"category-header\\"></div>\\n      </h1>\\n      <div class=\\"flex flex-col md:flex-row justify-center gap-8 flex-wrap\\">\\n        {#each agenda as day}\\n          <div class=\\"bg-gray-800 border-2 border-purple-600 rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 relative\\">\\n            <div class=\\"bg-purple-600 text-white px-4 py-2 rounded-t-md font-bold text-lg absolute -top-5 left-1/2 transform -translate-x-1/2\\">\\n              {day.date}\\n            </div>\\n            <div class=\\"mt-8\\">\\n              {#each day.events as event}\\n                <div class=\\"flex justify-between items-center mb-4 py-2 border-b border-purple-600 last:border-0\\">\\n                  <div class=\\"text-white font-semibold\\">{event.time}</div>\\n                  <div class=\\"text-purple-500 text-left\\">{event.description}</div>\\n                </div>\\n              {/each}\\n            </div>\\n          </div>\\n        {/each}\\n      </div>\\n    </div>\\n  </section>\\n  "],"names":[],"mappings":"AAkCI,wBAAU,CACR,gBAAgB,CAAE,kCAAkC,CAEpD,qBAAqB,CAAE,KAAK,CAC5B,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KACnB,CAGA,+BAAgB,OAAQ,CACtB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,CACpB,CAEA,8BAAgB,CACd,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IACV"}`
};
const Agenda = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let agenda = [
    {
      date: "28 września",
      events: [
        { time: "9:00", description: "Rejestracja" },
        {
          time: "10:30",
          description: "Oficjalne otwarcie / Gość specjalny: Paweł Dzikiewicz / Omówienie zasad"
        },
        {
          time: "12:00",
          description: "PUBLIKACJA SZCZEGÓŁÓW ZADAŃ | ROZPOCZĘCIE PRACY!"
        },
        {
          time: "12:15",
          description: "Mentoring / Budowanie zespołu"
        }
      ]
    },
    {
      date: "29 września",
      events: [
        {
          time: "12:00",
          description: "OSTATECZNY TERMIN SKŁADANIA PROJEKTÓW!"
        },
        {
          time: "12:00",
          description: "Ocena projektu"
        },
        {
          time: "15:00",
          description: "Ogłoszenie finalistów"
        },
        {
          time: "16:00",
          description: "Sesje pitchingowe finalistów"
        },
        {
          time: "17:45",
          description: "Ogłoszenie zwycięzców"
        }
      ]
    }
  ];
  $$result.css.add(css$2);
  return `<section class="parallax text-white py-20 px-4 svelte-1ivd1pg"><div class="agenda-content text-center md:w-1/1 svelte-1ivd1pg"><h1 class="text-3xl font-bold mb-8 relative inline-block" data-svelte-h="svelte-1hmbwka">AGENDA
        <div class="category-header svelte-1ivd1pg"></div></h1> <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap">${each(agenda, (day) => {
    return `<div class="bg-gray-800 border-2 border-purple-600 rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 relative"><div class="bg-purple-600 text-white px-4 py-2 rounded-t-md font-bold text-lg absolute -top-5 left-1/2 transform -translate-x-1/2">${escape(day.date)}</div> <div class="mt-8">${each(day.events, (event) => {
      return `<div class="flex justify-between items-center mb-4 py-2 border-b border-purple-600 last:border-0"><div class="text-white font-semibold">${escape(event.time)}</div> <div class="text-purple-500 text-left">${escape(event.description)}</div> </div>`;
    })}</div> </div>`;
  })}</div></div></section>`;
});
const css$1 = {
  code: '.category-header.svelte-1cdtkz7::after{content:"";display:block;width:100px;height:3px;background:rgb(147 51 234 / var(--tw-bg-opacity));margin:10px auto 0}',
  map: '{"version":3,"file":"Partners.svelte","sources":["Partners.svelte"],"sourcesContent":["<script>\\n    let partners = [\\n    //   { category: \\"PARTNER\\", logos: [\\"https://via.placeholder.com/150\\"] },\\n    //   { category: \\"HOST REGION\\", logos: [\\"https://via.placeholder.com/150\\"] },\\n    //   { category: \\"KNOWLEDGE PARTNERS\\", logos: [\\"https://via.placeholder.com/150\\"] },\\n      { category: \\"UNIVERSITY PARTNERS\\", logos: [\\"https://via.placeholder.com/150\\"] },\\n    //   { category: \\"MEDIA PARTNERS\\", logos: [\\"https://via.placeholder.com/150\\", \\"https://via.placeholder.com/150\\"] },\\n      { category: \\"Ci fajniejsi sponsorzy\\", logos: [\\"https://via.placeholder.com/150\\", \\"https://via.placeholder.com/150\\", \\"https://via.placeholder.com/150\\", \\"https://via.placeholder.com/150\\"] },\\n    //   { category: \\"NETWORK PARTNER\\", logos: [\\"https://via.placeholder.com/150\\"] }\\n    ];\\n  <\/script>\\n  \\n  <style>\\n    .category-header::after {\\n      content: \\"\\";\\n      display: block;\\n      width: 100px;\\n      height: 3px;\\n      background: rgb(147 51 234 / var(--tw-bg-opacity));\\n      margin: 10px auto 0;\\n    }\\n  </style>\\n  \\n  <section class=\\"text-center text-white bg-gray-900 py-20 px-4\\">\\n    <h1 class=\\"text-3xl font-bold mb-8 relative inline-block\\">\\n      SPONSORZY\\n      <div class=\\"category-header\\"></div>\\n    </h1>\\n    {#each partners as partner}\\n      <div class=\\"mb-12\\" data-aos=\\"fade-right\\">\\n        <h2 class=\\"text-xl font-semibold mb-4\\">{partner.category}</h2>\\n        <div class=\\"flex flex-wrap justify-center gap-4\\">\\n          {#each partner.logos as logo}\\n            <div class=\\"w-30 h-30 bg-gray-800 flex items-center justify-center p-4 border border-gray-700 rounded-md overflow-hidden\\">\\n              <img src={logo} alt=\\"{partner.category} logo\\" class=\\"max-w-full max-h-full object-contain\\" />\\n            </div>\\n          {/each}\\n        </div>\\n      </div>\\n    {/each}\\n  </section>\\n  "],"names":[],"mappings":"AAaI,+BAAgB,OAAQ,CACtB,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CAClD,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,CACpB"}'
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let partners = [
    //   { category: "PARTNER", logos: ["https://via.placeholder.com/150"] },
    //   { category: "HOST REGION", logos: ["https://via.placeholder.com/150"] },
    //   { category: "KNOWLEDGE PARTNERS", logos: ["https://via.placeholder.com/150"] },
    {
      category: "UNIVERSITY PARTNERS",
      logos: ["https://via.placeholder.com/150"]
    },
    //   { category: "MEDIA PARTNERS", logos: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"] },
    {
      category: "Ci fajniejsi sponsorzy",
      logos: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    }
  ];
  $$result.css.add(css$1);
  return `<section class="text-center text-white bg-gray-900 py-20 px-4"><h1 class="text-3xl font-bold mb-8 relative inline-block" data-svelte-h="svelte-nnaj0f">SPONSORZY
      <div class="category-header svelte-1cdtkz7"></div></h1> ${each(partners, (partner) => {
    return `<div class="mb-12" data-aos="fade-right"><h2 class="text-xl font-semibold mb-4">${escape(partner.category)}</h2> <div class="flex flex-wrap justify-center gap-4">${each(partner.logos, (logo) => {
      return `<div class="w-30 h-30 bg-gray-800 flex items-center justify-center p-4 border border-gray-700 rounded-md overflow-hidden"><img${add_attribute("src", logo, 0)} alt="${escape(partner.category, true) + " logo"}" class="max-w-full max-h-full object-contain"> </div>`;
    })}</div> </div>`;
  })}</section>`;
});
const css = {
  code: "#faq-section.svelte-1p8jqf3{background-color:rgba(255, 255, 255, 0.1)}#faq.svelte-1p8jqf3{border-radius:8px;padding:20px;border:1px solid white;width:70%}",
  map: '{"version":3,"file":"Faq.svelte","sources":["Faq.svelte"],"sourcesContent":["<script>\\n    let faqs = [\\n      {\\n        question: \\"Kto może wziąć udział w wydarzeniu?\\",\\n        answer: \\"W wydarzeniu mogą wziąć udział tylko i wyłącznie osoby mające aktywny status studenta.\\",\\n        open: true\\n      },\\n      {\\n        question: \\"Czy osoby z innych dziedzin również mogą wziąć udział?\\",\\n        answer: \\"Oczywiście, że mogą. Wydarzenie jest otwarte dla osób z różnych dziedzin.\\",\\n        open: false\\n      },\\n\\n      {\\n        question: \\"Czy jest możliwość tworzenia zespołów przed wydarzeniem lub na miejscu, czy trzeba przyjść już z gotową drużyną?\\",\\n        answer: \\"Możesz utworzyć zespół zarówno przed wydarzeniem, jak i na miejscu.\\",\\n        open: false\\n      },\\n      {\\n        question: \\"Czy będę potrzebował własnego sprzętu komputerowego, aby wziąć udział?\\",\\n        answer: \\"Tak, uczestnicy powinni przynieść własny sprzęt komputerowy.\\",\\n        open: false\\n      },\\n      {\\n        question: \\"Czy uczestnicy otrzymują pomoc podczas wydarzenia?\\",\\n        answer: \\"Tak, na miejscu będą dostępni mentorzy i organizatorzy, którzy chętnie pomogą.\\",\\n        open: false\\n      },\\n      {\\n        question: \\"Czy przewidywane są nagrody dla zwycięzców?\\",\\n        answer: \\"Tak, dla najlepszych drużyn przewidziane są atrakcyjne nagrody.\\",\\n        open: false\\n      },\\n      {\\n        question: \\"Czy będzie możliwość noclegu na miejscu?\\",\\n        answer: \\"Tak, organizatorzy zapewniają miejsce do noclegu dla uczestników.\\",\\n        open: false\\n      },\\n      {\\n        question: \\"Czy na miejscu będzie dostępny parking?\\",\\n        answer: \\"Tak, na miejscu dostępny jest parking dla uczestników.\\",\\n        open: false\\n      }\\n    ];\\n  \\n    function toggleFaq(index) {\\n      faqs = faqs.map((faq, i) => {\\n        if (i === index) {\\n          faq.open = !faq.open;\\n        } else {\\n          faq.open = false;\\n        }\\n        return faq;\\n      });\\n    }\\n  <\/script>\\n  \\n  <style>\\n    #faq-section {\\n      background-color: rgba(255, 255, 255, 0.1);\\n    }\\n    #faq {\\n      border-radius: 8px;\\n      padding: 20px;\\n      border: 1px solid white;\\n      width: 70%;\\n    }\\n  </style>\\n  \\n  <section class=\\"bg-transparent py-12 text-white\\" id=\\"faq-section\\">\\n    <div class=\\"max-w-4xl mx-auto px-6 border-b \\" id=\\"faq\\">\\n      <h1 class=\\"text-3xl md:text-4xl font-bold text-center mb-8\\">Najczęściej zadawane pytania</h1>\\n      {#each faqs as faq, index}\\n        <div class=\\"mb-4 border-b border-gray-300\\">\\n          <button class=\\"w-full text-left text-lg md:text-xl font-semibold py-4 flex justify-between items-center focus:outline-none\\" on:click={() => toggleFaq(index)}>\\n            {faq.question}\\n            <span class=\\"text-2xl md:text-3xl\\">\\n              {#if faq.open}\\n                <span class=\\"text-purple-500\\">-</span>\\n              {:else}\\n                <span class=\\"text-purple-500\\">+</span>\\n              {/if}\\n            </span>\\n          </button>\\n          {#if faq.open}\\n            <div class=\\"py-2 text-white text-base md:text-lg\\">\\n              {faq.answer}\\n            </div>\\n          {/if}\\n        </div>\\n      {/each}\\n    </div>\\n  </section>\\n  "],"names":[],"mappings":"AA0DI,2BAAa,CACX,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC3C,CACA,mBAAK,CACH,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,KAAK,CAAE,GACT"}'
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      question: "Czy jest możliwość tworzenia zespołów przed wydarzeniem lub na miejscu, czy trzeba przyjść już z gotową drużyną?",
      answer: "Możesz utworzyć zespół zarówno przed wydarzeniem, jak i na miejscu.",
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
      answer: "Tak, organizatorzy zapewniają miejsce do noclegu dla uczestników.",
      open: false
    },
    {
      question: "Czy na miejscu będzie dostępny parking?",
      answer: "Tak, na miejscu dostępny jest parking dla uczestników.",
      open: false
    }
  ];
  $$result.css.add(css);
  return `<section class="bg-transparent py-12 text-white svelte-1p8jqf3" id="faq-section"><div class="max-w-4xl mx-auto px-6 border-b  svelte-1p8jqf3" id="faq"><h1 class="text-3xl md:text-4xl font-bold text-center mb-8" data-svelte-h="svelte-t1bg6b">Najczęściej zadawane pytania</h1> ${each(faqs, (faq, index) => {
    return `<div class="mb-4 border-b border-gray-300"><button class="w-full text-left text-lg md:text-xl font-semibold py-4 flex justify-between items-center focus:outline-none">${escape(faq.question)} <span class="text-2xl md:text-3xl">${faq.open ? `<span class="text-purple-500" data-svelte-h="svelte-1tqiwwu">-</span>` : `<span class="text-purple-500" data-svelte-h="svelte-17cweeg">+</span>`} </span></button> ${faq.open ? `<div class="py-2 text-white text-base md:text-lg">${escape(faq.answer)} </div>` : ``} </div>`;
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(LandingPage, "LandingPage").$$render($$result, {}, {}, {})} ${validate_component(HackatonInfoSection, "HackatonInfoSection").$$render($$result, {}, {}, {})} ${validate_component(Agenda, "Agenda").$$render($$result, {}, {}, {})} ${validate_component(CategorySection, "CategorySection").$$render($$result, {}, {}, {})} ${validate_component(Partners, "Partners").$$render($$result, {}, {}, {})} ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} ${validate_component(ContactSection, "ContactSection").$$render($$result, {}, {}, {})} ${validate_component(Faq, "Faq").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
