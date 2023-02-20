<div class="card">
    <span class="items-left">5 items left</span>
    <div class="filter-container">
        <span class="filter">All</span>
        <span class="filter">Active</span>
        <span class="filter">Completed</span>
    </div>
    <span class="clear">Clear Completed</span>
</div>

<style>
    .card {
        background: var(--card-bg);
        padding: 16px 24px 20px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        font-size: 14px;
        line-height: 14px;
        color: var(--text-secondary);
    }

    .items-left {
        min-width: 108px;
    }

    .filter-container {
        display: flex;
        gap: 19px;
    }

    .filter {
        font-weight: 700;
        cursor: pointer;
    }
    
    .clear {
        min-width: 108px;
        cursor: pointer;
    }

    .filter:hover, .clear:hover {
        color: var(--text-secondary-hover);
    }
</style>