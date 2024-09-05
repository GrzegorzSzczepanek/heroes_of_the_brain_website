<script>
  let slides = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
  ];
</script>

<div class="slider">
  <div class="slide-track">
    {#each slides as slide}
      <div class="slide">
        <a href="#main_info"><img src={slide} height="100" width="250" alt="" /></a>

      </div>
    {/each}
    <!-- duplicate the slides to create the infinite effect -->
    {#each slides as slide}
      <div class="slide">
        <a href="#main_info"><img src={slide} height="100" width="250" alt="" /></a>
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 7)); }
  }

  .slider {
    background: white;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    /* transform: ; */
  }

  .slider::before,
  .slider::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  .slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  .slider::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll 10s linear infinite;
    display: flex;
    width: calc(250px * 14);
  }
  .slide-track:hover {

    animation-play-state: paused;
  }

  .slide {
    height: 100px;
    width: 250px;
    margin-left: 20px;
    transition: 0.3 ease-in-out;
  }
  .slide:hover {

    cursor: pointer;
    /* height: 130px;
    width: 260px; */
    background-color: rgb(37, 41, 250);
  }
  
</style>


