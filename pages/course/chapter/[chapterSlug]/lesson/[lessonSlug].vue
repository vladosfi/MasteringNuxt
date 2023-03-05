<template>
  <div class="text-left">
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">Lesson {{ chapter.number }} - {{ lesson.number }}</p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink v-if="lesson.downloadUrl" class="text-base text-gray-500 underline" :to="lesson.downloadUrl">Download Source Code</NuxtLink>

      <NuxtLink v-if="lesson.downloadUrl" class="text-base text-gray-500 underline" :to="lesson.downloadUrl">Download Video</NuxtLink>
    </div>

    <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId"></VideoPlayer>

    <p class="text-base mt-8 font-normal">{{ lesson.text }}</p>

      <LessonCompleteButton :model-value="isLessonComplete" @update:model-value="toggleComplete" />
   
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

// console.log(course);

const chapter = computed(() => {
  return course.chapters.find((chapter) => chapter.slug === route.params.chapterSlug);
});

const lesson = computed(() => {
  return chapter.value.lessons.find((lesson) => lesson.slug === route.params.lessonSlug);
});

const title = computed(() => {
  return `${lesson.value.title} - ${course.title}`;
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