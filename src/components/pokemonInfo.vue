<template>
  <div class="modal">
    <div class="container pokemon">

      <div>
        <img :src="seleccionado.image" :alt="seleccionado.name" class="img-fluid" />
      </div>

      <div class="grupo">

        <div class="infoPokemon">
          <h1>{{seleccionado.name}}</h1>
          <p v-for="tipo in seleccionado.types" :key="tipo" id="tipo">Tipo: {{tipo}}</p>
          <p>Peso: {{seleccionado.weight}}</p>
          <br>
        </div>

        <div class="botones">
          <button class="btn btn-dark" @click="agregar" v-if="verificar">Agregar a Equipo</button>
          <p id="mensajeAgregado" v-else>Agregado al equipo</p>
          <button class="btn btn-danger" @click="$router.go(-1); vaciar()">Atrás</button>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["seleccionado"]),
    ...mapGetters(["GET_FAVORITOS_ID"]),
    
    verificar: function() {
        if(this.$store.getters.GET_FAVORITOS_ID(this.seleccionado.id) != -1){
          return false
        }
        else{
          return true
        }
    }
  },
  methods: {
    vaciar: function() {
      this.$store.dispatch("fetchSeleccionado", 0);
      document.body.style.overflow = "auto";
    },
    agregar: function() {
      this.$store.dispatch("commitFavorito", this.seleccionado);
    }
  },
  created() {
    let pokemonUrl = this.$route.params.url;
    this.$store.dispatch("fetchSeleccionado", pokemonUrl);
    document.body.style.overflow = "hidden";
  }
};
</script>

<style lang="scss" scoped>
  h1{
    font-size: 60px;
  }
  .pokemon {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    background-color: #FCB9B2;
    border: solid black 3px;
    border-radius: 100px;
    max-width: 800px;
    padding: 10px;
  }
  .infoPokemon{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .botones{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .grupo{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #tipo {
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
  #mensajeAgregado{
    font-size: 30px;
    color: #FFC145;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }
  img {
    width: 300px;
  }
  button {
    margin: 3px;
  }
  .modal {
    position: fixed;
    z-index: 2;
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  @media only screen and (max-width: 570px) {
    .pokemon{
      flex-direction:column ;
    }
    img{
      width: 200px;
    }
    #mensajeAgregado{
      font-size: 22px;
    }
  }
</style>