<svelte:head>
	<title>Test</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { goto } from '$app/navigation';
import LibDbSession from '$lib/LibDbSession';
import LibConfig from '$lib/LibConfig';
import LibCookie from '$lib/LibCookie';
import { PUBLIC_BASIC_AUTH_USER, PUBLIC_BASIC_AUTH_PASSWORD } from '$env/static/public'

/**
* login
* @param
*
* @return
*/ 
const login = async function () {
    try {
//console.log("PUBLIC_BASIC_AUTH_USER=", PUBLIC_BASIC_AUTH_USER);
        const user_name = document.querySelector<HTMLInputElement>('#user_name');
        const password = document.querySelector<HTMLInputElement>('#password');
console.log(user_name?.value);
console.log(password?.value);
        if(
            PUBLIC_BASIC_AUTH_USER === user_name?.value && 
            PUBLIC_BASIC_AUTH_PASSWORD === password?.value
        ) 
        {
            const key = LibConfig.COOKIE_KEY_USER;
            LibCookie.set_cookie(key, "1");
            goto(`/`);
        } else {
            alert("Error, Login");
        }
    } catch (error) {
        console.error(error);
    }  
}
</script>

<!-- MarkUp -->
<div class="container">
    <h1>Login</h1>
    <hr />
    <div class="form-group col-sm-6">
        <label>Name:
        </label><br />
        <input type="text" class="form-control" name="user_name" id="user_name" />
        <label>Password:
        </label>
        <input type="password" class="form-control" name="password" id="password" />
    </div>
    <hr />
    <button on:click={login} class="btn btn-primary">Login</button>
    <hr />

</div>

<!--
-->
