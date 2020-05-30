import Vue from 'vue'
import Vuex from 'vuex'

//GORDO PASION ♥

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaPokemons: [],
    listaFavoritos: [],
    filtro: "",
    seleccionado:{}
  },
  getters:{
    GET_FAVORITOS:(state) =>{
      return state.listaFavoritos
    },
    GET_FAVORITOS_ID:(state,getters)=>(index)=>{
      return getters.GET_FAVORITOS.findIndex(elemento=>{
        return elemento.id===index
      })
    },
    GET_FILTRADO:(state)=>{
      if (state.filtro == ""){
        return state.listaPokemons
      }
      else{
        return state.listaPokemons.filter(pokemon => pokemon.name.includes(state.filtro.toLowerCase()))
      }
    }
  },
  actions: {
    async fetchPokemons( { commit }, generacion ) {
      let fetchPokemons
      let indice = 0
      switch(generacion){
        case 1:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
          break;
        case 2:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=151&limit=100');
          indice = 151
          break;
        case 3:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=251&limit=135')
          indice = 251
          break;
        case 4:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=386&limit=107')
          indice = 386
        break;
        case 5:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=493&limit=156')
          indice = 493
        break;
        case 6:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=649&limit=72')
          indice = 649
        break;
        case 7:
          fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=721&limit=86')
          indice = 721
        break;
      }
      const response = await fetchPokemons.json()
      const pokemons = response.results.map( (resultado,i) =>({
          name: resultado.name,
          id: indice+i,
          image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indice+i+1}.png`,
          url: resultado.url,
        })
      )
      commit('SET_POKEMONS',pokemons)
    },

    async fetchSeleccionado({commit}, url){
      if(url == 0){
        commit('SET_SELECCIONADO',{})
      }
      else{
        const fetchSeleccionado = await fetch(url)
        const pokemonJson = await fetchSeleccionado.json()
        const types = pokemonJson.types.map(pokemon=>{
          return pokemon.type.name
        })
        const pokemonSeleccionado = {
          name: pokemonJson.name,
          id: pokemonJson.id,
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemonJson.id+'.png',
          types,
          weight :pokemonJson.weight+' Kilogramos',
          url,
        }
        commit('SET_SELECCIONADO',pokemonSeleccionado)
      }
    },

    commitFavorito({commit, getters}, pokemon){
      if(getters.GET_FAVORITOS.length<=5){
        commit('SET_FAVORITO', pokemon)
      }
    },

    removeFavorito({commit, getters}, idPokemon){
      let arrayFavoritos = getters.GET_FAVORITOS
      let indexPokemon = arrayFavoritos.findIndex(pokemon => pokemon.id === idPokemon)
      arrayFavoritos.splice(indexPokemon,1)
      commit('DELETE_FAVORITO', arrayFavoritos)
    }
  },
  mutations:{
    SET_POKEMONS(state, payload) {
      state.listaPokemons = payload
    },
    SET_SELECCIONADO(state, payload){
      state.seleccionado = payload
    },
    SET_FAVORITO(state, payload){
      state.listaFavoritos.push(payload)
    },
    SET_FILTRO(state, payload){
      state.filtro = payload
    },
    DELETE_FAVORITO(state, payload){
      state.listaFavoritos = payload
    }
  }
})
