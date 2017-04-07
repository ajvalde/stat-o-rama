<template>
<div class="ink-flex">
    <div class="form column-group push-center">
        <form class="ink-form">
            <div class="control-group">
                <label for="email">ENTER SUMMONER NAME TO SEARCH FOR STATS</label>
                <div class="control">
                    <input id="summoner_name" v-model="summoner_name" name="summoner_name" type="text" placeholder="Summoner Name">
                </div>
            </div>
            <div class="column-group push-center">
                <button v-on:click="searchInput" class="btn ink-button blue">SEARCH</button>
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

<script>
    export default {
        data: function () {
            return {
                summoner_name: ''
            };
        },

    methods: {
        searchInput: function () {
          let data = {summoner_name: this.summoner_name}
           this.$http.post('http://localhost:8080/league', data).then(function(response){
                console.log(response.data)
           })
        }
    }
}
    
</script>