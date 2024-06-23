<script>
  export let name;
  export let role;
  export let imageUrl;
</script>

<div class="card-container perspective">
  <div class="card">
    <div class="card-front flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <img src={imageUrl} alt={name} class="object-cover mb-4 w-full h-2/3" />
      <h3 class="text-lg font-semibold text-center">{name}</h3>
      <p class="text-gray-600 text-center">{role}</p>
    </div>
    <div class="card-back flex flex-col items-center justify-center p-4 bg-gray-200 shadow-lg rounded-lg">
      <h3 class="text-lg font-semibold text-center">Back Side</h3>
      <p class="text-gray-600 text-center">Additional information goes here.</p>
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
    transition: transform 0.6s;
  }
  .card-container:hover .card {
    transform: rotateY(180deg);
  }
  .card-front, .card-back {
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
  }
  .card-back {
    transform: rotateY(180deg);
  }
</style>
