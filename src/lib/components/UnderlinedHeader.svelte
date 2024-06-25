<script>
  export let title = "Lorem Ipsum";
</script>

<style>
  .category-header {
    position: relative;
    display: inline-block;
    padding-bottom: 10px; /* Added padding to ensure space for the underline */
    color: aliceblue;
  }
  
  .category-header::after {
    content: "";
    display: block;
    width: 100px; /* Adjust the width as needed */
    height: 3px;
    background-color: #9333ea; /* Purple color */
    margin: 10px auto 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

<h1 class="text-3xl font-bold mb-8 category-header">
  {title.toUpperCase()}
</h1>
