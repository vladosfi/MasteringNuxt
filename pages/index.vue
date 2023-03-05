<template>
    <div>
        <h2>Hello</h2>
        <NuxtLink :to="courseLocation">
            Go to Courses
        </NuxtLink>
    </div>
</template>

<script setup>
const courseLocation= "/course";
</script>

<style scoped>

</style>