<template>
  <div>
    <div class="row contenido">
      <a class="botonAtras" @click="$router.go(-1)"><v-icon class="icono" name="arrow-circle-left"/></a>
      <h1 class="titulo">Equipo</h1>      
    </div>
    
    <div class="row d-flex justify-content-center m-0">
      <pokemonCard class="col-8 col-sm-4 col-md-4 col-lg-3 col-xl-2" v-for="(pokemon,index) in listaFavoritos" :pokemon="pokemon" :key="index" pokemonInfo="pokemonInfoEquipo"></pokemonCard>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import pokemonCard from "@/components/pokemonCard"
  import { mapState } from "vuex"
  import 'vue-awesome/icons/arrow-circle-left';

export default {
  components:{
    pokemonCard
  },
  computed:{
    ...mapState(["listaFavoritos"])
  },
};
</script>

<style lang="scss" scoped>
  .contenido{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin: 0;
    padding: 30px 0px 0px 0px;
  }
  .icono{
    margin-top: 120px;
    cursor: pointer;
    -webkit-filter: invert(100%);
    scale: 4;
  }
  .botonAtras{
    flex: 0;
    margin: 0 0 0 100px;
    transition: 0.4s;
  }
  .titulo{
    font-size: 185px;
    color: #FFC145;
    font-weight: bold;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    flex:1;
    transition: 0.5s;
  }
  @media only screen and (max-width: 640px) {
    .botonAtras{
      margin: 0 0 0 30px;
    }
    .titulo{
      font-size: 90px;
    }
    .icono{
      margin-top: 50px;
      scale:3
    }
    .contenido{
      padding: 10px 0px 0px 0px;
    }
  }
</style>