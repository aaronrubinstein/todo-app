<script>
    import { filter } from '../stores.js'
</script>

<div class="filter-container">
    <button 
        class:selected={$filter === 'all'}
        on:click={() => $filter = 'all'}
        type="button">
        All
    </button>
    <button 
        class:selected={$filter === 'active'}
        on:click={() => $filter = 'active'}
        type="button">
        Active
    </button>
    <button 
        class:selected={$filter === 'completed'}
        on:click={() => $filter = 'completed'}
        type="button">
        Completed
    </button>
</div>

<style>
    .filter-container {
        display: flex;
        gap: 19px;
    }

    button {
        font-size: 14px;
        line-height: 14px;
        color: var(--text-secondary);
        font-weight: 700;
        cursor: pointer;
    }

    button:hover {
        color: var(--text-secondary-hover);
    }

    button.selected {
        color: var(--bright-blue);
    }
</style>