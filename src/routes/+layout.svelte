<script lang="ts">
	import '../app.postcss';

    import { AppBar } from '@skeletonlabs/skeleton'

    export let data

    function makeLink(name:string):string
    {
        return "/"+data["lang"]+"/"+data["ct"]+"/"+name
    }

</script>

<AppBar>
	<svelte:fragment slot="lead">
        <img src="/logo.svg" alt="logo" />
    </svelte:fragment>
    <svelte:fragment slot="trail">
    {#if data["navbar"].length > 0}
        {#each data["navbar"] as item}
            <a href="{makeLink(item['url_rewrite'])}">{item["name"]}</a>
        {/each}
    {/if}
    </svelte:fragment>
</AppBar>

<slot />

<style>
    img{
        width: 250px;
    }
</style>