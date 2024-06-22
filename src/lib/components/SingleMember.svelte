<script>
    import SingleMember from './SingleMember.svelte';
  
    export let section;
    export let members = [];
  </script>
  
  <div class="team-section">
    <h1 class="text-2xl font-bold text-center mb-4">{section}</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each members as member}
        <SingleMember name={member.name} role={member.role} image={member.image} />
      {/each}
    </div>
  </div>
  