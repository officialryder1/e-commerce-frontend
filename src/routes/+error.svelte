<script>
    import { page } from '$app/stores';
    import "tailwindcss/tailwind.css"


</script>


<div class="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-400">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <img src="https://img.icons8.com/ios-filled/100/000000/error.png" alt="Error Icon" class="mb-4 mx-auto" />
        <h1 class="text-6xl font-bold text-error">{$page.status}</h1>
        <h2 class="text-3xl mt-4 text-gray-700">{$page.error.message}</h2>
        <p class="mt-2 text-lg text-gray-600">Sorry, we couldn't find what you were looking for.</p>
        <div class="mt-6">
            <a href="/" class="btn btn-primary">Go Home</a>
            <a href="/contact" class="btn btn-secondary ml-2">Contact Support</a>
        </div>
        <p class="mt-4 text-sm text-gray-500">If you believe this is a mistake, please reach out to our support team.</p>
    </div>
</div>