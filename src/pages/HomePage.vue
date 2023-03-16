<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const baseUri = 'http://127.0.0.1:8000/api';
export default {
    name: 'HomePage',
    components: { ProjectCard },
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        getProject() {
            axios.get(baseUri + '/projects').then((res) => {
                this.projects = res.data;
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <div class="container">
        <div class="row my-5">
            <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
        </div>
    </div>
</template>


<style></style>