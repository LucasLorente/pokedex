<template>
  <nav id="navbar" role="navigation">
    <ul class="row" id="navbar-nav">
      <li class="col-12 col-md-6" id="navegadorPrincipal">
        <img class="img-fluid rounded-circle" id="logo" src="../assets/Pokeball.svg" width="90px">
        <div id="buscador" class="input-group">
          <input type="text" id="inputBuscar" class="form-control" placeholder="Buscar">
          <button id="botonBuscar" class="btn" type="submit"><v-icon name="search" scale="2"/></button>
        </div>
        <button class="btn" id="botonDesplegar" v-on:click="desplegar"><v-icon name="chevron-circle-down" scale="2"/></button>
        <!-- CONTINUAR BOTON DESPLEGAR -->
      </li>
      <div id="desplegable" class="col-md-6">
        <li class="col-12 col-md-6">
          <a href="#">Pokemon</a>
        </li>
        <li class="col-12 col-md-6">
          <a href="#">Equipo</a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
  import 'vue-awesome/icons/search';
  import 'vue-awesome/icons/chevron-circle-down';
  const $ = require('jquery')

  window.$ = $

  export default {
    name: 'navbar',
    
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
<style scoped>
  #navbar{
    width: 100%;
    margin: 0 auto;
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
    background: blue;
    transition: 1s;
  }

  #desplegable{
    display: none;
  }

  #buscador{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
  }

  #inputBuscar{
    border-radius: 20px;
    margin-right: 5px;
  }

  #botonBuscar{
    padding: 1px;
  }

  #botonDesplegar{
    height: auto;
  }

  #desplegable, li{
    padding: 0;
  }

  a{
    padding: 1em;
    color: white;
    font-size: 20px;
    display: block;
    text-decoration: none!important;
  }

  a:hover{
    color: white;
    background: tomato;
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
