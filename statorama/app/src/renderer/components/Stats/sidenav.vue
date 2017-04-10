<template>
    <div class='ink-flex'>
      <nav class="side-nav ink-navigation">
        <ul class="menu vertical">
            <li class="heading active"> <button class="nav-btn ink-button ">OVERVIEW</button> </li>
            <li class="heading active"> <button class="nav-btn ink-button ">HISTORY</button> </li>
        </ul>
    </nav>
</div>
</template>

<style>
    .side-nav {
        background-color: #278AFA;
        height: 100vh;
    }

    .nav-btn{
        background-color: #278AFA;
        border: 5px;
        width: 8em;
        color: white;
        margin-top: 0;
       
    }

    .nav-btn:hover {
        background-color: #151515;
        border: 0;
        color: #278AFA;
        
    }

    .nav-btn:visited {
        background-color: #278AFA;
    }


</style>