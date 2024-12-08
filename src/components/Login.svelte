<script>
    import axios from "axios";
    import {onMount} from "svelte";
    import auth from "../util/auth";
    let email = "";
    let password = "";

    onMount(() => {
        let token = auth.getToken();
        if (token) {
            window.location.href = "/notes";
        }
    });

    let submit = () => {
        axios.post("http://127.0.0.1:8080/auth/login", {
            user_name: email,
            password
        }).then((response) => {
            console.log(response.data);
            auth.setToken(email, response.data);
            if (response.status === 200) {
                window.location.href = "/notes";
            }
        }).catch((err) => {
            console.log("error calling login: ", err);
        });
    };

</script>


<div>
    <input bind:value={email} placeholder="email"/>
    <input bind:value={password} type="password"/>
    <button onclick={submit}>Login</button>
    <a href="/register">Register</a>
    <a href="/reset-password">Forgot Password</a>
</div>
<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-radius: 8px;
        max-width: 300px;
        margin: auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
    }
    button {
        background-color: #1d72b8;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 4px;
        width: 100%;
        font-size: 16px;
        cursor: pointer;
    }
    button:hover {
        background-color: #155a8a;
    }
</style>