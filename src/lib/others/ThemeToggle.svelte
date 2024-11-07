<script>
    import {onMount} from "svelte"
    import { theme } from '$lib/utils/CurrentTheme.js'
  

    onMount(() => {
        const savedTheme = localStorage.getItem("theme")
        $theme = savedTheme || theme
        document.documentElement.setAttribute("data-theme", $theme)
    })

    function toggleTheme() {
        $theme = $theme === "dark" ? "light" : "dark"
        document.documentElement.setAttribute("data-theme", $theme)
        localStorage.setItem("theme", $theme)
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="toggle-container" on:click={toggleTheme}>
    <div class="toggle-track {$theme === 'dark' ? 'bg-gray-800' : 'bg-blue-400'}">
        <div class="toggle-thumb {$theme === 'dark' ? 'translate-x-full bg-white' : 'bg-gray-800'}"></div>
    </div>
    <span class="toggle-label">{$theme === "light" ? "🌞" : "🌜"}</span>
</div>

<style>
    .toggle-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .toggle-track {
        width: 3rem;
        height: 1.5rem;
        background-color: var(--primary);
        border-radius: 9999px;
        position: relative;
        transition: background-color 0.3s;
    }

    .toggle-thumb {
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 9999px;
        background-color: var(--secondary);
        transition: transform 0.3s, background-color 0.3s;
    }

    .translate-x-full {
        transform: translateX(1.5rem);
    }

    .toggle-label {
        font-size: 1.2rem;
    }
</style>