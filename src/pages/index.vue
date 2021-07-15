<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

// const name = ref('')

// const router = useRouter()
// const go = () => {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

const { t } = useI18n()
</script>

<template>
  <div></div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
