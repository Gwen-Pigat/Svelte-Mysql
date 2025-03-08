<script lang="ts">
    export let name:string
    export let required:boolean = false
    export let readonly:boolean = false
    export let className:string = ""
    export let id:string = name
    export let label:string = ""

    export let value:string = ""

    export let placeholder:string = label
    export let type:string = "text"

    if(required){
        name += " *"
    }

    let classComponent:string = "input variant-form-material"
    if(className){
        classComponent += " "+className
    } 

</script>


<label class="label">
	<span>{label}</span>
	<input class={classComponent} 
        {...{type}} 
        {placeholder}
        {required}
        {readonly}
        {id}
        {name}
        bind:value={value} />
</label>