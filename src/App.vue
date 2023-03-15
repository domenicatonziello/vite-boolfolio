<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/projects/ProjectCard.vue';
const baseUri = 'http://127.0.0.1:8000/api';
export default {
  name: 'App',
  components: { AppHeader, ProjectCard },
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
  <!-- header -->
  <app-header></app-header>
  <!-- main -->
  <main class="container">
    <div class="row my-5">
      <project-card v-for="project in projects" :key="project.id" :project="project"></project-card>
    </div>
  </main>
</template>


<style></style>