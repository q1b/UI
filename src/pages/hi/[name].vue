<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import NavSector from '../../components/NavSector.vue'
import Footer from '../../components/Footer.vue'
import ToggleButton from '../../components/ToggleButton.vue'
import DropdownButton from '../../components/DropdownButton.vue'
import ModalButton from '../../components/ModalButton.vue'

const ComponentList: Object = {
  footer: Footer,
  navsector: NavSector,
  togglebutton: ToggleButton,
  dropdownbutton: DropdownButton,
  modalbutton: ModalButton,
}

const props = defineProps<{ name: string }>()
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    Component Name : {{ props.name }}
    <div class="p-10">
      <component :is="ComponentList[`${props.name}`]" />
    </div>
  </div>
  <!-- <div>{{ Footer.__defaults }}</div> -->
  <button class="btn-indigo btn" @click="router.back()">
    {{ t('button.back') }}
  </button>
</template>
