<script lang="ts">

  let { note } = $props();
  let expanded = $state(false);

  function toggleExpand() {
    expanded = !expanded;
  }
</script>

<div class="note-card">
  <h2>{note.title}</h2>
  <p onclick={toggleExpand}>
    {expanded ? note.body : note.body.substring(0, 100) + (note.body.length > 100 ? '...' : '')}
  </p>
  <small>{new Date(note.created_ts).toLocaleString()}</small>
</div>

<style>
  .note-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  p {
    cursor: pointer;
  }
</style>