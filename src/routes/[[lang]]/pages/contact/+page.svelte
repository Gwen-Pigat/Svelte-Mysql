<script>

    import { itemActive, resultForm } from '$lib/_functions'
    import Field from '$lib/components/Field.svelte';
    import Form from '$lib/components/Form.svelte';

    export let data
    
    $: page = data["page"]
    $: {
        itemActive.set({
            type: "page",
            id: page.id
        })
    }
    $:if($resultForm.length > 0){
        console.log($resultForm)
    }

</script>

<h1>{page["name"]}</h1>
{@html page["content"]}

<Form path="/api/form" method="POST" id="contact" submit="Send data">
    <Field label="Input" name="data" />
    <Field label="Email" type="email" name="email" />   
</Form>