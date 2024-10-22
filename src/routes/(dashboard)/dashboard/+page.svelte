<script>
    import OwnerProduct from '../../../lib/cards/dashboad/ownerProduct.svelte';

    export let data;
    export let cards = data?.product?.data

    const user = data?.user?.data

</script>
<h1 class="font-bold capitalize p-10 text-2xl tracking-wider">welcome, {user.username}</h1>

<OwnerProduct {cards}/>