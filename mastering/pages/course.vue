<template>
  <div class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col text-center text-3xl font-bold shadow-md">
    <div class="prose mb-12">
      <h1>
        <span class="font-medium"
          >Course:
          <span class="font-bold">Mastering Nuxt</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex">

        <h3>Chapters</h3>
      </div>

      <div class="prose p-12 bg-red-100 rounded-md w-[65ch]">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<!-- <template>
  <div class="relative h-16 ">
    <div class=" inset-x-0 top-0 h-16 text-center text-5xl font-bold shadow-md">
      <h1>COURSE: Mastering NUXT 3</h1>
    </div>
  </div>

  <div class="flex min-h-screen flex-row bg-gray-100 text-gray-800">
    <aside class="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
      <div class="my-4 w-full border-b-4 border-indigo-100 text-center">
        <span class="font-mono text-xl font-bold tracking-widest"> <span class="text-indigo-600">COURSE</span> CHAPTERS </span>
      </div>
      <div class="my-4"></div>
    </aside>
    <main class="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
      <div class="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
        <h2>Lessons</h2>
      </div>
    </main>
  </div>
</template> -->

<script setup></script>

<style scoped></style>
