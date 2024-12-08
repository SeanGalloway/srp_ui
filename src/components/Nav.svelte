<script lang="ts">
    import auth from "../util/auth";
    let logout = () => {
        auth.logout();
        window.location.href = "/login";
    }
</script>

<div>
    SRP
    <button onclick={logout}>Logout</button>
    <a href="/register">Register</a>
    <a href="/notes">Home</a>
    <a href="/update-password">Update Password</a>
</div>