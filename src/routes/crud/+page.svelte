<svelte:head>
	<title>Crud</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibAuth from '$lib/LibAuth';
import HttpCommon from '$lib/HttpCommon';

/** @type {import('./$types').PageData} */
export let data: any;
console.log(data);
/**
 * start proc
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
		const json = await HttpCommon.server_post({}, "/todos/get_list");
//    console.log(json);  
		data.items = json.data;		
	} catch (e) {
      console.error(e);
    }	
}
console.log("#start: /test");
if(typeof(window) !== "undefined"){
	console.log("typeof=", typeof(window));
	startProc();
}
</script>

<div class="container my-2">
	<h1>Crud</h1>
	<hr />
	<a href={`/crud/create`} class="btn btn-primary">Create
	</a>
  
	<hr />
	{#each data.items as item}
	<div>
		<h3>{item.title}</h3>
		<p>ID : {item.id}</p>
		<a href={`/crud/${item.id}`} class="btn btn-outline-primary">Show
		</a>
		<a href={`/crud/edit/${item.id}`} class="btn">[ Edit ]
		</a>					
		<hr />
	</div>
	{/each}	
</div>
<!-- 
	
-->