import { json } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const reqObj = await request.json();
//console.log(reqObj);
    const sendBody: any = JSON.stringify(reqObj);
    const res = await fetch(PUBLIC_API_URL +  reqObj.path, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},      
      body: sendBody
    });
    const reaObj = await res.json();
//console.log("#json"); 
//console.log(json);    
    return json(reaObj);
}
