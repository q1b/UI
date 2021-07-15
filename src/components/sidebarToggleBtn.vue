<template>
	<button
		@click="toggleState"
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
			lg:hidden
		"
	>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0"
		>
			<component :is="isOpen ? SolidIcon : OutlineIcon"></component>
		</transition>
	</button>
</template>
<script setup>
import { CubeIcon as OutlineIcon } from '@heroicons/vue/outline'
import { CubeIcon as SolidIcon } from '@heroicons/vue/solid'
import { watch, toRefs } from 'vue'

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
})

const emit = defineEmits()
const { isOpen } = toRefs(props)

function toggleState() {
	emit('update:isOpen', !props.isOpen)
}

watch(
	() => props.isOpen,
	() => {
		if (props.isOpen) {
			document.getElementById('sidebar').classList.replace('hidden', 'open')
			console.log()
		} else {
			document.getElementById('sidebar').classList.replace('open', 'hidden')
		}
	},
	{ immediate: false }
)
</script>
