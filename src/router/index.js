import Vue from 'vue'
import VueRouter from 'vue-router'

import principal from '@/pages/principal.vue';
import equipo from '@/pages/equipo.vue';
import generacion from '@/pages/generacion.vue';
import pokeInfo from '@/components/pokemonInfo.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'principal', component: principal},

    {path:'/generacion/:idGeneracion', name: 'generacion', component:generacion,
        children:[
            {
                path:'pokemon/:id',
                name:'pokemonInfoListado',
                component:pokeInfo,
            }
        ]
    },

    { path: '/equipo', name: 'favoritos', component: equipo,
        children:[
            {
                path:'pokemon/:id',
                name:'pokemonInfoEquipo',
                component:pokeInfo,
            }
        ]
    }
]


export default new VueRouter({
    routes: routes,
    mode: 'history'
});
