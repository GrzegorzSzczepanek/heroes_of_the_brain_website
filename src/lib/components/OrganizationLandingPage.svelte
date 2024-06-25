<script>
  import IdkSection from "./IDKSection.svelte";
import Team from "./Team.svelte";
  import TeamMember from "./TeamMember.svelte";
  import UnderlinedHeader from "./UnderlinedHeader.svelte";

    export let teams = ["Team A", "Team B", "Team C", "Team D"];
  </script>
  
  <main class="bg-gray-900 text-white p-8">
    <div class="container mx-auto">
      <header class="text-center">
        <UnderlinedHeader title="Jury" />
      </header>
      <div class="flex flex-row gap-5 align-middle justify-center">
        <TeamMember name="John Doe" role="CEO" imageUrl="https://picsum.photos/200?random=2137" />
        <TeamMember name="Jane Doe" role="CTO" imageUrl="https://picsum.photos/200?random=2421" />
      </div>
    </div>
    <div class="container mx-auto">
      <header class="text-center">
        <UnderlinedHeader title="Our Team" />
      </header>
      
      <Team />
      <div id="idk" class="flex flex-col align-middle justify-center text-center">

        <UnderlinedHeader title="I have no idea" />
        <IdkSection />
      </div>
      
    </div>

  </main>
  
  <style>
    main {
        padding-top: 50px;
        min-height: 100svh;
        display: flex;
        flex-direction: column;
    }
    header {
      margin-top: 20px;
    }
    #idk {
      color: black;
      margin-top: 60px;
    
    }
  </style>
  