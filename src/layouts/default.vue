<template>
  <main class="">
    <!-- <NavSector :items="items" /> -->
    <SidebarToggleBtn v-model:isOpen="isOpen" />
    <div class="flex w-full h-screen flex bg-blueGray-900">
      <side-bar>
        <!--  <button class="btn-indigo btn " @click="router.back()">
          {{ t('button.back') }}
        </button> -->
        <SideBarWrapper>
          <NavComponent>
            <span class="select-none text-xl absolute top-5">Components</span>
            <PackedListItems
              v-for="(items, index) in ComponentList"
              :key="index"
              :items="items"
            >
            </PackedListItems>
          </NavComponent>
        </SideBarWrapper>
      </side-bar>
      <router-view />
    </div>
    <!-- <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div> -->
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import PackedListItems, {
  ListElement,
  SideBar,
  NavComponent,
  SideBarWrapper,
  ListElementWrapper,
} from '../components/AdvSideBar.vue'
const router = useRouter()
const { t } = useI18n()
let isOpen = ref(false)

const ComponentList = [
  {
    heading: 'Button',
    list: [
      {
        value: 'SolidButton',
        status: '✔',
      },
      {
        value: 'OutlineButton',
        status: '✔',
      },
      {
        value: 'SpecialButton',
        status: '✔',
      },
    ],
  },
  {
    heading: 'Modals',
    list: [
      { value: 'BasicModal', status: '✔' },
      {
        value: 'FormModal',
        status: '✔',
      },
    ],
  },
  {
    heading: 'Dropdown',
    list: [
      { value: 'BasicDropdown', status: '✔' },
      { value: 'AdvDropdown', status: '✔' },
    ],
  },
  {
    heading: 'Accorsion',
    list: [{ value: 'BasicAccorsion', status: '❌' }],
  },
]
</script>
