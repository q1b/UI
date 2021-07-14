<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavSector from '../../components/NavSector.vue'
import Footer from '../../components/Footer.vue'
import ToggleButton from '../../components/ToggleButton.vue'

const ComponentList: Object = {
  footer: Footer,
  navsector: NavSector,
  togglebutton: ToggleButton,
}
const props = defineProps<{ name: string }>()
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    Component Name : {{ props.name }}
    <component :is="ComponentList[`${props.name}`]" />
  </div>
  <!-- <div>{{ Footer.__defaults }}</div> -->
  <button
    class="btn-indigo btn"
    @click="router.back()"
  >
    {{ t('button.back') }}
  </button>
</template>
