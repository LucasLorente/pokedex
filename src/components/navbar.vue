<template>
  <nav id="navbar" role="navigation">
    <ul class="row" id="navbar-nav">
      <li class="col-12 col-md-6" id="navegadorPrincipal">
        <img class="img-fluid rounded-circle" id="logo" src="../assets/Pokeball.svg" width="90px">
        <div id="buscador" class="input-group">
          <input type="text" id="inputBuscar" class="form-control" v-model="filtroPokemon" placeholder="Buscar">
        </div>
        <button class="btn" id="botonDesplegar" v-on:click="desplegar"><v-icon name="chevron-circle-down" scale="2"/></button>
      </li>
      <div id="desplegable" class="col-md-6">
        <li class="col-12 col-md-6">
          <router-link to="/">Pokemon</router-link>
        </li>
        <li class="col-12 col-md-6">
          <router-link to="/equipo">Equipo</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
  import 'vue-awesome/icons/chevron-circle-down';
  const $ = require('jquery')

  window.$ = $

  export default {
    name: 'navbar',
    computed:{
      filtroPokemon:{
        get: function(){
          return this.$store.filtro
        },
        set: function(){
          this.$store.commit('SET_FILTRO', event.target.value)
        }
      }
    },
    
    methods: {
      desplegar(){
        if($('#desplegable').is(':hidden')){
          $('#desplegable').slideDown(300);
        }
        else if($('#botonDesplegar').is(':visible')){
          $('#desplegable').slideUp(300);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #navbar{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    position: fixed;
    z-index: 1;
  }

  #navegadorPrincipal{
    display: flex;
    justify-content: space-around;
  }

  #navbar-nav{
    display: flex;
    flex-direction: column;
    align-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    background: #461220;
    transition: 1s;
  }

  #desplegable{
    display: none;
  }

  #buscador{
    align-content: center;
    padding: 10px;
  }

  #inputBuscar{
    font-size: 25px;
    border-radius: 30px;
  }

  #botonDesplegar{
    height: auto;
    -webkit-filter: invert(100%);
  }

  a{
    padding: 11px;
    color: white;
    font-size: 40px;
    display: block;
    border-radius: 50px;
    text-decoration: none!important;
    transition: 0.5s;
  }

  a:hover{
    color: black;
    background: #FAFDF6;
  }

  @media only screen and (min-width: 768px) {
    #navbar-nav{
      flex-direction: row;
    }
    
    #botonDesplegar{
      display: none;
    }

    li{
      display: inline-block;
      align-self: center;
    }

    #desplegable{
      display: flex!important;
      flex-direction: row;
    }
  }

</style>
