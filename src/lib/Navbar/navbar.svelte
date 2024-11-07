<script>
    import ThemeToggle from "../others/ThemeToggle.svelte";
    import Cart from "../Cart/Cart.svelte";
    let isOpen = false;

    export let user
   
  </script>
  
  <nav class="bg-base-100 shadow-md">
    <div class="container mx-auto px-4">
      <div class="navbar">
        <!-- Logo -->
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl" href="/">MyApp</a>
        </div>
  
        <!-- Desktop Menu -->
        <div class="hidden lg:flex flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <Cart/>
        <ThemeToggle/>
        
        <!-- Mobile Menu Button -->
         {#if !isOpen}
          <div class="lg:hidden flex-none">
            <button class="btn btn-circle swap swap-rotate" on:click={() => isOpen = !isOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 swap-off fill-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {:else }
          <div class="lg:hidden flex-none">
            <button class="btn btn-circle swap swap-rotate" on:click={() => isOpen = !isOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="w-6 h-6 fill-current" viewBox="0 0 50 50">
                <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
                </svg>
            </button>
          </div>
          {/if}
        </div>
        
      
      <!-- Mobile Menu -->
      {#if isOpen}
        <ul class="menu menu-compact bg-base-100 p-2 mt-3 shadow-lg rounded-box w-full lg:hidden">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        {#if user}
        <span>
            <a href="/auth/logout" class="btn btn-error btn-sm font-bold text-white">logout</a>
        </span>
        {:else}
        <span><a href="/auth/login" class="btn btn-info btn-sm text-white font-bold">login</a> | <a href="/auth/register" class="btn btn-success btn-sm text-white font-bold">register</a></span>
        {/if}
      {/if}
    </div>
  </nav>
  
  <style>
    nav {
      position: sticky;
      top: 0;
      z-index: 50;
    }
  </style>
  