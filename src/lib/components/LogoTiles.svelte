<script>
  export let logo = "https://via.placeholder.com/150";
  export let partner = {
    category: "PARTNER",
    logos: ["https://via.placeholder.com/150"],
  };
  export let isStrategic = false;

  const sizeClass = isStrategic ? "w-80 h-80" : "w-40 h-40";
  const divClass = `${sizeClass} bg-gray-800 flex items-center justify-center border border-gray-700 rounded-md overflow-hidden p-4`;
</script>

<div class={divClass}>
  <img
    src={logo}
    alt="{partner.category} logo"
    class="w-full h-full object-contain"
  />
</div>
