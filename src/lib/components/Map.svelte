<script>
  export let src = '';
</script>

<div class="w-full h-full rounded-lg shadow-lg transition-transform transform hover:scale-105 md:w-2/5 md:aspect-square">
    <iframe 
      width="100%" 
      height="100%" 
      frameborder="0" 
      scrolling="no" 
      marginheight="0" 
      marginwidth="0" 
      src={src}
      class="rounded-lg">
    </iframe>
  </div>