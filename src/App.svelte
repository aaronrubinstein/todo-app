<script>
    import { todos } from "./stores.js";
    import AddTodo from "./lib/AddTodo.svelte";
    import Todo from "./lib/Todo.svelte";
    import Controls from "./lib/Controls.svelte";

    let darkTheme = false;
    $: if (darkTheme) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

</script>

<div class="container">
    <header>
        <span class="title">Todo</span>
        <label>
            <input type="checkbox" bind:checked={darkTheme}>
            <img class:hidden="{darkTheme}" src="images/icon-moon.svg" alt="Dark theme toggle">
            <img class:hidden="{!darkTheme}" src="images/icon-sun.svg" alt="Dark theme toggle">
        </label>
    </header>

    <main>
        <AddTodo />
        
        {#if $todos.length}
            <div class="todos-container">
                {#each $todos as todo (todo.id)}
                    <Todo 
                        bind:text={todo.text} 
                        bind:completed={todo.completed} />
                {/each}
                <Controls />
            </div>
            <p class="drag-drop-text">Drag and drop to reorder list</p>
        {/if}
    </main>
</div>

<style>

    .container {
        max-width: 588px;
        margin: 70px auto 50px auto;
        padding: 0 24px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    .title {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: 15px;
        text-transform: uppercase;
        color: #FFF;
        padding-top: 6px;
    }

    label {
        cursor: pointer;
    }

    input[type="checkbox"] {
        appearance: none;
        margin: 0;
    }

    .todos-container {
        border-radius: 5px;
        overflow: hidden;
        margin-top: 24px;
        box-shadow: var(--card-shadow);
    }

    .drag-drop-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: -0.19px;
        color: var(--text-secondary);
        margin-top: 49px;
        text-align: center;
    }

    img.hidden {
        display: none;
    }

    @media (max-width: 700px) {

        .title {
            font-size: 28px;
        }

        img {
            height: 20px;
            width: 20px;
        }

    }

</style>