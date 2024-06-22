<script>
    export let day;
</script>

<div class="bg-gray-800 border-2 border-purple-600 rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 relative">
    <div class="bg-purple-600 text-white px-4 py-2 rounded-t-md font-bold text-lg absolute -top-5 left-1/2 transform -translate-x-1/2">
      {day.date}
    </div>
    <div class="mt-8">
      {#each day.events as event}
        <div class="flex justify-between items-center mb-4 py-2 border-b border-purple-600 last:border-0">
          <div class="text-white font-semibold">{event.time}</div>
          <div class="text-purple-500 text-left">{event.description}</div>
        </div>
      {/each}
    </div>
  </div>