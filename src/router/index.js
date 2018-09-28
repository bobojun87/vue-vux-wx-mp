import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/views/layout/Layout";

import Home from '@/components/HelloFromVux'
import List from '@/components/List'
import Geolocation from '@/components/Geolocation'
import PullRefresh from '@/components/pull-refresh/index'

Vue.use(Router)

const routes = [{
        path: '/',
        component: Layout,
        children: [{
                path: 'home',
                name: 'Home',
                component: () =>
                    import ('@/views/home/jobList')
            },
            {
                path: '/geolocation',
                name: 'Geolocation',
                component: Geolocation
            },
            {
                path: '/refresh',
                name: 'Refresh',
                component: PullRefresh
            }
        ]
    },
    {
        path: '/list',
        name: 'List',
        component: List
    }
]
export default new Router({
    routes: routes
})