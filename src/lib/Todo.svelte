<script>
    export let id;
    export let text;
    export let completed = false;
    export let todos;

    const deleteTodo = () => {
        todos = todos.filter(todo => todo.id !== id);
    }
    
</script>

<div class="card">
    <input type="checkbox" bind:checked={completed} aria-label="Todo completed">
    <p class:completed="{completed}">{text}</p>
    <button type="button" on:click={deleteTodo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </button>
</div>

<style>
    .card {
        min-height: 64px;
        background: var(--card-bg);
        border-bottom: 1px solid var(--card-border);
        padding: 20px 24px;
        display: flex;
        align-items: center;
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
        flex: 0 0 auto;
    }

    input:hover {
        /* https://codyhouse.co/nuggets/css-gradient-borders */
        background: linear-gradient(var(--card-bg), var(--card-bg)) padding-box,
            var(--check-bg) border-box;
        border: 1px solid transparent;
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

    button {
        margin-left: auto;
        flex: 0 0 auto;
        cursor: pointer;
    }

    svg {
        color: var(--delete-cross);
        opacity: 0;
    }

    .card:hover svg {
        opacity: 1;
    }

    @media (max-width: 700px) {

        .card {
            min-height: 48px;
            padding: 14px 20px;
            gap: 12px;
        }

        p {
            font-size: 12px;
            line-height: 12px;
            letter-spacing: -0.17px;
            padding: 4px 0 0 0;
        }

        input, input::before {
            height: 20px;
            width: 20px;
        }

        button {
            display: grid;
            place-items: center;
        }
        
        svg {
            opacity: 1;
            transform: scale(0.80);
        }

    }

</style>