<script lang="ts">
    export let header, strong, address, phone, email, hours;

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Phone number copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
</script>

<div class="bg-white p-8 rounded-lg shadow-lg transition-transform transform md:mr-8 mb-8 md:mb-0">
    <h2 class="text-3xl font-bold mb-4 text-black-800">{header}</h2>
    <p class="text-lg mb-4">
      <!-- <strong>{strong}</strong><br> -->
      <strong class="text-blue-600">Adres: </strong>{address}
      <br>
      
    </p>
    <div class="text-lg mb-4">
      <button class="text-blue-600 cursor-pointer font-bold focus:outline-none" on:click={() => copyToClipboard(phone)}>
        Telefon: {phone}
      </button> 
    </div>
    <div class="text-lg mb-4">
      <strong class="text-blue-600">Email:</strong> {email}
    </div>
    <div class="text-lg">
      <strong class="text-blue-600">Godziny otwarcia:</strong> {hours}
    </div>
</div>
