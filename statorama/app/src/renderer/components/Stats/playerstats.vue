<template>
<div>

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
     
    <div class="ink-grid">
        <h1 class="align-center">{{ playerSummary.name }}</h1>

        <div class="column-group gutters">
            <div class="card push-center all-50 small-100 tiny-100">
        
                <h2 class="align-center">Unranked</h2>
                <h4 class="align-center all-50">Wins:</h4>
                <p class="align-center all-50">{{ playerSummary.unranked.wins}}</p>
                <h4 class="align-center all-50">Total Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.unranked.aggregatedStats.totalChampionKills }}</p>
                <h4 class="align-center all-50">Total Assits:</h4>
                <p class="align-center all-50">{{ playerSummary.unranked.aggregatedStats.totalAssists }}</p>
                <h4 class="align-center all-50">Total Minion Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.unranked.aggregatedStats.totalMinionKills }}</p>
                <h4 class="align-center all-50">Total Tower Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.unranked.aggregatedStats.totalTurretsKilled }}</p>

            </div>
            
        </div>

        <div class="column-group gutters">
            <div class="card push-center all-50 small-100 tiny-100">
        
                <h2 class="align-center">Ranked Solo</h2>
                <h4 class="align-center all-50">Wins:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedSolo.wins}}</p>
                <h4 class="align-center all-50">Total Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedSolo.aggregatedStats.totalChampionKills }}</p>
                <h4 class="align-center all-50">Total Assits:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedSolo.aggregatedStats.totalAssists }}</p>
                <h4 class="align-center all-50">Total Minion Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedSolo.aggregatedStats.totalMinionKills }}</p>
                <h4 class="align-center all-50">Total Tower Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedSolo.aggregatedStats.totalTurretsKilled }}</p>

            </div>
        </div>

        <div class="column-group gutters">
            <div class="card push-center all-50 small-100 tiny-100">
        
                <h2 class="align-center">Ranked Flex</h2>
                <h4 class="align-center all-50">Wins:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedFlex.wins}}</p>
                <h4 class="align-center all-50">Total Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedFlex.aggregatedStats.totalChampionKills }}</p>
                <h4 class="align-center all-50">Total Assits:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedFlex.aggregatedStats.totalAssists }}</p>
                <h4 class="align-center all-50">Total Minion Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedFlex.aggregatedStats.totalMinionKills }}</p>
                <h4 class="align-center all-50">Total Tower Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.rankedFlex.aggregatedStats.totalTurretsKilled }}</p>

            </div>
        </div>
       
<div class="column-group gutters">
            <div class="card push-center all-50 small-100 tiny-100">
        
                <h2 class="align-center">Aram</h2>
                <h4 class="align-center all-50">Wins:</h4>
                <p class="align-center all-50">{{ playerSummary.aram.wins}}</p>
                <h4 class="align-center all-50">Total Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.aram.aggregatedStats.totalChampionKills }}</p>
                <h4 class="align-center all-50">Total Assits:</h4>
                <p class="align-center all-50">{{ playerSummary.aram.aggregatedStats.totalAssists }}</p>
                <h4 class="align-center all-50">Total Tower Kills:</h4>
                <p class="align-center all-50">{{ playerSummary.aram.aggregatedStats.totalTurretsKilled }}</p>

            </div>
        </div>
    </div>
    
    
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                playerSummary: {}
               
                
            };
        },

        methods: {
            searchInput: function () {
                let data = {summoner_name: this.summoner_name}
                this.$http.post('http://localhost:8080/league', data).then(function(response){
                    this.getStats()
                })
            },
           getStats: function (){
                this.$http.get('http://localhost:8080/league/playersummary').then(response => {
                    this.playerSummary = response.body;
                    console.log(response.body)
                    this.$set(this.playerSummary, response.body)
                    this.$forceUpdate()
                })
           }
            
        },

        mounted: function () {
            console.log(this)
           this.getStats()
           

               
            
        },

        watch: {

        }
    }
</script>

<style>
    .card {
        width: 36em;
        height: 17em;
        margin-right: 13em;
        box-shadow: 5px 5px 5px black;
        border-radius: 25px;
        background-image: url("../images/diagmonds.png");
        color: white;
    }

    h4 ,h2 {
        color: white;
    }



</style>