<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
    import '../app.postcss';

    import { initializeStores, Toast } from '@skeletonlabs/skeleton';

    initializeStores()

    export let data

    $: items = data["navbar"]
    $: lang = data["lang"]
    $: ct = data["ct"]

</script>
<Navbar {items} {lang} {ct} />
<main>
    <Toast />
    <slot />
</main>

<style>
    main{
        padding: 1rem;
        display: flex;
        margin: auto;
        justify-items: center;
        flex-direction: column;
    }
</style>