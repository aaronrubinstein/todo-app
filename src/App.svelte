<script>
    import { dndzone } from 'svelte-dnd-action';
    import { flip } from 'svelte/animate';
    import { todos } from "./stores.js";
    import AddTodo from "./lib/AddTodo.svelte";
    import Todo from "./lib/Todo.svelte";
    import Footer from "./lib/Footer.svelte";
    import Filters from "./lib/Filters.svelte";

    let darkTheme = false;
    $: if (darkTheme) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

    const handleSort = e => {
        $todos = e.detail.items;
    }
</script>

<div class="container">
    <header>
        <span class="title">Todo</span>
        <label>
            <input type="checkbox" bind:checked={darkTheme}>
            <img class:hidden="{darkTheme}" src="images/icon-moon.svg" alt="Dark theme">
            <img class:hidden="{!darkTheme}" src="images/icon-sun.svg" alt="Light theme">
        </label>
    </header>

    <main>
        <AddTodo />
        
        {#if $todos.length}
            <div class="todos-container">
                <div use:dndzone={{items: $todos, dropTargetStyle: {}, flipDurationMs: 200}} on:consider={handleSort} on:finalize={handleSort}>
                    {#each $todos as todo (todo.id)}
                        <div animate:flip={{duration: 200}}>
                            <Todo 
                                id={todo.id}
                                text={todo.text} 
                                bind:completed={todo.completed} />
                        </div>
                    {/each}
                </div>
                <Footer />
            </div>
            <div class="mobile-filters">
                <Filters />
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

    .mobile-filters {
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

        .mobile-filters {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 48px;
            padding: 15px 0;
            border-radius: 5px;
            margin-top: 16px;
            background: var(--card-bg);
            box-shadow: var(--card-shadow);
        }

        .drag-drop-text {
            margin-top: 40px;
        }

    }

</style>