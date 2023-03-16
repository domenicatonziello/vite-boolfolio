<script>
import axios from 'axios';
import ProjectCard from '../../components/projects/ProjectCard.vue';
const baseUriDetail = 'http://127.0.0.1:8000/api/projects/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data() {
        return {
            project: {},
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
        <div class="row my-5">
            <div class="card mb-3 p-0">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img :src="project.image" class="img-fluid rounded-start" :alt="project.title">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5>{{ project.title }}</h5>
                            <p class="card-text"> {{ project.description }}</p>
                            <p class="card-text"> GitHub: {{ project.link_project }}</p>
                            <p class="card-text"><small class="badge" :style="{ backgroundColor: project.type?.color }">{{
                                project.type?.name }}</small></p>
                            <ul class="text-muted">
                                <li>Tecnologie:</li>
                                <li v-for="technology in project.technologies" :style="{ color: technology.color }">{{
                                    technology.label }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.col-md-5 img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.col-md-7 ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;

    li {
        margin-right: 10px;
    }
}
</style>