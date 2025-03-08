import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";
import { tick } from "svelte";
import { writable } from "svelte/store";

export const itemActive:any = writable({})
export const resultForm:any = writable([])


export async function submitData(
    form:HTMLFormElement,
    path:string,
):Promise<{ error?:string, [key:string]:any}>
{
    let response:any = {}
    try{
        throw new Error("Failed to parse response")
        const result = await fetch(path, {
            method: "POST",
            body: new FormData(form)
        })
        if(!result.ok){
            throw new Error("Failed to submit form")
        }
        response = await result.json()
        if(!response){
            throw new Error("Failed to parse response")
        }
        if(response["error"]){
            throw new Error(response["error"])
        }
    }catch(error:any){
        return { error: error["message"] || "An unknown error occured" }
    }
    return response
}

export const toast = (
    message:string, 
    background: string = "variant-filled-error"
):ToastSettings => {
    const t: ToastSettings = {
        message,
        background,
    }
    return t
}