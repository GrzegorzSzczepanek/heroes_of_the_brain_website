<script>
  export let title;
  export let content;
  export let onClose;

  function handleClose() {
    onClose();
  }
</script>


<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" on:click={handleClose}>
  <div class="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full text-black" on:click|stopPropagation>
    <button class="absolute top-2 right-2 text-gray-600 hover:text-gray-900" on:click={handleClose}>×</button>
    <h2 class="text-xl font-bold mb-4">{title}</h2>
    <p>{content}</p>
  </div>
</div>
