<template>
  <Popover v-slot="{ open }" class="absolute w-max h-10 inset-4">
    <PopoverButton
      as="button"
      :class="[
        open
          ? 'shadow-btn-blueGray ring-opacity-50'
          : 'hover:ring-opacity-80 ring-opacity-100',
      ]"
      class="
        btn
        block
        ring-indigo-500
        !p-1
        hover:shadow-btn-blueGray
        focus:text-blueGray-900
        group
      "
    >
      <heroicons-outline:menu-alt-2-icon
        :class="open ? 'text-indigo-600' : ''"
        class="
          h-6
          w-6
          text-white
          group-hover:text-indigo-900
          transition-colors
          duration-300
        "
      ></heroicons-outline:menu-alt-2-icon>
    </PopoverButton>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute left-0">
        <article class="backdrop-blur-sm flex items-center justify-center">
          <div
            class="
              flex flex-col
              gap-y-4
              w-48
              p-4
              rounded-2xl
              ring-1 ring-blueGray-800
            "
          >
            <Menu
              v-for="(item, id) in items"
              :key="id"
              :v-slot="{ open }"
              as="div"
            >
              <MenuButton
                class="
                  w-full
                  text-left
                  focus:ring-2
                  ring-offset-2 ring-offset-black
                  focus-visible:outline-none
                  px-3
                  py-2
                  bg-indigo-50
                  hover:bg-indigo-100
                  group
                  rounded-xl
                  transition-colors
                  cursor-pointer
                  flex
                  place-content-between
                  items-center
                "
              >
                <span
                  class="
                    text-indigo-500
                    group-hover:text-indigo-700
                    font-jetMono font-semibold
                    select-none
                  "
                >{{ item.Name }}</span>
                <heroicons-outline:chevron-right-icon
                  class="w-5 h-5 text-indigo-500"
                ></heroicons-outline:chevron-right-icon>
              </MenuButton>
              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform -translate-x-4 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform -translate-x-4 opacity-0"
              >
                <MenuItems
                  class="
                    absolute
                    z-50
                    top-0
                    left-48
                    w-56
                    bg-white
                    flex flex-col
                    gap-y-4
                    rounded-2xl
                    shadow-lg
                    focus:outline-none
                    p-4
                    ring-1 ring-blueGray-800
                  "
                >
                  <MenuItem
                    v-for="(listItem, Id) in item.List"
                    :key="Id"
                    v-slot="{ active }"
                  >
                    <button
                      :class="[
                        active
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-indigo-50 text-indigo-600',
                        'flex items-center place-content-between font-jetMono font-semibold h-10 rounded-xl group w-full px-3 py-2',
                      ]"
                    >
                      <span>
                        {{ listItem.name }}
                      </span>
                      <span
                        class="
                          relative
                          flex
                          h-full
                          w-max
                          items-center
                          justify-center
                        "
                      >
                        <transition
                          mode="out-in"
                          enter-active-class="transition-opacity duration-75 ease-out"
                          enter-from-class="transform opacity-50"
                          enter-to-class="transform opacity-100"
                          leave-active-class="transition-opacity duration-75 ease-in"
                          leave-from-class="transform opacity-100"
                          leave-to-class="transform opacity-50"
                        >
                          <component
                            :is="'heroicons-solid:check-circle-icon'"
                            class="text-indigo-700 w-6 h-6"
                            aria-hidden="true"
                          ></component>
                        </transition>
                      </span>
                    </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </article>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
<script lang="ts" setup>
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/vue'
// import { CheckCircleIcon } from '@heroicons/vue/outline'
// import { CheckCircleIcon as SolidCheckCircle } from '@heroicons/vue/solid'

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
    Name: 'Automations',
    List: [{ name: 'Dropdown+Autom' }],
  },
  {
    Name: 'Reports',
    List: [{ name: 'Dropdown+Repor' }],
  },
  {
    Name: 'Future',
    List: [{ name: 'Dropdown+Futur' }],
  },
]
</script>
