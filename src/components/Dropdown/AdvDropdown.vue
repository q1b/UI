<template>
	<SkeDoubleDropdown :items="items" />
</template>
<script setup>
import SkeDoubleDropdown from './SkeDoubleDropdown.vue'

const items = [
	{
		Name: 'Button',
		List: [
			{
				name: 'SolidButton',
			},
			{
				name: 'OutlineButton',
			},
			{
				name: 'SpecialButton',
			},
		],
	},
	{
		Name: 'Modals',
		List: [
			{ name: 'BasicModal' },
			{
				name: 'FormModal',
			},
		],
	},
	{
		Name: 'Dropdown',
		List: [{ name: 'BasicDropdown' }],
	},
	{
		Name: 'Accorsion',
		List: [{ name: 'BasicAccorsion' }],
	},
]
</script>
