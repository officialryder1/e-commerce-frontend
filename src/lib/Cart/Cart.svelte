<script>
    import { cart } from '$lib/utils/cartStore'
</script>

<div class="text-end p-5">
    <a href="/cart" class="btn btn-active badge"><i class="fa fa-shopping-cart "></i>{$cart.length}</a>
</div>