<script>
    import axios from "axios";
    import auth from "../util/auth";
    let oldPassword = $state("");
    let password = $state("");
    let confirmPassword = $state("");

    let passwordsMatch = $derived(password !== "" && password === confirmPassword);

    let submit = () => {
        axios.post("http://127.0.0.1:8080/auth/update", {
            email: auth.getEmail(),
            old_password: oldPassword,
            new_password: password
        }).then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data);
            if (response.status === 200) {
                window.location.href = "/notes";
            }
        }).catch((err) => {
            console.log("error calling update: ", err);
        });
    };

</script>


<div>
    <input bind:value={oldPassword} placeholder="old password"/>
    <input bind:value={password} type="password"/>
    <input bind:value={confirmPassword} type="password"/>
    <button disabled={!passwordsMatch} onclick={submit}>Update</button>
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
    button:disabled {
        background-color: #666666;
    }
</style>