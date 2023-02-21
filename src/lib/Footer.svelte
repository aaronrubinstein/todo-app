<script>
    import { todos, filter } from '../stores.js';
    import Filters from "./Filters.svelte";

    $: activeCount = $todos.filter(todo => !todo.completed).length;
    
    const clearCompleted = () => {
        $todos = $todos.filter(todo => !todo.completed);
        $filter = 'all';
    }

</script>

<div class="card">
    <span class="items-left">{activeCount} item{activeCount === 1 ? '' : 's'} left</span>
    <Filters />
    <button on:click={clearCompleted} type="button">Clear Completed</button>
</div>

<style>
    .card {
        background: var(--card-bg);
        padding: 16px 24px 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span, button {
        font-size: 14px;
        line-height: 14px;
        color: var(--text-secondary);
    }

    .items-left {
        min-width: 108px;
    }
    
    button {
        min-width: 108px;
        cursor: pointer;
    }

    button:hover {
        color: var(--text-secondary-hover);
    }
</style>