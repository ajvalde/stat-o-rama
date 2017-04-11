<template>
    
    <div class="ink-grid">  
        
       <topsearch></topsearch>
        <playerstats></playerstats>
        
       
    </div>
</template>

<script>
    import sidenav from './Stats/sidenav'
    import topsearch from './Stats/topsearch'
    import playerstats from './Stats/playerstats'
    export default {
        components: {
            sidenav,
            topsearch,
            playerstats
        },
        name: 'stats'
    }
</script>