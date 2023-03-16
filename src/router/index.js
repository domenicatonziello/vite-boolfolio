import { createRouter, createWebHistory } from 'vue-router';

// importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectDetailPage from '../pages/projects/ProjectDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

// Creo Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },
        { path: '/:pathMatch(.*)*', name: 'page-not-found', component: NotFoundPage },
    ]
});

export { router };