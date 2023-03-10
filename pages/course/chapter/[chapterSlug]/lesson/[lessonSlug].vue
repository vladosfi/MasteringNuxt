<template>
  <div class="text-left">
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-4">
      <NuxtLink v-if="lesson.downloadUrl" class="text-base text-gray-500 underline" :to="lesson.downloadUrl">Download Source Code</NuxtLink>

      <NuxtLink v-if="lesson.downloadUrl" class="text-base text-gray-500 underline" :to="lesson.downloadUrl">Download Video</NuxtLink>
    </div>

    <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId"></VideoPlayer>

    <p class="text-base mt-2 font-normal">{{ lesson.text }}</p>

    <LessonCompleteButton :model-value="isLessonComplete" @update:model-value="toggleComplete" />
  </div>
</template>

<script setup>
const course = await useCourse();
const route = useRoute();
const { chapterSlug, lessonSlug } = route.params;
const lesson = await useLesson(chapterSlug, lessonSlug);

definePageMeta({
  middleware: [
    async function ({ params }, from) {
      const course = await useCourse();
      const chapter = course.value.chapters.find((chapter) => chapter.slug === params.chapterSlug);

      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }

      const lesson = chapter.lessons.find((lesson) => lesson.slug === params.lessonSlug);

      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

const chapter = computed(() => {
  return course.value.chapters.find((chapter) => chapter.slug === route.params.chapterSlug);
});

// const lesson = computed(() => {
//   return chapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug);
// });

const title = computed(() => {
  return `${lesson.value.title} - ${course.value.title}`;
});

useHead({
  title: title,
});

const progress = useLocalStorage("progress", []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;
};
</script>

<style scoped></style>
