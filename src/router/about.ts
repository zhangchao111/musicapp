import { RouteRecordRaw } from 'vue-router'

const AboutRouter:RouteRecordRaw={
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
}

export default AboutRouter;









