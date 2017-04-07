<template>
    <div class="ink-flex">
        <div class="butts push-center vertical-gutters" >
            <button class="ink-button blue"> <router-link to="/signup">SIGN UP </router-link></button> 
            <button class="ink-button blue"> <a href="#">LOG IN</a></button>
        </div>
    </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Audiowide);
  button {
      margin-top: 1em;
      width: 10em;
      font-family: Audiowide;
      font-size: 25px;
  }
  a {
      color: white;
  }
  a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
    color: white;
}

a:active {
    text-decoration: none;
}
</style>