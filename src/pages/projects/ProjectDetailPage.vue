<script>
import axios from 'axios';
import ProjectCard from '../../components/projects/ProjectCard.vue';
const baseUriDetail = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data() {
        return {
            project: [],
        }
    },
    methods: {
        getProject() {
            axios.get(baseUriDetail + this.$route.params.id).then((res) => {
                this.project = res.data;
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <main class="container">
        <div class="row">
            <project-card :project="project"></project-card>
        </div>
    </main>
</template>

<style></style>