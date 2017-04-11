<template>
    <div class="ink-grid ink-flex">
    <div class="column-group push-center">
        <form class="hey ink-form all-50">
            <div class="control-group">
                <div class="control">
                    <input id="summoner_name" v-model="summoner_name" name="summoner_name" type="text" placeholder="Summoner Name">                
                </div>
            </div>
        </form>
            <div class=" blue push-right all-50">
                    <button v-on:click="searchInput" class="search-btn ink-button"> <router-link to="/stats" >SEARCH</router-link> </button>
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
                
           })
        }
    }
}
    
</script>