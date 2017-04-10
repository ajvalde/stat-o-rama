<template>
    <div>  
        <div class="ink-grid push-right all-70">
        <topsearch></topsearch>
        <playerstats></playerstats>
        </div>
        <sidenav></sidenav>
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