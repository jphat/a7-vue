<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();
</script>
<template>
  <div>{{ text }}</div>
</template>