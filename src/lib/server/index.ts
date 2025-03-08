// place files you want to import through the `$lib` alias in this folder.
import pool from "$lib/server/db.js";
import { error } from "@sveltejs/kit";


const siteCols = [
    "name",
    "address",
    "address2",
    "zip_code",
    "city"
]

// place files you want to import through the `$lib` alias in this folder.
export const init:any = async() => {
    const [site]: any = await pool.query(
        "SELECT "+siteCols.join(",")+" FROM cfg_site WHERE 1 LIMIT 1"
    )
    if(site.length <= 0){
        error(500,"Site is not available")
    }
    if(site[0].is_active === 0){
        error(500,site[0].name+" is not active")
    }
    let result = {
        site : site[0],
        navbar: [],
        lang: "en",
        ct: "pages",
    }
    const [navbar]: any[] = await pool.query(
        "SELECT id,name,url_rewrite FROM pages WHERE is_active = 1 AND url_rewrite is not null"
    )
    if(navbar.length <= 0){
        return result
    }
    console.log(navbar)
    result.navbar = navbar
    return result
}