import { createRouter,createWebHistory } from "vue-router";

import Home from "@/view/Home.vue"


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:'Home',
            component:Home
        },
      
        {
            path:"/brazil",
            name:'Brazil',
            component:()=>import("@/view/Brazil.vue")
        },
        {
            path:"/hawaii",
            name:'Hawaii',
            component:()=>import("@/view/Hawaii.vue")
        },
        {
            path:"/jamaica",
            name:'Jamaica',
            component:()=>import("@/view/Jamaica.vue")
        },
        {
            path:"/panama",
            name:'Panama',
            //we can provide specific name to this panama in bundles so that accessing and debugging is easy
            component:()=>import(/*webpackChunkName:'panama'*/"@/view/Panama.vue")
        },
        {
            path:"/destination/:id",
            name:'destination.show',  
            component:()=>import("@/view/Destination.vue")
        }
    ],
    linkActiveClass:'travel-destination'
})

export default router;