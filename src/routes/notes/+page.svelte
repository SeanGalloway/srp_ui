<script lang="ts">
    import NoteCard from "../../components/NoteCard.svelte";
    import Nav from "../../components/Nav.svelte";
    import auth from "../../util/auth";
    import {onMount} from "svelte";
    let notes: Note[] = [];

    onMount(async () => {
        let client = auth.getClient();
        const response = await client.get('http://127.0.0.1:8080/note/all');

        notes = response.data;
        console.log(notes);
    });
</script>

<Nav/>
<div id="notes">
{#if notes.length > 0}
    {#each notes as note}
        <NoteCard note={note} />
    {/each}
{:else}
<p>No notes yet!</p>
{/if}

</div>
<a href="/update-password">Update password</a>

<style>
#notes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
    padding: 16px;
}

</style>