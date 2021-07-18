<script setup lang="ts">
// import NavSector from '../../components/NavSector.vue'
// import Footer from '../../components/Footer.vue'
import BasicToggleButton from "../../components/Toggle/BasicToggleButton.vue";
import BasicDropdown from "../../components/Dropdown/BasicDropdown.vue";
import AdvDropdown from "../../components/Dropdown/AdvDropdown.vue";
import BasicAccordion from "../../components/Accordion/BasicAccordion.vue";
import BasicModal from "../../components/Modal/BasicModal.vue";
import FormModal from "../../components/Modal/FormModal.vue";
import SolidButton from "../../components/Button/SolidButton.vue";
import OutlineButton from "../../components/Button/OutlineButton.vue";
import SpecialButton from "../../components/Button/SpecialButton.vue";

const ComponentList: Object = {
  // footer: Footer,
  // navsector: NavSector,
  basictogglebutton: BasicToggleButton,
  basicdropdown: BasicDropdown,
  advdropdown: AdvDropdown,
  basicaccordion: BasicAccordion,
  basicmodal: BasicModal,
  formmodal: FormModal,
  solidbutton: SolidButton,
  outlinebutton: OutlineButton,
  specialbutton: SpecialButton,
};

const props = defineProps<{ name: string }>();
</script>

<template>
  <section class="w-full">
    <div class="w-full h-full flex flex-col items-center">
      <span class="w-full pt-5 text-white text-center text-xl font-jetMono">{{
        props.name
      }}</span>
      <div
        class="
          p-5
          sm:p-10
          w-full
          h-[calc(100%)]
          flex flex-row
          items-center
          justify-center
        "
      >
        <component :is="ComponentList[`${props.name}`]" />
      </div>
    </div>
    <!-- <div>{{ Footer.__defaults }}</div> -->
  </section>
</template>
