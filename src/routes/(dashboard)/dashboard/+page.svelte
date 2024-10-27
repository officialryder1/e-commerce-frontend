<script>
    import OwnerProduct from '../../../lib/cards/dashboad/ownerProduct.svelte';

    export let data;
    export let cards = data?.product?.data
    console.log(cards)

    const user = data?.user

</script>
<h1 class="font-bold capitalize p-10 text-2xl tracking-wider">welcome, {user.username}</h1>

<OwnerProduct {cards}/>