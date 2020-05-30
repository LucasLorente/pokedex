<template>
  <div class="card m-2">
    <img :src="pokemon.image" class="card-img-top img-fluid">
    <div class="card-body">
      <h5 class="card-title">{{pokemon.name}}</h5>
      <button class="btn btn-danger" v-if="isFavoritos()" @click="eliminarFavorito(pokemon.id)">Eliminar</button>
      <router-link class="btn btn-dark" style="opacity: 0" :to="{ name:pokemonInfo,
        params:{id:pokemon.id.toString(), url: pokemon.url}}">Información</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pokemon: Object,
      pokemonInfo: String
    },
    methods: {
      isFavoritos: function(){
        if(this.$route.name === "favoritos"){
          return true
        }
        else{
          return false
        }
      },
      eliminarFavorito: function(idPokemon){
        this.$store.dispatch("removeFavorito", idPokemon)
      }
    }
  };
</script>

<style lang="scss" scoped>
  .btn{
    transition: 0.5s;
    margin: 1px;
    padding: 4px;
  }

  .card-title{
    font-weight: bold;
    font-size: 30px;
  }

  .card-body{
    padding: 8px 0 8px 0;
    border-top: 3px solid black;
    border-bottom-right-radius: 48px;
    background-color: #FCB9B2;
  }
  .card{
    padding: 0;
    border: 3px solid black;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    transition: 0.2s;
    &:hover{
      .btn{
        opacity:1 !important
      }
    }
  }
  .card:hover{
    box-shadow: 2px 2px #200000;
    border: 2px solid black;
  }
</style>