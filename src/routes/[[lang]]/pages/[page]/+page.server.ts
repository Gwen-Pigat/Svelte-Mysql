import pool from '$lib/server/db.js';
import { error } from '@sveltejs/kit';


export async function load({params}):Promise<any>{
    const [data]:any = await pool.query(
        "SELECT * FROM pages WHERE url_rewrite = ? AND is_active = 1", [params.page]
    )
    if(data.length <= 0){
        error(404, "No data found")
    }
    return {
        page: data[0]
    }
}