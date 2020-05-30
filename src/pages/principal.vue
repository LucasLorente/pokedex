<template>
    <div class="row contenido">
        <img src="../assets/logo.png" alt="Pokemon" class="img-fluid col-xl-6 col-12" id="logo"/><br>
        <h1 id="subtitulo" class="col-xl-5 col-12">Generaciones</h1>
        <div role="group" class="col-12">
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:1}}" class="btn boton">1</router-link>
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:2}}" class="btn boton">2</router-link>
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:3}}" class="btn boton">3</router-link>
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:4}}" class="btn boton">4</router-link>
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:5}}" class="btn boton">5</router-link>
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:6}}" class="btn boton">6</router-link>
          <router-link type="button" :to="{ name:'generacion',params:{idGeneracion:7}}" class="btn boton">7</router-link>
        </div>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #logo {
    margin-top: 60px;
    max-height: 400px;
  }
  #subtitulo{
    font-size: 60px;
    color: #FFC145;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }
  .boton{
    margin: 10px;
    padding: 30px;
    border: 3px solid black;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    font-size: 80px;
    color: black;
    background-image: radial-gradient( circle farthest-corner at 50.1% 52.3%,  rgb(226, 202, 68) 58.2%, rgba(251,212,0,1) 90.1% );
    transition: 0.5s;
  }
  .boton:hover{
    padding: 35px;
    margin: 5px;
  }
  .contenido{
    display: flex;
    padding: 0;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100% !important;
  }
</style>
