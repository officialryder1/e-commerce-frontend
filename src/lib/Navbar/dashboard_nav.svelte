<script>
    import DashboardThemeToggle from "../others/DashboardThemeToggle.svelte";

    let isOpen = false;

    export let user
  </script>
  
  <nav class="bg-base-100 shadow-md">
    <div class="container mx-auto px-4">
      <div class="navbar">
        <!-- Logo -->
        <div class="flex-1">
          <a class="btn btn-ghost font-bold normal-case text-xl" href="/dashboard">Dashboard</a>
        </div>
  
        <!-- Desktop Menu -->
        <div class="hidden lg:flex flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard/upload">Upload</a></li>
            <li><a href="/dashboard/tracking">Track Order</a></li>
            <li><a href="/contact">Report Feedback</a></li>
          </ul>
        </div>
        <DashboardThemeToggle/>
        <!-- Mobile Menu Button -->
        <div class="lg:hidden flex-none">
          <button class="btn btn-square btn-ghost" on:click={() => isOpen = !isOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      {#if isOpen}
        <ul class="menu menu-compact bg-base-100 p-2 mt-3 shadow-lg rounded-box w-full lg:hidden">
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard/upload">Upload</a></li>
            <li><a href="/dashboard/tracking">Track Order</a></li>
            <li><a href="/contact">Report Feedback</a></li>
        </ul>
        {#if user}
        <span>
            <a href="/auth/logout" class="btn btn-error btn-sm font-bold text-white">logout</a>
        </span>
        
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
  