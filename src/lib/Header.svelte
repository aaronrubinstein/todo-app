<script>
    
    let darkTheme = false;
    
    $: if (darkTheme) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

</script>

<header>
    <span class="title">Todo</span>
    <label>
        <input type="checkbox" bind:checked={darkTheme}>
        <img class:hidden="{darkTheme}" src="images/icon-moon.svg" alt="Dark theme">
        <img class:hidden="{!darkTheme}" src="images/icon-sun.svg" alt="Light theme">
    </label>
</header>

<style>

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