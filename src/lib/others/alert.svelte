<script>
    import { resendMail } from '$lib/utils/resendEmail'

    export let message = ''
    export let style = ' alert alert-error'

    export let user_id
    export let showButton = false

  
    const sendMail = () => {
        resendMail(user_id)

        message = "Please check email for verification code."
    }
   
</script>

<div role="alert" class={style}>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Notice! {message}.</span>
    {#if showButton}
        <button on:click={sendMail} class="btn btn-success btn-sm border-white font-bold text-white">resend code</button>
    {/if}
</div>