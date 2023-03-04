<template>
  <div>
    <label for="progress">
      <input type="checkbox" id="progress" :value="modelValue" @input="() => $emit('update:modelValue', !modelValue)" class="hidden" />
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
