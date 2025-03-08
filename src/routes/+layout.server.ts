import { init } from '$lib/server';

export async function load():Promise<any>{
    return await init()
}