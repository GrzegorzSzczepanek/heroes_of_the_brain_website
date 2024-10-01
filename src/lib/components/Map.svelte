<script>
  export let src = '';
</script>

<div class="map-container">
  <iframe 
    title="Map with the location of the event"
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
<style>
  .map-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }

  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
  }

  .map-container:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .map-container {
      width: 40%;
      padding-bottom: 40%;
    }
  }
</style>