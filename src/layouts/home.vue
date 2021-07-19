<template>
  <main class="flex items-center justify-center bg-blueGray-900">
    <!-- <NavSector :items="items" /> -->
    <!-- <SidebarToggleBtn v-model:isOpen="isOpen" /> -->
    <div class="flex w-full min-h-[100vh] flex bg-blueGray-900">
      <side v-if="isLg">
        <span class="select-none text-xl relative left-5 top-0"
          >Components</span
        >
        <PackedListItems
          v-for="(items, index) in ComponentList"
          :key="index"
          :items="items"
        >
        </PackedListItems>
      </side>
      <sm-side-bar v-else :items="ComponentList"></sm-side-bar>
      <router-view />
    </div>
    <!-- <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div> -->
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref, watch } from "vue";
import PackedListItems, {
  ListElement,
  ListElementWrapper,
} from "../components/AdvSideBar.vue";
const router = useRouter();
const { t } = useI18n();
const isLg = ref(false);
watch(
  () => {},
  () => {
    if (document.firstElementChild.offsetWidth > 800) {
      isLg.value = true;
    } else {
      isLg.value = false;
    }
  },
  { immediate: true }
);
const ComponentList = [
  {
    heading: "Button",
    list: [
      {
        value: "SolidButton",
        status: "✔",
      },
      {
        value: "OutlineButton",
        status: "✔",
      },
      {
        value: "SpecialButton",
        status: "✔",
      },
    ],
  },
  {
    heading: "Modals",
    list: [
      { value: "BasicModal", status: "✔" },
      {
        value: "FormModal",
        status: "✔",
      },
    ],
  },
  {
    heading: "Dropdown",
    list: [
      { value: "BasicDropdown", status: "✔" },
      { value: "AdvDropdown", status: "✔" },
    ],
  },
  {
    heading: "Accordion",
    list: [
      { value: "BasicAccordion", status: "✔" },
      { value: "AdvAccordion", status: "✔" },
    ],
  },
];
</script>
