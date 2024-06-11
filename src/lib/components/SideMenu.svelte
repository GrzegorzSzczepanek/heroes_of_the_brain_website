<script>
    export let navItems;
  
    const handleItemClick = () => {
      const event = new CustomEvent("closeMenu", {
        detail: {},
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      window.dispatchEvent(event);
    };
  </script>
  
  <style>
    .side-menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 250px;
      height: 100%;
      background-color: rgba(44, 31, 75, 0.9);
      color: white;
      padding: 20px;
      box-shadow: -2px 0 5px rgba(0,0,0,0.5);
      transition: transform 0.3s ease-in-out;
      z-index: 1000;
    }
  
    .side-menu nav a {
      display: block;
      margin-bottom: 20px;
      font-size: 1.25rem;
      color: white;
      text-align: right;
    }
  
    .side-menu nav a:hover {
      text-decoration: underline;
    }
  </style>
  
  <div class="side-menu">
    <nav>
      {#each navItems as item}
        <a href={item.href} on:click={handleItemClick}>{item.name}</a>
      {/each}
    </nav>
  </div>
  