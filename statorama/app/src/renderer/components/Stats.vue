<template>
    <div>  
        <div class="ink-grid push-right all-70">
        <topsearch></topsearch>
        </div>
        <sidenav></sidenav>
    </div>
</template>

<script>
    import sidenav from './Stats/sidenav'
    import topsearch from './Stats/topsearch'
    export default {
        components: {
            sidenav,
            topsearch
        },
        name: 'stats'
    }
</script>