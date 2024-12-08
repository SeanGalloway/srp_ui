<script>
    import axios from "axios";
    import auth from "../util/auth";

    let email = "";
    let password = "";
    let firstName = "";
    let lastName = "";


    let submit = () => {
        axios.post("http://127.0.0.1:8080/auth/register", {
            name_first: firstName,
            name_last: lastName,
            email: email,
            password: password
        }).then((response) => {
            console.log(response.data);
            auth.setToken(email, response.data);
            if (response.status === 200) {
                window.location.href = "/notes";
            }
        }).catch((err) => {
            console.log("error calling register: ", err);
        });
    };

</script>


<div>
    <input bind:value={firstName} placeholder="first name"/>
    <input bind:value={lastName} placeholder="last name"/>
    <input bind:value={email} placeholder="email"/>
    <input bind:value={password} type="password"/>
    <button onclick={submit}>Login</button>
    <a href="/login">Already a User?</a>
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