<script>
    export let title = "Lorem Ipsum";
</script>

<style>
    .category-header::after {
      content: "";
      display: block;
      width: 100px;
      height: 3px;
      background: rgb(147 51 234 / var(--tw-bg-opacity));
      margin: 10px auto 0;
    }
  </style>

<h1 class="text-3xl font-bold mb-8 relative inline-block">
    {title.toUpperCase()}
    <div class="category-header"></div>
</h1>