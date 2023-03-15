<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
}
</script>


<template>
    <div class="col my-3">
        <div class="card" style="width: 18rem;">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <div class="buttons">
                    <a href="#" class="btn btn-primary">Dettagli</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 100%;

    .card-image {
        height: 150px;

        img {
            height: 100%;
            object-fit: cover;
        }
    }

    .card-body {
        display: flex;
        flex-direction: column;

        .buttons {
            margin-top: auto;
        }
    }
}
</style>