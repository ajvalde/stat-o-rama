<template>
<div class="ink-flex">
    <div class="form column-group push-center">
        <form class="ink-form">
            <div class="control-group">
                <label for="email">ENTER SUMMONER NAME TO SEARCH FOR STATS</label>
                <div class="control">
                    <input id="summoner" name="summoner" type="text" placeholder="Summoner Name">
                </div>
            </div>
            <div class="column-group push-center">
                <button class="btn ink-button blue">SEARCH</button>
            </div>
        </form>
    </div>
</div>
</template>

<style>
    @import url(https://fonts.googleapis.com/css?family=Audiowide);
    .form {
       margin-top: 3em;
       color: white;
       font-family: Audiowide;
       font-size: 25px;
    }


</style>