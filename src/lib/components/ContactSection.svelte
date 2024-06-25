<script>
  import InfoSection from "./InfoSection.svelte";
  import Map from "./Map.svelte";



</script>

<section class="flex flex-col items-center justify-center min-h-screen text-gray-800 p-8 md:flex-row" id="contact">
  <InfoSection header="Kontakt" strong="Lorem Ipsum" address="Wrońskiego 10" phone="999 123 123" email="loremipsum@gmail.com" hours="10:00 - 21:00"/>
  <Map src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hoene-Wro%C5%84skiego%2010,%2050-376%20Wroc%C5%82aw+(Miejsce%20Wydarzenia)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
</section>
