<template>
  <div class="w-full px-4">
    <div class="w-full max-w-md px-3 pb-2 pt-2 mx-auto bg-white rounded-2xl">
      <Disclosure v-slot="{ open }" v-for="(item, index) in items" :key="index">
        <DisclosureButton
          class="
            flex
            justify-between
            w-full
            px-4
            py-2
            mt-1
            text-sm
            font-medium
            text-left text-teal-900
            bg-cyan-100
            rounded-lg
            hover:bg-cyan-200
            focus:outline-none
            focus-visible:ring
            focus-visible:ring-cyan-500
            focus-visible:ring-opacity-75
          "
        >
          <span>{{ item.Name }}</span>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-teal-600 transition-transform"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-2 pb-2 text-sm text-gray-500">
          <TransitionRoot
            as="div"
            appear
            :show="open"
            enter="transform transition duration-200"
            enter-from="max-h-0 "
            enter-to="max-h-64 "
            leave="transform duration-200 transition ease-in-out"
            leave-from="max-h-64 "
            leave-to="max-h-0 "
          >
            {{ item.Description }}
          </TransitionRoot>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionRoot,
} from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

const items = [
  {
    Name: "What is your refund policy?",
    Description:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    Name: "What is price of product?",
    Description:
      "it's about 200$ for a product average but if a user want to add some extra functionality then they have to pay some extra charges.",
  },
  {
    Name: "How you prepare a product?",
    Description:
      "First we plan what functionality user need then we design it in figma then we start a revice session to make it much better then we make it work in browser by writing code",
  },
];
</script>
