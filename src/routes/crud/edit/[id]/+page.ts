
import { error } from '@sveltejs/kit';
//
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
console.log("id=", params.id);
  return {
      id: params.id,
      name: "",
    };  
}
