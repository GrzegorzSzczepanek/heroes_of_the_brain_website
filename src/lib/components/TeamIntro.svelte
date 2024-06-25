<!-- AboutUs.svelte -->
<script>
  import UnderlinedHeader from "./UnderlinedHeader.svelte";
</script>

<style>
  .parallax {
    background-image: url('$lib/images/kolo.webp');
    height: 600px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
  }
  
  .agenda-content {
    margin: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
  }

  #text {
    font-size: 1.5rem;
    line-height: 2rem;
    width: 500px;
  }
</style>

<section class="parallax text-white">
  <div class="agenda-content flex flex-col justify-center items-center text-center md:w-1/1 py-20 px-5">
    <div class="py-12">
      <UnderlinedHeader title="About us" />
    </div>
    <div id="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum quae odit quidem sunt! Cupiditate, sapiente. Amet nihil, recusandae eaque cumque praesentium debitis illo corrupti sit fugiat quos, vel impedit.
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
    </div>
  </div>
</section>
