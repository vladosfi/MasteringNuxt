<template>
  <div>
    <h2>Lesson</h2>
    <p>This is a lesson</p>
    <p>Chapter title: {{chapter.title}}</p>
    <p>Chapter title: {{lesson.title}}</p>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

console.log(course);

const chapter = computed(() => {
  return course.chapters.find((chapter) => chapter.slug === route.params.chapterSlug);
});

const lesson = computed(() => {
  return chapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug);
});
</script>

<style scoped></style>
