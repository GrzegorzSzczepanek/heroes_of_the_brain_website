<script>
    export let text = "";
    export let isActive = false;
    export let onClick = () => {};
  </script>
  
  <button
    class:active={isActive}
    class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
    on:click={onClick}
  >
    {text}
  </button>
  
  <style>
    .active {
      background-color: #2c3e50; /* Active state color */
    }
  </style>
  