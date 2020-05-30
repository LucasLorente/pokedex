<template>
    <div>
        <navbar></navbar>
        <div class="container-fluid todo">
            <img src="../assets/logo.png" alt="Pokemon" class="img-fluid" id="logo"/><br>
        
            <span id="selector">generaciones</span><br>
            <div class="btn-group" role="group">
                <button type="button" @click="listar(1)" class="btn boton">1</button>
                <button type="button" @click="listar(2)" class="btn boton">2</button>
                <button type="button" @click="listar(3)" class="btn boton">3</button>
                <button type="button" @click="listar(4)" class="btn boton">4</button>
                <button type="button" @click="listar(5)" class="btn boton">5</button>
                <button type="button" @click="listar(6)" class="btn boton">6</button>
                <button type="button" @click="listar(7)" class="btn boton">7</button>
            </div>

            <div class="row d-flex justify-content-center">
                <pokemonCard class="col-8 col-md-3 col-lg-3 col-xl-2" v-for="(pokemon, index) in listaPokemons" :pokemon="pokemon" :key="index" pokemonInfo="pokemonInfoListado"></pokemonCard>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import pokemonCard from "@/components/pokemonCard"
import navbar from "@/components/navbar"
import { mapGetters } from "vuex"

export default {
    components: {
        pokemonCard,
        navbar
    },
    computed:{
        ...mapGetters(["GET_FILTRADO"]),

        listaPokemons: function(){
        return this.$store.getters.GET_FILTRADO
      }
    },
    methods:{
        listar: function(generacion){
            if(this.$route.params.idGeneracion!=generacion){
                this.$store.dispatch("fetchPokemons", generacion)
                this.$router.push("/generacion/"+generacion)
            }
        }
    },
    beforeCreate(){
        this.$store.dispatch("fetchPokemons", this.$route.params.idGeneracion)
    },
}
</script>

<style lang="scss" scoped>
    #logo{
        max-height: 250px;
        margin-bottom: 0;
        margin-top: 5px;
    }
    .todo{
        margin: 0;
        padding: 100px 0px 0px 0px;
    }
    .boton{
        margin: 8px;
        padding: 1px 8px 1px 8px;
        z-index: 0 !important;
        border: 2px solid black;
        border-top-right-radius: 10px !important;
        border-bottom-left-radius: 10px !important;
        border-top-left-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
        font-size: 40px;
        background-color:#DDD92A;
        color: #2D2A32;
        transition: 0.5s;
    }

    .boton:hover{
        z-index: 0;
        background-color: #EEEFA8;
    }

    #selector{
        color: #FFC145;
        font-size: 45px;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }
    .row{
        margin: 0;
    }
</style>