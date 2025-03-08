<script lang="ts">
    import { AppBar } from "@skeletonlabs/skeleton";
    import { itemActive } from '$lib/_functions'

    export let items: []
    export let lang: string
    export let ct: string

    function makeLink(name:string):string
    {
        return "/"+lang+"/"+ct+"/"+name
    }

</script>

<AppBar padding="p-3">
	<svelte:fragment slot="lead">
        <img src="/logo.svg" alt="logo" />
    </svelte:fragment>
    <svelte:fragment slot="trail">
    {#if items.length > 0}
        {#each items as item}
            <a href="{makeLink(item['url_rewrite'])}" 
            class='{$itemActive.id === item["id"] ? 'bg-primary-active-token' : ''} p-2'>
                {item["name"]}
            </a>
        {/each}
    {/if}
    </svelte:fragment>
</AppBar>

<style>
    img{
        width: 250px;
    }
</style>