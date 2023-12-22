import { homeRoutes } from "../views/home/routes";
// Vue.use(Router)
import { createWebHistory, createRouter } from "vue-router";

let routes = [];

let errorRoutes = [];

routes = [...homeRoutes, ...routes, ...errorRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
