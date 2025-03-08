<script>

    import { itemActive } from '$lib/_functions'

    export let data
    
    $: page = data["page"]
    $: {
        itemActive.set({
            type: "page",
            id: page.id
        })
    }

</script>

<h1>{page["name"]}</h1>
{@html page["content"]}