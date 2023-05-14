<svelte:head>
<title>Posts</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import LibConfig from '$lib/LibConfig';
import LibAuth from '$lib/LibAuth';
import LibCommon from '$lib/LibCommon';
import HttpCommon from '$lib/HttpCommon';
//
/** @type {import('./$types').PageData} */
export let data: any, item: any= {}, post_id = 0;
//
console.log("[id]start");
console.log(data);
/**
* init proc: 開始
* @param
*
* @return
*/
const initProc = async function () {
	try{
        let postItem: any = {
        "id": data.id
        };        
        const json = await HttpCommon.server_post(postItem, "/todos/get");
        item = json.data;
console.log(item);

	} catch (e) {
      console.error(e);
      //alert("error, ");
    }
}
if(typeof(window) !== "undefined") {
	initProc();
}
/**
*
* @param
*
* @return
*/

/**
 * deleteItem
 * @param
 *
 * @return
 */ 
 async function deleteItem(){
	try {
		const item = {
			id: Number(data.id),
		}
//console.log(item);
    const json = await HttpCommon.server_post(item, "/todos/delete");
console.log(json);
        if(json.ret !== LibConfig.OK_CODE) {
            throw new Error("Error, delete");
        } else {
            window.location.href = '/crud'
        }
	} catch (error) {
	    console.error(error);
	}
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container my-2">
    <h1>{item.id}</h1>
    ID: {data.id}
    <hr class="my-1" />
    name: {item.title}
    <hr />
    <button on:click={deleteItem} class="btn btn-danger my-2">Delete</button>
</div>

<!--
-->
