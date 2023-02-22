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
            path:"/destination/:id/:slug",
            name:'destination.show',  
            component:()=>import("@/view/Destination.vue"),
            props:true
        }
    ],
    linkActiveClass:'travel-destination'
})

export default router;