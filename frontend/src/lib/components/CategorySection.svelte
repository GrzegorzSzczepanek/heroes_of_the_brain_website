<script>
// @ts-nocheck

    import Category from './Category.svelte';
  
    const categories = [
      {
        name: 'Category 1',
        description: 'This category rewards the top three participants with outstanding achievements in their respective fields.',
        prizes: [
          { position: '1st Prize', amount: 5000, title: 'Outstanding Achievement' },
          { position: '2nd Prize', amount: 3000, title: 'Remarkable Performance' },
          { position: '3rd Prize', amount: 1000, title: 'Notable Effort' }
        ]
      },
      {
        name: 'Category 2',
        description: 'This category rewards creativity and innovation in various fields.',
        prizes: [
          { position: '1st Prize', amount: 6000, title: 'Creative Genius' },
          { position: '2nd Prize', amount: 4000, title: 'Innovative Talent' },
          { position: '3rd Prize', amount: 2000, title: 'Exceptional Idea' }
        ]
      },
      {
        name: 'Category 3',
        description: 'This category focuses on excellence in leadership and team building.',
        prizes: [
          { position: '1st Prize', amount: 7000, title: 'Leadership Excellence' },
          { position: '2nd Prize', amount: 5000, title: 'Team Building Mastery' },
          { position: '3rd Prize', amount: 1500, title: 'Excellent Coordination' }
        ]
      }
    ];
  </script>
  
  <div class="container mx-auto p-8">
    {#each categories as category}
      <section class="mb-16">
        <Category {name} {description} {prizes} />
      </section>
    {/each}
  </div>
  