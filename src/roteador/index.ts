import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasTracker from '../views/Tarefas.vue'

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'TarefasTracker',
    component: TarefasTracker,
}]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,
})

export default roteador;