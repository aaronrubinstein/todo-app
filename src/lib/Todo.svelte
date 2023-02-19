<script>
    export let text;
    export let completed = false;
</script>

<div class="card">
    <input type="checkbox" bind:checked={completed} aria-label="Todo completed">
    <p class:completed="{completed}">{text}</p>
</div>

<style>
    .card {
        min-height: 64px;
        background: var(--card-bg);
        border-bottom: 1px solid var(--card-border);
        padding: 24px 20px;
        display: flex;
        align-items: flex-start;
        gap: 24px;
    }

    input {
        appearance: none;
        margin: 0;
        height: 24px;
        width: 24px;
        border: 1px solid var(--card-border);
        border-radius: 50%;
        position: relative;
        cursor: pointer;
    }

    input::before {
        position: absolute;
        top: -1px;
        left: -1px;
        content: url('images/icon-check.svg');
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: var(--check-bg);
        transform: scale(0);
        display: grid;
        place-content: center;
    }

    input:checked::before {
        transform: scale(1);
    }

    p {
      font-size: 18px;
      line-height: 18px;
      font-weight: 400;
      letter-spacing: -0.25px;
      color: var(--text-primary);
      padding: 4px 0 0 0;
    }

    p.completed {
        color: var(--text-completed);
        text-decoration: line-through;
    }

</style>