<div class="card">
    <div class="circle"></div>
    <textarea rows="1" placeholder="Create a new todo..."></textarea>
</div>

<style>
    .card {
        min-height: 64px;
        border-radius: 5px;
        background: var(--card-bg);
        box-shadow: var(--card-shadow);
        padding: 24px 20px;
        display: flex;
        align-items: flex-start;
        gap: 24px;
    }

    .circle {
        height: 24px;
        width: 24px;
        border: 1px solid var(--card-border);
        border-radius: 50%;
    }

    textarea {
        width: 90%;
        border: none;
        font-size: 18px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.25px;
        color: var(--text-input);
        background-color: var(--card-bg);
        outline: none;
        resize: none;
        padding: 6px 0 0 0;
    }

    textarea::placeholder {
        color: var(--text-input-placeholder);
    }
</style>