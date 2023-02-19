<script>
    import { todos } from "./stores.js";
    import NewTodo from "./lib/NewTodo.svelte";
    import Todo from "./lib/Todo.svelte";

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
       <img class="theme-icon" src="images/icon-moon.svg" alt="Dark theme toggle">
    </header>

    <main>
        <NewTodo />
        
        {#if $todos.length}
            <div class="todos-container">
                {#each $todos as todo (todo.id)}
                    <Todo 
                        bind:text={todo.text} 
                        bind:completed={todo.completed} />
                {/each}
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


    @media (max-width: 700px) {

        .title {
            font-size: 28px;
        }

        .theme-icon {
            height: 20px;
            width: 20px;
        }

    }

</style>