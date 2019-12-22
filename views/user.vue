<template>
    <div>{{ $route.params.id}}</div>
</template>

<script>
    export default {
        name: "user",
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
