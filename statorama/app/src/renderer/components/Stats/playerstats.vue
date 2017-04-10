<template>

    
</template>

<script>
    export default {
        data: function () {
            return {
                playerSummary: {}
            };
        },

        methods: {
            
        },

        mounted: function () {
            var vm = this;
            
                this.$http.get('http://localhost:8080/league/playersummary').then(response => {
                    this.data = response.body;
                    console.log(response.body)
                })
            
        }
    }
</script>

<style>
  

</style>