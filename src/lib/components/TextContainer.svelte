<script>
    export let title = "ABOUT US";
    export let content = `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum quae odit quidem sunt! Cupiditate, sapiente. Amet nihil, recusandae eaque cumque praesentium debitis illo corrupti sit fugiat quos, vel impedit.
    `;
  </script>
  
  <style>
    .container {
      background-image: url('/path/to/your/background-image.png'); /* Make sure to provide the correct path to your image */
      background-size: cover;
      background-position: center;
    }
  </style>
  
  <div class="container flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-60">
    <div class="text-center text-white p-8 bg-black bg-opacity-70 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">{title}</h1>
      <p class="text-lg leading-relaxed">{content}</p>
    </div>
  </div>