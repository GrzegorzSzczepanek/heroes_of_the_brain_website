<script>
    export let name;
    export let role;
    export let imageUrl;
  </script>
  
  <div class="card flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
    <img src={imageUrl} alt={name} class=" object-cover mb-4" />
    <h3 class="text-lg font-semibold text-center">{name}</h3>
    <p class="text-gray-600 text-center">{role}</p>
  </div>
  
  <style>
    .card {
      width: 200px; /* Slim card */
      height: 350px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      color: black;
    }
    .card:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
    image {
        padding: 0;
        width: 100%;
        height: 100%;
    }
  </style>
  