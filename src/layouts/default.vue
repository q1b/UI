<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <NavSector :items="items" />
    <router-view />
    <!-- <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div> -->
  </main>
</template>

<script lang="ts" setup>
const items = [
  {
    Name: 'Button',
    List: [
      { name: 'ToggleButton' },
      { name: 'DropdownButton' },
      { name: 'ModalButton' },
      { name: 'PopoverButton' },
    ],
  },
  {
    Name: 'Modals',
    List: [{ name: 'Dropdown+Autom' }],
  },
  {
    Name: 'Dropdown',
    List: [{ name: 'Dropdown+Repor' }],
  },
  {
    Name: 'Accorsion',
    List: [{ name: 'Dropdown+Futur' }],
  },
]
</script>
