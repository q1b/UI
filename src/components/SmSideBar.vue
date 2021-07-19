<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <button
        @click="openModal"
        class="
            w-16
            h-16
            absolute
            flex
            items-center
            justify-center
            bg-white
            z-50
            bottom-5
            right-5
            !rounded-full
            btn btn-indigo
        "
    >
        <component
            class="text-white"
            :is="isOpen ? SolidIcon : OutlineIcon"
        ></component>
    </button>
    <TransitionRoot as="template" appear :show="isOpen">
        <Dialog
            as="div"
            class="fixed inset-0 overflow-hidden"
            @close="closeModal"
            :open="isOpen"
        >
            <div class="absolute inset-0 overflow-hidden">
                <TransitionChild
                    as="template"
                    enter="ease-in-out duration-500"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="ease-in-out duration-500"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay
                        class="
                            absolute
                            inset-0
                            bg-gray-500 bg-opacity-75
                            transition-opacity
                        "
                    />
                </TransitionChild>
                <div class="fixed inset-y-0 left-0 pr-10 max-w-full flex">
                    <TransitionChild
                        as="template"
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enter-from="-translate-x-full"
                        enter-to="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leave-from="translate-x-0"
                        leave-to="-translate-x-full"
                    >
                        <div class="relative w-screen max-w-sm">
                            <TransitionChild
                                as="template"
                                enter="ease-in-out duration-500"
                                enter-from="opacity-0"
                                enter-to="opacity-100"
                                leave="ease-in-out duration-500"
                                leave-from="opacity-100"
                                leave-to="opacity-0"
                            >
                                <div
                                    class="
                                        absolute
                                        top-4
                                        right-4
                                        -mr-20
                                        pl-1
                                        pr-8
                                        flex
                                    "
                                >
                                    <button
                                        class="
                                            rounded-md
                                            text-gray-300
                                            hover:text-white
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-white
                                        "
                                        @click="closeModal"
                                    >
                                        <span class="sr-only">Close panel</span>
                                        <XIcon
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div
                                class="
                                    h-full
                                    flex flex-col
                                    py-6
                                    bg-white
                                    shadow-xl
                                    overflow-y-scroll
                                "
                            >
                                <div class="px-4 sm:px-6">
                                    <DialogTitle
                                        class="
                                            text-lg
                                            font-medium
                                            text-gray-900
                                        "
                                    >
                                        Components
                                    </DialogTitle>
                                </div>
                                <header
                                    class="
                                        text-sm
                                        relative
                                        -mt-2
                                        flex-1
                                        px-4
                                        sm:px-6
                                    "
                                >
                                    <!-- Replace with your content -->
                                    <ul class="w-full h-full flex flex-col">
                                        <li
                                            class="mt-6"
                                            v-for="(component, index) in items"
                                            :key="index"
                                        >
                                            <h5
                                                class="
                                                    px-3
                                                    mb-2
                                                    tracking-wider
                                                    font-semibold
                                                    text-blueGray-600
                                                    uppercase
                                                "
                                            >
                                                {{ component.heading }}
                                            </h5>
                                            <ul class="pl-4">
                                                <li
                                                    v-for="(
                                                        item, key
                                                    ) in component.list"
                                                    :key="key"
                                                >
                                                    <button
                                                        @click="
                                                            goToThatComponent(
                                                                item.value.toLowerCase()
                                                            )
                                                        "
                                                        class="
                                                            px-3
                                                            py-1
                                                            group
                                                            duration-200
                                                            relative
                                                            flex
                                                            items-center
                                                            cursor-pointer
                                                        "
                                                    >
                                                        <span
                                                            class="
                                                                rounded-md
                                                                absolute
                                                                inset-0
                                                                bg-cyan-50
                                                                opacity-0
                                                            "
                                                        >
                                                        </span>
                                                        <span
                                                            class="
                                                                group-hover:text-blueGray-900
                                                                text-blueGray-500
                                                                transition-colors
                                                                relative
                                                            "
                                                        >
                                                            {{ item.value }}
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <!-- /End replace -->
                                </header>
                            </div>
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XIcon, CollectionIcon as OutlineIcon } from "@heroicons/vue/outline";
import { CollectionIcon as SolidIcon } from "@heroicons/vue/solid";
const isOpen = ref(true);

const router = useRouter();

const goToThatComponent = (name: String) => {
    router.push(`/hi/${name}`);
};

function closeModal() {
    isOpen.value = false;
}
function openModal() {
    isOpen.value = true;
}

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>
