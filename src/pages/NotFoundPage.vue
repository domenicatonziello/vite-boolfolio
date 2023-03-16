<script>
export default {
    name: 'NotFoundPage'
}
</script>


<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <h1> 404 | Not Found </h1>
        <router-link :to="{ name: 'home' }" class="btn btn-sm btn-secondary">Indietro</router-link>
    </div>
</template>


<style></style>