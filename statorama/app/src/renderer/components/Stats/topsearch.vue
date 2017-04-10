<template>
    <div class="ink-grid ink-flex">
    <div class="column-group push-left">
        <form class="hey ink-form all-50">
            <div class="control-group">
                <div class="control">
                    <input id="name" name="name" type="text">                
                </div>
            </div>
        </form>
            <div class=" blue push-right all-50">
                    <button class="search-btn ink-button">SEARCH</button>
            </div>
    </div>
    </div>
    
</template>

<style>
    .top-nav {
        background-color: #278AFA;
        width: 100vw;
        height: 3em;
    }

    .hey {
        margin-top: 2em;
    }

    .search-btn {
        height: 41px;
        margin-top: 34px;;
        background-color: #278AFA;
        border: 0;
        color: white;
    }

    .search-btn:hover {
        background-color: #151515;
        border: 0;
        color: #278AFA;
        
    }

</style>