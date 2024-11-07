<script>
    import { onMount } from "svelte";

    let theme = "light"; // Default theme

    onMount(() => {
        // Load the saved theme from localStorage if available
        const savedTheme = localStorage.getItem("theme");
        theme = savedTheme || theme;
        document.documentElement.setAttribute("data-theme", theme);
    });

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme); // Save theme in localStorage
    }
</script>

<style>
    /* Additional styling to make the toggle look nice */
    .toggle-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .toggle-switch {
        position: relative;
        width: 3rem;
        height: 1.5rem;
        background-color: #e2e8f0; /* light gray */
        border-radius: 9999px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .toggle-switch[data-theme='dark'] {
        background-color: #1f2937; /* dark gray */
    }
    .toggle-thumb {
        position: absolute;
        top: 0.125rem;
        left: 0.125rem;
        width: 1.25rem;
        height: 1.25rem;
        background-color: #ffffff; /* white */
        border-radius: 50%;
        transition: transform 0.3s ease;
    }
    .toggle-switch[data-theme='dark'] .toggle-thumb {
        transform: translateX(1.5rem); /* move thumb to the right in dark mode */
        background-color: #fbbf24; /* yellow for dark mode */
    }
</style>

<div class="toggle-wrapper">
    <span class="font-bold">{theme === "light" ? "🌞" : "🌙"}</span>
    <div class="toggle-switch" data-theme={theme} on:click={toggleTheme}>
        <div class="toggle-thumb"></div>
    </div>
</div>
