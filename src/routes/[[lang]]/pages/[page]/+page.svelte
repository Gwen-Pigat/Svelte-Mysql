<script>
    export let data
    
    $: page = data["page"]
</script>

<h1>{page["name"]}</h1>
{@html page["content"]}