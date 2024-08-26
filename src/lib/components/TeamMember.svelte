<script>
  export let name;
  export let role;
  export let imageUrl;

  let cardContainer;
  let card;
  let timeout;

  function handleMouseMove(event) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      const { offsetX, offsetY } = event;
      const { offsetWidth, offsetHeight } = cardContainer;
      
      const moveX = (offsetX / offsetWidth) * 30 - 15;
      const moveY = (offsetY / offsetHeight) * 30 - 15;

      card.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    }, 10);
  }

  function handleMouseLeave() {
    if (timeout) {
      clearTimeout(timeout);
    }
    card.style.transform = 'rotateX(0) rotateY(0)';
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="card-container perspective"
  bind:this={cardContainer}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  data-aos="fade-right"
>
  <div class="card" bind:this={card}>
    <div class="card-front flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <img src={imageUrl} alt={name} class="object-cover mb-4 w-full h-2/3" />
      <h3 class="text-lg font-semibold text-center text-gray-800">{name}</h3>
      <p class="text-gray-600 text-center">{role}</p>
    </div>
  </div>
</div>

<style>
  .perspective {
    perspective: 1000px;
  }
  .card {
    width: 200px;
    height: 350px;
    transform-style: preserve-3d;
    transition: transform 0.2s ease-out; 
    border-radius: 12px;
  }
  .card-front {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
</style>