<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-blue-600 bg-blue-400 hover:bg-blue-600 transition-colors mx-8"
  >
    <slot>Download</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>
