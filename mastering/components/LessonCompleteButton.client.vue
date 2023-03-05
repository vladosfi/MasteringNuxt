<template>
  <div class="mt-5">
    <label for="progress" class="p-3 rounded-md text-base text-white" 
    v-bind:class="{'bg-gray-500': !modelValue,'bg-green-500': modelValue }">

      <input type="checkbox" id="progress" :value="modelValue" @input="() => $emit('update:modelValue', !modelValue)" 
      class="hidden" />
      {{ modelValue ? 'Completed!' : 'Mark as complete' }}
    </label>  
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['update:modelValue'])
</script>

<style scoped>
::selection{
    display: none;
}
</style>
