<script lang="ts">
    import { submitData, toast } from "$lib/_functions";
    import { 
        getToastStore, 
        ProgressBar, 
    } from "@skeletonlabs/skeleton";

    export let path:string
    export let id:string
    export let submit:string
    export let method:string

    let isSubmit = false
    let form:HTMLFormElement

    async function submitFormCall():Promise<void>
    {
        isSubmit = true
        const result = await submitData(form,path)
        isSubmit = false
        if(result.error){
            getToastStore().trigger(toast(result.error))
            return
        }
        form.reset()
    }

</script>

<form {id} 
    {method} 
    on:submit|preventDefault={submitFormCall} 
    bind:this={form}>
    <slot></slot>
    <div class="submit">
        {#if isSubmit}
            <ProgressBar />
        {:else}
            <button type="submit" class="btn variant-filled">{submit}</button>
        {/if}
    </div>
</form>


<style>
    .submit{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 1rem 0;
    }
    .submit *{
        width: 100%;
    }
</style>