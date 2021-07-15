<template>
  <main class="">
    <!-- <NavSector :items="items" /> -->
    <router-view />
    <div class="w-full h-screen flex bg-blueGray-200">
      <side-bar>
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
    </div>
    <!-- <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Home Layout]
    </div> -->
  </main>
</template>

<script lang="ts" setup>
import PackedListItems, {
  ListElement,
  SideBar,
  NavComponent,
  SideBarWrapper,
  ListElementWrapper,
} from '../components/AdvSideBar.vue'
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
      {
        value: 'BasicModal',
        status: '✔',
      },
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
