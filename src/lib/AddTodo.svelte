<script>
    import autosize, { autosizeUpdate } from './autosize.js';
    import { todos } from '../stores.js';

    let textarea;

    const newTodo = text => {
        let todo = {
            id: Math.floor(Math.random() * 10000) + 6,
            text: text,
            completed: false
        }
        $todos = [todo, ...$todos];
    };

    const handleKeydown = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            newTodo(e.target.value);
            e.target.value = '';
            autosizeUpdate(textarea);
        }
    };

    // Issue with 'Enter' not always being detected on keydown in Chrome on Android
    // As a backup, check if input has newline character 
    const handleInput = e => {
        if ((e.target.value.match(/\n/g) || []).length > 0) {
            newTodo(e.target.value);
            e.target.value = '';
            autosizeUpdate(textarea);
        }
    };

</script>

<div class="card">
    <div class="circle"></div>
    <textarea 
        on:keydown={handleKeydown} 
        on:input={handleInput}
        use:autosize 
        bind:this={textarea} 
        rows="1" 
        placeholder="Create a new todo..."
    ></textarea>
</div>

<style>
    .card {
        min-height: 64px;
        border-radius: 5px;
        background: var(--card-bg);
        box-shadow: var(--card-shadow);
        padding: 20px 24px;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .circle {
        height: 24px;
        width: 24px;
        border: 1px solid var(--card-border);
        border-radius: 50%;
        flex: 0 0 auto;
    }

    textarea {
        width: 100%;
        border: none;
        font-size: 18px;
        line-height: 18px;
        font-weight: 400;
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

    @media (max-width: 700px) {
        
        .card {
            min-height: 48px;
            padding: 14px 20px;
            gap: 12px;
        }
        
        textarea {
            font-size: 12px;
            line-height: 12px;
            letter-spacing: -0.17px;
            padding: 4px 0 0 0;
        }

        .circle {
            height: 20px;
            width: 20px;
        }

    }
</style>