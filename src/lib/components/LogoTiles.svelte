<script>
    export let logo = "https://via.placeholder.com/150";
    export let partner = { category: "PARTNER", logos: ["https://via.placeholder.com/150"] };
</script>

<div class="w-40 h-40 bg-gray-800 flex items-center justify-center border border-gray-700 rounded-md overflow-hidden p-4">
    <img src={logo} alt="{partner.category} logo" class="w-full h-full object-contain" />
</div>
  