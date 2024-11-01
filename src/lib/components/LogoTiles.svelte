<script>
    export let logo = "https://via.placeholder.com/150";
    export let partner = { category: "PARTNER", logos: ["https://via.placeholder.com/150"] };
</script>

<div class="w-30 h-30 bg-gray-800 flex items-center justify-center p-4 border border-gray-700 rounded-md overflow-hidden">
    <img width={300} height={150} src={logo} alt="{partner.category} logo" class="object-contain" />
  </div>